const mongoose = require('mongoose')
const validator = require('validator')

const bookingSchema = new mongoose.Schema({
	name: {
		type: String
	}, 
	email: {
		type: String
	},
	choose: {
		type: String,
		required: true
	},
	guests: {
		type: Number,
		required: true,
		validate: (value) => {
			if(value <= 0){
				throw new Error("Please enter a positive number")
			}
			else if(value == undefined)
				value = 1
		}
	},
	date: {
		type: Date,
		required: true,
		validate: (value) => {
			if(!validator.isDate(value))
				throw new Error("Invalid date")
		}
	},
	phone: {
		type: String,
		required: true,
		validate: (value) => {
			if(validator.isMobilePhone(value))
				throw new Error("Invalid phone number")
		}
	},
	msg: {
		type: String
	}
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking