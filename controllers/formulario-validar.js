const formularioContacto = document.querySelector('.contacto__formulario');
const error = document.querySelector('#error');
const nombre = document.querySelector('#nombre');
const mensaje = document.querySelector('#mensaje');


formularioContacto.addEventListener('submit', (event) => {
    event.preventDefault();

    let mensajesError = "";
    let mostarMensaje = false;

    if (nombre.value === null || nombre.length < 0) {
        mensajesError += '*Nombre no válido<br>';
        mostarMensaje = true;
    }

    if (mensaje.value === null || mensaje.value === '') {
        mensajesError += '*Mensaje no válido<br>';
        mostarMensaje = true;
    }

    if (mostarMensaje) {
        error.innerHTML = mensajesError;
        error.style.padding = "0.5rem 0";
        error.style.color = 'red';
    } else {
        nombre.value = ""
        mensaje.value = ""
        error.innerHTML = '¡ El Mensaje ha sido enviado !';
        error.style.color = "green";
    }

});