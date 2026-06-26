function PedidoCard({ pedido, onClick }) {
  console.log(pedido);
  return (
    <div className="card cocina-card" onClick={onClick}>
      <h3>{pedido.codigo}</h3>

      <p>
        <strong>Estado:</strong> {pedido.estado}
      </p>

      <p>
        <strong>Productos:</strong> {pedido.productos?.length ?? 0}
      </p>
    </div>
  );
}

export default PedidoCard;
