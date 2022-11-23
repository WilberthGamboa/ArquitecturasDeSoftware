

/**
 * Inicia los scripts correspondientes a la vista index
 * @returns {void}
 */
const appIndex = () =>{
  document.addEventListener('DOMContentLoaded', function () {
    const domIndex = new DomIndex();
    domIndex.listarUsuariosDom();
    domIndex.eliminarUsuarioDom();

    // TODO REFACTORIZAR
   

   
    

  })
  
}

const domIndex = new DomIndex();
const btnBuscar = document.querySelector('#buscarNombre');
const btnSiguiente = document.querySelector('#btnSiguiente');
const btnAnterior = document.querySelector('#btnAnterior');
const {
  host, hostname, href, origin, pathname, port, protocol, search
} = window.location
btnBuscar.addEventListener('click', (e) =>{
  const textoBuscar = document.querySelector('#textoBuscar');
  //console.log(textoBuscar.value);
  history.pushState(null,'prueba','/?busqueda='+textoBuscar.value)
  //console.log(search)
  domIndex.listarUsuariosDom('/?busqueda='+textoBuscar.value);


})

let x = 0;

btnSiguiente.addEventListener('click',(e)=>{
  x=x+1;
  domIndex.listarUsuariosDom('/?busqueda='+textoBuscar.value+"&&desde="+x);
})

btnAnterior.addEventListener('click',(e)=>{
  x=x-1;
  domIndex.listarUsuariosDom('/?busqueda='+textoBuscar.value+"&&desde="+x);
})




appIndex();
