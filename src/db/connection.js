const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/MyRestra-DB', 
	{
		useNewUrlParser: true
	}).then(res => {
		console.log("connection successful")
	}).catch(err => {
		console.log(err)
	})



