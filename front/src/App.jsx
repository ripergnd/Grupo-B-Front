import { BrowserRouter, Routes, Route } from "react-router-dom";

import TerminalPage from "./pages/TerminalPage";
import CocinaPage from "./pages/CocinaPage";
import RecogidaPage from "./pages/RecogidaPage";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/terminal" element={<TerminalPage></TerminalPage>}></Route>
        <Route path="/cocina" element={<CocinaPage></CocinaPage>}></Route>
        <Route path="/recogida" element={<RecogidaPage></RecogidaPage>}></Route>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
