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

function Test() {
  return (
    <Container fluid center>
      <Container fluid center>
        <h1 clear:center>Quiénes somos?</h1>
        <Image className={styles.imagenCirculo1} src={imagen2} roundedCircle />
        <h1>
          Somos una marca que busca la
          <br /> excelencia en la calidad de sus
          <br /> productos, proporcionando el mejor
          <br />
          servicio con conciencia ambiental y social.
        </h1>
        <Image className={styles.imagenCirculo2} src={imagen1} roundedCircle />
        <h1>
          Juntos construimos el desarrollo y<br /> fortalecimiento tanto de
          nuestros
          <br /> artesanos como proveedores
          <br /> favoreciendo la competencia justa y humana.
        </h1>
      </Container>
      <Container fluid center>
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            Nuestros Productos son
            <br /> libres de testeo animal
            <br />
            <Image width={100} height={100} src={logo1} roundedCircle />
            <br />
          </div>
          <div className="col-md-6 col-lg-4 col-12 ft-2">
            Cada uno de los productos son
            <br /> hechos con ingredientes orgánicos
            <br />
            <Image width={100} height={100} src={logo2} roundedCircle />
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-3">
            Ingredientes de
            <br /> productores mexicanos
            <br />
            <Image width={100} height={100} src={logo3} roundedCircle />
          </div>
        </div>
      </Container>
      <CustomCardgroupProducts />
      <Container>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-12 ft-1">
            <Image width={50} src={hojaverde} />
            <h1>Misión</h1>
            <br />
            Ofrecerte una línea de productos naturales
            <br /> y orgánicos elaborados artesanalmente <br />
            que contribuyan al cuidado de tu piel,
            <br /> cuidando minuciosamente la calidad de
            <br /> los ingredientes y el cuidado al medio ambiente.
          </div>
          <div className="col-md-6 col-lg-4 col-12 ft-1">
            <Image width={50} src={hojagris} />
            <h1>Visión</h1>
            <br />
            Ser la marca líder a nivel nacional
            <br /> de jabones artesanales y <br />
            productos orgánicos para
            <br /> la higiene y cuidado de la piel.
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-1">
            <Image width={50} src={hojaverde} />
            <h1>Objetivo</h1>
            <br />
            Contribuir con el cuidado de tu piel <br />a través de productos de
            calidad,
            <br /> manteniendo las técnicas artesanales y el uso
            <br /> de ingredientes 100% naturales, sin recurrir a<br />{" "}
            pigmentos sintéticos ó ingredientes químicos.
          </div>
        </div>
      </Container>
      <Container>

      </Container>
    </Container>
  );
}
export default Test;
