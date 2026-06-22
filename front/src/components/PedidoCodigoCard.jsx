function PedidoCodigoCard({ pedido }) {
  return (
    <li className="pedidos-listos">
      <h2>{pedido.codigo}</h2>
    </li>
  );
}
export default PedidoCodigoCard;
