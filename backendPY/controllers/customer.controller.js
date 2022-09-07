const { response } = require("express");
const Customer = require("../models/customer.model");



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
        const role = req.body.role;
        
        Customer.findOne({where: {email: email}})
        .then(response=>{
            if(response){
                res.status(400).send({message: "This email was already used. Please reset your password or choose another email."})
            }else{
                Customer.create({lastName, firstName, dateOfBirth, sex, adress, adressComplement, country, postalAdress, email, phone, password, role})
                .then(created=>{
                    res.status(200).send({message: "Customer was created."});
                });
            };
        })

    }catch(e){
        res.status(400).send({message:"Error in request :"+e});
    }
}

exports.findOne = (req, res)=>{
    const id = req.params.id;

    try{
        Customer.findOne({where: {id: id}})
        .then(exist=>{
            if(exist){
                res.status(200).json({exist});
            }else{
                res.status(400).send({message: "Not exist"});
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
        const role = req.body.role;

        Customer.update({lastName, firstName, dateOfBirth, sex, adress, adressComplement, country, postalAdress, email, phone, password, role}, {where: {id: id}})
        .then(()=>{
            res.status(200).send({message: "Customer was updated."});
        });
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