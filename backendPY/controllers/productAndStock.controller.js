const Product = require('../models/product.model');
const Stock = require('../models/stock.model')

exports.create = async (req, res)=>{
    if(!req.body.name || !req.body.environment || !req.body.category || !req.body.description || !req.body.priceTTC || !req.body.stock || !req.body.size || req.body.novelty == null || !req.body.color){
        res.status(400).send({message: "Forgot data."});
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
                    res.status(400).send({message: "There is an product with this name."});
                }else{
                    Product.create({name, environment, category, description, priceTTC, novelty, color})
                    .then(creating=>{
                        const size = req.body.size;
                        const stock = req.body.stock;
                        const productId = creating.dataValues.id;
                        Stock.create({stock, size, productId})
                        res.status(200).send({message: "The product has just been successfully added."})
                    })
                }
            })
        }catch(e){
            res.status(400).send({message: "Error :"+e})
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
        console.log("Error :"+e)
        res.status(400)
    }
} 

exports.findOne = (req, res)=>{
    try{
        const id = req.params.id;
        Product.findOne({raw:true, where: {id: id}})
        .then(product=>{
            if(product){
                res.status(200).json({product: product})
            }else{
                res.status(400).send({message: "Aucun article trouvé. désolé."})
            }
        })
    }catch(e){
        res.status(400).send({message: "Error : "+e})
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
            res.status(200).send({message: "Product was updated."})
        })
    }catch(e){
        res.status(400).send({message: "Error : "+e})
    }
}
 
exports.delete = (req, res)=>{
    try{
        const id = req.params.id;
        Product.destroy({where:{id: id}})
        .then(()=>{
            res.status(200).send({message: "Product was deleted."})
        })
    }catch(e){
        res.status(400).send({message: "Erreur : "+e})
    }
}