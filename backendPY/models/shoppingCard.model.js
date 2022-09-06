const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const ShoppingCard = sequelize.define("shoppingCard", {
    price: {
        type: DataTypes.DECIMAL
    }
})

module.exports = ShoppingCard;