

class Api {
  constructor() {

  }

  consultarApi = async () => {

    const url = `http://localhost:3000/api/usuarios`;
    //const url = 'https://api.coingecko.com/api/v3/search?query=';

    try {
      const respuesta = await fetch(`${url}`);
      if (respuesta.status == 200) {
        const json = await respuesta.json();
        return json;
      }
    } catch (error) {

    }
  }

  postApi = async(req) =>{
    try {
      const config = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(req)
      }
      const response = await fetch('http://localhost:3000/api/usuarios', config)
      //const json = await response.json()
      console.log(response);
      if (response.ok) {
          //return json
          
      } else {
          //
      }
      return response;
  } catch (error) {
          //
  }
  }
  /*
  postApi = (req) => {
    fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        "Content-type": "application/json"
      }

    })
      .then((response) => {
        console.log(response.status);
        
      })

      
      .then((json) =>{
       
        console.log(json.status)
        
        const arrayErrors =  json['errors'];
        console.log(arrayErrors)
        const arrayErrosExtraido = new Array();
        let i = 0;
        arrayErrors.map(element => {
          const p = document.createElement('P');
       
          p.innerHTML = element['msg'];
          
          p.classList = "flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-100 bg-red-700 border border-red-700";
          
        //  console.log(element)
          const divNombre = document.querySelector('#divNombre');
          const divNumero = document.querySelector('#divNumero');
        
          if(divNombre.hasChildNodes && i==0){
            while (divNombre.hasChildNodes()) {
              divNombre.removeChild(divNombre.firstChild);
            }

          }

          if (element['param']=='nombre')  {
            
            divNombre.appendChild(p);
            
          }
         
        
          if(divNumero.hasChildNodes){
            while (divNumero.hasChildNodes()) {
              divNumero.removeChild(divNumero.firstChild);
            }

          }

          if (element['param']=='numero')  {
            
            divNumero.appendChild(p);
            
          }
          i++;



          /*
        const p = document.createElement('P');
       
          p.innerHTML = element['msg'];
          
          p.classList = "flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-100 bg-red-700 border border-red-700";
          
        //  console.log(element)
          const divNombre = document.querySelector('#divNombre');
          const divNumero = document.querySelector('#divNumero');

         // console.log(divNombre.hasChildNodes());
          
            while (divNombre.hasChildNodes()) {
              divNombre.removeChild(divNombre.firstChild);
            }

            while (divNumero.hasChildNodes()) {
              divNumero.removeChild(divNumero.firstChild);
            }
        
          
         
          if (element['param']=='nombre')  {
            
            divNombre.appendChild(p);
            
          }
         
        
        
          if (element['param']=='numero') {
            
            divNumero.appendChild(p);
            
          }
         



          
        });
         
        




      }

     
      
      
      
     );
   
  }

   */


}





