import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nave from "../Components/CustomNavbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Buy from "../Pages/Buy";
import Contact from "../Pages/Contact";
import Test from "../Pages/Responsivo";

function Router() {
  return (
    <BrowserRouter>
      <Nave />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/responsive" element={<Test/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
