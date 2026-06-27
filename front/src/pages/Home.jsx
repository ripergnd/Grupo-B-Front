import { useNavigate } from "react-router-dom";
import useFavicon from "../components/UseFavicon";

function Home() {
  const navigate = useNavigate();

  useFavicon("/favicons/favicon-home.svg", "Inicio");

  return (
    <div className="home-page">
      <div className="card home-card">
        <h1 className="page-title">INICIALIZANDO TERMINAL</h1>

        <div className="home-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/terminal")}
          >
            Terminal
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/cocina")}
          >
            Cocina
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/recogida")}
          >
            Recogida
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/admin")}
          >
            Gestión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
