const API_URL = "http://localhost:8080/api/productos";

export async function listarProductos(){
    const response = await fetch(API_URL);
    return response.json();
}
export async function crearProducto(producto) {
    const response = await fetch(API_URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(producto)
    });
    return response.json();
}
export async function actualizarProducto(id, dto){
    const response = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dto)
    });
    return response.json();
}
export async function desactivarProducto(id) {
    const response = await fetch(`${API_URL}/${id}/desactivar`, {
        method: "PATCH"
    });

    return response.text();
}
export async function modificarStock(id, stock) {
    const response = await fetch(`${API_URL}/${id}/stock`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ stock })
    });

    return response.json();
}
export async function obtenerMasVendidos() {
    const response = await fetch(`${API_URL}/mas-vendidos`);


    return response.json();
}