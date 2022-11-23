
/**
 * Función principal del formUser
 * @returns {void}
 * 
 */
const appFormUser = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const btnSubmit = document.querySelector('#btnSubmit');
        btnSubmit.addEventListener('click', function (e) {
            e.preventDefault();
            const domFormUser = new DomFormUser();
            const req = domFormUser.obtenerValoresForm();
            domFormUser.agregarUsuario(req);
        });
    });

}
appFormUser();














