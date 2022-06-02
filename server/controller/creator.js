const req = require('express/lib/request');
const res = require('express/lib/response');
const creator = require('../model/creatorschema');


//create and save new user
exports.create = (req, res) => {

    //empty body show error
    if(!req.body){
        res.status(400).send({message:"content cannot be empty !!"})
        return
    }
    //new user
    const user = new creator({
            name : req.body.name,
            description: req.body.description,
            image_file: req.file.filename
    })
    //save user in the database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect("/admin_panel/add_creator")
        }).catch(err => {
            res.status(500).send({
                message: err.message || "some error occurred white creating a create operation"
            });
        });
};



//retrive and show all creator data
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        creator.findById(id)
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
        creator.find()
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
    creator.findByIdAndUpdate(id,req.body,(err,docs)=>{
        if(err){
            console.log(err)
            next();
        }else{
            console.log(req.body.name);
            console.log(req.body.description);
            console.log('Data updated successfully')
            res.redirect('/admin_panel/add_creator')
        }
    })
        
};

//delete creator from db
exports.delete = (req, res,next) => {
    const id = req.params.id;

    creator.findByIdAndDelete(id,(err,docs)=>{
        if(err){
            console.log('Some error occured in deleting Data',err)
            next();
        }else{
            console.log('data Deleted Succesfully')
            res.redirect('/admin_panel/add_creator')
        }
    })
}
