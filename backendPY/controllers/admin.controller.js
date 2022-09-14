const Admin = require("../models/admin.model");
const bcrypt = require('bcrypt');

exports.create = (req, res)=>{

    try{
        if(!req.body.email || !req.body.password || !req.body.secureAK){
            res.status(400).send({message: "Invalid or forbidden information"})
        }else{
            const email = req.body.email;
            const noHashPassword = req.body.password;
            const secureAKenterByAdmin = req.body.secureAK;
            if(secureAKenterByAdmin != process.env.SECURE_ADMIN_KEY){
                res.status(401).send({message: "Error in Form."})
            }else{
                bcrypt.hash(noHashPassword, 10)
                .then(password=>{
                    Admin.findOne({raw: true, where:{email: email}})
                    .then(data=>{
                        if(data){
                            res.status(400).send({message: "admin already exist"})
                        }else{
                            Admin.create({email, password})
                            res.status(200).send({message: "Admin was created."})
    
                        }
                    })
                }) 
            }
        }
    }catch(e){
       res.status(400).send({message: "Error :"+e}) 
    }
};

exports.findOne = (req, res)=>{
    try{
        const id = req.params.id;
        Admin.findOne({raw: true, where: {id: id}})
        .then(admin=>{
            if(admin){
                res.status(200).json({admin})
            }else{
                res.status(400).send({message: "This admin not exist."})
            }
        })
    }catch(e){
        res.status(400).send({message:"Error:"+e})
    };
};



exports.findAll = (req, res)=>{
    Admin.findAll()
    .then(admins=>{
        if(admins){
            res.status(200).json({admins})
        }else{
            res.status(400).send({message: "No admin was found."})
        }
    })
};


exports.update = (req, res)=>{
    try{
        const id = req.params.id;
        const secureAKenterByAdmin = req.body.secureAK;
        if(secureAKenterByAdmin != process.env.SECURE_ADMIN_KEY){
            res.status(401).send({message: "Error in Form."})
        }else{
            Admin.findOne({raw: true, where: {id: id}})
            .then(admin=>{
                if(admin){
                    const email = req.body.email;
                    const noHashPassword = req.body.password;
                    bcrypt.hash(noHashPassword, 10)
                    .then(password=>{
                        Admin.update({email, password}, {where: {id: id}})
                        res.status(200).send({message: "Admin was updated."})
                    })
                }else{
                    res.status(400).send({message: "This admin not exist."})
                }
            })

        }
    }catch(e){
        res.status(400).send({message: "Error:"+e})
    }
};

exports.delete = (req, res)=>{
    try{
        const secureAKenterByAdmin = req.body.secureAK;
        if(secureAKenterByAdmin != process.env.SECURE_ADMIN_KEY){
            res.status(401).send({message: "Error in Form."})
        }else{
            const id = req.params.id;
            Admin.destroy({where: {id: id}})
            res.status(200).send({message: "Admin is destroy."})
        }
    }catch(e){
        res.status(400).send({message: "Error: "+e})
    }
};