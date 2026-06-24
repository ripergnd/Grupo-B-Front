import { useState, useEffect } from "react";
import { listarProductos, modificarStock } from "../../services/APIProducto";

function ModalModificarStock({ cerrar }) {
  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    listarProductos().then(setProductos);
  }, []);

  const seleccionarProducto = (e) => {
    const id = Number(e.target.value);
    setProductoId(id);

    const producto = productos.find((p) => p.id === id);

    if (producto) {
      setStock(producto.stock);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productoActualizado = await modificarStock(
        productoId,
        Number(stock)
      );
      alert("Stock actualizado correctamente");
      cerrar();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="modal-fondo">
      <div className="modal-contenido">
        <button className="modal-close" onClick={cerrar}>X</button>

        <h2>Modificar stock</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Producto:
            <select
              value={productoId}
              onChange={seleccionarProducto}
              required
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
          </label>

          <label>
            Stock:
            <input
              type="number"
              min="0"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </label>

          <button className="btn-primary" type="submit">
            Guardar stock
          </button>
        </form>
      </div>
    </div>
  )

}

export default ModalModificarStock