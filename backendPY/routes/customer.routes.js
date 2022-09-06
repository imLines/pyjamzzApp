module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const customer = require('../controllers/customer.controller');

    router.post('/registration', customer.registration);
    router.post('/login', customer.login);
    app.use('/customer', router)
} 