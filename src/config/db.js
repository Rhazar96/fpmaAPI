const sequelize = require('sequelize');
const db = new sequelize('fpma', 'root', '',
    {
        host:'localhost',
        dialect: 'mariadb',
        port: '3306'
    
    }
);

module.exports = db;