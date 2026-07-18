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

// this step should play a round and return the result

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return alert("You lose")
        } else if (computerChoice === "scissors") {
            return alert("You win")
        } else {
            return alert("Tie")
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return alert("You lose")
        } else if (computerChoice === "rock") {
            return alert("You win")
        } else {
            return alert("tie")
        }
    } else {
        if (computerChoice === "rock") {
            return alert("You lose")
        } else if (computerChoice === "paper") {
            return alert("You win")
        } else {
            return alert("tie")
        }
    }
}

playRound(humanChoice, computerChoice)

       





