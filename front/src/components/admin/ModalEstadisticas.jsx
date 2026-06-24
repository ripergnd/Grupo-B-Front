import { useState, useEffect } from "react";
import { obtenerMasVendidos } from "../../services/APIProducto";
import { obtenerTerminalMasUtilizada } from "../../services/APITerminal";

function ModalEstadisticas({ cerrar }) {
  const [producto, setProducto] = useState(null);
  const [terminal, setTerminal] = useState(null);

  useEffect(() => {
    const cargarEstadisticas = async () => {
      try {
        const productos = await obtenerMasVendidos();
        const terminal = await obtenerTerminalMasUtilizada();

        setProducto(productos[0]);
        setTerminal(terminal);
      } catch (error) {
        alert(error.message);
      }
    };
    cargarEstadisticas();
  }, []);

  return (
    <div className="modal-fondo">
      <div className="modal-contenido">
        <button className="modal-close" onClick={cerrar}>X</button>

        <h2>Estadísticas</h2>

        <h3>Terminal más utilizada</h3>

        {terminal ? (
          <p>{terminal.nombre}</p>
        ) : (
          <p>No hay datos disponibles.</p>
        )}

        <h3>Producto más vendido</h3>

        {producto ? (
          <p>
            {producto.producto.nombre}{" - "}{producto.totalVendido}
          </p>
        ) : (
          <p>No hay ventas registradas.</p>
        )}
      </div>
    </div>
  )

}

export default ModalEstadisticas