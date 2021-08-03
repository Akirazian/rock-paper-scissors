
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function computerPlay() {
  switch (getRandomInt(1, 4)) {
    case 1:
      comp = "rock";
      break;
    case 2:
      comp = "paper";
      break;
    case 3:
      comp = "scissors";
      break;
  }
  return comp;
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const results = document.getElementById("results");
const score = document.getElementById("score");
const final = document.getElementById("final");

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

let playerScore = 0;
let computerScore = 0;

function playRound (event) {
  let computerSelection = computerPlay();
  let selection = event.target.id;
  if (computerSelection === selection) { // If it's a draw
    results.innerHTML = "You both picked " + selection + ", It's a draw!";
    return "draw"
  } else if (computerSelection === "rock" && selection === "paper") {
    results.innerHTML = "You win! Paper beats Rock!";
    playerScore++;
  } else if (computerSelection === "rock" && selection === "scissors") {
    results.innerHTML = "You lose! Rock beats Scissors!";
    computerScore++;
  } else if (computerSelection === "paper" && selection === "rock") {
    results.innerHTML = "You lose! Paper beats Rock!";
    computerScore++;
  } else if (computerSelection === "paper" && selection === "scissors") {
    results.innerHTML = "You win! Scissors beat Paper!";
    playerScore++;
  } else if (computerSelection === "scissors" && selection === "rock") {
    results.innerHTML = "You win! Rock beats Scissors!";
    playerScore++;
  } else if (computerSelection === "scissors" && selection === "paper") {
    results.innerHTML = "You lose! Scissors beats paper!";
    computerScore++;
  }

  score.innerHTML = `Player: ${playerScore} / Computer: ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    rockButton.removeEventListener("click", playRound);
    paperButton.removeEventListener("click", playRound);
    scissorsButton.removeEventListener("click", playRound);

    if (playerScore > computerScore) {
      final.innerHTML = "Congratulations, you've beaten the Computer!";
    } else if (playerScore === computerScore) {
      final.innerHTML = "Sorry folks, it's a tie!";
    } else {
      final.innerHTML = "Oof, the Computer has beaten you!";
    }

    let resetButton = document.createElement('button');
    resetButton.id = "reset";
    resetButton.innerText = "Play Again?";
    resetButton.addEventListener("click", reset);

    document.querySelector("main").appendChild(resetButton);

  }
}

function reset() {
  rockButton.addEventListener("click", playRound);
  paperButton.addEventListener("click", playRound);
  scissorsButton.addEventListener("click", playRound);

  playerScore = 0;
  computerScore = 0;
  score.innerHTML = "Player: 0 / Computer: 0";
  results.innerHTML = "";
  final.innerHTML = "";

  let resetButton = document.getElementById("reset");

  document.querySelector("main").removeChild(resetButton);

}
