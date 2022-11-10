const express = require('express');
const cors = require('cors');
const db = require('../database/config');


class Server{
    constructor(){
        this.app = express();
        this.port=3000;
        this.usuariosPath = '/api/usuarios';
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        try {
            await db.authenticate;
            console.log("database arriba")
        } catch (error) {
            
            
        }
    }

    middlewares(){
        //CORS
       this.app.use(cors());
       //lectura y parseo

      // this.app.use(express.json());

       // this.app.use(express.static('public'));
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