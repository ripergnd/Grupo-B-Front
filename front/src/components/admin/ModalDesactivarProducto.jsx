import { useState, useEffect } from "react";
import { desactivarProducto, listarProductos } from "../../services/APIProducto";

function ModalDesactivarProducto({ cerrar }) {
    const [productos, setProductos] = useState([]);
    const [productoId, setProductoId] = useState("");

    useEffect(() => {
        listarProductos().then(setProductos);
    }, []);

    const handleDesactivar = async () => {
        try {
            await desactivarProducto(productoId);
            alert("Producto desactivado correctamente");
            cerrar();
        } catch (error) {
            alert(error.message)
        }
    };
    return (
        <div className="modal-fondo">
            <div className="modal-contenido">
                <button onClick={cerrar}>X</button>

                <h2>Desactivar producto</h2>

                <select
                    value={productoId}
                    onChange={(e) => setProductoId(e.target.value)}
                >
                    <option value="">
                        Selecciona un producto
                    </option>

                    {productos.map((p) => (
                        <option key={p.id} value={p.id}>
                            {p.nombre}
                        </option>
                    ))}
                </select>

                <button onClick={handleDesactivar}>
                    Desactivar
                </button>
            </div>
        </div>
    )

}

export default ModalDesactivarProducto