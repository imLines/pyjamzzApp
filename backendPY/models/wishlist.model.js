const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');

const WishList = sequelize.define('wishlist');

module.exports = WishList;