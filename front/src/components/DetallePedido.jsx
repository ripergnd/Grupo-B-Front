function DetallePedido({ pedido }) {
  if (!pedido) {
    return <p>Selecciona un pedido para ver su detalle.</p>;
  }

  return (
    <div className="detalle-pedido">
      <h2>Pedido #{pedido.id}</h2>

      <p>
        <strong>Estado:</strong> {pedido.estado}
      </p>

      <h3>Productos</h3>

      {pedido.productos.length === 0 ? (
        <p>Este pedido no tiene productos.</p>
      ) : (
        <ul>
          {pedido.productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} x {producto.cantidad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DetallePedido;