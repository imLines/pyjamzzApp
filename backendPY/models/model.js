const Sequelize  = require('sequelize');
const sequelize = new Sequelize('mysql://imlines:123.@localhost:8889/pyjamzz');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = {sequelize};