module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const customer = require('../controllers/customer.controller');

    router.post('/create', customer.create);
    router.get('/all', customer.findAll);
    router.post('/update/:id', customer.update);
    router.delete('/ban/:id', customer.delete);
    router.get('/:id', customer.findOne); 

    app.use('/customer', router)
};  