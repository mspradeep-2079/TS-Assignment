import promptSync from 'prompt-sync';



const prompt = promptSync();

enum Move {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors'
}

function getComputerMove(): Move {
  const moves = [Move.ROCK, Move.PAPER, Move.SCISSORS];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function determineWinner(playerMove: Move, computerMove: Move): string {
  if (playerMove === computerMove) {
    return "It's a tie!";
  } else if (
    (playerMove === Move.ROCK && computerMove === Move.SCISSORS) ||
    (playerMove === Move.PAPER && computerMove === Move.ROCK) ||
    (playerMove === Move.SCISSORS && computerMove === Move.PAPER)
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function playGame(playerMove: Move) {
  const computerMove = getComputerMove();
  console.log(`Your move: ${playerMove}`);
  console.log(`Computer's move: ${computerMove}`);
  console.log(determineWinner(playerMove, computerMove));
}

const userInput = prompt('Enter your move (rock, paper, or scissors): ');
const playerMove = userInput.toLowerCase() as Move;
if (Object.values(Move).includes(playerMove)) {
  playGame(playerMove);
} else {
  console.log('Invalid move. Please enter rock, paper, or scissors.');
}
