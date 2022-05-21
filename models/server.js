const express = require('express');
const app = express();
const hbs = require('hbs');
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server listning on ${PORT}`);
});

app.set("views","src/views");
app.set("view engine","hbs");
app.use('/static', express.static('public'));
app.use(express.static("src/views"));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/services",(req,res)=>{
    res.render("services");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/admin",(req,res)=>{
    res.render("admin login");
})
app.get("/admin/dashboard",(req,res)=>{
    res.render("dashboard")
})