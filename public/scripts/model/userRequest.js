/**
 * UserRequest
 *@typedef {Object} UserRequest 
 *@property {String} nombre
  @property {number} numero
 * 
 * 
 */
/**
 * Modelo UserRequest
 * 
 */
class UserRequest{
    /**
     * @param {string} nombre nombre del usuario
     * @param {string} numero numero del usuario
     * 
     */
    constructor(nombre,numero){
        this.nombre=nombre;
        this.numero=numero;

    }

}