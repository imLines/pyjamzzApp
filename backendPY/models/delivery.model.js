const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Delivery = sequelize.define('delivery', {
    deliveryPrice: {
        type: DataTypes.DECIMAL
    },
    company: {
        type: DataTypes.STRING
    },
    minimumOrder:{
        type: DataTypes.DECIMAL
    }
})

module.exports = Delivery;