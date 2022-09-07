const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Customer = sequelize.define("customer", {
    lastName: {
        type: DataTypes.STRING
    },
    firstName: {
        type: DataTypes.STRING
    },
    dateOfBirth: {
        type: DataTypes.DATE
    },
    sex: {
        type: DataTypes.STRING
    },
    adress: { 
        type: DataTypes.STRING
    },
    adressComplement: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    postalAdress: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    }
});

module.exports = Customer;