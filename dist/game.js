"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
var Move;
(function (Move) {
    Move["ROCK"] = "rock";
    Move["PAPER"] = "paper";
    Move["SCISSORS"] = "scissors";
})(Move || (Move = {}));
function getComputerMove() {
    const moves = [Move.ROCK, Move.PAPER, Move.SCISSORS];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}
function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "It's a tie!";
    }
    else if ((playerMove === Move.ROCK && computerMove === Move.SCISSORS) ||
        (playerMove === Move.PAPER && computerMove === Move.ROCK) ||
        (playerMove === Move.SCISSORS && computerMove === Move.PAPER)) {
        return "You win!";
    }
    else {
        return "Computer wins!";
    }
}
function playGame(playerMove) {
    const computerMove = getComputerMove();
    console.log(`Your move: ${playerMove}`);
    console.log(`Computer's move: ${computerMove}`);
    console.log(determineWinner(playerMove, computerMove));
}
const userInput = prompt('Enter your move (rock, paper, or scissors): ');
const playerMove = userInput.toLowerCase();
if (Object.values(Move).includes(playerMove)) {
    playGame(playerMove);
}
else {
    console.log('Invalid move. Please enter rock, paper, or scissors.');
}
