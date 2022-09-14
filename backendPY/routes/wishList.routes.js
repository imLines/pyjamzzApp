module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const wishList = require('../controllers/wishList.controller');
    const auth = require('../config/auth.config');
    

    router.post('/add/:id',  wishList.create);
    

    app.use('/wishlist', router)
 
};