const {Sequelize} = require('sequelize');
//const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = require('../config');


const db = new Sequelize(process.env.MYSQLDATABASE,process.env.MYSQLUSER,process.env.MYSQLPASSWORD,{
    host:process.env.MYSQLHOST,
    dialect:'mysql',
    port:process.env.MYSQLPORT

});

module.exports= db;