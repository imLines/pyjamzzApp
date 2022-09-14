const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Payment = sequelize.define("payment", {
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
    //THE ORDER ID CAN BE NULL FOR INITIALIZATION BEFORE 
});

module.exports = Payment;