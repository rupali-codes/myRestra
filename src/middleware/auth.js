const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Food = require('../models/food')

const auth = async (req, res, next) => {
	try{
		/*
		// const token = req.header('Authorization').replace('Bearer ', '') //header
		header will get replaced by cookie, you can use cookie in postman but use cookie in real app.*/
		const token  = req.cookies.jwt
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
		const user = await User.findOne({_id: decoded._id, "tokens.token": token})

		if(!user) throw new Error()

		req.token = token
		req.user = user
		next()
	}catch(err){
		console.log("##########", err)
		res.status(401).render('error', {
			msg: "You're not a authorized user, please authenticate."
		})
	}
}

module.exports = auth