import { useEffect, useState } from "react";
import { crearProducto } from "../../services/APIProducto";
import { listarCategorias } from "../../services/APICategoria";

function ModalCrearProducto ({cerrar}){
    const [categorias, setCategorias] = useState([]);

    const [formData, setFormData] = useState({
        nombre:"",
        precio:"",
        categoriaId:"",
        stock:"",
        estado:true
    })

    useEffect(() => {
        listarCategorias().then(setCategorias);
    },[]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await crearProducto({
                nombre: formData.nombre,
                precio: Number(formData.precio),
                categoriaId: Number(formData.categoriaId),
                stock: Number(formData.stock),
                estado: formData.estado,
            })
            alert("Producto creado correctamente");
            cerrar();
        }catch(error){
            alert(error.message);
        }
    }

    return(
        <div className="modal-fondo">
            <div className="modal-contenido">
                <button onClick={cerrar}>X</button>
                <h2>Crear producto</h2>
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
              <option value="">Selecciona una categoría</option>

              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </label>

          <label>
            Stock:
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
              required
            />
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

          <button type="submit">Crear producto</button>
                </form>
            </div>
        </div>
    )
}

export default ModalCrearProducto