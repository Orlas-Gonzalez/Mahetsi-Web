import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Products from './Pages/Products';
import About from './Pages/About';
import Register from './Pages/Registro';
import Buy from './Pages/Buy';
import Contact from './Pages/Contact';
import Nave from './Components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nave/>
    </>
/*    <div className='App'>
      <Router>
        <Nave/>
      </Router>


    </div>
    index col
          {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
*/

  )
}

export default App

////////////////////////////////////////////
/*
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Products from './Pages/Products';
import About from './Pages/About';
import Register from './Pages/Registro';
import Buy from './Pages/Buy';
import Contact from './Pages/Contact';
import Nave from './Components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <div ClassName="container">
          <h1>Navegacion</h1>
          <hr />
          <Switch>
            <Route Path="/" exact>
             Pagina de inicio
            </Route>
            <Route Path="/Productos">
              Productos
            </Route>
            <Route Path="/Registro">
              Registro
            </Route>
            <Route Path="/Comprar">
              Comprar
            </Route>
            <Route Path="/Contacto">
              Contacto
            </Route>
          </Switch>
        </div>  
      </Router>
    </>
  );
}

export default App
*/