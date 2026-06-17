const API_URL = "http://localhost:8080/api/pedidos";

export async function listarPedidos() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function obtenerPedido(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export async function crearPedido(dto) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dto)
    });

    return response.json();
}

export async function agregarProducto(pedidoId, productos) {
    const response = await fetch(`${API_URL}/${pedidoId}/productos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productos)
    });

    return response.json();
}

export async function eliminarProducto(pedidoId, productoId) {
    const response = await fetch(
        `${API_URL}/${pedidoId}/productos/${productoId}`,
        {
            method: "DELETE"
        }
    );

    return response.json();
}

export async function cambiarEstado(pedidoId, estado) {
    const response = await fetch(
        `${API_URL}/${pedidoId}/estado?estado=${estado}`,
        {
            method: "PATCH"
        }
    );

    return response.json();
}