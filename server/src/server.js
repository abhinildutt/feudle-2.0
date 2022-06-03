const lib = require("./shared");
const MessageType = lib.MessageType;
const BroadcastType = lib.BroadcastType;
const MAX_PLAYERS = lib.MAX_PLAYERS;

let ServerState = require("./serverState");

const express = require("express");
const socketIo = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

const io = socketIo(server,{ 
    cors: {
      origin: "http://localhost:3000"
    }
});

server.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`)
	let state = new ServerState.ServerState();
	io.on("connection", (socket) => {
		console.log(`Connected to client ${socket.id}`);
		handlePackets(socket, state);
	});
});

function sendPacket(socket, messageType, payload, broadcastType) {
	let messageMapping = new Map([
		[MessageType.JoinEvent, "JoinEvent"],
		[MessageType.AssignIdEvent, "AssignIdEvent"],
		[MessageType.ReadyEvent, "ReadyEvent"],
		[MessageType.StartEvent, "StartEvent"],
		[MessageType.GuessEvent, "GuessEvent"],
  		[MessageType.WinEvent, "WinEvent"],
		[MessageType.LoseEvent, "LoseEvent"],
	]);
	let messageTypeString = messageMapping.get(messageType);

	if (broadcastType == BroadcastType.SingleClient) {
		console.log(`Sending ${messageTypeString} to ${socket.id}`);
		socket.emit(messageType, payload);
	} else if (broadcastType == BroadcastType.AllClientsExceptOne) {
		console.log(`Sending ${messageTypeString} to all players except ${socket.id}`);
		socket.broadcast.emit(messageType, payload);
	} else if (broadcastType == BroadcastType.AllClients) {
		console.log(`Sending ${messageTypeString} to all players`);
		io.emit(messageType, payload);
	}
}

function handlePackets(socket, state) {
	socket.on(MessageType.JoinEvent, () => {
		if (state.getPlayerCount() >= MAX_PLAYERS || state.addressToId.has(socket.id)) {
			return;
		}

		let id = state.getNextPlayerId();
		state.bindPlayer(socket.id, id);
		console.log(`Player ${id} joined`);
		sendPacket(socket, MessageType.AssignIdEvent, { id: id }, BroadcastType.SingleClient);
	});

	socket.on(MessageType.ReadyEvent, (data) => {
		state.playersReady.set(data.id, true);
		console.log(`Received ready event from ${data.id}`);
		console.log(`Number of players ready ${state.playersReady.size}`);
		if (state.playersReady.size == MAX_PLAYERS) {
			console.log("Starting game");
			state.startGame();

			let index = Math.floor(Math.random() * 256);
			sendPacket(socket, MessageType.StartEvent, { index: index }, BroadcastType.AllClients);
		}
	});
	
	socket.on(MessageType.GuessEvent, (data) => {
		sendPacket(socket, MessageType.GuessEvent, data, BroadcastType.AllClientsExceptOne);
	});
	
	socket.on(MessageType.WinEvent, (data) => {
		console.log(`Player ${data.id} won`);
		state.endGame();
		sendPacket(socket, MessageType.LoseEvent, data, BroadcastType.AllClientsExceptOne);
	});
}