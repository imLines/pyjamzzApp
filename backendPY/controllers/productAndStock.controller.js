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
                        // const stock = req.body.stock;
                        const productId = creating.dataValues.id;
                        Stock.create({size, productId})
                        res.status(200).send({message: "The product has just been successfully added."})
                    })
                }
            })
        }catch(e){
            res.status(400).send({message: "Error :"+e})
        }
    }
} 

exports.findAllByCategory = (req, res)=>{
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

exports.findAll = (req, res)=>{
    try{
        console.log("OOOOOOOOOOOOOOOOOOO")
        Product.findAll({})
        .then(data=>{
            res.status(200).json({data})
        })
    }catch(e){
        res.status(400).send({message : 'Erreur :'+e})
    }
}

exports.findOne = (req, res)=>{
    try{
        const id = req.params.id;
        Product.findOne({raw:true, where: {id: id}})
        .then(product=>{
            if(product){
                Stock.findAll({raw: true, where:{productId: id}}) 
                .then(stock=>{
                    res.status(200).json({product: product, stock: stock})
                })
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

exports.updateStock= (req, res)=>{
    try{
        const productId = req.params.id;
        const size = req.body.size;
        const newStock = req.body.newStock
        Stock.update({stock: newStock}, {where: {productId: productId, size: size}})
        res.status(200).send({message: "Stock was successfull updated !"})
    }catch(e){
        res.status(400).send({message: "An error was detected :"+e})
    }
}

exports.addStock = (req, res)=>{
    try{
        const productId = req.params.id;
        const size = req.body.size;
        const stock = req.body.stock;
        Stock.findOne({raw: true, where: {productId: productId, size: size}})
        .then(data=>{
            if(data){
                res.status(400).send({message: "Vous ne pouvez pas créer deux stock différents pour un même produit & une même taille. Veuillez le mettre simplement à jour."})
            }else{
                Stock.create({productId, size, stock})
                res.status(200).send({message: "Le stock à bien été créé."})
            }
        })
    }catch(e){
        res.status(400).send({message: "Error :"+e})
    }
}