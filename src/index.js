require('dotenv').config()
require('./db/connection')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')

const User = require('./models/user')
const Food = require('./models/food')

const port = process.env.PORT || 8000
console.log("Secret key: ",process.env.SECRET_KEY)
const app = express()

const userRouter = require('./routers/user')
const foodRouter = require('./routers/food')

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(publicDirPath))
app.use(userRouter)
app.use(foodRouter)

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)


app.listen(port, () => {
	console.log(`server started at port ${port}`)
})
