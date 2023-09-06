function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let selection = Math.floor(Math.random()*choices.length);
    
    return choices[selection];
}

function getPlayerSelection(){
    const choices = ["rock","paper","scissors"];
    let playerChoice = "";
    
    playerChoice = playerChoice.toLowerCase();

    while( !choices.includes(playerChoice)){
        playerChoice = prompt("Please select rock paper or scissors:");
        playerChoice = playerChoice.toLowerCase();
    };
    
}

getPlayerSelection();