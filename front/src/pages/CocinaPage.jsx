import { useEffect, useState } from "react";
import ModalCocina from "../components/ModalCocina";
import ListaPedidos from "../components/ListaPedidos";
import { listarPedidos, cambiarEstado } from "../services/APIPedido";

function CocinaPage() {
  const [estado, setEstado] = useState("FINALIZADO");
  const [pedidos, setPedidos] = useState([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
  const [modalActivo, setModalActivo] = useState(false);

  useEffect(() => {
    cargarPedidos();
  }, [estado]);

  async function cargarPedidos() {
    try {
      const data = await listarPedidos(estado);

      setPedidos(data);
    } catch (error) {
      alert(error.message);
    }
  }
  async function actualizarEstado() {
    try {
      await cambiarEstado(pedidoSeleccionado.id);
      setPedidoSeleccionado(null);
      setModalActivo(false);
      cargarPedidos();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <header className="page-header">
        <h1 className="page-title">COCINA</h1>
      </header>
      <div className="cocina-page">
        <div className="estado-selector">
          <button
            className={`btn btn-estado ${estado === "FINALIZADO" ? "activo" : ""}`}
            onClick={() => setEstado("FINALIZADO")}
          >
            Creados
          </button>

          <button
            className={`btn btn-estado ${
              estado === "EN_PREPARACION" ? "activo" : ""
            }`}
            onClick={() => setEstado("EN_PREPARACION")}
          >
            En preparación
          </button>
        </div>
        <ListaPedidos
          pedidos={pedidos}
          setPedidoSeleccionado={setPedidoSeleccionado}
          setModalActivo={setModalActivo}
        />
      </div>

      {modalActivo && (
        <ModalCocina
          pedido={pedidoSeleccionado}
          cerrar={() => setModalActivo(false)}
          actualizarEstado={actualizarEstado}
        >
          {" "}
        </ModalCocina>
      )}
    </>
  );
}

export default CocinaPage;
