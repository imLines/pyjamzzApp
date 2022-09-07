const Product = require('../models/product.model');

exports.create = async (req, res)=>{
    if(!req.body.name || !req.body.environment || !req.body.category || !req.body.description || !req.body.priceTTC || !req.body.novelty || !req.body.color){
        console.log('Donnée manquante...');
        res.status(400).send({message: "Donnée manquante..."});
    }else {
        const name = req.body.name;
        const environment = req.body.environment;
        const category = req.body.category;
        const description = req.body.description;
        const priceTTC = req.body.priceTTC;
        const novelty = req.body.novelty; 
        const color = req.body.color;

        try{
            Product.findOne({raw: true, where: {name: name}})
            .then(data=>{
                if(data){
                    res.status(400).send({message: "Il existe un article portant ce nom..."});
                }else{
                    Product.create({name, environment, category, description, priceTTC, novelty, color})
                    .then(creating=>{
                        res.status(200).send({message: "L'article vient d'être ajouté avec succès."})
                    })
                }
            })
            console.log('Formulaire valide.');
            res.status(200);
        }catch(e){
            console.log(e)
        }
    }
} 

exports.findAll = (req, res)=>{
    try{
        const category = req.params.category;
        Product.findAll({where: {category: category}})
        .then(products=>{
            res.status(200).json({products: products})
        })
    }catch(e){
        console.log("ERREUR"+e)
        res.status(400)
    }
} 

exports.findOne = (req, res)=>{
    try{
        const id = req.params.id;
        Product.findOne({where: {id: id}})
        .then(product=>{
            res.status(200).json({product: product})
        })
    }catch(e){
        res.status(400).send({message: "Erreur : "+e})
    }
}

exports.update = (req, res)=>{
    try{
        const name = req.body.name;
        const environment = req.body.environment;
        const category = req.body.category;
        const description = req.body.description;
        const priceTTC = req.body.priceTTC;
        const novelty = req.body.novelty; 
        const color = req.body.color;
        const id = req.params.id;
        Product.update({name, environment, category, description, priceTTC, novelty, color}, {where: {id: id}})
        .then(product=>{
            res.status(200).json({product})
        })
    }catch(e){
        res.status(400).send({message: "Erreur : "+e})
    }
}

exports.delete = (req, res)=>{
    try{
        const id = req.params.id;
        Product.destroy({where:{id: id}})
        .then(()=>{
            res.status(200).send({message: "It's delete."})
        })
    }catch(e){
        res.status(400).send({message: "Erreur : "+e})
    }
}