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
        type: DataTypes.DECIMAL
    },
    new: {
        type: DataTypes.BOOLEAN
    },
    size: {
        type: DataTypes.INTEGER
    },
    color: {
        type: DataTypes.STRING
    }
});

module.exports = Product;