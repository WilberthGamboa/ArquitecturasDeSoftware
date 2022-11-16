const manejadorSolicitudes = async(req) =>{
    req.then(lol =>{
        
        if(lol.ok){
            status200(lol.json());
        }if (lol.status==400) {
            console.log('400')
            status400(lol.json());
        } else {
            
        }
        
    })
    
    
}

const status400 = (json) =>{
    console.log(json);
    json.then(xd=>{
        console.log(xd);
        const arrayErrors =  xd['errors'];
        console.log(arrayErrors)
        
        
        const divNombre = document.querySelector('#divNombre');
        const divNumero = document.querySelector('#divNumero');
        if(divNombre.hasChildNodes){
            while (divNombre.hasChildNodes()) {
              divNombre.removeChild(divNombre.firstChild);
            }

          }

          if(divNumero.hasChildNodes){
            while (divNumero.hasChildNodes()) {
              divNumero.removeChild(divNumero.firstChild);
            }

          }
        arrayErrors.map(element => {
            const p = document.createElement('P');
       
            p.innerHTML = element['msg'];
            
            p.classList = "flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-100 bg-red-700 border border-red-700";
            
          //  console.log(element)
            
            
    
              if (element['param']=='nombre')  {
                
                divNombre.appendChild(p);
                
              }
             
            
             
    
              if (element['param']=='numero')  {
                
                divNumero.appendChild(p);
                
              }
        
        });
    })
}

const status200 = (json) =>{
    console.log(json);
    json.then(xd=>{
        const divNombre = document.querySelector('#divNombre');
        const divNumero = document.querySelector('#divNumero');
        if(divNombre.hasChildNodes){
            while (divNombre.hasChildNodes()) {
              divNombre.removeChild(divNombre.firstChild);
            }

          }

          if(divNumero.hasChildNodes){
            while (divNumero.hasChildNodes()) {
              divNumero.removeChild(divNumero.firstChild);
            }

          }
          
          Swal.fire({
            icon: 'success',
            title: 'Guardado con éxito',
            text: 'El usuario ha sido registrado',
           
          })
       
       //   location.reload();
        //flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300
    })
}


