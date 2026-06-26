import PedidoCard from "./PedidoCard";

function ListaPedidos({ pedidos, setPedidoSeleccionado, setModalActivo }) {
  if (pedidos.length === 0) {
    return <p>No hay pedidos.</p>;
  }

  return (
    <div className="lista-pedidos-cocina">
      {pedidos.map((pedido) => (
        <PedidoCard
          key={pedido.id}
          pedido={pedido}
          onClick={() => {
            setPedidoSeleccionado(pedido);
            setModalActivo(true);
          }}
        />
      ))}
    </div>
  );
}

export default ListaPedidos;
