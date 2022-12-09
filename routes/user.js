const { Router } = require("express");
const { check} = require("express-validator");
const { usersGet, userPost, userDelete, userPut } = require("../controllers/users.controller");
const { validarCampos } = require("../middlewares/reqValidator.middleware");
const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('../swagger.json');
const router = Router();


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
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/', usersGet); 
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
