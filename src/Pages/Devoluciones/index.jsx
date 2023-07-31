import Styles from "./Devoluciones.module.css";
import { Card, Container, Image, Row, Col } from "react-bootstrap";
import Footer from "../../Components/CustomFooter";

function Devoluciones() {
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
            En Mahet’si, nos esforzamos por brindar a nuestros clientes la mejor
            experiencia de
            <br />
            compra posible. Si su compra no está ligada a lo que pidió, estaremos
            encantados de
            <br />
            ayudarle con una devolución y reembolso.
            <br />
            <br />
            <b>Solicitud</b>
            <br />
            <br />
            Para solicitar una devolución y/o reembolso, por favor envíe un correo
            electrónico a<br />
            <b>angelicagomez@mahetsi.com.mx</b> con su número de orden y los
            detalles con
            <br />
            fotografía así como el motivo por el cual desea devolver el artículo.
            Nuestro equipo
            <br />
            de atención al cliente se comunicará con usted para proporcionarle la
            información
            <br />
            necesaria sobre la devolución y/o reembolso así mismo como de ser el
            caso una etiqueta
            <br />
            de envío y las instrucciones necesarias para completar la devolución
            y/o reembolso.
            <br />
            <br />
            <b>Devoluciones</b>
            <br />
            <br />
            Tiene un plazo de 7 días a partir de la recepción del pedido para
            solicitar una devolución.
            <br />
            Para ser elegible para una devolución, el artículo debe estar en las
            mismas condiciones
            <br />
            en que lo recibió, sin usar ni dañado, y en su embalaje original. Si
            se encuentra que el
            <br />
            artículo ha sido usado o dañado, no será elegible para una devolución.
            <br />
            <br />
            <b>Reembolsos</b>
            <br />
            <br />
            Una vez que recibamos y verifiquemos su devolución, procesaremos su
            reembolso en un
            <br />
            plazo de <b>15 días hábiles.</b> El reembolso se realizará a través
            del mismo método de pago
            <br />
            que utilizó para realizar su compra. Tenga en cuenta que los gastos de
            envío originales
            <br />
            no son reembolsables.
            <br />
            <br />
            Si tiene alguna pregunta sobre nuestra política de devolución y
            reembolso, no dude en ponerse en 
            <br />
            contacto con nuestro equipo de atención al cliente al correo 
            <b> angelicagomez@mahetsi.com.mx</b>
            <br />
            Gracias por comprar en Mahet’si.
          </p>
        </Container>
        <Footer />
      </Container>
    );
  }
  export default Devoluciones;