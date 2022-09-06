module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const customer = require('../controllers/customer.controller');

    router.get('/registration', customer.registration);
    router.post('/registration', customer.registration);
    app.use('/customer', router)
}