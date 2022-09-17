module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const delivery = require('../controllers/delivery.controller');
    const protected = require('../config/protected.config');

    router.post('/create', protected,delivery.create);
    router.get('/all', delivery.findAll);
    router.post('/update/:id', protected,delivery.update);
    router.delete('/delete/:id', protected,delivery.delete);
    router.get('/:id', delivery.findOne);

    app.use('/delivery', router);
}; 