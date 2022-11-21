/**
 * Clase encargada de generar alertas y manipular el dom en la vista Agregar
 */

class domFormUser {
  constructor() {

  }

  /**
   * Muestra la alerta cuando se agrega un usuario
   */
  agregarUsuario = () => {

    Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
      text: 'El usuario ha sido registrado',

    })

  }

  /**
   * Se utiliza cuando la respuesta del json es 400, dibujando en el dom los errores
   * @param {*} resJson 
   */
  alertarErrores = (resJson) => {
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
}




