// config/database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('forum', 'root', null, {
    host: 'localhost',
    dialect: 'mysql', // Especifica o dialeto como MySQL
    port: '3333',
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
};
