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
import { PiUserCircleDuotone, PiShoppingBagDuotone, PiQuestionDuotone } from "react-icons/pi";

function Nave() {
  return (
    <Navbar expand="lg" fluid className={styles.backgroundNav} variant="light">
      <Container fluid className={styles.contRoot}>
        <Navbar.Brand>
          <Image src={imagen} className={styles.imgLogo} />
        </Navbar.Brand>
        <Container className={styles.contButtons}>
          <Button className={styles.buttonNav}>Inicio</Button>
          <Button className={styles.buttonNav}>Conocenos</Button>
          <Button className={styles.buttonNav}>Productos</Button>
          <Button className={styles.buttonNav}>Mayoreo</Button>
          <PiUserCircleDuotone className={styles.iconsNav} />
          <PiShoppingBagDuotone className={styles.iconsNav} />
          <PiQuestionDuotone className={styles.iconsNav} />
        </Container>
        {/* <Row>
          <Col xs={6}>
            <Nav className="me-auto">
              <Button  className={styles.buttonNav}>
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
        </Row> */}
      </Container>
    </Navbar>
  );
}

export default Nave;
