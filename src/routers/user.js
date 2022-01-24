const express = require('express')
const multer = require('multer')
const router = new express.Router()

const User = require('../models/user')

router.post('/register', async (req, res) => {
	try{
		const user  = new User(req.body)
		const token = await user.generateAuthToken()
		await user.save()
		console.log(user)
		console.log("token", token)
		res.status(200)
		res.render('index')
	}catch(err){
		console.log(err)
		res.status(500).render('error', {
			error: err.message
		})
	}
})

router.post('/signin', async (req, res) => {
	try{
		const user = await User.findUser(req.body.email, req.body.password)
		const token = await user.generateAuthToken()
		console.log(token)
		res.status(200)
		res.render('adminPannel')
	}catch(err){
		console.log(err)
		res.status(500).render('error')
	}
})

//logging out
// router.post('/logout', auth, async (req, res) => {
// 	try{
// 		req.user.tokens = req.user.tokens.filter((token) => {
// 			return token.token !== req.token
// 		})

// 		await req.user.save()
// 		res.send()
// 	}catch(err){
// 		res.status(500).send()
// 	}
// })

router.get('/', (req, res) => {
	res.render('index')
})

router.get('/index', (req, res) => {
	res.render('index')
})

router.get('/register', (req, res) => {
	res.render('register')
})

router.get('/about-us', (req, res) => {
	res.render('about')
})

router.get('/contact-us', (req, res) => {
	res.render('contact')
})

router.get('/menu', (req, res) => {
	res.render('menu')
})

module.exports = router
