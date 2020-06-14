const sequelize = require('sequelize');
const db = require('../config/db');
const cliente = require('../models/cliente.model');
const plano = require('../models/plano.model');
const quarto = require('../models/quarto.model');
var reserva = db.define('reserva', {
    id_reserva: { 
        type: sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    id_quarto: sequelize.INTEGER,
    id_plano: sequelize.INTEGER,
    id_cliente: sequelize.INTEGER,
    data_checkin: sequelize.DATE,
    data_checkout: sequelize.DATE,
    observacoes: sequelize.STRING,
    data_alteracao: sequelize.DATE,

},
 {
    timestamps: false,
    tableName: 'reserva'
});
quarto.hasMany(reserva, {foreignKey: 'id_quarto'});
reserva.belongsTo(quarto, {foreignKey: 'id_quarto'});
plano.hasMany(reserva, {foreignKey: 'id_plano'});
reserva.belongsTo(plano, {foreignKey: 'id_plano'});

module.exports = reserva;