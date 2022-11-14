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
      .then((json) => console.log(json));
  }




}





