const { Router } = require("express");
const { check} = require("express-validator");
const { usersGet, userPost, userDelete, userPut } = require("../controllers/users.controller");
const { validarCampos } = require("../middlewares/reqValidator.middleware");

//const swaggerDocument = require('../swagger.json');
const router = Router();

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API Arquitectura de software',
        version: '1.0.0',
        description: 'Una descripción de mi API',
      },
    },
    apis: ['./routes/*.js'], // Archivos que contienen las definiciones de las rutas
  });
/*

const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "Blah",
        "description": "",
        "version": "1.0"
    },
    "produces": ["application/json"],
    "paths": {
        "/test": {
            "post": {
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/test"],
                "description": "[Login 123](https://www.google.com)",
                "parameters": [{
                    "name": "test",
                    "in": "formData",
                    "type": "array",
                    "collectionFormat": "multi",
                    "items": {
                        "type": "integer"
                    }
                },
                { "name": "profileId", "in": "formData", "required": true, "type": "string" },
                { "name": "file", "in": "formData", "type": "file", "required": "true" }],
                "responses": {}
            }
        },
        "/bar": {
            "get": {
                "x-swagger-router-controller": "bar",
                "operationId": "impossible",
                "tags": ["/test"],
                "description": "",
                "parameters": [],
                "responses": {}
            }
        }
    }
};
*/
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 *      /api/usuarios:
 *   get:
 *     description: Devuelve una lista de usuarios
 *     tags:
 *       - users
 *     parameters:
 *       - name: busqueda
 *         description: Busca basándose en el nombre
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *       - name: desde
 *         description: Muestra el páginado de 5 en 5
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 0
 
 *     responses:
 *       200:
 *         description: Una lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: 'http://localhost:3000/api/usuarios'
 *             example:
 *               {
 *                 "usuarios":[
 *                 { "id": 1,
      "nombre": "Wilberth",
      "numero": 529992359998,
      "createdAt": "2022-11-27 06:11:39",
      "updatedAt": "2022-11-27 06:11:39" 
 *                  },
 *                 { "id": 2,
      "nombre": "Wilberth2",
      "numero": 529992359998,
      "createdAt": "2022-11-27 06:11:39",
      "updatedAt": "2022-11-27 06:11:39" 
 *                  },
      { "id": 3,
      "nombre": "Wilberth3",
      "numero": 529992359998,
      "createdAt": "2022-11-27 06:11:39",
      "updatedAt": "2022-11-27 06:11:39" 
 *                  },
      { "id": 4,
      "nombre": "Wilberth4",
      "numero": 529992359998,
      "createdAt": "2022-11-27 06:11:39",
      "updatedAt": "2022-11-27 06:11:39" 
 *                  },
      { "id": 5,
      "nombre": "Wilberth5",
      "numero": 529992359998,
      "createdAt": "2022-11-27 06:11:39",
      "updatedAt": "2022-11-27 06:11:39" 
 *                  },
 *               ]
 *                }
 *              
 * 
 *       404:
 *         description: Petición fallida
 */


router.get('/', usersGet); 
/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     description: Crea un nuevo usuario
 *     tags:
 *       - users
 *     requestBody:
 *       description: Información del usuario a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'http://localhost:3000/api/usuarios'
 *           example:
 *             { "nombre": "Ariel", "telefono":"9992329997" }
 *     responses:
 *       200:
 *         description: El usuario se ha creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'http://localhost:3000/api/usuarios'
 *             example:
 *               { "nombre": "Ariel", "numero":"9992329997"}
 *       400:
 *         description: Faltan campos en la solicitud /nombre incorrecto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'http://localhost:3000/api/usuarios'
 *             example:
 *              {
 *                "errores":  [
 *                  {"nombre":"campo vacio" },
 *                  {"numero":"campo vacio" }
 *                  ]
 *                  }
 *              
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *      
 */


router.post('/',[

    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('numero','El número es obligatorio').not().isEmpty(),
    check('numero',"El dato ingresado no es un número celular").optional({checkFalsy: true}).isMobilePhone('any',true),
    validarCampos

]

,userPost);

router.delete('/:id',[
    check('id','No es un ID válido').exists(),
    validarCampos
],userDelete);

router.put('/:id',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('numero','El número es obligatorio').not().isEmpty(),
    check('numero',"El dato ingresado no es un número celular").optional({checkFalsy: true}).isMobilePhone('any',true),
    validarCampos
],userPut);

module.exports=router;
