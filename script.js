const choices = ["rock", "paper", "scissors"];

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
    if (playerChoice === computerChoice) {
        resultString = `It's a tie, you chose ${playerChoice} and the computer chose ${computerChoice}`;
    } else if ( (playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice==="rock") ) {
        resultString = `You lose! ${computerChoice} beats ${playerChoice} `;
        result -= 1;
    } else {
        resultString = `You Win! ${playerChoice} beats ${computerChoice} `;
        result += 1;
    }

    console.log(resultString);

    return result;
}

function game() {
    let player = "";
    let computer = "";

    let result = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        player = getPlayerSelection();
        computer = getComputerChoice();
        result = playRound(player, computer);

        switch (result) {
            case 1:
                playerScore++;
                break;
            case -1:
                computerScore++;
                break;
        }

        console.log(`Player score: ${playerScore}, Computer Score: ${computerScore} Round ${i+1}`);

    }
}

game();