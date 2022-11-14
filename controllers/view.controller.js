
const index = (req, res) =>{
    console.log(__dirname)
    res.sendFile(__dirname+'/../views/index.html');
}

const agregar = (req, res) =>{
    res.sendFile(__dirname+'/../views/agregar.html');
}




module.exports = {
    index,
    agregar
};
