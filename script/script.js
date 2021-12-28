// make 2 variable which will store the score of computer and player
let playerScore = 0;
let computerScore = 0;

// make a function which takes computer's choice and user's choice and return greeting and score


let playerOptions = document.querySelectorAll('.option button');
let playerChoice = document.querySelector('#player-choice');
let cShow = document.querySelector('#comp-choice');
let inform = document.querySelector('#show-text');
let playerPoint = document.querySelector('.player-score');
let compPoint = document.querySelector('.computer-score');
let winner = document.querySelector('#declare-winner');
let tryAgain = document.createElement('button');
tryAgain.textContent = 'try again';

tryAgain.addEventListener('click', () => {
    window.reload();
})

// make a function to get random choice from computer
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function showPlayerChoice(e) {
    playerChoice.textContent = e.target.id;
}


function oneRound(e) {
    computerSelection = computerPlay();
    cShow.textContent = computerSelection;


    while (computerScore < 3 && playerScore < 3) {
        switch (true) {
            case (e.target.id === 'rock' && computerSelection === "paper"):
                return inform.textContent = 'You loose! paper beats rock', playerPoint.textContent = playerScore, compPoint.textContent = ++computerScore;

            case (e.target.id === 'rock' && computerSelection === "scissors"):
                return inform.textContent = "You win! rock beats scissors", playerPoint.textContent = ++playerScore, compPoint.textContent = computerScore;

            case (e.target.id === 'paper' && computerSelection === 'rock'):
                return inform.textContent = 'You win! paper beats rock', playerPoint.textContent = ++playerScore, compPoint.textContent = computerScore;

            case (e.target.id === 'paper' && computerSelection === 'scissors'):
                return inform.textContent = 'You loose! scissors beats paper', playerPoint.textContent = playerScore, compPoint.textContent = ++computerScore;

            case (e.target.id === 'scissors' && computerSelection === 'rock'):
                return inform.textContent = 'You loose! rock beats scissors', playerPoint.textContent = playerScore, compPoint.textContent = ++computerScore;

            case (e.target.id === 'scissors' && computerSelection === 'paper'):
                return inform.textContent = 'You win! scissors beats paper', playerPoint.textContent = ++playerScore, compPoint.textContent = computerScore;

            case (e.target.id === computerSelection):
                return inform.textContent = "it's a tie", playerPoint.textContent = playerScore, compPoint.textContent = computerScore;

        }
    }


    getWinner();
}

playerOptions.forEach((str) => {
    str.addEventListener('click', showPlayerChoice);
});

playerOptions.forEach((arr) => {
    arr.addEventListener('click', oneRound);
});




// this function will play some rounds and will return score and winner at the end of those rounds
function game() {
    /*  while (computerScore < 3 && playerScore < 3) {
 
     } */

}



function getWinner() {
    if (playerScore > computerScore) {
        winner.textContent = `player: ${playerScore} and computer: ${computerScore} You won!!!`;

    } else {
        winner.textContent = `player: ${playerScore} and computer: ${computerScore} You lost!!!`;
    }

    winner.appendChild(tryAgain);

}







