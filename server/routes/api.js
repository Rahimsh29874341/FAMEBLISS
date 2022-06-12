const express = require('express')
const router = express.Router()
const upload = require('../helper/multer')

const controller = require('../controller/influencerController')
const { updateOne } = require('../model/influencer')
const clientsController = require('../controller/clientsController')
const aboutController = require('../controller/aboutController')

//api routes for influencers
router.post('/api/create', upload.single('image') ,controller.create)
router.get('/api/find',controller.find)
router.post('/api/update/:id', upload.single('image') ,controller.update)
router.get('/api/delete/:id', controller.delete)


// //api routes for clients
// router.post('/api/insert',upload,clientsController.create)
// router.get('/api/get',clientsController.find)
// router.post('/api/change/:id',upload,clientsController.update)
// router.get('/api/remove/:id',clientsController.delete)

// //api routes for pages
router.get('/api/pages/find',aboutController.find)
router.post('/api/pages/update/:id',upload.single('image'),aboutController.update)

module.exports = router