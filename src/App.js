import './App.css';
import './components/Box_player1.js';
import './components/Keyboard';
import Box_player1 from './components/Box_player1.js';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"></link>
    <div class="font-center"> Feudle </div>
    <hr class="solid"/>
    <body>    
      <Box_player1/>
      {/* <Box_player2/> */}
      <Keyboard/>
    </body>
    </>
  );
}

export default App;
