const { response } = require("express");
const Customer = require("../models/customer.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.create = (req, res)=>{
    try{
        const lastName = req.body.lastName;
        const firstName = req.body.firstName;
        const dateOfBirth = req.body.dateOfBirth;
        const sex = req.body.sex; 
        const adress = req.body.adress;
        const adressComplement = req.body.adressComplement;
        const country = req.body.country;
        const postalAdress = req.body.postalAdress;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
        
        Customer.findOne({where: {email: email}})
        .then(response=>{
            if(response){
                res.status(400).send({message: "This email was already used. Please choose another email."})
            }else{
                Customer.create({lastName, firstName, dateOfBirth, sex, adress, adressComplement, country, postalAdress, email, phone, password})
                res.status(201).send({message: "Customer was created."});
            };
        })
    }catch(e){
        res.status(400).send({message:"Error in request :"+e});
    }
}

exports.findOne = (req, res)=>{ 
    try{
        const id = req.params.id;
        const tokenSendByCustomer = req.get('Authorization');
        const token = jwt.verify(tokenSendByCustomer, process.env.SECRET_KEY_TOKEN_CUSTOMER)
        Customer.findOne({raw: true, where: {id: id}})
        .then(customer=>{
            if(customer && customer.id == token.customerId){
                res.status(200).json({customer});
            }else{
                res.status(400).send({message: "Cet utilisateur n'existe pas ou n'est pas vous."});
            }
        })
    }catch(e){
        res.status(200).send({message: "Erreur :"+e})
    }
}

exports.findAll = (req, res)=>{
 
    try{
        Customer.findAll()
        .then(customers=>{
            res.status(200).json({customers});
        })
    }catch(e){
        res.status(400).send({message: "Erreur: "+e})
    }
}

exports.update = (req, res)=>{
    try{
        if(!req.body.lastName || !req.body.firstName || !req.body.sex || !req.body.email ){
            res.status(400).send({message: "Forgot info"});
        }else{
            const id = req.params.id;
            const tokenSendByCustomer = req.get('Authorization');
            const token = jwt.verify(tokenSendByCustomer, process.env.SECRET_KEY_TOKEN_CUSTOMER)
            Customer.findOne({raw: true, where: {id: id}})
            .then(customer=>{
                if(customer && customer.id == token.customerId){
                    const lastName = req.body.lastName;
                    const firstName = req.body.firstName;
                    const sex = req.body.sex;
                    const adress = req.body.adress; 
                    const adressComplement = req.body.adressComplement;
                    const country = req.body.country;
                    const postalAdress = req.body.postalAdress;
                    const email = req.body.email;
                    const phone = req.body.phone;
                    const password = req.body.password;
                    bcrypt.compare(password, customer.password)
                    .then(valid=>{ 
                        if(valid){
                            Customer.update({lastName, firstName, sex, adress, adressComplement, country, postalAdress, email, phone}, {where: {id: id}})
                            res.status(201).send({message: "Votre profil à été mit à jour !"});
                        }else{
                            res.status(400).send({message: "Mot de passe incorrect."})
                        }
                    })
                }else{
                    res.status(400).send({message: "Cet utilisateur n'existe pas ou n'est pas vous."})
                }
            })
        }
    }catch(e){
        res.status(400).send({message: "Une erreur est apparue :"+e})
    }
}


exports.delete = (req, res)=>{
    try{
        const id = req.params.id;
        Customer.destroy({where:{id: id}})
        .then(()=>{
            res.status(200).send({message: "Customer was deleted."})
        })
    }catch(e){
        res.status(400).send({message: "Erreur : "+e})
    }
}