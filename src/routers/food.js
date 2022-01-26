const express = require('express')
const hbs = require('hbs')
const path = require('path')
const multer = require('multer')
const sharp = require('sharp')
const base64 = require('base64-arraybuffer')
const router = new express.Router()
const auth = require('../middleware/auth')

const Food = require('../models/food')

const upload = multer({
	limits: {
		fileSize: 2000000  //2MBs
	},
	fileFilter(req, file, cb){
		if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
			return cb(new Error("please upload a valid picture"))
		}
		const uniqueName = 'IMG_' + Date.now() 
		cb(undefined, file.fieldname + "_" + uniqueName)
	}
})

router.get('/adminPannel', auth, async (req, res) => {
	try{
		const foods = await Food.find({})
		res.render('adminPannel')
	}catch(err){
		res.status(500).render('error', {
			msg: "something	went wrong."
		})
	}
})

router.post('/addfd', upload.single('image'), async (req, res) => {
	try{
		const food = new Food(req.body)
		const buffer = await sharp(req.file.buffer).resize({width:150, height: 150}).toFormat('png').toBuffer()
		food.image = buffer
		
		console.log(buffer)
		const bs64 = base64.encode(buffer)
		// console.log(bs64)
		await food.save()	
		res.render('adminPannel')
	}catch(err){
		console.log("err: ", err)
		res.status(500).render('error', {
			msg: "Oops! Bad request :("
		})
	}
})

router.post('/editfd', upload.single('image'), async (req, res) => {
	try{
		const name = req.body.oldName
		let buffer = ''
		if(req.file != undefined)
			 buffer = await sharp (req.file.buffer).resize({width:150,height: 150}).png().toBuffer()
		else{
			const food = await Food.findOne({name})
			 buffer = food.image
		}
		const food = await Food.findOneAndUpdate({name}, {name: req.body.name, price: req.body.price, image: buffer})
		if(!food){
			throw new Error("this food does not exist")
		}
		await food.save()
		res.render('adminPannel')

	}catch(err){
		console.log(err)
		res.status(500).render('error', {
			msg: "Oops! Bad request :("
		})
	}
})

router.post('/deletefd', async (req, res) => {
	try{
		const name = req.body.name
		const food = await Food.findOneAndDelete({name})

		res.render('adminPannel')
	}catch(err){
		res.status(500).render('error', {
			msg: "Oops! Bad request :("
		})
	}
})

router.get('/readFoods', async (req, res) => {
	try{
		const foods = await Food.find({})
		res.send(foods)
	}catch(err){
		res.status(500).render('error',{
			msg: "something went wrong."
		})
	}
})


// //testing
// const storage = multer.diskStorage({
// 	destination:'./tempImg/' ,
// 	filename(req, file, cb){
// 		cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
// 	}
// })

// const uploadImg = multer({
// 	storage: storage,
// 	limits: {
// 		fileSize: 1000000
// 	},
// 	fileFilter(req, file, cb){
// 		if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
// 			return cb(new Error("please upload a valid picture"))
// 		}
// 		cb(undefined, true)
// 	}
// }).single('file')


// router.post('/testing' , async (req, res) => {
// 	uploadImg(req, res, (err) => {
// 		if(err){
// 			console.log("ERR: ", err)
// 		}else{
// 			if(req.file === undefined){
// 				console.log('no file selected')
// 			}else{
// 				console.log("sucess: file uploaded successfully!")
// 			}
// 		}
// 	})
// })

module.exports = router