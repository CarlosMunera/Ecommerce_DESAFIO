//
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



// ** CONEXION CON EL METODO XMLhttpRequest() **
const http = new XMLHttpRequest();

//Abrir http (método,url)
http.open("GET", " http://localhost:3000/producto");

//Envio de peticion a la URL
http.send();

//Una vez que se recibe una respuesta
http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach(producto => {
        const nuevaCard = crearNuevaCard(producto.imageURL, producto.name, producto.price);
        listaCards.appendChild(nuevaCard);
    });
}



/*
<div class="galeria__lista_card">
                        <div class="galeria__lista_card_imagen">
                            <img src="img/starwars1.png" alt="foto producto">
                        </div>
                        <div class="galeria__lista_card_texto">
                            <div class="galeria__lista_card_texto_prodnombre">Producto XYZ</div>
                            <div class="galeria__lista_card_texto_prodprecio">$60,00</div>
                            <a class="galeria__lista_card_texto_prodver" href="">Ver producto</a>
                        </div>
                    </div>
*/