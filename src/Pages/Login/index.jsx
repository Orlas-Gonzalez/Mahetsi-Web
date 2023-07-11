import { useState } from "react";
import { Container,Carousel,Image,Button,Card,Col,Row,CardGroup,Figure } from "react-bootstrap";
import imagen1 from "../../assets/arcos.jpg";
import imagen2 from "../../assets/verduras.jpg";
import imagen3 from "../../assets/ima3.jpg";
import img1 from "../../assets/sky.jpg";
import img2 from "../../assets/Productores.png";
import img3 from "../../assets/IngredientesNat.png";
import styles from "./Login.module.css";
import CustomCardgroupProducts from "../../Components/CustomCardgroupProducts";


function Login() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className={styles.contCar}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen1} alt="First slide" />
          <Carousel.Caption>
            <h3 text={styles.textTitle}>Jabones y Productos Artesanales</h3>
            <p>100% Mexicanos </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className={styles.fondTitle}>
              Productos Naturales <br /> Libres de BPA
            </h3>
            <p>100% Mexicanos </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen3} alt="Third slide" />

          <Carousel.Caption>
            <h3>
              Colaboración con
              <br />
              Huertos y Mercados Orgánicos
            </h3>
            <p>100% Mexicanos </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid className={styles.contCar}>
        <h1>
          <img className={styles.imgCont2} src={img1} alt="Third slide" />
        </h1>
        <h1 center>
          {" "}
          Mahetsi <br />
          significa cielo en otomí, <br /> la cual fue la lengua del estado de
          Querétaro, <br /> de donde es orgullosamente la marca
        </h1>
        <h1>
          <img className={styles.imgCont2} src={img1} alt="Third slide" />
        </h1>
      </Container>
      <CustomCardgroupProducts/>
      <Container fluid>
        <h1>
          Conoce nuestras<br/>promociones por mayoreo
          <img className="center" src={imagen1}/>
        </h1>
      </Container>
    </Container>
  );
}

export default Login;
