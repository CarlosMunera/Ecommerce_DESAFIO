import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    clientServices.generarListaUsuarios()
        .then((data) => {
            const mail = document.querySelector("[data-mail]").value;
            const password = document.querySelector("[data-password]").value;
            let usuarioExistente = false;
            data.forEach((usuario) => {
                if (usuario.mail === mail && usuario.password === password) {
                    usuarioExistente = true;
                }
            });
            if (usuarioExistente) {
                sessionStorage.setItem('logueado', "si");
                console.log(sessionStorage);
                window.location.href = "productos.html";
            } else {
                alert("Usuario y/o contraseña incorrecta");
            }
        }).catch((err) => { "Ocurrió un error: por favor verifique disponibilidad de la API o siga las intrucciones para realizar inicio de sesión" })
});