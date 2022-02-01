const mongoose = require('mongoose')
const validator = require('validator')

const testimonialsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: (value) => {
			if(!validator.isAlpha(value))
				throw new Error("Please Enter a valid name")
		} 
	},
	msg: {
		type: String,
		required: true
	}
})

const Comment = mongoose.model('Comment', testimonialsSchema)
module.exports = Comment 