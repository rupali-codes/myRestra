const mongoose = require('mongoose')
const validator = require('Validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: (value) => {
			if(!validator.isAlpha(value))
				throw new Error("Please Enter a valid name")
		}
	},
	phone: {
		type: String,
		required: true,
		length: 10,
		validate: (value) => {
			if(!validator.isNumeric(value))
				throw new Error("Please Enter a valid Phone Number")
		}
	},
	email: {
		type: String,
		required: true, 
		trim: true,
		unique: true,
		lowercase: true,
		validate: (value) => {
			if(!validator.isEmail(value))
				throw new Error("Please Enter a valid email address")
		}
	}, 
	password: {
		type: String,
		required: true,
		minlength: 7
	}, 
	tokens: [{
		token: {
			type: String,
			required: true
		}
	}]
})
//hiding sensitive information from user
// userSchema.methods.toJSON = function() {
// 	const userObj = this.toObject()

// 	delete userObj.password
// 	delete userObj.tokens

// 	return userObj
// }

//generating authentication tokens
userSchema.methods.generateAuthToken = async function(){
	const token = jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY)
	this.tokens = this.tokens.concat({token})
	await this.save()
	return token
}

//verify admin
userSchema.statics.verifyAdmin = async (email, password, securityKey) => {
	if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD && securityKey === process.env.SECURITY_KEY){
		return true
	}else{
		throw new Error("Unable to verify you as Admin :(")
	}
}

// finding user
userSchema.statics.findUser = async (email, password) => {
	const user = await User.findOne({email})
	if(!user){
		throw new Error("Unable to login")
	}

	const isMatch = await bcrypt.compare(password, user.password)
	if(!isMatch){
		throw new Error("Unable to login")
	}
	return user
}

//encrypting password
userSchema.pre('save', async function(next){
	if(this.isModified('password')){
		this.password = await bcrypt.hash(this.password, 8)
	}
	next()
})

const User = mongoose.model('User', userSchema)

module.exports = User