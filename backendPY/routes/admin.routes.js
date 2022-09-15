module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const admin = require('../controllers/admin.controller');
    const protected = require('../config/protected.config');
    

    router.post('/add',  admin.create);
    router.get('/all',  protected,admin.findAll);
    router.post('/update/:id',  protected,admin.update);
    router.delete('/ban/:id',  protected,admin.delete);
    router.get('/:id',  protected,admin.findOne);

    app.use('/admin', router)

}; 