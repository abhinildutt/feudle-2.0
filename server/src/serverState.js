class ServerState {
    constructor() {
        this.playerIds = [];
        this.addressToId = new Map();
        this.idToAddress = new Map();
        this.playersReady = new Map();
        this.gameStarted = false;
    }

    getPlayerCount() {
        return this.playerIds.length;
    }

    getNextPlayerId() {
        let id = this.playerIds.length;
        this.playerIds.push(id + 1);
        return id;
    }

    bindPlayer(address, id) {
        this.addressToId.set(address, id);
        this.idToAddress.set(id, address);
    }

    startGame() {
        this.gameStarted = true;
    }

    endGame() {
        this.gameStarted = false;
    }
}

module.exports = { ServerState };