const { response } = require("express");
const Customer = require("../models/customer.model");
const bcrypt = require('bcrypt');



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
                res.status(400).send({message: "This email was already used. Please reset your password or choose another email."})
            }else{
                Customer.create({lastName, firstName, dateOfBirth, sex, adress, adressComplement, country, postalAdress, email, phone, password})
                res.status(200).send({message: "Customer was created."});
            };
        })
    }catch(e){
        res.status(400).send({message:"Error in request :"+e});
    }
}

exports.findOne = (req, res)=>{ 
    try{
        const id = req.params.id;
        Customer.findOne({raw: true, where: {id: id}})
        .then(customer=>{
            if(customer){
                res.status(200).json({customer});
            }else{
                res.status(400).send({message: "This customer not exist"});
            }
        })
    }catch(e){
        res.status(200).send({message: "Erreur :"+e})
    }
}

exports.findAll = (req, res)=>{

    try{
        Customer.findAll()
        .then(exist=>{
            res.status(200).json({exist});
        })
    }catch(e){
        res.status(400).send({message: "Erreur: "+e})
    }
}

exports.update = (req, res)=>{
    try{
        if(!req.body.lastName || !req.body.firstName || !req.body.sex || !req.body.email ){
            res.status(400).send({message: "Forbidden info"});
        }else{
            const id = req.params.id;
    
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
            Customer.findOne({raw: true, where: {id: id}})
            .then(customer=>{
                if(customer){
                    bcrypt.compare(password, customer.password)
                    .then(valid=>{ 
                        if(valid){
                            Customer.update({lastName, firstName, dateOfBirth, sex, adress, adressComplement, country, postalAdress, email, phone}, {where: {id: id}})
                            res.status(200).send({message: "Customer was updated."});
                        }else{
                            res.status(400).send({message: "password incorrect...."})
                        }
                    })
                }else{
                    res.status(400).send({message: "No customer found"})
                }
            })
        } 
        
    }catch(e){
        res.status(400).send({message: "Error : "+e});
    }
} 

exports.delete = (req, res)=>{
    try{
        const id = req.params.id;
        Customer.destroy({where:{id: id}})
        .then(()=>{
            res.status(200).send({message: "Customer is delete."})
        })
    }catch(e){
        res.status(400).send({message: "Erreur : "+e})
    }
}