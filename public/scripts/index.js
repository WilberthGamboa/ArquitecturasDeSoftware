const consultarApi = async () =>{
 
    const url = `http://localhost:3000/api/usuarios`;
      //const url = 'https://api.coingecko.com/api/v3/search?query=';
      
     try {
      const  respuesta =  await fetch(`${url}`);
  
      if (respuesta.status==200) {
          const json = await respuesta.json();
          return json;
    
       // return json;

         
      } 
     } catch (error) {
      
     }

     
  
  }

  consultarApi();