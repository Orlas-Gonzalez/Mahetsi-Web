import Styles from "./Terminos.module.css";
import Footer from "../../Components/CustomFooter";
import { Card, Container, Image, Row, Col } from "react-bootstrap";

function Terminos() {
  return (
    <Container fluid center>
      <Container fluid center>
        <p align="center">
          <br />
          <b>Términos y Condiciones</b>
        </p>
      </Container>
      <Container fluid>
        <p align="center">
          <b>Bienvenido a nuestra página web.</b>
          <br />
          <br />
          A continuación, se presentan los términos y condiciones de uso que
          rigen la relación
          <br />
          entre el usuario y nosotros. Al acceder y utilizar nuestra página web,
          usted acepta estos
          <br />
          términos y condiciones en su totalidad. Si no está de acuerdo con
          estos términos y<br />
          condiciones, le pedimos que no utilice nuestra página web.
          <br />
          <br />
          <b>Uso de la página web</b>
          <br />
          <br />
          a. Usted acepta que utilizará la página web únicamente para fines
          legales y de acuerdo
          <br />
          con estos términos y condiciones.
          <br />
          b. Usted acepta no utilizar la página web para cualquier fin
          fraudulento, ilegal o que
          <br />
          infrinja los derechos de terceros.
          <br />
          c. Usted acepta no intentar dañar o perjudicar la página web o
          cualquier otro usuario
          <br />
          de la página web.
          <br />
          <br />
          <b>Propiedad intelectual</b>
          <br />
          <br />
          a. La página web y todo su contenido, incluyendo, pero no limitado a,
          textos, gráficos,
          <br />
          imágenes, videos, software y cualquier otro material, son propiedad
          exclusiva nuestra o<br />
          de nuestros licenciantes.
          <br />
          b. Usted reconoce que la página web y su contenido están protegidos
          por derechos
          <br />
          de propiedad intelectual y que cualquier uso no autorizado de
          Mahet’si.com o su
          <br />
          contenido puede constituir una violación de las leyes de propiedad
          intelectual.
          <br />
          <br />
          <b>Compra de productos</b>
          <br />
          <br />
          a. Si decide comprar productos a través de nuestra página web, usted
          acepta que se
          <br />
          aplicarán los términos y condiciones de venta que se le presenten al
          momento de la compra.
          <br />
          b. Usted reconoce que es responsable de proporcionar información
          precisa y completa al
          <br />
          momento de realizar la compra.
          <br />
          c. Usted reconoce que los precios y la disponibilidad de los productos
          están sujetos a<br />
          cambios sin previo aviso.
          <br />
          <br />
          <b>Envío y entrega de productos</b>
          <br />
          <br />
          a. Nos esforzamos por enviar los productos a la dirección indicada por
          usted en un plazo
          <br />
          razonable de tiempo.
          <br />
          b. Usted reconoce que los plazos de entrega pueden variar según la
          ubicación
          <br />
          geográfica y otros factores fuera de nuestro control.
          <br />
          c. Usted reconoce que es responsable de asegurarse de que la dirección
          de envío sea
          <br />
          precisa y completa.
          <br />
          <br />
          <b>Cancelaciones y devoluciones</b>
          <br />
          <br />
          a. Si decide cancelar su compra, le pedimos que nos contacte a
          angelicagomez@mahetsi.com.mx 
          <br />
          lo antes posible para determinar si es posible cancelar su pedido.
          <br />
          b. Si decide devolver un producto, le pedimos que consulte nuestra
          política de
          <br />
          devoluciones para conocer los términos y condiciones aplicables.
          <br />
          <br />
          <b>Limitación de responsabilidad</b>
          <br />
          <br />
          a. En la medida permitida por la ley aplicable, nosotros no seremos
          responsables de
          <br />
          ningún daño directo, indirecto, incidental, especial o consecuente que
          resulte del uso de
          <br />
          la página web o de cualquier información obtenida a través de ella.
          <br />
          b. En la medida permitida por la ley aplicable, nuestra
          responsabilidad total hacia
          <br />
          usted por cualquier reclamo que surja del uso de la página web o de
          estos términos y<br />
          condiciones no superará el monto que usted haya pagado por los
          productos
          <br />
          comprados a través de nuestra página web.
          <br />
          <br />
          <b>Modificaciones de los términos y condiciones</b>
          <br />
          <br />
          Nos reservamos el derecho de modificar estos términos y condiciones en
          cualquier momento.
          <br />
          <br />
          Gracias por visitar nuestra tienda en línea, esperamos que disfrutes
          de nuestros
          <br />
          productos y servicios.
          <br />
        </p>
      </Container>
      <Footer />
    </Container>
  );
}
export default Terminos;
