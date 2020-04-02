import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar>
          <Navbar.Brand href="#">Interval</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">USERNAME</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Container fluid>
        <Row>
          <Col>Left Sidebar</Col>
          <Col xs={6}>Main Content</Col>
          <Col>Right Sidebar</Col>
        </Row>
      </Container>
      <footer></footer>
    </div>
  );
}

export default App;
