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
        this.paginaActual = document.querySelector('#paginaActual');

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
        tablebody.addEventListener('click', (e) => {

            function ejecutarEliminacion() {
                //Obtenemos la columna a eliminar y la quitamos del dom
                const trActual = e.target.parentNode.parentNode;
                console.log("arriba tr actual")
                console.log(trActual);
                //Llamamos a la api para eliminar el registro, obtenemos la lista con los registros actualizados
                // y redibujamos el dom
                const api = new Api();
                console.log(Number(trActual.firstChild.textContent))
                api.deleteApi(Number(trActual.firstChild.textContent));
            }

            function recargarDom() {
                const api = new Api();
                const res = api.consultarApi();
                const domIndex = new DomIndex();
                domIndex.listarUsuarios(res);
            }

            //Identifica con el id si queremos eliminar
            if (e.target.id == "eliminar") {
                const alertasSweet = new AlertasSweet();
                alertasSweet.alertarUsuarioEliminado(ejecutarEliminacion, recargarDom);

            }

            /**
             * 
             * Funcion que creada para hacer un callback y ejectuarla dentro de la alerta
             * al monento de confirmar la eliminacion
             * 
             */
            const pagina = this.pagina;



        });



    }

    /**
     * Método encargado de agregar los a la tabla del dom 
     *
     * @returns {void}
     */
    listarUsuarios(res) {

        const tbody = document.querySelector("#tbody");
       
        res.then(json => {
            console.log("busqueda")
            console.log(json['usuarios'].length)
            console.log("antes")
            if (json['usuarios'].length == 0) {
                const alertasSweet = new AlertasSweet();
                alertasSweet.alertarNoResultados();
                // this.paginaActual.innerHTML = this.pagina;

                this.pagina--;
           
                
            }else{
                if (tbody.hasChildNodes) {

                    while (tbody.hasChildNodes()) {
        
                        tbody.removeChild(tbody.firstChild);
                    }
        
                }
                this.paginaActual.innerHTML = this.pagina + 1;
                console.log(json['usuarios']);
                for (let index = 0; index < json.usuarios.length; index++) {
                    const tr = document.createElement("tr")
                    tr.classList = "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";
    
                    const usuarios = json.usuarios[index];
                    const usuariosArray = Object.values(usuarios);
    
                    usuariosArray.pop()
                    usuariosArray.pop()
                    const td2 = document.createElement("tr");
                    td2.classList = "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";
                    const input = document.createElement("INPUT");
                    input.type="checkbox";
                    td2.appendChild(input)
                    tr.appendChild(td2);
                    usuariosArray.forEach(element => {
                        const td = document.createElement("td")
                        td.classList = "w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static";
                        td.textContent = element;
                        tr.appendChild(td);
    
                    });
                    const td = document.createElement("td");
                    td.classList = "flex justify-center flex w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell flex-row   ";
                    const imgDelete = document.createElement("img");
                    imgDelete.classList = "w-10 inline-block ";
                    imgDelete.src = "img/delete-svgrepo-com.svg";
                    imgDelete.id = "eliminar";
                    const imgEdit = document.createElement("img");
                    imgEdit.src = "img/edit-svgrepo-com.svg"
                    imgEdit.classList = "w-10 inline-block "
    
                    td.appendChild(imgEdit);
                    td.appendChild(imgDelete);
    
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
            }
          

        });

    }

    listarUsuariosBuscador(res) {

        const tbody = document.querySelector("#tbody");
       
        res.then(json => {
            console.log("busqueda")
            console.log(json['usuarios'].length)
            console.log("antes")
            if (json['usuarios'].length == 0) {
                const alertasSweet = new AlertasSweet();
                alertasSweet.alertarNoResultados();
                textoBuscar.value="";
                // this.paginaActual.innerHTML = this.pagina;

        
           
                
            }else{
                if (tbody.hasChildNodes) {

                    while (tbody.hasChildNodes()) {
        
                        tbody.removeChild(tbody.firstChild);
                    }
        
                }
                this.paginaActual.innerHTML = this.pagina + 1;
                console.log(json['usuarios']);
                for (let index = 0; index < json.usuarios.length; index++) {
                    const tr = document.createElement("tr");
                    tr.classList = "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";
                    
                    const usuarios = json.usuarios[index];
                    const usuariosArray = Object.values(usuarios);
    
                    usuariosArray.pop()
                    usuariosArray.pop()
                    const td2 = document.createElement("tr");
                    td2.classList = "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";
                    const input = document.createElement("INPUT");
                    input.type="checkbox";
                    td2.appendChild(input)
                    tr.appendChild(td2);
                    usuariosArray.forEach(element => {
                        const td = document.createElement("td")
                        td.classList = "w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static";
                        td.textContent = element;
                        tr.appendChild(td);
    
                    });
                    const td = document.createElement("td");
                    td.classList = "flex justify-center flex w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell flex-row   ";
                    const imgDelete = document.createElement("img");
                    imgDelete.classList = "w-10 inline-block ";
                    imgDelete.src = "img/delete-svgrepo-com.svg";
                    imgDelete.id = "eliminar";
                    const imgEdit = document.createElement("img");
                    imgEdit.src = "img/edit-svgrepo-com.svg"
                    imgEdit.classList = "w-10 inline-block "
                    
                    td.appendChild(imgEdit);
                    td.appendChild(imgDelete);
    
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
            }
          

        });

    }

    eventoBtnSiguiente() {
        const btnSiguiente = document.querySelector('#btnSiguiente');
        btnSiguiente.addEventListener('click', (e) => {
            //Core 
            this.pagina++;

            const api = new Api();
            const res = api.consultarApi(textoBuscar.value, this.pagina);
            this.listarUsuarios(res);

        })

    }

    eventoBtnAnterior() {
        const btnAnterior = document.querySelector('#btnAnterior');
        btnAnterior.addEventListener('click', (e) => {
            if (this.pagina > 0) {
                //core 
                this.paginaActual.innerHTML = this.pagina;
                this.pagina--;

                const api = new Api();
                console.log(this.pagina);
                const res = api.consultarApi(textoBuscar.value, this.pagina);
                this.listarUsuarios(res);

            }

        })

    }

    eventoBtnBuscar() {
        const domIndex = new DomIndex();
        const api = new Api();
        const btnBuscar = document.querySelector('#buscarNombre');
        btnBuscar.addEventListener('click', (e) => {
            const textoBuscar = document.querySelector('#textoBuscar');
            const res = api.consultarApi(textoBuscar.value);
            domIndex.listarUsuariosBuscador(res);
        
            this.paginaActual.innerHTML = 1;
        })

    }
}





