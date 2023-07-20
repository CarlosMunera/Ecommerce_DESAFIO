const nuevoProducto = (name, imageURL, price, id) => {
    const card = document.createElement("div")
    const contenido = `
    <div class="galeria__lista_card_imagen">
        <img src="${imageURL}" alt="foto producto">
    </div>
    <div class="galeria__lista_card_texto">
         <div class="galeria__lista_card_texto_prodnombre">"${name}"</div>
         <div class="galeria__lista_card_texto_prodprecio">$${price}</div>
        <a class="galeria__lista_card_texto_prodver" href="producto.html?${id}">Ver producto</a>
    </div>
    `


    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
}

const productos = document.querySelector(".galeria__lista_cards");

/*
<div class="galeria__lista_card">
    
</div>
*/