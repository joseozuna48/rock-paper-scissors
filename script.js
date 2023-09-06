const choices = ["rock","paper","scissors"];

function getComputerChoice(){
    let selection = Math.floor(Math.random()*choices.length);
    return choices[selection];
}

function getPlayerSelection(){
    let playerChoice = "";
    
    playerChoice = playerChoice.toLowerCase();

    while( !choices.includes(playerChoice)){
        playerChoice = prompt("Please select rock paper or scissors:");
        playerChoice = playerChoice.toLowerCase();
    };

    return playerChoice;
    
}

function playRound(playerChoice,computerChoice){
    let result = ""
    if(playerChoice === computerChoice ){
        result  = `It's a tie, you chose ${playerChoice} and the computer chose ${computerChoice}`;
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        result = `You lose! ${computerChoice} beats ${playerChoice} `;
    }else{
        result = `You Win! ${playerChoice} beats ${computerChoice} `;
    }

    return result;
}

let player = getPlayerSelection();
let computer = getComputerChoice();

console.log( playRound(player,computer) );