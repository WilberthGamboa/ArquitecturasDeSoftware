const { DataTypes } = require('sequelize');
const db = require ('../database/config');

const User = db.define('usuario',{
    nombre:{
        type:DataTypes.STRING
    },

    numero:{
        type:DataTypes.NUMBER
    },

})

module.exports = User;