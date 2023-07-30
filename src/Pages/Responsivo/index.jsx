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
        <h1> Ayuda</h1>
      </Container>
      <Container fluid>
        <h1>
          Para Mahets’i nuestros clientes son lo primero por ello te
          <br />
          invitamos a leer nuestra información sobre la página así
          <br />
          como comunicarnos tus dudas al [correo] para que
          <br />
          con gusto podamos atenderte
        </h1>
      </Container>
      <Container fluid>
        <Image width={50} src={hojagris} />
        <h1>Política de Privacidad</h1>
        <Image width={50} src={hojagris} />
        <h1>Términos y Condiciones</h1>
        <Image width={50} src={hojagris} />
        <h1>Devoluciones y Reembolso</h1>
      </Container>
      <Footer />
    </Container>
  );
}
export default Test;
