import "./App.css";
import Box_player1 from "./components/Board/Box_player1.js";
import Keyboard from "./components/Keyboard/Keyboard";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap"
        rel="stylesheet"
      ></link>
      <div class="font-center"> Feudle </div>
      <hr class="solid" />
      <body>
        <Timer />
        <Box_player1 />
        {/* <Box_player2/> */}
        <Keyboard />
      </body>
    </>
  );
}

export default App;
