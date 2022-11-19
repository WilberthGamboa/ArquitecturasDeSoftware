class domFormUser {
  constructor() {

  }
  agregarUsuario = () => {

    Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
      text: 'El usuario ha sido registrado',

    })

  }


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




