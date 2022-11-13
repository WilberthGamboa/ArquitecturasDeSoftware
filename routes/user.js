const { Router } = require("express");
const { check } = require("express-validator");
const { usersGet, usersPost } = require("../controllers/users.controller");

const router = Router();

router.get('/', usersGet); 
router.post('/',[

    check('nombre','El nombre es obligatorio').not().isEmpty()



]




,usersPost);

module.exports=router;
