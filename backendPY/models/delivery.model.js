const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Delivery = sequelize.define('delivery', {
    deliveryPrice: {
        type: DataTypes.FLOAT(10,2)
    },
    company: {
        type: DataTypes.STRING
    },
    minimumOrder:{
        type: DataTypes.FLOAT(10,2)
    }
})

module.exports = Delivery; 