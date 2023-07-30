import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nave from "../Components/CustomNavbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Buy from "../Pages/Buy";
import Ingresar from "../Pages/Ingresar";
import Test from "../Pages/Responsivo";
import Help from "../Pages/Help";


function Router() {
  return (
    <BrowserRouter>
      <Nave />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/responsive" element={<Help/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
