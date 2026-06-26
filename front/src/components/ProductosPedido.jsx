import {
  agregarProducto,
  eliminarProducto,
  cambiarEstado,
} from "../services/APIPedido";
function ProductosPedido({ pedido, setPedido }) {
  const aumentarCantidad = async (productoId) => {
    try {
      const pedidoActualizado = await agregarProducto(pedido.id, [
        {
          productoId,
          cantidad: 1,
        },
      ]);
      setPedido(pedidoActualizado);
    } catch (error) {
      alert(error.message);
    }
  };

  const disminuirCantidad = async (productoId) => {
    try {
      const pedidoActualizado = await agregarProducto(pedido.id, [
        {
          productoId,
          cantidad: -1,
        },
      ]);
      setPedido(pedidoActualizado);
    } catch (error) {
      alert(error.message);
    }
  };

  const cancelarPedido = async () => {
    let confirmar = confirm("¿Seguro que quieres cancelar este pedido?");
    if (!confirmar) return;

    try {
      for (const producto of pedido.productos) {
        await eliminarProducto(pedido.id, producto.id);
      }
      alert("Pedido cancelado");
      setPedido(null);
    } catch (error) {
      alert(error.message);
    }
  };

  const eliminarProductoPedido = async (productoId) => {
    try {
      const pedidoActualizado = await eliminarProducto(pedido.id, productoId);
      setPedido(pedidoActualizado);
    } catch (error) {
      alert(error.message);
    }
  };

  const finalizarPedido = async () => {
    try {
      const pedidoFinalizado = await cambiarEstado(pedido.id);
      setPedido(pedidoFinalizado);
      alert(`Pedido finalizado. Código: ${pedidoFinalizado.codigo}`);
      setPedido(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="card cesta-card">
      <h2>Pedido actual: {pedido.codigo}</h2>
      <p>Total: {pedido.precioTotal.toFixed(2)}€</p>
      <h3>Productos añadidos:</h3>
      {pedido.productos.length === 0 ? (
        <p>No se han añadido productos todavía</p>
      ) : (
        <ul>
          {pedido.productos.map((producto) => (
            <li className="detalle-pedido" key={producto.id}>
              <span className="detalle-nombre">{producto.nombre}</span>

              <div className="detalle-actions">
                <button
                  onClick={() => disminuirCantidad(producto.id)}
                  className="btn btn-secondary"
                >
                  -
                </button>

                <span className="detalle-cantidad">{producto.cantidad}</span>

                <button
                  onClick={() => aumentarCantidad(producto.id)}
                  className="btn btn-secondary"
                >
                  +
                </button>

                <button
                  onClick={() => eliminarProductoPedido(producto.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {pedido.productos.length !== 0 && (
        <button className="btn btn-primary" onClick={finalizarPedido}>
          Finalizar pedido
        </button>
      )}
      <button className="btn btn-danger" onClick={cancelarPedido}>
        Cancelar
      </button>
    </div>
  );
}

export default ProductosPedido;
