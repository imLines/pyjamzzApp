const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Product = sequelize.define('product', {
    name: {
        type: DataTypes.STRING
    }, 
    environment: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING 
    },
    priceTTC: {
        type: DataTypes.FLOAT(10,2)
    },
    novelty: {
        type: DataTypes.BOOLEAN
    }, 
    color: {
        type: DataTypes.STRING
    }
});

module.exports = Product;