const sequelize = require('sequelize');
const db = require('../config/db');
const cliente = require('../models/cliente.model');
var plano = db.define('plano', {
    id_plano: { 
        type: sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    tipo_plano: sequelize.STRING,
    data: sequelize.DATE,
    preco_plano: sequelize.INTEGER,
    
},
{
    timestamps: false,
    tableName: 'plano'
});

module.exports = plano;