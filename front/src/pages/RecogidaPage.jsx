import { useEffect, useState } from "react";

import { listarPedidos } from "../services/APIPedido";
import PedidoListoCard from "../components/PedidoCodigoCard";
function RecogidaPage() {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    listarPedidos("LISTO").then(setPedidos);
  }, []);
  const pedidosOrdenados = [...pedidos].sort(
    (a, b) => new Date(a.horaPedido) - new Date(b.horaPedido),
  );
  return (
    <>
      <h1 className="titulo-recogida">PEDIDOS LISTOS PARA RECOGER</h1>
      <div className="recogida-page">
        {pedidos.length === 0 ? (
          <p>No hay pedidos listos para recoger.</p>
        ) : (
          <ul className="lista-pedidos-listos">
            {pedidosOrdenados.map((pedido) => (
              <PedidoListoCard key={pedido.id} pedido={pedido} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default RecogidaPage;
