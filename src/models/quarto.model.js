const sequelize = require('sequelize');
const db = require('../config/db');
const cliente = require('../models/cliente.model');
var quarto = db.define('quarto', {
    id_quarto: { 
        type: sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    tipo: sequelize.STRING,
    status: sequelize.INTEGER,
    data: sequelize.DATE
},
{
    timestamps: false,
    tableName: 'quarto'
});



module.exports = quarto;