const express = require('express');
const db = require('../database/config');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port=3000;
        this.usuariosPath = '/api/usuarios';
        this.conectarDB();
        this.routes();
    }

    async conectarDB(){
        try {
            await db.authenticate;
            console.log("database arriba")
        } catch (error) {
            
            
        }
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log("Servidor abierto en",this.port);
        });
    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/user'))

    }
}

module.exports = Server;