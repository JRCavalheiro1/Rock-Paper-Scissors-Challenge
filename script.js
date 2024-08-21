//return a random choice: 'rock', 'paper' or 'scissors'
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3); //index takes a random integer value from 0 to 3
    console.log( 'Computer choice: ' + choice[index]);
    return choice[index].toLowerCase(); //return the string at the current index
} 

//return a human choice by paramater
function getHumanChoice(choice) {
    console.log('Human choice: ' + choice);
    return choice.toLowerCase();
}



let computerScore = 0;
let humanScore = 0;

//playRound function will aplied the main rules of the game and 
//check wether human choice is the same as computer's choice or all conditions that human wins. If they don't meet the conditions 
//it represents the opposite result, so the computer wins.

const result = document.createElement("div");


function playRound(humanChoice, computerChoice) {
    humanScore++;
    if(humanChoice === computerChoice) { 
        humanScore--;
        console.log('no one wins');
        result.textContent = "No one wins this round"

    } else if(humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('human wins');
        result.textContent = "The Human wins this round"

    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('human wins');
        result.textContent = "The Human wins this round"

    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('human wins');
        result.textContent = "The Human wins this round"
    } else {
        humanScore--;
        computerScore++;
        console.log('computer wins');
        result.textContent = "The Computer wins this round"
    }
    console.log(`Computer Score: ${computerScore} --- Human Score: ${humanScore}`);
    
   if(humanScore == 5) {
        result.textContent = `The human wins the game! Human Score: ${humanScore} ComputerScore: ${computerScore}`
   } else if(computerScore == 5) {
        result.textContent = `The computer wins the game! Human Score: ${humanScore} ComputerScore: ${computerScore}`
   }
   
}
 
const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");
const div = document.querySelector("div");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";


buttonRock.addEventListener("click", ()=> {
    playRound(getHumanChoice("rock"), getComputerChoice());
});
buttonPaper.addEventListener("click", ()=> {
    playRound(getHumanChoice("Paper"), getComputerChoice());
});
buttonScissors.addEventListener("click", ()=> {
    playRound(getHumanChoice("Scissors"), getComputerChoice());
});

div.appendChild(buttonRock);
div.appendChild(buttonPaper);
div.appendChild(buttonScissors);
div.appendChild(result);

/*
function playGame(rounds) {
    let userChoice;
    let humanPick; 
    let computerPick;

    for(let i=0; i < rounds; i++) {
        userChoice = prompt("What is your play: rock, paper or scissors? ");
        humanPick = getHumanChoice(userChoice);
        computerPick = getComputerChoice();
        playRound(humanPick, computerPick);
    }

    if(computerScore > humanScore) {
        console.log('Computer wins the game!');
    } else if (computerScore < humanScore) {
        console.log('Human wins the game!');
    } else {
        console.log('The game tied');
    }
}

*/

//playGame(5);



