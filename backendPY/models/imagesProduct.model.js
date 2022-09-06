const {sequelize} = require('./model');
const {DataTypes} = require('sequelize');


const ImagesProduct = sequelize.define('imagesProducts', {
    url: {
        type: DataTypes.TEXT
    }
});

module.exports = ImagesProduct;