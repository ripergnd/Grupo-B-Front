import PedidoCard from "./PedidoCard";

function ListaPedidos({ pedidos, onSelect }) {
  if (pedidos.length === 0) {
    return <p>No hay pedidos.</p>;
  }

  return (
    <div className="lista-pedidos">
      {pedidos.map((pedido) => (
        <PedidoCard
          key={pedido.id}
          pedido={pedido}
          onClick={() => onSelect(pedido)}
        />
      ))}
    </div>
  );
}

export default ListaPedidos;