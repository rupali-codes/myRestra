const express = require('express')
const multer = require('multer')
const router = new express.Router()
const auth = require('../middleware/auth')
const Testimonial = require('../models/testimonial')

const logoutMarkup = () => {
	return `<li class="nav-item mx-lg-2  p-2 p-lg-0 ">
		        <a href="logout">
		            <div class="btn-dark border-0 nav-item fw-bold rounded-pill btn btn-light  btn position-relative" style="background-color: #f86011;">
		            Logout
		            <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>
		            </div>
		        </a>
		    </li>`
}

router.post('/addTestimonial',auth, async (req, res) => {
	try{	
		console.log(req.user.name)
		const testimonial = new Testimonial(req.body)
		await testimonial.save()
		res.render('index', {
			login_logout: logoutMarkup
		})
	}catch(err){
		console.log("Testimonials error: ", err)
		res.status(500).send({success: false})
	}
})

router.post('/updateTestimonials', async (req, res) => {
	try{	
		
	}catch(err){
		console.log("Testimonials error: ", err)
		res.status(500).send()
	}
})

router.post('/deleteTestimonials', async (req, res) => {
	try{	
		
	}catch(err){
		console.log("Testimonials error: ", err)
		res.status(500).send()
	}
})

router.get('/readTestimonials', async (req, res) => {
	try{
		const testimonials = await Testimonial.find({})
		res.send(testimonials)
	}catch(err){
		res.status(500).render('error', {
			msg: "something went wrong."
		})
	}
})

module.exports = router