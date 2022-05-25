const express = require("express");
const path = require("path");
const app = express();
const env = require('dotenv');
env.config({path:"process.env"});
const PORT = process.env.PORT || 8080;
const routes = require('../routes/routes');
const { dirname } = require("path");
const morgan = require('morgan');
const parser = require('body-parser');
const hbs = require('hbs');


//load files
app.use('/dcss',express.static("assets/css/admin"));
app.use('/dfonts',express.static('assets/fonts/admin'));
app.use('/dimg',express.static('assets/images/admin'));
app.use('/djs',express.static('assets/js/admin'));
app.use('/dvendor',express.static('assets/vendor'));
app.use('/dscss',express.static('assets/scss/'));

//log request
app.use(morgan('tiny'));

//parse request to body-parser
app.use(parser.urlencoded({extended:true}));

//set assets folder as static folder
app.use('/static',express.static('assets'));

//set view engine
// app.set('views','views');
app.set('view engine', 'hbs');

//set partials
hbs.registerPartials("views/partials");

//set use routes file routes
app.use(routes);

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});
