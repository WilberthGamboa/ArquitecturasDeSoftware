

document.addEventListener('DOMContentLoaded', function () {
    
     main();

});

/**
 * Función principal del formUser
 *
 * 
 */
const main = () =>{
    const btnSubmit = document.querySelector('#btnSubmit');
    btnSubmit.addEventListener('click', function(e)  {
        e.preventDefault();
       const req= obtenerValoresForm();
       agregarUsuario(req);
    });
}

/**
 * 
 * @returns {Object} retorna el objeto para realizar una solicitud
 */
const obtenerValoresForm = () =>{
    const btnsInputNombre= document.querySelector('#nombre');
        const btnsInputNumero= document.querySelector('#numero');
        /**
         * Objeto request
         * @type{{nombre:string,numero:string}}
         * 
         */
        const req = {
            nombre: btnsInputNombre.value,
            numero:btnsInputNumero.value
        }
        return req;
}


/**
 * Envia el usuario a la api
 * @param {Object} req Solicitud a enviar
 */

const agregarUsuario = (req) =>{
    const api = new Api();
    const res = api.postApi(req);
    manejadorSolicitudes(res);
}











