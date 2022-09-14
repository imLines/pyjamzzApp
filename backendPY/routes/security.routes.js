module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const security = require('../controllers/security.controller');

    router.post('/registration', security.registration);
    router.post('/login', security.login);
    router.post('/changepassword', security.changePassword)
    app.use('/log', router)
}; 