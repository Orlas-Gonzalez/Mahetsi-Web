import styles from "./CustomCardgroupProducts.module.css";
import { Container,CardGroup } from "react-bootstrap";
import CustomCardProducts from "../CustomCardProducts";
import imgArcos from "../../assets/arcos.jpg";

function CustomCardgroupProducts() {
    const productos=["hola","la","ho","ola"];
  return (
    <Container fluid className={styles.contCardgroup}>
      <CardGroup>
        {productos.map((elemento)=>{
            return <CustomCardProducts title={elemento} img={imgArcos}/>
        })}
       {/* <CustomCardProducts title="hola" img={imgArcos}/>
        <CustomCardProducts title="la" img={imgArcos}/>
        <CustomCardProducts title="ho" img={imgArcos}/>
        <CustomCardProducts title="ola" img={imgArcos}/>*/}
      </CardGroup>
    </Container>
  );
}

export default CustomCardgroupProducts;
