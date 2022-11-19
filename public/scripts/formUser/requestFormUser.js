const manejadorSolicitudes = async (promise) => {
    promise.then(res => {
      const domformUser = new domFormUser();
        if (res.ok) {
           domformUser.agregarUsuario();
        } else if (res.status == 400) {
            domformUser.alertarErrores(res.json());
        } 

    });

}