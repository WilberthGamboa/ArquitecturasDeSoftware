const express = require('express');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port=3000;
        this.conectarDB();
        
    }

    async conectarDB(){
        await dbConnection();
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log("Servidor abierto en",this.port);
        });
    }
}

module.exports = Server;