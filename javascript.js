console.log("Hello, world!")


// this step should randomly return "rock", "paper", or "scissors" for the computer choice

function getComputerChoice(randomNumber) {
    if ( randomNumber < .33 ) {
        return "rock"
    } else if ( randomNumber < .66 ) {
        return "paper"
    } else {
        return "scissors"
    }
}

const computerChoice = getComputerChoice(Math.random())

console.log(computerChoice)

// this step should get the human choice

const humanChoice = prompt("What is your choice?")

console.log(humanChoice)

// this step should declare score variables at a global scale, starting with zero 

let computerScore = 0
let humanScore = 0

// this step should decide if the round is tied or needs to be scored

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie"
    } else if (humanChoice != computerChoice) {
        return "Need score"
    }
}

console.log(playRound(humanChoice, computerChoice))

       





