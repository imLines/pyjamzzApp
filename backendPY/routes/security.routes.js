module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const security = require('../controllers/security.controller');
    const auth = require('../config/auth.config');

    router.post('/registration', security.registration);
    router.post('/login', security.login);
    router.post('/changepassword', auth, security.changePassword)
    app.use('/log', router)
};  