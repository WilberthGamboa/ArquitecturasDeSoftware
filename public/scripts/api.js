

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
  
  deleteApi= async(req) =>{

    try {
      const config = {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
         // body: JSON.stringify(req)
      }
      const response = await fetch(`http://localhost:3000/api/usuarios/${req}`, config)
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

}





