import { clientServices } from "../service/client-service.js";

const crearListaCards = (categoria) => {
    const lista = document.createElement("div");
    lista.classList.add("galeria__lista");
    const contenidoLista = `
        <div class="galeria__lista_encabezado">
            <h2 class="galeria__lista_encabezado_titulo">${categoria}</h2>
            <a href="../screens/productos.html" class="galeria__lista_encabezado_btn">Ver todo -></a>
        </div>
        <div class="galeria__lista_cards" data-cards>
        
        </div>
    `;
    lista.innerHTML = contenidoLista;
    return lista;
}

const crearNuevaCard = (imageURL, nombre, precio) => {
    const card = document.createElement("div");
    card.classList.add("galeria__lista_card");
    const contenidoCard =
        `
        <div class="galeria__lista_card_imagen">
            <img src="${imageURL}" alt="foto producto">
        </div>
        <div class="galeria__lista_card_texto">
            <div class="galeria__lista_card_texto_prodnombre">${nombre}</div>
            <div class="galeria__lista_card_texto_prodprecio">$${precio}</div>
            <a class="galeria__lista_card_texto_prodver" href="producto.html">Ver producto</a>
        </div>
    `;
    card.innerHTML = contenidoCard;
    return card;
};


const contenedorListas = document.querySelector("[data-contenedorlistas]");
const listaCards = document.querySelector("[data-cards]");

clientServices.generarListaCompletaCards()
    .then((data) => {
        let listaCategorias = [];
        let productosPorCategorias = [];
        let prodCategoria = [];
        data.forEach(producto => {
            productosPorCategorias.push(producto);
            listaCategorias.push(producto.category);
        });
        listaCategorias.forEach(categoria => {
            contenedorListas.appendChild(crearListaCards(categoria));

        });
    }).catch((error) => alert(`Ocurrió un error: por favor verifique disponibilidad de la API o siga las intrucciones para poder ver los productos generados dinamicamente.`));



//Validar Login
if (window.sessionStorage) {
    const estado = sessionStorage.getItem("logueado");
    if (estado === "si") {
        const btnlogin = document.querySelector(".menu-principal__login");
        btnlogin.textContent = "LogOUT";
        btnlogin.href = "../screens/logout.html";
    } else {

    }
}