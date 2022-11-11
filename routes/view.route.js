const { Router } = require("express");
const index = require("../controllers/view.controller");

const router = Router();


router.get('/',index);
