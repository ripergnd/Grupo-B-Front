import ProductoCard from "./ProductoCard";
import { useState } from "react";
import { agregarProducto } from "../services/APIPedido";

function ListaProductos({ productos, pedido, setPedido }) {
  const [cantidades, setCantidades] = useState({});

  const handleAgregarProducto = async (producto) => {
    try {
      const pedidoActualizado = await agregarProducto(pedido.id, [
        {
          productoId: producto.id,
          cantidad: cantidades[producto.id] || 1,
        },
      ]);

      console.log("Pedido actualizado:", pedidoActualizado);
      setPedido(pedidoActualizado);

      setCantidades({ ...cantidades, [producto.id]: "" });
    } catch (error) {
      alert("No se pudo añadir el producto");
    }
  };

  return (
    <div className="productos-lista">
      <ul>
        {productos.map((p) => (
          <li key={p.id} className="card producto-card">
            <ProductoCard producto={p} />

            {p.stock === 0 ? (
              <div className="producto-sin-stock">Sin stock</div>
            ) : (
              <div className="producto-actions">
                <input
                  className="input-number"
                  type="number"
                  min="1"
                  max={p.stock}
                  value={cantidades[p.id] ?? ""}
                  onChange={(e) =>
                    setCantidades({
                      ...cantidades,
                      [p.id]: Number(e.target.value),
                    })
                  }
                />

                <button
                  className="btn btn-primary"
                  onClick={() => handleAgregarProducto(p)}
                >
                  Añadir
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
