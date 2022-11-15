const { validationResult } = require('express-validator');
const User = require('../models/user.model')

const usersGet = async (req,res) =>{
   
    const usuarios = await User.findAll();
    console.log(usuarios);
    res.json({usuarios});

}

const usersPost = async (req,res) =>{
    
    /*
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    */
   
   

    try {
        const {body} = req;

        const existeUsuario = await User.findOne({
            where:{
                nombre: body.nombre
            }
        });

        if (existeUsuario) {
            res.status(400).json({
                msg:'Ya existe un usuario con el nombre' + body.nombre
            })
            return;
        }
       


        const user = new User(body);
      await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'denegado'
        })
    }

}


    
module.exports ={
    usersGet,
    usersPost
}