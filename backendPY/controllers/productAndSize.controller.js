const Product = require('../models/product.model');
const Size = require('../models/size.model')

exports.create = async (req, res)=>{
    if(!req.body.name || !req.body.environment || !req.body.category || !req.body.description || !req.body.priceTTC || !req.body.size || req.body.novelty == null || !req.body.color){
        res.status(400).send({message: "Données manquantes."});
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
                    res.status(400).send({message: "Il existe déjà un produit avec ce nom. Choisissez un autre nom !"});
                }else{
                    Product.create({name, environment, category, description, priceTTC, novelty, color})
                    .then(creating=>{
                        const size = req.body.size;
                        const productId = creating.dataValues.id;
                        Size.create({size, productId})
                        res.status(200).send({message: "Le produit à été ajouté avec succès."})
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
                Size.findAll({raw: true, where:{productId: id}}) 
                .then(size=>{
                    res.status(200).json({product: product, size: size})
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
            res.status(200).send({message: "Le produit à bien été mis à jour."})
        })
    }catch(e){
        res.status(400).send({message: "Error : "+e})
    }
}
 
exports.delete = (req, res)=>{
    try{
        const id = req.params.id;
        Product.destroy({where:{id: id}})
        .then(deleted=>{
            if(deleted == 0){
                res.status(400).send({message: "Aucun article n'as été supprimé car une erreur est survenue (article probablement déjà supprimé..)."})
            }else{
                res.status(200).send({message: "Le produit à bien été supprimé."})
            }
        })
    }catch(e){
        res.status(400).send({message: "Erreur : "+e})
    }
}

exports.updateSize= (req, res)=>{
    try{
        if(!req.body.newSize){
            return res.status(400).send({message: "Vous devez impérativement choisir la nouvelle taille pour modifier l'ancienne."})
        } 
        const productId = req.params.id;
        const size = req.body.size;
        const newSize = req.body.newSize 
        Size.update({size: newSize}, {where: {productId: productId, size: size}})
        .then(updated=>{
            if(updated[0] == 0){
                res.status(400).send({message: "Aucun article trouvé avec cet Id ou cette taille. Rien n'as été mis à jour."})
            }else{
                res.status(200).send({message: "Taille mise à jour avec succès !"})
            }
        })
    }catch(e){
        res.status(400).send({message: "Une ereur à été détecté :"+e})
    }
}

exports.addSize = (req, res)=>{
    try{
        const productId = req.params.id;
        const size = req.body.size;
        Size.findOne({raw: true, where: {productId: productId, size: size}})
        .then(data=>{
            if(data){
                res.status(400).send({message: "Vous ne pouvez pas créer deux même tailles  pour un même produit. Veuillez le mettre simplement à jour ou le supprimer."})
            }else{
                Size.create({productId, size})
                res.status(200).send({message: "La taille à bien été créé."})
            }
        })
    }catch(e){
        res.status(400).send({message: "Erreur :"+e})
    }
}