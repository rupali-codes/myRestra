const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const logoutMarkup = require('../functions/logout_markup')

const Booking = require('../models/booking')

router.post('/bookTable', auth, async (req, res) => {
	try{
		req.body.name = req.user.name
		req.body.email = req.user.email
		const booking = new Booking(req.body)
		await booking.save()
		await res.render('index', {
			login_logout: logoutMarkup,
			alert: '<script>alert("Table Booked successfully.")</script>'
		})
	}catch(err){
		console.log(err)
		res.status(500).render('error', {
			msg: err.message
		})
	}
})

module.exports = router