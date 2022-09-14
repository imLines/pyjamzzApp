const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Customer = sequelize.define("customer", {
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
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
    state: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Customer;