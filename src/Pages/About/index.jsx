import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./About.module.css";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Row>
          <Col>         
          <Nav className="me-auto">
          <ButtonGroup>
          <Button variant="outline-secondary" ><Nav.Link href="#home">Conocenos</Nav.Link></Button>
          <Button variant="outline-secondary"><Nav.Link href="#Products">Productos</Nav.Link></Button>
          <Button variant="outline-secondary"><Nav.Link href="#Register">Registro</Nav.Link></Button>
          <Button variant="outline-secondary"><Nav.Link href="#Buy">Compar</Nav.Link></Button>
          <Button variant="outline-secondary"><Nav.Link href="#Contact">Contacto</Nav.Link></Button>
          </ButtonGroup>
        </Nav></Col>
        </Row>
      </Container>
    </Navbar>
  </>
  )
}

export default About