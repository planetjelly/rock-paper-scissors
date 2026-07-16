console.log("Hello, world!")

// step 1 should randomly return "rock", "paper", or "scissors" for the computer choice

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

// step 2 should get the human choice

const humanChoice = prompt("What is your choice?")

console.log("human picks " + humanChoice)
