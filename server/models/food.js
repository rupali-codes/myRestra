const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		lowercase: true
	},
	price: {
		type: String,
		required: true,
		validate: (value) => {
			if(value < 0)
				throw new Error("Invalid price")
		}
	},
	image: {
		type: Buffer
	}
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food