const path=require("path")
const index = (req, res) =>{
   
    res.sendFile(__dirname +'/../views/index.html');
}

const agregar = (req, res) =>{
    res.sendFile(path.join(__dirname + '/../views/agregar.html'));
}




module.exports = {
    index,
    agregar
};
