const express = require('express')
const router = express.Router();
const homeController = require('../controller/homeController')

//for home
router.get('/',homeController().index)

//for admin authentication
router.get('/login',homeController().adminLogin)
router.get('/register',homeController().adminRegister)

//for admin
router.get('/admin',homeController().adminDashboard)
router.get('/admin/influencer/index',homeController().influencer)
router.get('/admin/influencer/create',homeController().influencer_create)
router.get('/admin/client/index',homeController().client)
router.get('/admin/client/create',homeController().client_create)

//pages
router.get('/admin_panel/pages/our_work',homeController().adminOurWork)

module.exports = router;