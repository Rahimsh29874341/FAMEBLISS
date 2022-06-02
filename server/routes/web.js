const express = require('express')
const router = express.Router();
const homeController = require('../controller/homeController')

router.get('/',homeController().index)
router.get('/login',homeController().adminLogin)
router.get('/register',homeController().adminRegister)
router.get('/admin_panel',homeController().adminDashboard)
router.get('/admin_panel/add_creator',homeController().adminAddCreator)
router.get('/admin_panel/edit_creator',homeController().adminEditCreator)

module.exports = router;