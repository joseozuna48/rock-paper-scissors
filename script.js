const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore =0;
let round = 0;

function getComputerChoice() {
    let selection = Math.floor(Math.random() * choices.length);
    return choices[selection];
}

function getPlayerSelection() {
    let playerChoice = "";

    playerChoice = playerChoice.toLowerCase();

    while (!choices.includes(playerChoice)) {
        playerChoice = prompt("Please select rock paper or scissors:");
        playerChoice = playerChoice.toLowerCase();
    };

    return playerChoice;

}

function playRound(playerChoice, computerChoice) {
    let resultString = ""
    let result = 0;
    let container = document.querySelector(".result");

    if (playerChoice === computerChoice) {
        resultString = `It's a tie`;
    } else if ( (playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice==="rock") ) {
        resultString = `You lose! ${computerChoice} beats ${playerChoice} `;
        result -= 1;
    } else {
        resultString = `You Win! ${playerChoice} beats ${computerChoice} `;
        result += 1;
    }

    container.textContent = resultString;

    return result;
}
 

// console.log(`Player score: ${playerScore}, Computer Score: ${computerScore} Round ${i+1}`);



function playGame(){
    const player = this.dataset.choice;
    const computer = getComputerChoice();
    const scoreContainer = document.querySelector(".score");

    let result = playRound(player,computer);

    switch (result) {
        case 1:
            playerScore++;
            break;
        case -1:
            computerScore++;
            break;
    } 

    round++;

    scoreContainer.textContent = `Player:${playerScore} Computer ${computerScore} round:${round}`



}

const containers = document.querySelectorAll("li");


containers.forEach(element => {
    element.addEventListener('click', playGame)
});