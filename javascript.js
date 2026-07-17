console.log("Hello, world!")

// this step should declare score variables at a global scale, starting with zero 

let computerScore = 0
let humanScore = 0

// this step should play a round

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return prompt("Tie")
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            return prompt("You lose")
        } else {
            return prompt("You win")
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            return prompt("You lose")
        } else {
            return prompt("You win")
        }
    } else (humanChoice == "scissors") ;
        if (computerChoice == "rock") {
            return prompt("You lose")
        } else {
            return prompt("You win")
        }
    }


// this step should randomly return "rock", "paper", or "scissors" for the computer choice

function getComputerChoice(randomNumber) {
    if ( randomNumber < .33 ) {
        return "Rock"
    } else if ( randomNumber < .66 ) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

const computerChoice = getComputerChoice(Math.random())

console.log("computer picks " + computerChoice)

// this step should get the human choice

const humanChoice = prompt("What is your choice?")

console.log("human picks " + humanChoice)


