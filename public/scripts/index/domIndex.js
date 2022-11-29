/**
 * Clase encargada de manejar el dom de la vista index
 */
class DomIndex {
  /**
   * Constructor de la clase
   * @constructor
   *
   */
  constructor() {
    this.pagina = 0;
    this.paginaActual = document.querySelector("#paginaActual");
    this.textoQueryBuscar = "";
  }
  /**
   * Método encargado de agregar los datos a la tabla del dom
   * @param {Promise} res Recibe una promesa que contiene la lista de usuarios.
   * @returns {void}
   */
  listarUsuarios(res) {
    //Obtenemos la tabla donde se listastarán los usuarios;
    const tbody = document.querySelector("#tbody");
    res.then((json) => {
      /**
       * Borra todos los nodos hijos del tbody para pegar los datos
       */
      if (tbody.hasChildNodes) {
        while (tbody.hasChildNodes()) {
          tbody.removeChild(tbody.firstChild);
        }
      }
      //Bucle encargado de pegar los datos en el dom (cantidad de filas)
      for (let index = 0; index < json.usuarios.length; index++) {
        //Creamos la fila  y creamos le agregamos estilos
        const tr = document.createElement("tr");
        tr.classList =
          "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";
        //Creamos el checkbox le agregamos clases y lo insertamos dentro dela fila
        const td = document.createElement("td");
        td.classList =
          "w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static";
        const input = document.createElement("INPUT");
        input.type = "checkbox";
        input.id = "casilla";
        td.appendChild(input);
        tr.appendChild(td);
        //Obtenemos el array  le sacamos los elementos que no pegaremos
        const usuarios = json.usuarios[index];
        const usuariosArray = Object.values(usuarios);
        usuariosArray.pop();
        usuariosArray.pop();
        //Bucle encargado de insertar todos los campos de la fila y darle sus estilos correspondientes
        usuariosArray.forEach((element) => {
          const td = document.createElement("td");
          td.classList =
            "w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static";
          td.textContent = element;
          tr.appendChild(td);
        });
        //Creamos el elemento que guardará las imagenes de editar y eliminar y sus estilos
        const td1 = document.createElement("td");
        td1.classList =
          "flex justify-center flex w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell flex-row";
        //Agremgamos el delete
        const imgDelete = document.createElement("img");
        imgDelete.classList = "w-10 inline-block ";
        imgDelete.src = "img/delete-svgrepo-com.svg";
        imgDelete.id = "eliminar";
        //Agremgamos el editar
        const imgEdit = document.createElement("img");
        imgEdit.src = "img/edit-svgrepo-com.svg";
        imgEdit.classList = "w-10 inline-block ";
        imgEdit.id = "editar";
        //Insertamos en el mismo campo
        td1.appendChild(imgEdit);
        td1.appendChild(imgDelete);
        // Se inserta la celda en la fila y la fila en el cuerpo de la tabla
        tr.appendChild(td1);
        tbody.appendChild(tr);
      }
    });
  }

  /**
   * Método encargado de eliminar el usuario de la tabla principal de la vista index
   * @returns {void}
   */
  inicializarEliminacionyEdicionUsuario() {
    /**
     * Obtenemos el cuerpo de la tabla y le agregamos el evento click
     * El propósito de esto es para identificar al botón borrar dentro
     * de la tabla
     *
     */
    const tablebody = document.querySelector("#tbody");
    tablebody.addEventListener("click", (e) => {
      //Identifica con el id si queremos eliminar
      if (e.target.id == "eliminar") {
        this.eventoEliminar(e);
      }

      if (e.target.id == "editar") {
        this.eventoEditar(e);
      }
    });
  }

  /**
   * Método encargado
   * de realizar todas las consultas necesarias para navegar
   * hacia adelante en el paginado de la tabla.
   *
   * @returns {void}
   *
   *
   */

  eventoBtnSiguiente() {
    const btnSiguiente = document.querySelector("#btnSiguiente");
    btnSiguiente.addEventListener("click", (e) => {
      this.verificarCheckBoxNavegacion();
      this.pagina++;
      /**
       * Creamos la consulta para obtener los valores siguientes de la tabla
       * procesamos la respuesta si la respuesta llega a ser 0 significa que no hay datos,
       * por lo cual se decrece la página logicamente y no se actualiza el dom, mostrando la
       * alerta correspondiente que no se encontraron más usuarios
       *
       * La utilidad del this.pagina es que al momento de mandar la consulta aumentar el valor total
       * de la página para así ir navegando en las peticiones, (cómo si fuera el índice de un arreglo)
       *
       * La página actual simplemente es la forma visual;
       *
       */
      const api = new Api();
      const res = api.getApi(this.textoQueryBuscar, this.pagina);
      res.then((respuesta) => {
        if (respuesta["usuarios"].length != 0) {
          this.listarUsuarios(res);
          this.paginaActual.innerHTML = this.pagina + 1;
        } else {
          const alertasSweet = new AlertasSweet();
          alertasSweet.alertarNoResultados(
            "No hay más resultados para mostrar :D"
          );
          this.pagina--;
        }
      });
    });
  }

