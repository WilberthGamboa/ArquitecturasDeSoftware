

/**
 * Inicia los scripts correspondientes a la vista index
 * @returns {void}
 */
const appIndex = () =>{
  document.addEventListener('DOMContentLoaded', function () {
    const domIndex = new DomIndex();
    domIndex.listarUsuariosDom();
    domIndex.eliminarUsuarioDom();
  })
  
}

appIndex();
