// Define the choices and scores
const choices = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;

// Update the score display
function updateScore() {
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
}

function resetScore() {
  wins = 0;
  losses = 0;
}

// Play the game
function playGame(playerChoice) {
  // Get the computer's choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let choice = `You chose ${playerChoice}, Computer chose ${computerChoice}, `;

  // Determine the winner
  if (playerChoice === computerChoice) {
      document.getElementById("messagebox").textContent = `You both chose ${computerChoice}, Tie round!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    wins++;
    if (wins < 5) {
      document.getElementById("messagebox").textContent = `${choice} You won this round!`;
    } else {
      document.getElementById("messagebox").textContent = `${choice} You won this game!`;
      resetScore()
    }
  } else {
    losses++;
    if (losses < 5) {
      document.getElementById("messagebox").textContent = `${choice} Computer won this round!`;
    } else {
      document.getElementById("messagebox").textContent = `${choice} Computer won this game!`;
      resetScore()
    }
  }

  // Update the score display
  updateScore();
}