  /**
   * Método encargado
   * de realizar todas las consultas necesarias para navegar
   * hacia adelante en el paginado de la tabla.
   *
   * @returns {void}
   *
   *
   */

  eventoBtnAnterior() {
    const btnAnterior = document.querySelector("#btnAnterior");
    btnAnterior.addEventListener("click", (e) => {
      this.verificarCheckBoxNavegacion();
      if (this.pagina > 0) {
        this.paginaActual.innerHTML = this.pagina;
        this.pagina--;
        const api = new Api();
        const res = api.getApi(this.textoQueryBuscar, this.pagina);
        this.listarUsuarios(res);
      }
    });
  }
  /**
   * Método encargado
   * de realizar todas las consultas necesarias para buscar
   * en la tabla.
   *
   * @returns {void}
   *
   *
   */

  eventoBtnBuscar() {
   
    const btnBuscar = document.querySelector("#buscarNombre");
    btnBuscar.addEventListener("click", (e) => {
      this.verificarCheckBoxNavegacion();
      const textoBuscar = document.querySelector("#textoBuscar");
      this.textoQueryBuscar = textoBuscar.value;
      /**
       * Procesamos la consulta, en caso de la respuesta ser nula, seteamos el query de busqueda
       * a "" para que así no se realice ninguna busqueda al darle a los botones ya que estos
       *
       * De lo contrario procesamos la consulta y reiniciamos el dom para empezar la nevegación de nuevo
       */
      const api = new Api();
      const res = api.getApi(this.textoQueryBuscar);
      res.then((resultado) => {
        if (resultado["usuarios"].length == 0) {
          this.textoQueryBuscar = "";
          const alertasSweet = new AlertasSweet();
          alertasSweet.alertarNoResultados("La búsqueda no arrojó resultados");
        } else {
          this.listarUsuarios(res);
          this.pagina = 0;
          this.paginaActual.innerHTML = 1;
        }
      });
    });
  }

  /**
   * Método encargado de procesar todo lo necesario para eliminar todas las casillas seleccionas
   * al darle click al boton eliminar
   * @return {void}
   */
  eliminarConCheckBox() {
    const btnBorrarConCheckbox = document.querySelector(
      "#btnBorrarConCheckbox"
    );
    btnBorrarConCheckbox.addEventListener("click", (e) => {
      const alertasSweet = new AlertasSweet();
      const promesaSweet = alertasSweet.alertarUsuarioEliminado();

      const casillas = document.querySelectorAll("#casilla");
      let confirmarMinimo = 0;
      //Ciclo de encontrar el número de casillas seleccionas
      // TODO: Se puede mejorar con un ciclo while que te saque del bucle cuando encuentre una
      for (let index = 0; index < casillas.length; index++) {
        if (casillas[index].checked) {
          confirmarMinimo++;
        }
      }

      if (confirmarMinimo == 0) {
        alertasSweet.alertarSolicitudNoProcesada(
          "No seleccionaste ningún elemento a eliminar"
        );
      } else {
        promesaSweet.then((resultado) => {
          if (resultado.isConfirmed) {
            /**
             *
             *
             */
            let cantidadCheckbox = 0;
            let contadorPromesa = 0;
            const casillas = document.querySelectorAll("#casilla");

            const api = new Api();
            /**
             * Bucle encargado de procesar todas las consultas, se itera por cada casilla obteniendo el id
             * y se generan peticiones de eliminar
             *
             * Se crea un contador cantidadcheckbox cargado de contar cuantos solicitudes se hicierion
             *
             *
             */
            for (let index = 0; index < casillas.length; index++) {
              if (casillas[index].checked) {
                cantidadCheckbox++;
                const trActual = casillas[index].parentNode.parentNode;
                const res = api.deleteApi(
                  Number(trActual.childNodes[1].textContent)
                );
                //Se procesa la respuesta
                //TODO se puede mejorar el código de estar parte
                res.then((respuesta) => {
                  if (respuesta.status == 200) {
                    contadorPromesa++;
                    //Si la cantidad de promesas procesadas es igual a la cantidad de casillas seleccioandas
                    if (contadorPromesa == confirmarMinimo) {
                      //Si cantidad cantillas existentes es igual al cantidad de casillas seleccionadas
                      //significa que ya no existen elementos por lo que se debe retroceder en el paginado
                      if (
                        tbody.childElementCount == cantidadCheckbox &&
                        this.pagina != 0
                      ) {
                        this.paginaActual.innerHTML = this.pagina;
                        if (!this.pagina == 0) {
                          this.pagina = this.pagina - 1;
                        }
                      }
                      this.procesoActualizarDom();
                    }
                  }
                });
              }
            }
          }
        });

        //PROBAR AQUI
      }
    });
  }

