import { useState, useEffect } from "react";
import { listarProductos } from "../services/APIProducto";
import { listarCategorias } from "../services/APICategoria";
import { crearPedido } from "../services/APIPedido";
import FiltroProductos from "../components/FiltroProductos";
import ListaProductos from "../components/ListaProductos";
import ProductosPedido from "../components/ProductosPedido";

function TerminalPage() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [orden, setOrden] = useState("nombre");
  const [categoriaId, setCategoriaId] = useState("");
  const [desc, setDesc] = useState(false);

  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    listarCategorias().then(setCategorias);
  }, []);

  useEffect(() => {
    listarProductos({
      activo: true,
      orden,
      categoriaId,
      desc,
    }).then(setProductos);
  }, [orden, categoriaId, desc]);

  const iniciarPedido = async () => {
    try {
      const pedidoCreado = await crearPedido({
        terminalId: 1,
      });

      console.log("Pedido creado:", pedidoCreado);

      setPedido(pedidoCreado);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  if (!pedido) {
    return (
      <div className="home-page">
        <div className="card terminal-start-card">
          <h1 className="card-title">TERMINAL DE PEDIDOS</h1>

          <button className="btn btn-primary" onClick={iniciarPedido}>
            Iniciar Pedido
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-layout">
      <div className="productos-panel">
        <FiltroProductos
          categorias={categorias}
          categoriaId={categoriaId}
          setCategoriaId={setCategoriaId}
          orden={orden}
          setOrden={setOrden}
          desc={desc}
          setDesc={setDesc}
        />
        <div className="card menu-card">
          <h2 className="menu-title">MENÚ</h2>
          <div className="productos-scroll">
            <ListaProductos
              productos={productos}
              pedido={pedido}
              setPedido={setPedido}
            />
          </div>
        </div>
      </div>

      <ProductosPedido pedido={pedido} setPedido={setPedido} />
    </div>
  );
}

export default TerminalPage;
