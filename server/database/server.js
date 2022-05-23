const express = require("express");
const path = require("path");
const app = express();
const env = require('dotenv');
const PORT = process.env.PORT || 8080;
const routes = require('../routes/routes');

//set assets folder as static folder
app.use('/static',express.static('assets'));

//set view engine
app.set('views','views');
app.set('view engine', 'hbs');

//set use routes file routes
app.use('',routes);

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});
