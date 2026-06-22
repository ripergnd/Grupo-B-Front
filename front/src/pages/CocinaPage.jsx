import { useEffect, useState } from "react";

import ListaPedidos from "../components/ListaPedidos";
import { listarPedidos, cambiarEstado } from "../services/APIPedido";

function CocinaPage() {

    const [estado, setEstado] = useState("CREADO");
    const [pedidos, setPedidos] = useState([]);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);


    useEffect(() => {
        cargarPedidos();
    }, [estado]);

    async function cargarPedidos() {
        try {
            const data = await listarPedidos(estado);

            const lista = Array.isArray(data)
                ? data : data?.pedidos || [];

            setPedidos(lista);
        } catch (error) {
            console.error("Error al cargar pedidos:", error);
            setPedidos([]);
        }
    }
    async function actualizarEstado() {
    if (!pedidoSeleccionado?.estado) {
        console.log("No hay pedido o estado");
        return;
    }

    const siguienteEstado = {
        CREADO: "EN_PREPARACION",
        EN_PREPARACION: "LISTO",
        LISTO: "ENTREGADO",
    };

    const estadoActual = pedidoSeleccionado.estado;

    console.log("Estado actual:", estadoActual);

    const nuevoEstado = siguienteEstado[estadoActual];

    console.log("Nuevo estado:", nuevoEstado);

    if (!nuevoEstado) {
        console.log("No hay transición válida");
        return;
    }

    try {
        const res = await cambiarEstado(pedidoSeleccionado.id, nuevoEstado);
        console.log("OK backend:", res);

        await cargarPedidos();
        setPedidoSeleccionado(null);

    } catch (error) {
        console.error("ERROR backend:", error);
    }
}
    
    return (
        <div className="cocina-page">
            <h1>Cocina</h1>

            <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
            >
                <option value="CREADO">Creado</option>
                <option value="EN_PREPARACION">Preparando</option>
                <option value="LISTO">Listo</option>
            </select>

            <ListaPedidos
                pedidos={pedidos}
                onSelect={setPedidoSeleccionado}
            />

            {pedidoSeleccionado && (
                <div className="detalle-pedido">
                    <h2>Pedido #{pedidoSeleccionado.id}</h2>
                    <p>Estado: {pedidoSeleccionado.estado}</p>

                    <h3>Productos</h3>
                    <ul>
                        {(pedidoSeleccionado.productos ?? []).map((p) => (
                            <li key={p.id}>
                                {p.nombre} x {p.cantidad}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {pedidoSeleccionado && (
                <button onClick={actualizarEstado}>
                    {pedidoSeleccionado.estado === "CREADO"
                        ? "Comenzar preparación"
                        : "Marcar como listo"}
                </button>
            )}
        </div>
    );
}

export default CocinaPage;


