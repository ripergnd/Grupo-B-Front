const API_URL = "http://localhost:8080/api/pedidos";

export async function listarPedidos(estado) {
  const url = estado ? `${API_URL}?estado=${estado}` : API_URL;

  const response = await fetch(url);
  return response.json();
}

export async function obtenerPedido(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function obtenerPedidoPorCodigo(codigo) {
  const response = await fetch(`${API_URL}/codigo/${codigo}`);
  return response.json();
}

export async function crearPedido(dto) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  return response.json();
}

export async function agregarProducto(pedidoId, productos) {
  const response = await fetch(`${API_URL}/${pedidoId}/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productos),
  });
  const data = await response.json();
  if(!response.ok){
    throw new Error(data.error || "No se pudo añadir el producto");
  }

  return data;
}

export async function eliminarProducto(pedidoId, productoId) {
  const response = await fetch(
    `${API_URL}/${pedidoId}/productos/${productoId}`,
    {
      method: "DELETE",
    },
  );

  return response.json();
}

export async function cambiarEstado(pedidoId, estado) {
  const response = await fetch(
    `${API_URL}/${pedidoId}/estado?estado=${estado}`,
    {
      method: "PATCH",
    },
  );
  const data = await response.json();
  if(!response.ok) {
    throw new Error(data.error || "No se pudo finalizar el pedido")
  }

  return data;
}
