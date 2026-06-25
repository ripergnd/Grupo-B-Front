import { useState } from "react";
import ModalCrearProducto from "../components/admin/ModalCrearProducto";
import ModalModificarProducto from "../components/admin/ModalModificarProducto";
import ModalModificarStock from "../components/admin/ModalModificarStock";
import ModalDesactivarProducto from "../components/admin/ModalDesactivarProducto";
import ModalEstadisticas from "../components/admin/ModalEstadisticas";
import ModalCrearTerminal from "../components/admin/ModalCrearTerminal";

function AdminPage() {
  const [modalActivo, setModalActivo] = useState(null);
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">PANEL DE GESTION</h1>
      </header>
      <div className="recogida-page">
        <ul className="lista-pedidos-listos">
          <button
            className="btn btn-primary"
            onClick={() => setModalActivo("crearProducto")}
          >
            Crear producto
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setModalActivo("modificarProducto")}
          >
            Modificar productos
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setModalActivo("modificarStock")}
          >
            Modificar stock
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setModalActivo("desactivarProducto")}
          >
            Desactivar Productos
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setModalActivo("crearTerminal")}
          >
            Crear terminal
          </button>

          <button
            className="btn btn-primary"
            onClick={() => setModalActivo("estadisticas")}
          >
            Ver estadísticas
          </button>

          {modalActivo === "crearProducto" && (
            <ModalCrearProducto cerrar={() => setModalActivo(null)} />
          )}

          {modalActivo === "modificarProducto" && (
            <ModalModificarProducto cerrar={() => setModalActivo(null)} />
          )}

          {modalActivo === "modificarStock" && (
            <ModalModificarStock cerrar={() => setModalActivo(null)} />
          )}

          {modalActivo === "desactivarProducto" && (
            <ModalDesactivarProducto cerrar={() => setModalActivo(null)} />
          )}

          {modalActivo === "crearTerminal" && (
            <ModalCrearTerminal cerrar={() => setModalActivo(null)} />
          )}

          {modalActivo === "estadisticas" && (
            <ModalEstadisticas cerrar={() => setModalActivo(null)} />
          )}
        </ul>
      </div>
    </>
  );
}

export default AdminPage;
