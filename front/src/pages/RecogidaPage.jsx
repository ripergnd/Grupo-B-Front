import { useEffect, useState } from "react";
import { listarPedidos, cambiarEstado } from "../services/APIPedido";
import PedidoListoCard from "../components/PedidoCodigoCard";
import useFavicon from "../components/UseFavicon";

function RecogidaPage() {
  const [pedidos, setPedidos] = useState([]);

  useFavicon("/favicons/favicon-recogida.svg", "Recogida");

  useEffect(() => {
    listarPedidos("LISTO").then(setPedidos);
  }, []);

  const pedidoEntregado = async (pedidoId) => {
    try {
      await cambiarEstado(pedidoId);

      setPedidos((prev) => prev.filter((pedido) => pedido.id !== pedidoId));
    } catch (error) {
      alert(error.message);
    }
  };
  const pedidosOrdenados = [...pedidos].sort(
    (a, b) => new Date(a.horaPedido) - new Date(b.horaPedido),
  );
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">PEDIDOS LISTOS PARA RECOGER</h1>
      </header>
      <div className="app-page recogida-page">
        {pedidos.length === 0 ? (
          <p>No hay pedidos listos para recoger.</p>
        ) : (
          <ul className="lista-pedidos-listos">
            {pedidosOrdenados.map((pedido) => (
              <PedidoListoCard
                key={pedido.id}
                pedido={pedido}
                onClick={() => pedidoEntregado(pedido.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default RecogidaPage;
