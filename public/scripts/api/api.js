
class Api {
  constructor() {
    this.url = "http://localhost:3000/api/usuarios";
  }
  consultarApi = async () => {
    
    try {
      const respuesta = await fetch(`${this.url}`);
      if (respuesta.status == 200) {
        const json = await respuesta.json();
        return json;
      }
    } catch (error) {

    }
  }

  postApi = async (req) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
      }
      const response = await fetch(this.url, config)
    
      return response;
    } catch (error) {
      //
    }
  }

  deleteApi = async (req) => {

    try {
      const config = {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
      }
      const response = await fetch(`${this.url} ${req}`, config)
      return response;

    } catch (error) {
      console.log(error);
    }

  }

}





