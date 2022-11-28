const { Router } = require("express");
const { check} = require("express-validator");
const { usersGet, userPost, userDelete, userPut } = require("../controllers/users.controller");
const { validarCampos } = require("../middlewares/reqValidator.middleware");

const router = Router();

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

router.put('/:id',userPut);

module.exports=router;
