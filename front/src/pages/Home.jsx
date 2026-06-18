import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-card">
        <h1>INICIALIZANDO TERMINAL</h1>
        <div className="home-buttons">
          <button onClick={() => navigate("/terminal")}>Terminal</button>
          <button onClick={() => navigate("/cocina")}>Cocina</button>
          <button onClick={() => navigate("/recogida")}>Recogida</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
