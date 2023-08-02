import { Card, Container, Image, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img1 from "../../assets/InicioSesion.jpg";
import Footer from "../../Components/CustomFooter";

function Login() {
  return (
    <Container fluid center>
      <Container fluid center>
        <p>
          <br />
          <h1>Iniciar Sesión</h1>
          <br />
          Iniciar sesión con Google o Facebook
        </p>
        <div align="right">
          <p align="right">Aún no tienes cuenta?</p>
          <Button align="right" variant="primary" type="submit">
            Registrarse
          </Button>
          <img width={350} height:fit-content src={img1} />
        </div>
        <div>
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-facebook fa-lg"></i>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="email@ejemplo.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Al menos 6 letras, 1 caracter especial y 1 número"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Acepto términos y condiciones" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
          <Button variant="link" href="/">
              Olvide mi contraseña
            </Button>
        </Form>
      </Container>
      <Footer />
    </Container>
  );
}
export default Login;
