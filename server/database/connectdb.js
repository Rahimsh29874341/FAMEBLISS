const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI,
  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
  }).then(()=>{
     console.log("database connected");
  }).catch((err)=>{
    console.log("Error in the code"+err);    
  })