import { Col, Row } from "react-bootstrap";
import "./assets/styles.css";
import GgBackground from "./components/GgBackground";
import GgBottomNav from "./components/GgBottomNav";
import GgHero from "./components/GgHero";
import GgHome from "./components/GgHome";
import GgProjects from "./components/GgProjects";
import GgTopNav from "./components/GgTopNav";

function App() {
  return (
    <>
      <GgBackground />
      <GgTopNav />
      <Row className='offset-nav-top'>
        <Col>
          <GgHome />
        </Col>
      </Row>
      <Row>
        <Col>
          <GgHero />
        </Col>
      </Row>
      <Row className='offset-nav-bottom'>
        <GgProjects />
      </Row>
      <GgBottomNav />
    </>
  );
}

export default App;
