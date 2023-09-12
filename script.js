const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
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
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
        resultString = `You lose! ${computerChoice} beats ${playerChoice} `;
        result -= 1;
    } else {
        resultString = `You Win! ${playerChoice} beats ${computerChoice} `;
        result += 1;
    }

    container.textContent = resultString;

    return result;
}



function playGame() {
    const player_choice = this.dataset.choice;
    const computer_choice = getComputerChoice();

    const gameContainer = document.querySelector(".game");
    const scoreContainer = document.querySelector(".score");

    const playerContainer = document.querySelector(".player");
    const computerContainer = document.querySelector(".computer");

    let playerImg = document.querySelector(".playerImg");
    let computerImg = document.querySelector(".computerImg");


    if (playerScore < 5 && computerScore < 5) {

        gameContainer.style.visibility = "visible"


        let result = playRound(player_choice, computer_choice);

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
        playerImg.src = `/images/${player_choice}.png`;
        computerImg.src = `/images/${computer_choice}.png`;
    }

    if(playerScore === 5){
        scoreContainer.textContent = `Player wins the game`;
        playerContainer.classList.add("victory");
    }else if(computerScore ===5) {
        scoreContainer.textContent = `Computer wins the game`
        computerContainer.classList.add("victory");
    }
}

const containers = document.querySelectorAll("li");


containers.forEach(element => {
    element.addEventListener('click', playGame)
});