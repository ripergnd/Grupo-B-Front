const API_URL = "http://localhost:8080/api/productos";

export async function ListarProductos(){
    const response = await fetch(API_URL);
    return response.json();
}
export async function CrearProductos(producto) {
    const response = await fetch(API_URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(producto)
    });
    return response.json();
}