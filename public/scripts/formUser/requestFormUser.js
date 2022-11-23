/**
 * Clase encargada de manejar los status.
 * 
 */

class RequestFormUser {

    /**
     * Constructor de la clase
     * @constructor
     */
    constructor() {

    }
    /**
     * Método encargado de dependiendo del status del servidor llamar a una acción distinta del DOM.
     * 
     * @param {Promise} promise promesa con el status de la respuesta dada por el servidor. 
     * @return {void}   
     */
    async manejadorSolicitudes(promise) {
        promise.then(res => {
            const domformUser = new DomFormUser();
            if (res.ok) {
                domformUser.alertAgregarUsuario();
            } else if (res.status == 400) {
                domformUser.alertarErrores(res.json());
            }

        });

    }
}