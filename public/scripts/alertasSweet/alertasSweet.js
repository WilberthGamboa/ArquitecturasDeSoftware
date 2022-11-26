class AlertasSweet{

    constructor(){

    }

    alertarNoResultados(){
        Swal.fire({
            title: 'Wow!',
            text: 'No hay más resultados para mostrar :D',
            imageUrl: './img/error.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }

     async alertarUsuarioEliminado (){
       
       return  Swal.fire({
            title: '¿Está seguro de eliminar este registro?',
            text: "Una vez eliminado, esta acción no se podrá deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        })
        /*
        .then((result) => {
            if (result.isConfirmed) {
                ejecutarEliminacion();
                Swal.fire(
                    'Borrado',
                    'Registro eliminado',
                    'success'

                )
                /*
                const api = new Api();
                const res = api.consultarApi();
                const domIndex = new DomIndex();
            
                domIndex.listarUsuarios(res);
                
               recargarDom();
            }
        })
             */
        
    }
    
}