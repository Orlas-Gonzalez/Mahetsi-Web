import styles from "./Mayoreo.module.css";
import Footer from "../../Components/CustomFooter";
import hojaverde from "../../assets/hojav.png";
import imagen2 from "../../assets/verduras.jpg";
import imagen3 from "../../assets/ima3.jpg";
import { Card, Container, Image, Row, Col } from "react-bootstrap";

function Mayoreo() {
    return (
      <Container fluid center>
        <Container fluid center>
          <p align="center">
            <br />
            <b>Mayoreo</b>
          </p>
        </Container>
        <Container fluid>
          <p align="center">
            Todos nuestros productos son elaborados artesanalmente
            <br />
            por lo que tenemos diferentes descuentos para tí a partir de
            <br />
            20 piezas.
            <br />
            <br />
            Contamos con diferentes opciones como:
            <br />
            <br />
          </p>
        </Container>
        <Container fluid>
          <div>
            <img align="center" width={40} src={hojaverde} />
            <p align="center">Jabón Artesanal Orgánico</p>
            <img align="center" width={40} src={hojaverde} />
            <p align="center">Bálsamo Labial</p>
            <img align="center" width={40} src={hojaverde} />
            <p align="center">Shampoo Sólido</p>
            <img align="center" width={40} src={hojaverde} />
            <p align="center">Sales de Baño</p>
            <img align="center" width={40} src={hojaverde} />
            <p align="center">Jabón Portátil</p>
            <br />
            <p align="center">Envío gratis a toda la república mexicana!!</p>
          </div>
        </Container>
        <Container>
          <div>
            <h1>Nuestros productos son totalmente personalizables</h1>
            <img width={350} height:fit-content src={imagen3} />
            <Image
              className={styles.imagenCirculo1}
              src={imagen2}
              roundedCircle
            />
            <h1>
              Deja volar tu
              <br /> imaginación como espuma!!
              <br />
            </h1>
            <Image
              className={styles.imagenCirculo3}
              src={imagen2}
              roundedCircle
            />
            <h1>
              Estamos seguros de que
              <br />
              tus invitados lo disfrutarán
              <br />
              y será un obsequio único!!
              <br />
              <br />
            </h1>
            <Image
              className={styles.imagenCirculo2}
              src={imagen2}
              roundedCircle
            />
            <div>
              <h1>
                Te invitamos a seguir contribuyendo con el cuidado
                <br />
                del medio ambiente, dando un respiro a tu piel y al planeta.
                <br />
              </h1>
            </div>
          </div>
          <div>
            <h1>
              Resuelve tus dudas y has una cotización sin compromiso
              <br /> al angelicagomez@mahetsi.com.mx
            </h1>
          </div>
        </Container>
        <Footer />
      </Container>
    );
  }
  export default Mayoreo;