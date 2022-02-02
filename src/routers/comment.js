const express = require('express')
const multer = require('multer')
const router = new express.Router()
const auth = require('../middleware/auth')
const Comment = require('../models/comment')
const logoutMarkup = require('../functions/logout_markup')


router.post('/addComment',auth, async (req, res) => {
	try{	
		const comment = new Comment(req.body)
		comment.name = req.user.name
		await comment.save()
		res.render('index', {
			login_logout: logoutMarkup
		})
	}catch(err){
		console.log("Comments error: ", err)
		res.status(500).send({success: false})
	}
})

//to be changed later
router.post('/editComment', auth, async (req, res) => {
	try{	
		const name = req.user.name
		const comment = await Comment.findOneAndUpdate({name}, {msg: req.body.msg})

		await comment.save()
		res.render('index', {
			login_logout: logoutMarkup
		})
	}catch(err){
		console.log("Comments error: ", err)
		res.status(500).render('error', {
			msg: err.message
		})
	}
})

router.post('/deleteComment',auth, async (req, res) => {
	try{	
		const name = req.user.name
		const comment = await Comment.findOneAndDelete({name})
		res.render('index', {
			login_logout: logoutMarkup
		})
	}catch(err){
		console.log("Comments error: ", err)
		res.status(500).send()
	}
})

router.get('/readComments', async (req, res) => {
	try{
		const comments = await Comment.find({})
		res.send(comments)
	}catch(err){
		res.status(500).render('error', {
			msg: "something went wrong."
		})
	}
})

module.exports = router