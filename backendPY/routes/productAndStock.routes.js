module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const productAndStock = require('../controllers/productAndStock.controller');
    const protected = require('../config/protected.config');

    router.get('/:id', productAndStock.findOne);
    router.post('/:id', protected,productAndStock.update);
    router.put('/stock/:id', productAndStock.updateStock);
    router.post('/stock/add/:id', productAndStock.addStock);
    router.get('/list/:category', productAndStock.findAll);
    router.delete('/delete/:id', protected,productAndStock.delete);
    router.post('/new', protected, productAndStock.create); //Rajouter le protected !!!!!

    app.use('/product', router);
}   