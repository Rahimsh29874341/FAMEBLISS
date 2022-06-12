const req = require('express/lib/request');
const res = require('express/lib/response');
const client = require('../model/clients')


exports.create = (req, res, next) => {
    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty !!" })
        return
    }
    let data = { id: req.body.id, name: req.body.name, description: req.body.description, brand_url: req.body.brand_url, image_file: req.file.filename };
    let sql = "INSERT INTO influencer SET ?";
    db.query(sql, data, (err, results) => {
        if (err) throw err;
        console.log('data inserted succesfully')
        res.redirect('/admin');
    });
}

//retrive and show all creator data
exports.find = (req, res, next) => {
    if (req.query.id) {
        let sql = "SELECT * FROM influencer where id="+ req.query.id;
        db.query(sql, (err, rows) => {
            if (err) throw err;
            res.send(rows)
        });
    } else {
        let sql = "SELECT * FROM influencer";
        db.query(sql, (err, rows) => {
            if (err) throw err;
            res.send(rows)
        });
    }
}

//updating the data
exports.update = (req, res, next) => {
    const userId = req.params.id;
    let sql = "update influencer SET id='" + req.body.id + "', name='" + req.body.name + "',  description='" + req.body.description + "',  brand_url='" + req.body.brand_url + "', image_file='" + req.body.image_file + "' where id =" + userId;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
}

//deleting data from the database
exports.delete = (req, res, next) => {
    const userId = req.params.id;
    let sql = `DELETE from influencer where id = ${userId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/admin');
    });
}
