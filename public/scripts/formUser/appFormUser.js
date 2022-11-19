document.addEventListener('DOMContentLoaded', function () {
    
     desactivarEventoSubmit();

});

const desactivarEventoSubmit = () =>{
    const btnSubmit = document.querySelector('#btnSubmit');
    btnSubmit.addEventListener('click', function(e)  {
        e.preventDefault();
        obtenerValoresForm();
    });
}

const obtenerValoresForm = () =>{
    const btnsInputNombre= document.querySelector('#nombre');
        const btnsInputNumero= document.querySelector('#numero');
        const req = {
            "nombre": btnsInputNombre.value,
            "numero":btnsInputNumero.value
        }
        const api = new Api();
        const res = api.postApi(req);
        manejadorSolicitudes(res);

}











