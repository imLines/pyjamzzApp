module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const product = require('../controllers/productAndStock.controller');
    const protected = require('../config/protected.config');

    router.get('/:id', product.findOne);
    router.post('/:id', protected,product.update);
    router.get('/list/:category', product.findAll);
    router.delete('/delete/:id', protected,product.delete);
    router.post('/new', protected, product.create); //Rajouter le protected !!!!!

    app.use('/product', router);
}  