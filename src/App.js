import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Container, Row, Col} from "react-bootstrap"
function App() {
  return (
    <div className="App">
      <Header category1={"Ropa"} category2={"Calzado"} category3={"Accesorios"}/>
      <main className="main-content">
        <Container>
          <Row className="my-5">
            <Col>
              <h1>web e-comerce</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer greeting={"footer WEB"} greeting2={"Segundo saludo"}  greeting3={"Tercer saludo"}/>
    </div>
  );
}

export default App;
