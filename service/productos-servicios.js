//GET
const listaProductos = () => {
    fetch("http://localhost:3000/producto")
        .then(respuesta => respuesta.json.json())
        .catch(error => console.log(error))
}

//POST
const crearProductos = (imageURL, categoria, name, price, descripción) => {
    fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imageURL,
            categoria,
            price,
            name
        })
    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body;
        }

    }) throw new Error("No se pudo crear producto");

}

export const productoServicios = {
    listaProductos,
    crearProductos
}