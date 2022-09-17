module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const product = require('../controllers/productAndStock.controller');
    const protected = require('../config/protected.config');

    router.post('/new', protected,product.create);
    router.delete('/delete/:id', protected,product.delete);
    router.get('/:category', product.findAll);
    router.post('/:category/:id', protected,product.update);
    router.get('/:category/:id', product.findOne);

    app.use('/product', router);
}  