const sequelize = require('sequelize');
const db = require('../config/db');
const reserva = require('../models/reserva.model');
var cliente = db.define('cliente', {
    id_cliente: { 
        type: sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    nome: sequelize.STRING,
    email: sequelize.STRING,
    telemovel: sequelize.INTEGER,
    data: sequelize.DATE
},
{
    timestamps: false,
    tableName: 'cliente'
});

cliente.hasMany(reserva, {foreignKey: 'id_cliente'});
reserva.belongsTo(cliente, {foreignKey: 'id_cliente'});

module.exports = cliente;