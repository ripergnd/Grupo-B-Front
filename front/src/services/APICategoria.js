const API_URL = "http://localhost:8080/api/categorias";

export async function listarCategorias(){
    const response = await fetch(API_URL);
    return response.json();
}
export async function crearCategoria(categoria) {
    const response = await fetch(API_URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(categoria)
    });
    return response.json();
}
export async function actualizarProducto(id, categoria){
    const response = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(categoria)
    });
    return response.json();
}