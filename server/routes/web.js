const express = require('express')
const router = express.Router();
const homeController = require('../controller/homeController')

//for home
router.get('/',homeController().index)

//for admin authentication
router.get('/login',homeController().adminLogin)
router.get('/register',homeController().adminRegister)

//for admin
router.get('/admin_panel',homeController().adminDashboard)
router.get('/admin_panel/add_influencer',homeController().adminAddCreator)
router.get('/admin_panel/edit_influencer',homeController().adminEditCreator)
router.get('/admin_panel/add_client',homeController().adminAddBrand)
router.get('/admin_panel/edit_client',homeController().adminEditBrand)

//pages
router.get('/admin_panel/pages/our_work',homeController().adminOurWork)

module.exports = router;