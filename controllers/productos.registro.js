import { clientServices } from "../service/client-service.js";



const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientServices.registrarProducto(nombre, url, precio, categoria, descripcion).then(respuesta => {
        window.location.href = "../screens/productos.html";
        alert("Nuevo producto registrado");
    }).catch(err => console.log(err))
});