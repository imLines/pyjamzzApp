const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const Stock = sequelize.define('stock', {
    // stock: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Stock;