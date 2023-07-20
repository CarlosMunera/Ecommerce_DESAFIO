//Get
const generarListaCompletaCards = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

//POST
const registrarProducto = (name, imageURL, price, category, description) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ name, imageURL, price, category, description, id: uuid.v4() }),
    });
};


export const clientServices = {
    generarListaCompletaCards,
    registrarProducto,
};