const axios = require('axios')

function homeController(){
    return{
        index(req,res){
            res.render('index')
        },
        adminLogin(req,res){
            res.render('login')
        },
        adminRegister(req,res){
            res.render('register')
        },
        adminDashboard(req,res){
            res.render('dashboard')
        },
        adminAddCreator(req,res){
            axios.get('http://localhost:500/api/find')
            .then(response=>{
                res.render('addInfluencer',{ tittle:'Admin - Dashboard', creator:response.data})
            }).catch(err=>{
                console.log(err);
            })
        },
        adminEditCreator(req,res){
            axios.get('http://localhost:500/api/find',{params:{id:req.query.id}})
            .then(response=>{
                res.render('editInfluencer',{creator:response.data})
            }).catch(err=>{
                console.log(err);
            })
        },
        adminAddBrand(req,res){
            axios.get('http://localhost:500/api/get')
            .then(response=>{
                res.render('addClients',{ tittle:'Admin - Dashboard', client:response.data})
            }).catch(err=>{
                console.log(err);
            })
        },
        adminEditBrand(req,res){
            axios.get('http://localhost:500/api/get',{params:{id:req.query.id}})
            .then(response=>{
                res.render('editClients',{client:response.data})
            }).catch(err=>{
                console.log(err);
            })
        }
    }
}

module.exports = homeController