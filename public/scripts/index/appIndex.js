/**
 * Inicia los scripts correspondientes a la vista index
 * @returns {void}
 */
const appIndex = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const api = new Api();
    const domIndex = new DomIndex();
    const res = api.getApi();
    domIndex.listarUsuarios(res);
    domIndex.inicializarEliminacionyEdicionUsuario();
    domIndex.eventoBtnAnterior();
    domIndex.eventoBtnSiguiente();
    domIndex.eventoBtnBuscar();
    domIndex.eliminarConCheckBox();
    domIndex.marcarCheckBox();
  });
};

appIndex();
