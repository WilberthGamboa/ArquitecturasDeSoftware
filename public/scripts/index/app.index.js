document.addEventListener('DOMContentLoaded', function () {
    const api = new Api();
    const res = api.consultarApi();
    const table = document.querySelector("#tbody");
    table.addEventListener('click',(e)=>{
        
        console.log(e.target.parentNode)
        if (e.target.id=="eliminar") {
            const trActual = e.target.parentNode.parentNode;
        console.log(trActual);
        console.log(trActual.firstChild.textContent);
        Swal.fire({
            title: '¿Está seguro de eliminar este registro?',
            text: "Una vez eliminado, esta acción no se podrá deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                trActual.remove();
                api.deleteApi(trActual.firstChild.textContent);
              Swal.fire(
                'Borrado',
                'Registro eliminado',
                'success'
               
              )
            }
          })
            
        }
      
        
       
       console.log( e.target.dataset)
    })

    res.then(json => {

        const tbody = document.querySelector("#tbody");

        for (let index = 0; index < json.usuarios.length; index++) {
            const tr = document.createElement("tr")
            tr.classList = "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";
            const usuarios = json.usuarios[index];
            const usuariosArray = Object.values(usuarios);
            usuariosArray.pop()
            usuariosArray.pop()
            usuariosArray.forEach(element => {
                const td = document.createElement("td")
                td.classList = "w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static";
                td.textContent = element;
                tr.appendChild(td);
                
            });
            const td = document.createElement("td");
            td.classList = "flex justify-center flex w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell flex-row   ";
            const imgDelete = document.createElement("img");
            imgDelete.classList="w-10 inline-block ";
            imgDelete.src="img/delete-svgrepo-com.svg";
            imgDelete.id="eliminar";
            const imgEdit = document.createElement("img");
            imgEdit.src="img/edit-svgrepo-com.svg"
            imgEdit.classList="w-10 inline-block "
           
            td.appendChild(imgEdit);
            td.appendChild(imgDelete);

            tr.appendChild(td);
            tbody.appendChild(tr);
        }

    });



})


