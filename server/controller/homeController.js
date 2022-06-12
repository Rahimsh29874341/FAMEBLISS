const axios = require('axios')
const { response } = require('express')

function homeController() {
    return {
        index(req, res) {
            res.render('index')
        },
        adminLogin(req, res) {
            res.render('login')
        },
        adminRegister(req, res) {
            res.render('register')
        },
        adminDashboard(req, res) {
            res.render('dashboard')
        },
        influencer(req, res) {
            axios.get('http://localhost:500/api/find')
                .then(response => {
                    res.render('influencers/index', { tittle: 'Admin - Dashboard', influencer: response.data })
                }).catch(err => {
                    console.log(err)
                })
        },
        influencer_create(req, res) {
            res.render('influencers/create', { influencer: response.data } )
        },
        influencer_edit(req, res) {
            axios.get('http://localhost:500/api/find',{params:{id:req.query.id}})
                .then(response => {
                    res.render('influencers/edit', { data: response.data } )
                }).catch(err => {
                    console.log(err)
                })
        },
        client(req, res) {
            res.render('client/index')
        },
        client_create(req, res) {
            res.render('client/create')
        },


        adminAbout(req, res) {
            axios.get('http://localhost:500/api/pages/find')
                .then(response => {
                    console.log(response.data)
                    res.render('aboutPage', { about: response.data })
                }).catch(err => {
                    console.log(err)
                })
        }
    }
}

module.exports = homeController