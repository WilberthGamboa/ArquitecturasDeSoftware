const { validationResult } = require("express-validator");

/*Realiza la validación de la request en el routing antes de entrar al
controller de lo contrario dentro del controller se tendría que verificar 
que no existieran errores, haciendo el código repetitivo

*/
const validarCampos = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}


module.exports= {
    validarCampos
}