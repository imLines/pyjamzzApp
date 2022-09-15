module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const product = require('../controllers/productAndStock.controller');

    router.post('/new', product.create);
    router.delete('/delete/:id', product.delete);
    router.get('/:category', product.findAll);
    router.post('/:category/:id', product.update);
    router.get('/:category/:id', product.findOne);

    app.use('/product', router);
}  