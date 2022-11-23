/**
 * Clase encargada de llamar a la ApiRest 
 * 
 */
class Api {
/** Almacena la dirección de la api dentro del constructor
 * @constructor
 */
  constructor() {
    this.url = "http://localhost:3000/api/usuarios";
  }
  /**
   * Realiza una petición get para obtener los usuarios
   * 
   * @returns {Promise} Promesa con los usuarios de la base de datos
   * 
   */
  async consultarApi  (busqueda="",desde="")  {
    
    try {
      console.log(`${this.url}`+busqueda+desde);
      const respuesta = await fetch(`${this.url}`+busqueda+desde);
      if (respuesta.status == 200) {
        const json = await respuesta.json();
        return json;
      }
    } catch (error) {

    }
  }
/**
 * Realiza una petición post para almacenar los usuarios.
 * @param {Object} req Datos a enviar a la base de datos para su registro.
 * @returns {Promise} Devuelve una promesa con mensajes dependiendo si la tarea se logró con éxito o no.
 */
 async postApi (req)  {
    try {
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
      }
      const response = await fetch(this.url, config)
    
      return response;
    } catch (error) {
      //
    }
  }
/**
 * Realiza una petición post
 * @param {String} req id del elemento a eliminar en la base de datos
 * @returns {Promise} Respuesta del servidor con la lista de usuarios
 */
 async deleteApi () {

    try {
      const config = {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
      }
      const response = await fetch(`${this.url} ${req}`, config)
      return response;

    } catch (error) {
      console.log(error);
    }

  }

}





