
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
    console.log( "You both picked " + selection + ", It's a draw!");
    return "draw"
  } else if (computerSelection === "rock" && selection === "paper") {
    console.log( "You win! Paper beats Rock!");
    return true
  } else if (computerSelection === "rock" && selection === "scissors") {
    console.log( "You lose! Rock beats Scissors!");
    return false;
  } else if (computerSelection === "paper" && selection === "rock") {
    console.log( "You lose! Paper beats Rock!");
    return false;
  } else if (computerSelection === "paper" && selection === "scissors") {
    console.log( "You win! Scissors beat Paper!");
    return true;
  } else if (computerSelection === "scissors" && selection === "rock") {
    console.log( "You win! Rock beats Scissors!");
    return true;
  } else if (computerSelection === "scissors" && selection === "paper") {
    console.log( "You lose! Scissors beats paper!");
    return false;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i=0; playerScore < 5 && computerScore < 5; i++) {
    let result = playRound(prompt("Rock, Paper or Scissors?"));
    if (result === true) {
      playerScore++;
    } else if (result === false) {
      computerScore++;
    }
    console.log (`Player: ${playerScore} / Computer: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("Congratulations, you've beaten the Computer!")
  } else if (playerScore === computerScore) {
    console.log("Sorry folks, it's a tie!");
  } else {
    console.log("Oof, the Computer has beaten you!");
  }
}
