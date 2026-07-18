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

console.log("Computer picks " + computerChoice)

// this step should get the human choice

const humanInput = prompt("What is your choice?")
const humanChoice = humanInput.toLowerCase()

console.log("Human picks " + humanChoice)

// this step should declare score variables at a global scale, starting with zero 

let computerScore = 0
let humanScore = 0

// this step should decide round winner

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "You lose"
        } else if (computerChoice === "scissors") {
            return "You win"
        } else {
            return "Tie"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return "You lose"
        } else if (computerChoice === "rock") {
            return "You win"
        } else {
            return "tie"
        }
    } else {
        if (computerChoice === "rock") {
            return "You lose"
        } else if (computerChoice === "paper") {
            return "You win"
        } else {
            return "tie"
        }
    }
}

const result = playRound(humanChoice, computerChoice)
console.log(result)

function updateScore(result) {
    if (result == "You win") {
        return ++humanScore
    } else if (result == "You lose") {
        return ++computerScore
    } else {
        return console.log("Tie! No score change.")
    }
}

updateScore(result)
console.log("Human score: " + humanScore)
console.log("Computer score: " + computerScore)






       





