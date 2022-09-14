const Customer = require('../models/customer.model');
const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.registration = async (req, res) => {
    if(!req.body.sex || !req.body.lastName || !req.body.firstName  || !req.body.email || !req.body.password){
        res.status(400).send({message: "Forbidden Informations."})
    }else{
        const sex = req.body.sex;
        const lastName = req.body.lastName;
        const firstName = req.body.firstName;
        const email = req.body.email;
        const PasswordNoHashed = req.body.password;

        Customer.findOne({where: {email: email}}) 
        .then(user=>{
            if(user == null){
                    bcrypt.hash(PasswordNoHashed, 10)
                    .then(hashedPassword=>{
                        const password = hashedPassword;
                        Customer.create({sex, lastName, firstName,  email, password})
                        res.status(201).send({message: "Votre compte à bien été créé."});
                    })
            }else{
                res.status(400).send({message: "Adresse mail déjà utilisée"})
            }
        })
    }
};


exports.login = (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        Admin.findOne({raw: true, where:{email: email}})
        .then(admin => {
            if(admin){
                const adminId = admin.id;
                const adminToken = jwt.sign({token: adminId}, process.env.SECRET_KEY_TOKEN_ADMIN, {expiresIn: "1h"});
                res.status(200).json({token: adminToken}); 
            }else{
                Customer.findOne({raw: true, where: {email: email}})
                .then(customer=> {
                    if(customer){
                        const customerPassword = customer.password;
                        bcrypt.compare(password, customerPassword)
                        .then(validate => {
                            if(validate){
                                const id = customer.id; 
                                const lastName = customer.lastName;
                                const firstName = customer.firstName;
                                const sex = customer.sex;
                                const adress = customer.adress;
                                const adressComplement = customer.adressComplement;
                                const country = customer.country;
                                const postalAdress = customer.postalAdress;
                                const state = customer.state;
                                const email = customer.email;
                                const phone = customer.phone;
                                const token = jwt.sign({customerId: id}, process.env.SECRET_KEY_TOKEN_CUSTOMER);
                                res.status(200).json({token: token,  lastName, firstName, sex, adress, adressComplement, country, postalAdress, state, email, phone});
                            }else{
                                res.status(400).send({message: " no ok"})
                            }
                        })
                        
                    }else{
                        res.status(400).send({message: "Aucun utilisateur avec cet email trouvé"});
                    }
                })
            }
        })  
    }catch(e){
        console.log("ERROR IS : "+e);
        res.status(500).send({message: "Error..."})
    };
};


exports.changePassword = (req, res)=>{
    try{
        if(!req.body.newPassword){
            res.status(400).send({message: "informations manquantes"})
        }else{
            const token =  req.get('Authorization');
            const tokenDecrypt = jwt.verify(token, process.env.SECRET_KEY_TOKEN_CUSTOMER);
            Customer.findOne({raw: true, where:{id: tokenDecrypt.customerId}})
            .then(customer=>{
                const newpassword = req.body.newPassword
                bcrypt.hash(newpassword, 10)
                .then(newPasswordHashed=>{
                    Customer.update({password: newPasswordHashed},{ where:{id: tokenDecrypt.customerId}})
                    res.status(200).send({message: "Success Password Changed."})
                })
            })
        }
    }catch(e){
        res.status(400).send({message: "Error: "+e});
    }
}