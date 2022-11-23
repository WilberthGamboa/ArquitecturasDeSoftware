

/**
 * Inicia los scripts correspondientes a la vista index
 * @returns {void}
 */
const appIndex = () =>{
  document.addEventListener('DOMContentLoaded', function () {
    const api = new Api();
    const domIndex = new DomIndex();
    const res = api.consultarApi();
    domIndex.listarUsuariosDom(res);
    domIndex.eliminarUsuarioDom();
    domIndex.eventoBtnAnterior();
    domIndex.eventoBtnSiguiente();
    domIndex.eventoBtnBuscar();
  })
  
}

appIndex();
