const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Payment = sequelize.define("payment", {
    amount: {
        type: DataTypes.DECIMAL
    }
});

module.exports = Payment;