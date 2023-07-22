import { productoServicios } from "../servicios/clientService-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoServicios.crearProductos(url, categoria, nombre, precio, descripcion)
        .then(respuesta => {
            window.location.href = "../index.html";
            console.log(respuesta)
        }).catch(error => {
            console.log(error);
        })
});