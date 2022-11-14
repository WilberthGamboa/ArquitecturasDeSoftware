

document.addEventListener('DOMContentLoaded', function () {

    
    const btnSubmit = document.querySelector('#btnSubmit');
    

   
    btnSubmit.addEventListener('click', function(e)  {
        e.preventDefault();
        const btnsInputNombre= document.querySelector('#nombre');
        const btnsInputNumero= document.querySelector('#numero');
        console.log(Number(btnsInputNumero.value));
        console.log(btnsInputNombre.value)
        const req = {
            "nombre": btnsInputNombre.value,
            "numero":btnsInputNumero.value
        }
        fetch('http://localhost:3000/api/usuarios',{
            method:'POST',
            body: JSON.stringify(req),
            headers:{
                "Content-type":"application/json"
            }

        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        

    })

});









