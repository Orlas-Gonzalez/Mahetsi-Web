import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./CustomSuscribir.module.css";
import { Card, Container } from "react-bootstrap";

function CustomSuscribir() {
  return (
    <Container center>
      <Card style={{ width: "32rem" }}>
        <Card.Body>
          <Card.Text>
            Suscribete!!
            <br />
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

export default CustomSuscribir;
