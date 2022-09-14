const jwt = require('jsonwebtoken');
const WishList = require('../models/wishList.model');

exports.create = (req, res)=>{
    try{
        const productId = req.params.id;
        const token =  req.get('Authorization')
        console.log(token);
        const decrypt = jwt.verify(token, process.env.SECRET_KEY_TOKEN_CUSTOMER)
        const customerId =decrypt.customerId
        WishList.create({customerId, productId})
    }catch(e){
        res.status(400).send({massage: "Error"+e})
    }
};