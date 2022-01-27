const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, 
	{
		useNewUrlParser: true
	}).then(res => {
		console.log("connection successful")
	}).catch(err => {
		console.log(err)
	})



