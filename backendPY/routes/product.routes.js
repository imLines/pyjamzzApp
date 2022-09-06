module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const product = require('../controllers/product.controller');

    router.post('/create', product.create);

    app.use('/product', router);
}