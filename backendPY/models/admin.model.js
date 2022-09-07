const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Admin = sequelize.define('admin', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.TEXT
    },
    additionnalPassword: {
        type: DataTypes.TEXT
    }
});

module.exports = Admin;