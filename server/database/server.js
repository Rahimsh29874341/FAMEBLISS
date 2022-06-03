const express = require("express");
const path = require("path");
const env = require('dotenv');
const app = express();
env.config({path:"process.env"});
const PORT = process.env.PORT || 8080;
const webRoutes = require('../routes/web');
const apiRoutes = require('../routes/api');
const { dirname } = require("path");
const morgan = require('morgan');
const bodyParser = require('body-parser')
const hbs = require('hbs');
const DB = process.env.DB;

//load files
app.use('/dcss',express.static("assets/css/admin"));
app.use('/dfonts',express.static('assets/fonts/admin'));
app.use('/dimg',express.static('assets/images/admin'));
app.use('/djs',express.static('assets/js/admin'));
app.use('/dvendor',express.static('assets/vendor'));
app.use('/dscss',express.static('assets/scss/'));

//log request
// app.use(morgan('tiny'));

//using body-parser
app.use(express.json())

//mongodb connection
require('../database/connectdb');

//getting schema
const creator = require('../model/influencer'); 

//parse request to body-parser
app.use(express.urlencoded({extended:false}));

//set assets folder as static folder
app.use('/static',express.static('assets'));
app.use('/img',express.static('uploads'))

//set view engine
// app.set('views','views');
app.set('view engine', 'hbs');

//set partials
hbs.registerPartials("views/partials");

//set use routes file routes
app.use(webRoutes);

//set api routes
app.use(apiRoutes);

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});

//logic of upload image