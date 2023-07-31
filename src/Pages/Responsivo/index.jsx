import styles from "./Test.module.css";
import { Card, Container, Image, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../../assets/arcos.jpg";
import imagen2 from "../../assets/verduras.jpg";
import imagen3 from "../../assets/ima3.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import hojaverde from "../../assets/hojav.png";
import hojagris from "../../assets/hojag.png";
import logo1 from "../../assets/CrueltyFree.png";
import logo2 from "../../assets/IngredientesNat.png";
import logo3 from "../../assets/Productores.png";
import CustomCardgroupProducts from "../../Components/CustomCardgroupProducts";
import Footer from "../../Components/CustomFooter";

function Test() {
  return (
    <Container fluid center>
      <Container fluid center>
        <p align="center">
          <br />
          <b>Devoluciones y Reembolso</b>
        </p>
      </Container>
      <Container fluid>
        <p align="center">
          <b>Política de Devolución y Reembolso</b>
          <br />
          <br />
        </p>
      </Container>
      <Footer />
    </Container>
  );
}
export default Test;
