console.log("Hello, world!")

// Randomly return "rock", "paper", or "scissors" for the computer choice

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

// Get human choice

function getHumanChoice() {
    return prompt("What is your choice?").toLowerCase()
}
const humanChoice = getHumanChoice()


// for testing- This should display score after a round.
// can probably be removed or adjusted once game is setup to play 5 rounds 

console.log("Human score: " + humanScore)
console.log("Computer score: " + computerScore)

// Play a full game of RPS, which is 5 rounds

function playGame() {
    let computerScore = 0
    let humanScore = 0
    

    // Play one round of RPS: decide winner, update score
    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice(Math.random())) {
        let roundResult 
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                roundResult = "You lose";
                console.log("Paper beats rock. You lose.");
                ++computerScore;
            } else if (computerChoice === "scissors") {
                roundResult = "You win";
                console.log("Rock beats scissors. You win!");
                ++humanScore;
            } else {
                roundResult = "tie";
                console.log("Tie: no points awarded.");
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                roundResult = "You lose";
                ++computerScore;
                console.log("Scissors beats paper. You lose.");
            } else if (computerChoice === "rock") {
                roundResult = "You win";
                console.log("Paper beats rock. You win!");
                ++humanScore;
            } else {
                roundResult = "tie";
                console.log("Tie: no points awarded.");
            }
        } else {
            if (computerChoice === "rock") {
                roundResult = "You lose";
                console.log("Rock beats scissors. You lose.");
                ++computerScore;
            } else if (computerChoice === "paper") {
                roundResult = "You win";
                console.log("Scissors beats paper. You win!");
                ++humanScore;
            } else {
                roundResult = "tie";
                console.log("Tie: no points awarded.");
            }
        }
    }
    console.log("Round 1");
    playRound();
    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)

    console.log("Round 2");
    playRound();
    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)

    console.log("Round 3");
    playRound();
    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)

    console.log("Round 4");
    playRound();
    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)

    console.log("Round 5");
    playRound();
    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)
}






       





