import ProductoCard from "./ProductoCard";
import { useState } from "react";
import { agregarProducto } from "../services/APIPedido";

function ListaProductos({ productos, pedido, setPedido }) {
    const [cantidades, setCantidades] = useState({})


    const handleAgregarProducto = async (producto) => {
        try{
            const pedidoActualizado = await agregarProducto(pedido.id, [
                {
                    productoId: producto.id,
                    cantidad: cantidades[producto.id] || 1,
                },
            ]);

            console.log("Pedido actualizado:", pedidoActualizado)
            setPedido(pedidoActualizado);

            setCantidades({...cantidades, [producto.id]:""})
        }catch (error) {
            alert("No se pudo añadir el producto")
        }
    }

    return (
        <div>
            <h1>MENÚ</h1>
            <ul>
    {productos.map(p => {
        return (
            <li key={p.id}>
                <ProductoCard producto={p} />

                <input
                    type="number"
                    min="1"
                    max={p.stock}
                    value={cantidades[p.id] ?? ""}
                    onChange={(e) => setCantidades({...cantidades, [p.id]: Number(e.target.value)})}
                />

                <button
                    onClick={() => handleAgregarProducto(p)}
                >
                    Añadir al pedido
                </button>
            </li>
        );
    })}
</ul>
        </div>
    )
}

export default ListaProductos