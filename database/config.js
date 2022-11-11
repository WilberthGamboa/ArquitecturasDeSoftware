const {Sequelize} = require('sequelize');


const db = new Sequelize('simple','root','',{
    host:'localhost',
    dialect:'mysql',

});

module.exports= db;