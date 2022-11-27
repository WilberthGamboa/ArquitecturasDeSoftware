/**
 * Clase encargada de manegar las alertas proporciodas por SweetAlert2
 *
 *
 */

class AlertasSweet {
  /**
   * Constructor de la clase
   * @constructor
   *
   */
  constructor() {}
  /**
   * Método que muestra una alerta graciosa cuando no hay resultados para la consulta que se quiere realizar
   * @param {String} query Texto que se proporciona dependiendo del texto que se quiera mostrar al usuario
   * @returns {void}
   */
  alertarNoResultados(query) {
    Swal.fire({
      title: "Wow!",
      text: query,
      imageUrl: "./img/error.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }

  /**Método encargado de  alertar si realmente se quiere eliminar el registro
   *
   * @returns {Promise} retorna una promesa la cual se encarga de confirma la eliminación
   *
   */
  async alertarUsuarioEliminado() {
    return Swal.fire({
      title: "¿Está seguro de eliminar este registro?",
      text: "Una vez eliminado, esta acción no se podrá deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    });
  }

  /**
   * Método encargado de mostrar una alerta cuando la petición no se puede procesar
   * @param {String} query texto personalizado dependiendo del origen de alerta
   */

  alertarSolicitudNoProcesada(query) {
    Swal.fire({
      icon: "error",
      title: "Petición no procesada",
      text: query,
    });
  }
}
