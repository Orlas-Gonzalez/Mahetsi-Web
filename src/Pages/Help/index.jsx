import Styles from "./Help.modules.css";
import { Card, Container, Image, Row, Col } from "react-bootstrap";
import hojagris from "../../assets/hojag.png";
import React from "react";
import Footer from "../../Components/CustomFooter";

function Help() {
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

export default Help;
