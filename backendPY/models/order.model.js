const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Order = sequelize.define('order', {
    orderNumber: {
        type: DataTypes.INTEGER
    },
    totalAmount: {
        type: DataTypes.DECIMAL
    }
});

module.exports = Order;