import "./App.css";
import React, { useState, useEffect } from "react";
import Box_player1 from "./components/Board/Box_player1.js";
import Box_player2 from "./components/Board/Box_player2.js";
import Keyboard from "./components/Keyboard/Keyboard";
import Timer from "./components/Timer/Timer";
import party from "party-js";
import Modal from "react-modal";
import setting from "./static/setting.png";
import stat1 from "./static/stat1.png";
// import stat2 from "./static/stat2.png";
import stat3 from "./static/stat3.png";
// import stat4 from "./static/stat4.png";


//https://codesandbox.io/s/77yom?file=/src/App.js:170-342

Modal.setAppElement("#root");
const confettiSettings = {
  shapes: [
    "square",
    "rectangle",
    "circle",
    "roundedRectangle",
    "roundedSquare",
    "star",
  ],
  // The amount of confetti particles that should be emitted.
  count: party.variation.range(150, 160),
  // The amount of spread that is applied to the emission angle. Note that the default angle points upwards.
  spread: 20,
  // The initial speed that the confetti particles are emitted with.
  speed: party.variation.range(50, 600),
  // The initial size that the confetti particles are emitted with.
  size: party.variation.skew(1, 0.8),
  // The initial rotation that the confetti particles are emitted with.
  rotation: () => party.random.randomUnitVector().scale(180),
  // The initial color that particles are emitted with.
  color: () =>
    party.random.pick([
      party.Color.fromHex("#238446"),
      party.Color.fromHex("#1D7DB2"),
      party.Color.fromHex("#FFC800"),
      party.Color.fromHex("#FFFFFF"),
    ]),
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function hover_change_source(element) {
    element.setAttribute('src', {stat3});
  }

  function toggleModal() {
    setIsOpen(!isOpen);
    window.location.reload(false);
  }

  const onOpenModal = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    setTimeout(() => {
      if (document.getElementById("modal") && isOpen) {
        party.confetti(document.getElementById("screen"), confettiSettings);
      }
    }, 300);
  }, [isOpen]);
  return (
    <div class="App-window" id="screen">
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div id="modal" className="modal-content">
          <div class="">Victory!</div>
          <img src="https://media3.giphy.com/media/3o7qE2VAxuXWeyvJIY/giphy.gif?cid=790b761147318eb571bd2a9dd168a43264f3965f56f49fc9&rid=giphy.gif&ct=g"></img>
          <button className="close-modal-btn" onClick={toggleModal}>
            Close modal
          </button>
        </div>
      </Modal>

      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css"
      />
      <div class="font-center"> Feudle </div>
      <input type= "image" src = {stat1} class="stat"/>
      <input type = "image" src = {setting} class = "sett"/>
      <hr class="solid" />
      <div class="a">
        <Timer />{" "}
      </div>
      <div class="b">
        <Box_player1 />
      </div>
      <div class="c">
        <Box_player2 />
      </div>
      <Keyboard onVictory={onOpenModal}/>
    </div>
  );
}

export default App;
