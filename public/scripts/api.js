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

  postApi = (req) => {
    fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        "Content-type": "application/json"
      }

    })
      .then((response) => response.json())
      .then((json) =>{
       
        const arrayErrors =  json['errors'];
 
        arrayErrors.map(element => {
        const p = document.createElement('P');
        
          p.innerHTML = element['msg'];
          
          p.classList = "flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-100 bg-red-700 border border-red-700";
          
          console.log(element)
          const labelNombre = document.querySelector('#campoNombre');
          const labelNumero = document.querySelector('#campoNumero');
         
          if (element['param']=='nombre' && labelNombre.childNodes.length<6)  {
            
            labelNombre.appendChild(p);
            
          }
          console.log(labelNombre.childNodes.value);
          if (labelNombre.childNode.textContent!=undefined || labelNombre.childNode.textContent=='El nombre es obligatorio')  {
            labelNombre.removeChild(labelNombre.lastChild);
            
            
          }
        
        
          if (element['param']=='numero'  && labelNumero.childNodes.length<6) {
            
            labelNumero.appendChild(p);
            
          }




          
        });
         
        




      }

     
      
      
      
     );
  }




}





