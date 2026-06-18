import { useState, useEffect } from "react";
import { listarProductos } from "../services/APIProducto";
import { listarCategorias } from "../services/APICategoria";
import FiltroProductos from "../components/FiltroProductos";
import ListaProductos from "../components/ListaProductos";

function TerminalPage() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [orden, setOrden] = useState("nombre");
  const [categoriaId, setCategoriaId] = useState("");
  const [desc, setDesc] = useState(false);

  useEffect(() => {
    listarCategorias().then(setCategorias);
  }, []);

  useEffect(() => {
    listarProductos({
      orden,
      categoriaId,
      desc
    }).then(setProductos);
  }, [orden, categoriaId, desc]);

  return (
    <>
      <FiltroProductos
        categorias={categorias}
        categoriaId={categoriaId}
        setCategoriaId={setCategoriaId}
        orden={orden}
        setOrden={setOrden}
        desc={desc}
        setDesc={setDesc}
      />

      <ListaProductos productos={productos} />
    </>
  );
}

export default TerminalPage