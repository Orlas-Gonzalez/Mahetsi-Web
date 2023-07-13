import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imagen from "../../assets/LOGO.png";
import styles from "./CustomFooter.module.css";

function Footer() {
  return (
    <>
      <Container fluid className={styles.backgroundNav}>
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            <h3>
              <span>Contacto</span>
            </h3>
            <p>
              <i class="fa-solid fa-phone-volume"></i> 446 119 9704
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> angelicagomez@mahetsi.com
            </p>
            <div className="footer-icons">
              <i class="fa-brands fa-facebook fa-lg"></i>
              <i class="fa-brands fa-instagram fa-lg"></i>
              <i class="fa-brands fa-square-whatsapp fa-lg"></i>
              <i class="fa-brands fa-tiktok"></i>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h3>
              <span>Ayuda</span> 
            </h3>
            <Button variant="link" href="/">
              Términos y condiciones
            </Button>
            <Button variant="link" href="/">
              Política de privacidad
            </Button>
            <Button variant="link" href="/">
              Devoluciones y reembolso
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 col-12 ft-3">
            <h3>
              <span>
                Mahet'si agradece
                <br />
                su vista a nuestra página web!!
              </span>
            </h3>
            <img width={150} height:fit-content src={imagen} />
            <p>Copyright</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Footer;
