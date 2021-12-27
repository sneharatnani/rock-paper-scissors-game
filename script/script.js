// make 2 variable which will store the score of computer and player
let playerScore = 0;
let computerScore = 0;

// make a function which takes computer's choice and user's choice and return greeting and score
function playRound() {
    // variables which will save user and computer's choice
    let playerSelection = userPlay();
    let computerSelection = computerPlay();

    switch (true) {
        case (playerSelection === "rock" && computerSelection === "paper"):
            return ["You loose! paper beats rock", `You: ${playerScore}`, `computer: ${++computerScore}`];

        case (playerSelection === "rock" && computerSelection === "scissors"):
            return ["You win! rock beats scissors", `You: ${++playerScore}`, `computer: ${computerScore}`];

        case (playerSelection === "paper" && computerSelection === "rock"):
            return ["You win! paper beats rock", `You: ${++playerScore}`, `computer: ${computerScore}`];

        case (playerSelection === "paper" && computerSelection === "scissors"):
            return ["You loose! scissors beats paper", `You: ${playerScore}`, `computer: ${++computerScore}`];

        case (playerSelection === "scissors" && computerSelection === "rock"):
            return ["You loose! rock beats scissors", `You: ${playerScore}`, `computer: ${++computerScore}`];

        case (playerSelection === "scissors" && computerSelection === "paper"):
            return ["You win! scissors beats paper", `You: ${++playerScore}`, `computer: ${computerScore}`];

        default:
            return ["it's a tie", `You: ${playerScore}`, `computer: ${computerScore}`];
    }
}

// get input from user using prompt | it should be case insensitive


// make a function to get random choice from computer
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

// this function will play some rounds and will return score and winner at the end of those rounds
function game() {
    while (computerScore < 2 && playerScore < 2) {
        console.log(playRound());
    }

    /*     for (let i = 0; i < 5; i++) {
            console.log(playRound());
        } */
    return getWinner();

}

function getWinner() {
    if (playerScore > computerScore) {
        return `player: ${playerScore} and computer: ${computerScore} You won!!!`;
    } else if (playerScore < computerScore) {
        return `player: ${playerScore} and computer: ${computerScore} You lost!!!`;
    } else {
        return `player: ${playerScore} and computer: ${computerScore} No one won!!`;
    }
}
/* console.log(game()); */







