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
  }
  /**
   * Método encargado de agregar los a la tabla del dom
   *
   * @returns {void}
   */
  listarUsuarios(res) {
    //Obtenemos la tabla donde se listastarán los usuarios;
    const tbody = document.querySelector("#tbody");

    res.then((json) => {
      /**
       * Si las respuesta te un array vacio se alerta que no existe datos para mostrar
       * De lo contrario se pega en el dom
       */
      console.log(json)
      if (json["usuarios"].length == 0) {
        const alertasSweet = new AlertasSweet();
        alertasSweet.alertarNoResultados();
        /**
         * En caso de realizar una busqueda a siguiente y no encontrar resultados
         * es necesario que el contador vaya hacia atrás para así lograr que se pueda
         * realizar la petición de nuevo 
         * 
         */
        this.pagina--;

      } else {
        // ! No tengo idea pq puse esto es aqui se adelanta
        const x = this.pagina;
        this.paginaActual.innerHTML = x + 1;
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
          //Insertamos en el mismo campo
          td1.appendChild(imgEdit);
          td1.appendChild(imgDelete);
          // Se inserta la celda en la fila y la fila en el cuerpo de la tabla
          tr.appendChild(td1);
          tbody.appendChild(tr);
        }
      }
    });

  }

  /**
   * Método encargado de eliminar el usuario de la tabla principal la vista index
   * @returns {void}
   */
  inicializarEliminacionUsuario() {
    /**
     * Obtenemos el cuerpo de la tabla y le agregamos el evento click
     * El propósito de esto es para identificar al boton delete
     *
     */
    const tablebody = document.querySelector("#tbody");
    tablebody.addEventListener("click", (e) => {
      const ejecutarEliminacion = () => {
        
        //Obtenemos la columna a eliminar y la quitamos del dom
        const trActual = e.target.parentNode.parentNode;
        //Llamamos a la api para eliminar el registro, obtenemos la lista con los registros actualizados
        // y redibujamos el dom
        const api = new Api();
        api.deleteApi(Number(trActual.childNodes[1].textContent));
        
      };

      const prueba = () =>{
        const api = new Api();
        const res = api.consultarApi(textoBuscar.value, Number(this.pagina));
       
        console.log("prueba")
            this.listarUsuarios(res);
      }

      //Identifica con el id si queremos eliminar
      if (e.target.id == "eliminar") {
        //Mostramos la alerta 
        const alertasSweet = new AlertasSweet();
        const promesaSweet = alertasSweet.alertarUsuarioEliminado();
        promesaSweet.then((resultado) => {
          if (resultado.isConfirmed) {
         //   ejecutarEliminacion();
           //Obtenemos la columna a eliminar y la quitamos del dom
        const trActual = e.target.parentNode.parentNode;
        //Llamamos a la api para eliminar el registro, obtenemos la lista con los registros actualizados
        // y redibujamos el dom
        const api = new Api();
        const res =api.deleteApi(Number(trActual.childNodes[1].textContent));
            res.then(estado=>{
              if(estado.status==200){
                console.log("estado 200")
                if (tbody.childElementCount == 1) {
                  this.pagina = this.pagina - 1;
                }
                prueba();
              }
            })
            
            
            
            
            

          }
        });
      }
    });

  }

  eventoBtnSiguiente() {
    const btnSiguiente = document.querySelector("#btnSiguiente");
    btnSiguiente.addEventListener("click", (e) => {
      //Core
      this.pagina++;
      const api = new Api();
      const res = api.consultarApi(textoBuscar.value, this.pagina);
      this.listarUsuarios(res);
    });

  }

  eventoBtnAnterior() {
    const btnAnterior = document.querySelector("#btnAnterior");
    btnAnterior.addEventListener("click", (e) => {
      if (this.pagina > 0) {
        this.paginaActual.innerHTML = this.pagina;
        this.pagina--;
        const api = new Api();
        const res = api.consultarApi(textoBuscar.value, this.pagina);
        this.listarUsuarios(res);
      }
    });

  }

  eventoBtnBuscar() {
    const domIndex = new DomIndex();
    const api = new Api();
    const btnBuscar = document.querySelector("#buscarNombre");
    btnBuscar.addEventListener("click", (e) => {
      const textoBuscar = document.querySelector("#textoBuscar");
      const res = api.consultarApi(textoBuscar.value);
      domIndex.listarUsuarios(res);
      this.pagina = 0;
      this.paginaActual.innerHTML = 1;

    });

  }

  eliminarConCheckBox() {
    const btnBorrarConCheckbox = document.querySelector("#btnBorrarConCheckbox");
    btnBorrarConCheckbox.addEventListener('click', (e) => {
      const alertasSweet = new AlertasSweet();
      const promesaSweet = alertasSweet.alertarUsuarioEliminado();

      const casillas = document.querySelectorAll("#casilla");
      let confirmarMinimo =0;

    for (let index = 0; index < casillas.length; index++) {
            if (casillas[index].checked) {
              confirmarMinimo++;


            }


          }

          if (confirmarMinimo==0) {
            Swal.fire({
              icon: 'error',
              title: 'Petición no procesada',
              text: 'No seleccionaste ningun elemento a eliminar',
            })
          }else{
            const prueba = () => {
              const api = new Api();
              const res = api.consultarApi(textoBuscar.value, Number(this.pagina));
            
              console.log("prueba")
              this.listarUsuarios(res);
          }
            promesaSweet.then((resultado => {
              if (resultado.isConfirmed) {
               
                const casillas = document.querySelectorAll("#casilla");
           
                let cantidadCheckbox = 0;
                let contadorPromesa = 0;
                const api = new Api();
                for (let index = 0; index < casillas.length; index++) {
                  if (casillas[index].checked) {
                    cantidadCheckbox++;
                    const trActual = casillas[index].parentNode.parentNode;
                    const res = api.deleteApi(Number(trActual.childNodes[1].textContent));
                    res.then(respuesta =>{
                      if (respuesta.status==200) {
                          contadorPromesa++;
                          console.log("Soy contador promesa" + contadorPromesa)
                          if (contadorPromesa==confirmarMinimo) {
                            if (tbody.childElementCount == cantidadCheckbox) {
                              this.paginaActual.innerHTML=this.pagina;
                              if (!this.pagina==0) {
                                this.pagina = this.pagina - 1;
                                
                              }
                              
                              
                              //setTimeout(prueba,100)  
                              //this.paginaActual.innerHTML=this.pagina+1;
                            }else{
                             
                                //setTimeout(prueba,650)
                            }
                            prueba();
                            
                          }
                      }
                    })
                  }
      
      
                }
                
                

      
              
      
              }
            }))
          }


     




    })
  }

  marcarCheckBox() {
    const checkBoxPadre = document.querySelector('#checkBoxPrincipal');
    checkBoxPadre.addEventListener('click', (e) => {
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
    })
  }
}
