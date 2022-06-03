const req = require('express/lib/request');
const res = require('express/lib/response');
const ourWork = require('../model/ourWork');

exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        ourWork.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "not found the user by id " + id })
                } else {
                    res.send(data)
                }
            }).catch(err => {
                res.status(500).send({
                    message: `Error ertrieving user with id ${id}`
                });
            });
    } else {
        ourWork.find()
            .then(user => {
                res.send(user)
            }).catch(err => {
                res.status(500).send({ message: err.message || "Error occureed while retriving the data" })
            })
    }

};

//update creator
exports.update = (req, res,next) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    var heading = req.body.heading
    var description = req.body.description
    var image_file = req.file.filename
    ourWork.findByIdAndUpdate(id,{heading,description,image_file},(err,docs)=>{
        if(err){
            console.log(err)
            next();
        }else{
            console.log(docs)
            console.log('Data updated successfully')
            res.redirect('/admin_panel/pages/our_work')
        }
    })
        
};