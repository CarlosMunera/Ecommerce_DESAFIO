import { clientServices } from "../service/client-service.js";



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

const listaCards = document.querySelector("[data-cards]");

clientServices.generarListaCompletaCards()
    .then((data) => {
        data.forEach(producto => {
            const nuevaCard = crearNuevaCard(producto.imageURL, producto.name, producto.price);
            listaCards.appendChild(nuevaCard);
        });
    }).catch((error) => alert("Ocurrió un error con api"));