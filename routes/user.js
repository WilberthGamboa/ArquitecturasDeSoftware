const { Router } = require("express");
const { check} = require("express-validator");
const { usersGet, usersPost } = require("../controllers/users.controller");
const { validarCampos } = require("../middlewares/reqValidator.middleware");

const router = Router();

router.get('/', usersGet); 
router.post('/',[

    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('numero','El número es obligatorio').not().isEmpty(),
    check('numero',"El dato ingresado no es un número celuar").optional({checkFalsy: true}).isMobilePhone('any',true),
    validarCampos

]




,usersPost);

module.exports=router;
