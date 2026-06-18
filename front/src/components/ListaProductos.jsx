import ProductoCard from "./ProductoCard";
import { useState } from "react";

function ListaProductos({ productos }) {
    const [cantidades, setCantidades] = useState({})
    const [pedido, setPedido] = useState([]);

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
                    value={cantidades[p.id] || 1}
                    onChange={(e) => setCantidades({...cantidades, [p.id]: Number(e.target.value)})}
                />

                <button
                    onClick={() => {
                        setPedido([...pedido,{...p, cantidad: cantidades[p.id] || 1}])
                    }}
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