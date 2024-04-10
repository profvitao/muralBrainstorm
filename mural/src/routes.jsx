import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diferente from "./pages/Diferente";
import Maluco from "./pages/Maluco";
import Inviavel from "./pages/Inviavel";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/diferente" element={<Diferente />}></Route>
        <Route path="/inviavel" element={<Inviavel />}></Route>
        <Route path="/maluco" element={<Maluco />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
