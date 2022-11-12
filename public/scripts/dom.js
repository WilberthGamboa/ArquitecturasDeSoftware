const res = consultarApi();

res.then(json =>{
   
   const tbody = document.querySelector("#tbody");
   
   const xd = json;
   

    console.log(json.usuarios)
     for (let index = 0; index < json.usuarios.length; index++) {
        const tr = document.createElement("tr") //.classList="flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";
        tr.classList="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0";
        const aux = json.usuarios[index];
       
        

            const aux2 =Object.values(aux);
            aux2.pop()
            
            aux2.forEach(element => {
                const td = document.createElement("td") 
                td.classList="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static";
                td.textContent=element;
                console.log(aux2);
                tr.appendChild(td);
                
            });
            /*
            const td = document.createElement("td") 
            td.classList="text-center border border-b block lg:table-cell relative lg:static";
            td.textContent=aux;
            console.log(aux);
            tr.appendChild(td);
            */
            
       
        tbody.appendChild(tr);
    }
   
   


  
   /*
   monedas.forEach(element => {

    main.innerHTML=`${element}`;

    
   });
   */
   
});