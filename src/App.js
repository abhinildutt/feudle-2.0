import "./App.css";
import React from "react";
import Box_player1 from "./components/Board/Box_player1.js";
import Box_player2 from "./components/Board/Box_player2.js";
import Keyboard from "./components/Keyboard/Keyboard";
import Timer from "./components/Timer/Timer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div class="App-window">
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css"
      />
      <div class="font-center"> Feudle </div>
      <hr class="solid" />
      <Container>
        <Row>
          <Col>
            <Timer />
          </Col>
          <Col sm={6}>
            <Box_player1 />
          </Col>
          <Col>
            <Box_player2 />
          </Col>
        </Row>
      </Container>
      <Keyboard />
    </div>
  );
}

export default App;
