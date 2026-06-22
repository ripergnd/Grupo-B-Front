function PedidoCodigoCard({ pedido, onClick }) {
  return (
    <li className="card pedidos-codigo-card" onClick={onClick}>
      <h2 className="pedido-codigo">{pedido.codigo}</h2>
    </li>
  );
}
export default PedidoCodigoCard;
