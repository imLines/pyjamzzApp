module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const security = require('../controllers/security.controller');
    const customer = require('../controllers/customer.controller');

    router.get('/all', customer.findAll);
    router.post('/create', customer.create);
    router.post('/update/:id', customer.update);
    router.get('/ban/:id', customer.delete);
    router.get('/:id', customer.findOne);

    router.post('/registration', security.registration);
    router.post('/login', security.login);
    app.use('/customer', router)
};