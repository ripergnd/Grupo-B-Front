import { useEffect, useState } from "react";

function ModalCocina({ cerrar, pedido, actualizarEstado }) {
  return (
    <div className="modal-fondo">
      <div className="modal-contenido">
        <button className="modal-close" onClick={cerrar}>
          X
        </button>

        <h2>{pedido.codigo}</h2>

        <h2>{pedido.estado}</h2>

        <ul className="lista-productos">
          {" "}
          {pedido.productos.map((p) => (
            <li key={p.id}>
              {p.nombre} × {p.cantidad}
            </li>
          ))}
        </ul>
        {pedido && (
          <button className="btn btn-primary" onClick={actualizarEstado}>
            {pedido.estado === "FINALIZADO"
              ? "Comenzar preparación"
              : "Marcar como listo"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ModalCocina;
