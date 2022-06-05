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
        influencer(req,res){
            res.render('influencers/index')
        },
        influencer_create(req,res){
            res.render('influencers/create')
        },
        client(req,res){
            res.render('client/index')
        },
        client_create(req,res){
            res.render('client/create')
        },


        adminOurWork(req,res){
            axios.get('http://localhost:500/api/pages/find')
            .then(response=>{
                if(req.query.id){
                    console.log(req.body)
                     axios.get('http://localhost:500/api/pages/find',{params:{id:req.query.id}})
                    .then(data=>{        
                        res.render('aboutPage',{ tittle:'Admin - Dashboard', about:response.data,data:data.data})
                    }).catch(err=>{
                        console.log(err)
                    })
                }else{
                    res.render('aboutPage',{about:response.data})
                }
            }).catch(err=>{
                console.log(err);
            })
        }
    }
}

module.exports = homeController