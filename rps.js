const roundOutcome = [
    [["Tie", 0],[ "paper beats rock", 2], ["rock beats sissors", 1]],
    [["paper beats rock", 1], ["Tie", 0], ["sissors beats paper", 2]],
    [["rock beats sissors", 2], ["sissors beats paper", 1], ["Tie", 0]]
];

const choice = ["rock", "paper", "sissors"];

var n2c = {
    0: "rock",
    1: "paper",
    2: "sissors"
};

var c2n = {
    "rock": 0,
    "paper": 1,
    "sissors": 2
};

function getComputerChoice() {
    let cchoice = Math.floor(Math.random() * 3);
    return cchoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let pchoice = c2n[playerSelection]
    console.log(`Player chose ${n2c[pchoice]}`);
    let cchoice = getComputerChoice();
    console.log(`Computer chose ${n2c[cchoice]}`);
    outcome = roundOutcome[pchoice][cchoice]
    let result = `${outcome[0]} ${outcome[1] > 0 ? outcome[1] + " won round!":outcome[1] + " round!"}`
    return result
}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));