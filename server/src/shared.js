const MessageType = {
    JoinEvent: 0,
    AssignIdEvent: 1,
    ReadyEvent: 2,
    StartEvent: 3,
    GuessEvent: 4,
    FinishEvent: 5,
    EndEvent: 6,
    LoseEvent: 7
}
Object.freeze(MessageType);

const BroadcastType = {
    SingleClient: 0,
    AllClientsExceptOne: 1,
    AllClients: 2
}
Object.freeze(BroadcastType);


const MAX_PLAYERS = 2;

module.exports = { MessageType, BroadcastType, MAX_PLAYERS };