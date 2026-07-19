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
console.log("Computer picked " + computerChoice)

// this step should get the human choice

function getHumanChoice() {
    return prompt("What is your choice?").toLowerCase()
}

const humanChoice = getHumanChoice()
console.log("You picked " + humanChoice)

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

// this section should update the score after a round is played

function updateScore(result) {
    if (result == "You win") {
        return ++humanScore
    } else if (result == "You lose") {
        return ++computerScore
    } else {
        return "tie"
    }
}

updateScore(result)

// for testing- This should display score after a round.
// can probably be removed or adjusted once game is setup to play 5 rounds 

console.log("Human score: " + humanScore)
console.log("Computer score: " + computerScore)








       





