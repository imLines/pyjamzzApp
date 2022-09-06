const Customer = require('../models/customer.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.registration = async (req, res) => {
    if(!req.body.sex || !req.body.lastName || !req.body.firstName  || !req.body.email || !req.body.password){
        res.status(400)
    }else{
        const sex = req.body.sex;
        const lastName = req.body.lastName;
        const firstName = req.body.firstName;
        const email = req.body.email;
        const PasswordNoHashed = req.body.password;
        const role = 'user';

        Customer.findOne({where: {email: email}})
        .then(user=>{
            if(user == null){
                    bcrypt.hash(PasswordNoHashed, 10)
                    .then(hashedPassword=>{
                        console.log("LA")
                        const password = hashedPassword;
                        Customer.create({sex, lastName, firstName,  email, password, role})
                        .then(valid=>{
                        })
                        res.status(201).send({message: "Votre compte à bien été créé."});
                    })
            }else{
                res.status(400).send({message: "Adresse mail déjà utilisée"})
            }
        })
    }
};


exports.login = async(req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.email;
        Customer.findOne({raw: true, where: {email: email}})
        .then(data=>{
            if(!data){
                res.status(400).send({message: "Aucun utilisateur avec cet email trouvé"});
            }else if(data){
                const userId = data.id; 
                const token = jwt.sign({userId: userId}, 'SECRET');
                res.status(200).json({token: token});
            };
        });
    }catch(e){
        console.log("ERROR IS : "+e);
        res.status(500).send({message: "Error..."})
    };
};

//ADMIN

