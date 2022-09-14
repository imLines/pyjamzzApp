module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const admin = require('../controllers/admin.controller');
    const protected = require('../config/protected.config');
    

    router.post('/add',  admin.create);
    router.get('/all',  admin.findAll);
    router.post('/update/:id',  admin.update);
    router.delete('/ban/:id',  admin.delete);
    router.get('/:id',  admin.findOne);

    app.use('/admin', router)

}; 