  /**
   * Método encargado de al momento de marcar o descarcar el checkbox padre
   * los demás lo hagan junto con él
   *
   * @return {void}
   */
  marcarCheckBox() {
    const checkBoxPadre = document.querySelector("#checkBoxPrincipal");
    checkBoxPadre.addEventListener("click", (e) => {
      const casillas = document.querySelectorAll("#casilla");
      if (checkBoxPadre.checked) {
        for (let index = 0; index < casillas.length; index++) {
          casillas[index].checked = true;
        }
      } else {
        for (let index = 0; index < casillas.length; index++) {
          casillas[index].checked = false;
        }
      }
    });
  }
  /**
   * Método encargado de verificar que al momento de navegar entre botones
   * la casilla padre esté desmarcada
   * @returns {void}
   */

  verificarCheckBoxNavegacion() {
    const checkBoxPadre = document.querySelector("#checkBoxPrincipal");
    if (checkBoxPadre.checked) {
      checkBoxPadre.checked = false;
    }
  }
  eventoEliminar(e){
    //Mostramos la alerta
    const alertasSweet = new AlertasSweet();
    //Recibimos la promesa de alertasSweet y la procesamos
    const promesaSweet = alertasSweet.alertarUsuarioEliminado();
    promesaSweet.then((resultado) => {
      if (resultado.isConfirmed) {
        //Subimos en el dom para obtener la fila actual y la guardamos
        const trActual = e.target.parentNode.parentNode;
        //Creamos la solicitud a la api parra borrar
        const api = new Api();
        const res = api.deleteApi(
          Number(trActual.childNodes[1].textContent)
        );
        //Procesamos el estado
        res.then((estado) => {
          if (estado.status == 200) {
            /**
             * Si en el cuerpo de la tabla queda uno y se va a eliminar
             * significa que tenemos que pedir una posición anterior
             * porque al volver a redibujar el dom nos devolverá nulo
             * ya que no existen consultas ya que se eliminó la última.
             *
             */
            if (tbody.childElementCount == 1) {
              this.paginaActual.innerHTML = this.pagina;
              this.pagina = this.pagina - 1;
            }
            this.procesoActualizarDom();
          }
        });
      }
    });
  }
  eventoEditar(e) {
    const closebutton = document.getElementById("closebutton");
    const modal = document.getElementById("modal");
    modal.classList.add("scale-100");
    closebutton.addEventListener("click", () => {
      const divNombre = document.querySelector("#divNombre");
      const divNumero = document.querySelector("#divNumero");
      modal.classList.remove("scale-100");
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
    });
    const trActual = e.target.parentNode.parentNode;
    const inputId = document.querySelector("#id");
    const inputNombre = document.querySelector("#nombre");
    const inputNumero = document.querySelector("#numero");
    inputId.value = trActual.childNodes[1].textContent;
    inputNombre.value = trActual.childNodes[2].textContent;
    inputNumero.value = trActual.childNodes[3].textContent;
    const botonGuardar = document.querySelector("#btnSubmit");
    botonGuardar.addEventListener("click", (e) => {
      e.preventDefault();

      const btnsInputId = document.querySelector("#id");
      const btnsInputNombre = document.querySelector("#nombre");
      const btnsInputNumero = document.querySelector("#numero");
      const userRequest = new UserRequest(
        btnsInputNombre.value,
        btnsInputNumero.value
      );
      const api = new Api();
      const res = api.putApi(btnsInputId.value, userRequest);

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

      // requestFormUser.manejadorSolicitudes(res);
      res.then((respuesta) => {
        if (respuesta.status == 200) {
          this.procesoActualizarDom();
          modal.classList.remove("scale-100");
        } else {
          respuesta.json().then((json) => {
            const arrayErrors = json["errors"];

            const divNombre = document.querySelector("#divNombre");
            const divNumero = document.querySelector("#divNumero");

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
            arrayErrors.map((element) => {
              const p = document.createElement("P");

              p.innerHTML = element["msg"];
              p.classList =
                "flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-100 bg-red-700 border border-red-700";

              if (element["param"] == "nombre") {
                divNombre.appendChild(p);
              }

              if (element["param"] == "numero") {
                divNumero.appendChild(p);
              }
            });
          });
        }
      });
    });
  }

  /**
   *
   * Método encargado de llamar al método consultar y llamar a listarUsuario
   * se utiliza para evitar repetir este tramo de código en los demás métodos,
   * no proporciona una funcionalidad nueva al sistema
   * @return {void}
   *
   */
  procesoActualizarDom() {
    const api = new Api();
    const res = api.getApi(this.textoQueryBuscar, Number(this.pagina));
    this.listarUsuarios(res);
  }
}
