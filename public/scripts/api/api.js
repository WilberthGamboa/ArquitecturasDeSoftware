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
  async getApi  (busqueda="",desde="")  {
    //const res = api.consultarApi('/?busqueda=' + textoBuscar.value + "&&desde=" + this.pagina);
    try {
      const respuesta = await fetch(`${this.url}/?busqueda=${busqueda}&&desde=${desde}`);
      if (respuesta.status == 200) {
        const json = await respuesta.json();
        return json;
      }
    } catch (error) {

    }
  }
/**
 * Realiza una petición post para almacenar los usuarios.
 * @param {UserRequest} userRequest Datos a enviar a la base de datos para su registro.
 * @returns {Promise} Devuelve una promesa con mensajes dependiendo si la tarea se logró con éxito o no.
 */
 async postApi (userRequest)  {
    try {
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRequest)
      }
      const response = await fetch(this.url, config)
    
      return response;
    } catch (error) {
      //
    }
  }
/**
 * Realiza una petición post
 * @param {String} id id del elemento a eliminar en la base de datos
 * @returns {Promise} Respuesta del servidor con la lista de usuarios
 */
 async deleteApi (id) {

    try {
      const config = {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
      }
      
      const response = await fetch(`${this.url}/${id}`, config)
      
      return response;

    } catch (error) {
      console.log(error);
    }

  }
/**
 * Clase encargada de hacer una petción put al server
 * @param {String} id  id del usuario a editar
 * @param {UserRequest} userRequest objeto con los datos del usario a editar
 * @returns {Promise} Confirma los datos editados
 */

  async putApi(id,userRequest){
    try {
      const config = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRequest)
      }
    
      const response = await fetch(`${this.url}/${id}`, config)
     
      return response;

    } catch (error) {
      console.log(error);
    }
  }

}





