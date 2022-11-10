const User = require('../models/user.model')

const usersGet = async (req,res) =>{
   
    const usuarios = await User.findAll();
    console.log(usuarios);
    res.json(usuarios);

}



module.exports ={
    usersGet
}