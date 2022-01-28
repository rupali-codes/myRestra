const express = require('express')
const multer = require('multer')
const router = new express.Router()
const auth = require('../middleware/auth')


const User = require('../models/user')

const loginMarkup = () => {
	return `
		<li class="nav-item mx-lg-2  p-2 p-lg-0 ">
            <a href="register">
                <div class="btn-dark border-0 nav-item fw-bold rounded-pill btn btn-light  btn position-relative" style="background-color: #f86011;">
                Signup | Signin
                <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>
                </div>
            </a>
        </li>
		`
}

const logoutMarkup = () => {
	return `
		<li class="nav-item mx-lg-2  p-2 p-lg-0 ">
            <a href="logout">
                <div class="btn-dark border-0 nav-item fw-bold rounded-pill btn btn-light  btn position-relative" style="background-color: #f86011;">
                Logout
                <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>
                </div>
            </a>
        </li>
	`
}

router.post('/register', async (req, res) => {
	try{
		const user  = new User(req.body)
		const token = await user.generateAuthToken()
		await user.save()
		// console.log("token", token)

		//cookies
		res.cookie("jwt", token, {
			expires: new Date(Date.now() + 50000),
			httpOnly: true
		})

		res.status(200)
		res.render('index', {
			login_logout: logoutMarkup()
		})
	}catch(err){
		console.log(err)
		res.status(500).render('error', {
			msg: "something went wrong."
		})
	}
})

router.post('/signin', async (req, res) => {
	try{
		const user = await User.findUser(req.body.email, req.body.password)
		const token = await user.generateAuthToken()

		//cookie
		res.cookie("jwt", token, {
			expires: new Date(Date.now() + 500000),
			httpOnly: true,
			// secure: true
		})
		res.status(200)
		res.render('index', {
			login_logout: logoutMarkup()
		})
	}catch(err){
		console.log(err)
		res.status(500).render('error', {
			msg: "something went wrong."
		})
	}
})

//admin login
router.post('/adminLogin', async (req, res) => {
	try{
		const verify = await User.verifyAdmin(req.body.email, req.body.password, req.body.securityKey)
	
		if(verify)		
			res.render('adminPannel')
	}catch(err){
		console.log(err)
		res.status(500).render('error', {
			msg: err.message
		})
	}
})

//admin logout
router.get('/adminLogout', async (req, res) => {
	// await User.logoutAdmin()
	try{
		res.render('register')
	}catch(err){
		res.status(500).render('error', {
			msg: "something went wrong."
		})
	}
})

//user logout
router.get('/logout', auth, async (req, res) => {
	try{
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token
		})

		await req.user.save()
		res.render('index', {
			login_logout: loginMarkup()
		})
	}catch(err){
		res.status(500).send()
	}
})

router.get('/', (req, res) => {
	res.render('index', {
		login_logout: loginMarkup()
	})
})

router.get('/index', (req, res) => {
	res.render('index', {
		login_logout: loginMarkup()
	})
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