import styles from "./CustomCardProducts.module.css";
import { Button, Card } from "react-bootstrap";

function CustomCardProducts(props) {
  const { title, img } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top"  src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCardProducts;
