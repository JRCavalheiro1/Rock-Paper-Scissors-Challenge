//return a random choice: 'rock', 'paper' or 'scissors'
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3); //index takes a random integer value from 0 to 3
    console.log( 'Computer choice: ' + choice[index])
    return choice[index].toLowerCase(); //return the string at the current index
} 

//return a human choice by paramater
function getHumanChoice(choice) {
    console.log('Human choice: ' + choice)
    return choice.toLowerCase();
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let userChoice;
    let humanPick; 
    let computerPick;

    //playRound function will aplied the main rules of the game and 
    //verify if human choice is equals to computer choice or all conditions that human wins. Case they no satisfied the conditions, 
    //it represents the opposite result, so the computer wins.
    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice) { 
            console.log('no one wins');
        } else if(humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            console.log('human wins');
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            console.log('human wins');
        } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            console.log('human wins');
        } else {
            computerScore++;
            console.log('computer wins')
        }
        console.log(`Computer Score: ${computerScore} --- Human Score: ${humanScore}`);
    }
    
    for(let i=0; i < 5; i++) {
        userChoice = prompt("What is your play: rock, paper or scissors? ");
        humanPick = getHumanChoice(userChoice);
        computerPick = getComputerChoice();
        playRound(humanPick, computerPick);
    }

    if(computerScore > humanScore) {
        console.log('Computer wins the game!')
    } else if (computerScore < humanScore) {
        console.log('Human wins the game!')
    } else {
        console.log('The game tied');
    }
}

playGame();



