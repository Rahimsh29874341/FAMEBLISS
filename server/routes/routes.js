const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("index");
});
router.get('/admin',(req,res)=>{
    res.render('login');
});
router.get('/admin/dashboard',(req,res)=>{
    res.render('dashboard');
});

module.exports = router;