const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("index");
});
router.get('/admin',(req,res)=>{
    res.render('register');
});
router.get('/admin_login',(req,res)=>{
    res.render('login');
});
router.get('/admin/dashboard',(req,res)=>{
    res.render('dashboard');
});
router.get('/admin/dashboard/addcreator',(req,res)=>{
    res.render('acreator');
});
router.get('/admin/dashboard/editcreator',(req,res)=>{
    res.render('ecreator');
});
router.get('/admin/dashboard/deletecreator',(req,res)=>{
    res.render('dcreator');
});

module.exports = router;