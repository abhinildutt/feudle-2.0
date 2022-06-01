import React, { Component } from 'react'
import {io} from 'socket.io-client'
import { MessageType } from "./shared";
import Feudle from "./logic/feudle";
import ClientState from "./logic/clientState";
import { getWord } from './logic/lib';

import './App.css';
import Box_player1 from "./components/Board/Box_player1";
import Box_player2 from "./components/Board/Box_player2"
import Keyboard from './components/Keyboard/Keyboard';
import Timer from './components/Timer/Timer';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: new Feudle(),
			clientState: new ClientState(),
		}
		this.socket = io("http://localhost:5000");
	}

	componentDidMount() {
    	this.socket.on('connect', () => {
			console.log("Connected to server");
			this.handlePackets();

			this.sendPacket(MessageType.JoinEvent, {});
		});
	}

	handlePackets() {
		this.socket.on(MessageType.AssignIdEvent, (data) => {
			let assignedId = data.id;
			this.state.clientState.setId(assignedId);
		});

		this.socket.on(MessageType.StartEvent, (data) => {
			let index = data.index;
			let word = getWord(index);
			this.state.game.setWord(word);
			this.state.clientState.setWord(word.toUpperCase());
			this.state.clientState.setGameStarted(true);
		});

    	this.socket.on(MessageType.GuessEvent, (data) => {
			let guess = data.guess;
			let colorVec = this.state.clientState.getColorVec(guess);
			
			// TODO: guess stuff
		});

		this.socket.on(MessageType.EndEvent, (data) => {
			let id = data.id;
			this.state.clientState.setGameOver(true);
			if (id === this.state.clientState.getId()) {
				console.log("You won!");
			} else {
				console.log("You lost!");
			}
		});
	}

	sendPacket(messageType, payload) {
		let messageMapping = new Map([
			[MessageType.JoinEvent, "JoinEvent"],
			[MessageType.AssignIdEvent, "AssignIdEvent"],
			[MessageType.ReadyEvent, "ReadyEvent"],
			[MessageType.StartEvent, "StartEvent"],
			[MessageType.GuessEvent, "GuessEvent"],
			[MessageType.FinishEvent, "FinishEvent"],
			[MessageType.EndEvent, "EndEvent"]
		]);
		let messageTypeString = messageMapping.get(messageType);
		console.log(`Sending ${messageTypeString} to server`);
		this.socket.emit(messageType, payload);
	}

 	render() {
		return (
			<>
				<div className="font-center"> Feudle </div>
				<hr className="solid"/>  
				<Box_player1/>
				<Box_player2/>
				<Keyboard/>
				<Timer/>
			</>
		);
	};
}

export default App;