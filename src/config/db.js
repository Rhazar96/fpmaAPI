const sequelize = require('sequelize');
const db = new sequelize('fpma', 'root', '',
    {
        host:'localhost',
        dialect: 'mysql',
    
    }
);

module.exports = db;