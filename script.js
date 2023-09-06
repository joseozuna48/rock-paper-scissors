function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let selection = Math.floor(Math.random()*choices.length);
    
    return choices[selection];
}

getComputerChoice();