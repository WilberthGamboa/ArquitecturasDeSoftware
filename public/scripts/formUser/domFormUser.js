/**
 * Clase encargada de generar alertas y manipular el dom en la vista Agregar.
 */

class DomFormUser {

  /**
   * Constructor de la clase
   * @constructor
   */
  constructor() {

  }

  /**
   * Muestra una alerta cuando se agrega un usuario.
   * @returns {void} 
   */
  alertAgregarUsuario() {

    Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
      text: 'El usuario ha sido registrado',

    })

  }

  /**
   * Se utiliza cuando la respuesta del json es 400, dibujando en el dom los errores.
   * @param {Promise} resJson Promesa con los errores almacenados en un Json.
   * @returns {void}
   */
  alertarErrores(resJson) { 
    resJson.then(json => {
      const arrayErrors = json['errors'];

      const divNombre = document.querySelector('#divNombre');
      const divNumero = document.querySelector('#divNumero');

      if (divNombre.hasChildNodes) {
        while (divNombre.hasChildNodes()) {
          divNombre.removeChild(divNombre.firstChild);
        }

      }

      if (divNumero.hasChildNodes) {
        while (divNumero.hasChildNodes()) {
          divNumero.removeChild(divNumero.firstChild);
        }

      }
      arrayErrors.map(element => {
        const p = document.createElement('P');

        p.innerHTML = element['msg'];
        p.classList = "flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-100 bg-red-700 border border-red-700";


        if (element['param'] == 'nombre') {

          divNombre.appendChild(p);

        }

        if (element['param'] == 'numero') {

          divNumero.appendChild(p);

        }

      });
    })

  }

  /**
 * Método que obtiene los valores del formulario
 * @returns {UserRequest} retorna el objeto para realizar una solicitud
 */
  obtenerValoresForm() {
    const divNombre = document.querySelector('#divNombre');
      const divNumero = document.querySelector('#divNumero');

      if (divNombre.hasChildNodes) {
        while (divNombre.hasChildNodes()) {
          divNombre.removeChild(divNombre.firstChild);
        }

      }

      if (divNumero.hasChildNodes) {
        while (divNumero.hasChildNodes()) {
          divNumero.removeChild(divNumero.firstChild);
        }

      }
    const btnsInputNombre = document.querySelector('#nombre');
    const btnsInputNumero = document.querySelector('#numero');
   
    const userRequest = new UserRequest(btnsInputNombre.value,btnsInputNumero.value);
 
    return userRequest;
  }

  /**
   * Realiza el llamado a la Api así como al manejadorSolicitudes()
   * @param {UserRequest} userRequest Solicitud a enviar
   * @returns {void}
   */

  async agregarUsuario  (userRequest)  {
    const api = new Api();
    const requestFormUser = new RequestFormUser();
    const res = api.postApi(userRequest);
    requestFormUser.manejadorSolicitudes(res);
  
  }

}






