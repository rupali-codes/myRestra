require('dotenv').config()
require('./db/connection')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const User = require('./models/user')
const Food = require('./models/food')
const comment = require('./models/comment')
const booking = require('./models/booking')

const port = process.env.PORT
const app = express()

const userRouter = require('./routers/user')
const foodRouter = require('./routers/food')
const commentRouter = require('./routers/comment')
const bookingRouter = require('./routers/booking')

const publicDirPath = path.join(__dirname, '../client/public')
const viewsPath = path.join(__dirname, '../client/templates/views')
const partialsPath = path.join(__dirname, '../client/templates/partials')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(publicDirPath))
app.use(cookieParser())
app.use(userRouter)
app.use(foodRouter)
app.use(commentRouter)
app.use(bookingRouter)

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)


app.listen(port, () => {
	console.log(`server started at port ${port}`)
})
