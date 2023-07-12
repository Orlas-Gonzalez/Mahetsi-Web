import styles from "./Test.module.css";
import { Card, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../../assets/arcos.jpg";
import imagen2 from "../../assets/verduras.jpg";
import imagen3 from "../../assets/ima3.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Test() {
  return (
    <Container center>
      <Card style={{ width: "32rem" }}>
        <Card.Body >
          <Card.Text>
            Suscribete!!<br/>
            Recibe promociones y beneficios exclusivos
          </Card.Text>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email@ejemplo.com"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Suscribir
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Test;
