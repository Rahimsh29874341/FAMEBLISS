const express = require('express')
const router = express.Router()
const upload = require('../helper/multer')
const controller = require('../controller/creator')

router.post('/api/create',upload,controller.create)
router.get('/api/find',controller.find)
router.post('/api/update/:id',controller.update)
router.get('/api/delete/:id',controller.delete)

module.exports = router