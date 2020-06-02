const sequelize = require('sequelize');
const db = require('../config/db');
var utilizador = db.define('utilizador', {
    id_utilizador: { 
        type: sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    username: sequelize.STRING,
    password: sequelize.STRING,

},
{
    timestamps: false,
    tableName: 'utilizador'
});

module.exports = utilizador;