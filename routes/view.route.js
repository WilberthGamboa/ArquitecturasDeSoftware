const { Router } = require("express");
const {index,agregar} = require("../controllers/view.controller");

const router = Router();
router.get('/',index);
router.get('/agregar',agregar);


module.exports=router;