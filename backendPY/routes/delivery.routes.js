module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const delivery = require('../controllers/delivery.controller');

    router.post('/create', delivery.create);
    router.get('/all', delivery.findAll);
    router.post('/update/:id', delivery.update);
    router.get('/delete/:id', delivery.delete);
    router.get('/:id', delivery.findOne);

    app.use('/delivery', router);
};