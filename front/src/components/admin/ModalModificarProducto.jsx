import { useState, useEffect } from "react";
import { listarProductos, actualizarProducto } from "../../services/APIProducto";
import { listarCategorias } from "../../services/APICategoria";

function ModalModificarProducto({ cerrar }) {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [productoId, setProductoId] = useState("");

    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        categoriaId: "",
        estado: true,
        stock: "",
    });

    useEffect(() => {
        listarProductos().then(setProductos);
        listarCategorias().then(setCategorias);
    },[]);

    const seleccionarProducto = (e) => {
        const id = e.target.value;
        setProductoId(id);
        
        const producto = productos.find((p) => p.id === Number(id));

        if(producto) {
            const categoria = categorias.find((c) => c.nombre === producto.categoriaNombre);

            setFormData({
                nombre: producto.nombre,
                precio: producto.precio,
                categoriaId: categoria ? categoria.id : "",
                estado: true,
                stock: producto.stock,
            });
        }    
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await actualizarProducto(productoId, {
                nombre: formData.nombre,
                precio: Number(formData.precio),
                categoriaId: Number(formData.categoriaId),
                estado: formData.estado,
                stock: Number(formData.stock)
            });
            alert("Producto actualizado correctamente");
            cerrar();
        }catch (error){
            alert(error.message)
        }
    }

    return(
         <div className="modal-fondo">
      <div className="modal-contenido">
        <button onClick={cerrar}>X</button>

        <h2>Modificar producto</h2>

        <label>
          Producto:
          <select value={productoId} onChange={seleccionarProducto}>
            <option value="">Selecciona un producto</option>

            {productos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre}
              </option>
            ))}
          </select>
        </label>

        {productoId && (
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Precio:
              <input
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
            </label>

            <label>
              Categoría:
              <select
                name="categoriaId"
                value={formData.categoriaId}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona categoría</option>

                {categorias.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nombre}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Activo:
              <input
                type="checkbox"
                name="estado"
                checked={formData.estado}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Guardar cambios</button>
          </form>
        )}
      </div>
    </div>
    )
}

export default ModalModificarProducto