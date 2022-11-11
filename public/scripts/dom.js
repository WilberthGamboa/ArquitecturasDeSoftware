const json = consultarApi();

json.then(monedas =>{
   const main = document.querySelector("#main");
    


    monedas.usuarios.forEach(element => {
        main.innerHTML=`${main.innerHTML} ${element.id}`
        main.innerHTML=`${main.innerHTML} ${element.nombre}`
        main.innerHTML=`${main.innerHTML} ${element.numero} </br>`
    });


  
   /*
   monedas.forEach(element => {

    main.innerHTML=`${element}`;

    
   });
   */
   
});