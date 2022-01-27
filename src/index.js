/*
	*****************GOAL JAN 24, 2022******************
	* YOU WILL BE IMPLEMENTING LOGOUT FEATURE 		   *
	* CHECK WHETHER THE SITE IS RUNNING FINE OR NOT    *
	* IF YOU FIND ANY BUG, SOLVE IT FIRST              *
	* ELSE YOU WILL BE HOSTING MYRESTRA ON HEROKU      *
	*****************HAPPY LEARNING!********************

*/

require('dotenv').config()
require('./db/connection')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const User = require('./models/user')
const Food = require('./models/food')

const port = process.env.PORT
const app = express()

const userRouter = require('./routers/user')
const foodRouter = require('./routers/food')

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(publicDirPath))
app.use(cookieParser())
app.use(userRouter)
app.use(foodRouter)

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)


app.listen(port, () => {
	console.log(`server started at port ${port}`)
})
