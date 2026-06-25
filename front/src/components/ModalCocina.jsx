import { useEffect, useState } from "react";


function ModalCocina ({cerrar, pedido, actualizarEstado}) {


    return(
       <div className="modal-fondo">
      <div className="modal-contenido">
        <button className="modal-close" onClick={cerrar}>X</button>

        <h1>{pedido.codigo}</h1>

        <h2>{pedido.estado}</h2>

        <ul> {pedido.productos.map((p)=> (
            <li key={p.id}>
                {p.nombre} X {p.cantidad}

            </li>

        ))}

        </ul>
        {pedido && (
                <button onClick={actualizarEstado}>
                    {pedido.estado === "FINALIZADO"
                        ? "Comenzar preparación"
                        : "Marcar como listo"}
                </button>
            )}
       
      </div>
    </div>
    )

}

export default ModalCocina;