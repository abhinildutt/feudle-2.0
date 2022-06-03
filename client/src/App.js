import React from 'react'

import './App.css';
import Timer from './components/Timer/Timer';
import Box_player1 from "./components/Board/Box_player1";
import Box_player2 from "./components/Board/Box_player2"
import Keyboard from './components/Keyboard/Keyboard';

function App() {
	return (
		<>
			<div className="font-center"> Feudle </div>
			<hr className="solid"/>  
    		<Timer />
			<Box_player1 />
			<Box_player2/>
			<Keyboard />
		</>
	);
}

export default App;