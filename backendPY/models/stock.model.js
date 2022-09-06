const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Stock = sequelize.define('stock', {
    stock: {
        type: DataTypes.INTEGER
    }
});

module.exports = Stock;