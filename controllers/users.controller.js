const { validationResult } = require('express-validator');
const { Op } = require("sequelize");
const User = require('../models/user.model')

//Bug desde 
const usersGet = async (req,res) =>{
    const limite = 5;
    let { desde = 0,busqueda=""}= req.query;
   
    if (desde<0||isNaN(desde)) {
        desde=0;
    }

    const usuarios = await User.findAll({
        offset:Number(5*desde) , limit: limite,
        where:{
            nombre: {
                [Op.like]: `%${String(busqueda)}%`
              }
        }
    });

   
    res.json({usuarios});

}

const userPost = async (req,res) =>{

    try {
      
        const {body} = req;
        /*
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
       */


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

const userDelete = async (req,res) =>{
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: 'No existe usuario con el id' + id
        })
        
    }
    await user.destroy();
    res.json(user);
}

const userPut = async(req,res) =>{
    const {id} = req.params;
    const {body} = req;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404);
        }
        await user.update(body);
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'ERROR'
        })
        
    }
}

    
module.exports ={
    usersGet,
    userPost,
    userDelete,
    userPut
    
}