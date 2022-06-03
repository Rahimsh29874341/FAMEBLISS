const multer = require('multer');

const storage = multer.diskStorage({
  fileSize: 1024 * 1024,
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})  
var upload = multer({ storage : storage,  limits: { fileSize: 1024 * 1024 * 5  }}).single('image');  

 module.exports = upload;