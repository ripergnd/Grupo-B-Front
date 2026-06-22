import { BrowserRouter, Routes, Route } from "react-router-dom";

import TerminalPage from "./pages/TerminalPage";
import RecogidaPage from "./pages/RecogidaPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/terminal" element={<TerminalPage></TerminalPage>}></Route>
        <Route path="/cocina"></Route>
        <Route path="/recogida" element={<RecogidaPage></RecogidaPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
