document.addEventListener('DOMContentLoaded', function () {
    const api = new Api();
    const res = api.consultarApi();

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

            tbody.appendChild(tr);
        }

    });



})


