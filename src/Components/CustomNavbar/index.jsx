import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imagen from "../../assets/LOGO.png";
import { Image } from "react-bootstrap";
import styles from "./CustomNavbar.module.css";

function Nave() {
  return (
    <Navbar expand="lg" fluid className={styles.backgroundNav} variant="light">
      <Container>
        <Navbar.Brand href="#home"><Image src={imagen} className={styles.imgLogo} /></Navbar.Brand>
        <Row>
          <Col xs={6}>
            <Nav className="me-auto">
              <Button variant="outline-secondary" className={styles.buttonNav}>
                <Nav.Link href="#home">Conocenos</Nav.Link>
              </Button>
              <Button variant="outline-secondary" className={styles.buttonNav}>
                <Nav.Link href="#Products">Productos</Nav.Link>
              </Button>
              <Button variant="outline-secondary" className={styles.buttonNav}>
                <Nav.Link href="#Login">Registro</Nav.Link>
              </Button>
              <Button variant="outline-secondary" className={styles.buttonNav}>
                <Nav.Link href="#Buy">Compar</Nav.Link>
              </Button>
              <Button variant="outline-secondary" className={styles.buttonNav}>
                <Nav.Link href="#Contact">Contacto</Nav.Link>
              </Button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Nave;
