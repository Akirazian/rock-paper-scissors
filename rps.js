
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

function playRound (playerSelection) {
  let computerSelection = computerPlay();
  let selection = playerSelection.toLowerCase();
  if (computerSelection === selection) { // If it's a draw
    return "You both picked " + selection + ", It's a draw!";
  } else if (computerSelection === "rock" && selection === "paper") {
    return "You win! Paper beats Rock!";
  } else if (computerSelection === "rock" && selection === "scissors") {
    return "You lose! Rock beats Scissors!";
  } else if (computerSelection === "paper" && selection === "rock") {
    return "You lose! Paper beats Rock!";
  } else if (computerSelection === "paper" && selection === "scissors") {
    return "You win! Scissors beat Paper!";
  } else if (computerSelection === "scissors" && selection === "rock") {
    return "You win! Rock beats Scissors!";
  } else if (computerSelection === "scissors" && selection === "paper") {
    return "You lose! Scissors beats paper!";
  }
}

function game() {
  for (i=0; i < 5; i++) {
    result = playRound(prompt("Rock, Paper or Scissors?"));
    console.log(result);
  }
}
