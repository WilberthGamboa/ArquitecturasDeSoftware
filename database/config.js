const {Sequelize} = require('sequelize');
//const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = require('../config');


const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:'DB_HOST',
    dialect:'mysql',

});

module.exports= db;