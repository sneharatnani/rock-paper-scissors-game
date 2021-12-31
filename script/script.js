// to save the score
let playerScore = 0;
let computerScore = 0;

let main = document.querySelector('main');
let playerOptions = document.querySelectorAll('.option input');
let playerChoice = document.querySelector('#player-choice');
let compChoice = document.querySelector('#comp-choice');
let inform = document.querySelector('#show-text');
let playerPoint = document.querySelector('.player-score');
let compPoint = document.querySelector('.computer-score');

// for modal
let overlay = document.querySelector('.overlay');
let modal = document.createElement('div');
let modalHead = document.createElement('h2');
let modalBtn = document.createElement('button');
modalHead.classList.add('pop-head');
modal.classList.add('pop-up');
modalBtn.classList.add('pop-button');
modalBtn.textContent = 'play again';
modal.append(modalHead, modalBtn);

// to get random choice from computer
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}


// this will play the game till the score reaches 5 points and declare the final winner at the end
function playGame(e) {
    if (playerScore < 5 && computerScore < 5) {
        computerSelection = computerPlay();
        compChoice.textContent = computerSelection;
        playerChoice.textContent = e.target.id;

        switch (true) {
            case (e.target.id === 'rock' && computerSelection === "paper"):
                playerPoint.textContent = playerScore;
                compPoint.textContent = ++computerScore;
                inform.textContent = "You lost! rock is beaten by paper";
                getWinner();
                break;

            case (e.target.id === 'rock' && computerSelection === "scissors"):
                playerPoint.textContent = ++playerScore;
                compPoint.textContent = computerScore;
                inform.textContent = "You won! scissors is beaten by rock";
                getWinner();
                break;

            case (e.target.id === 'paper' && computerSelection === 'rock'):
                playerPoint.textContent = ++playerScore;
                compPoint.textContent = computerScore;
                inform.textContent = 'You won! rock is beaten by paper';
                getWinner();
                break;

            case (e.target.id === 'paper' && computerSelection === 'scissors'):
                playerPoint.textContent = playerScore;
                compPoint.textContent = ++computerScore;
                inform.textContent = 'You lost! paper is beaten by scissors';
                getWinner();
                break;


            case (e.target.id === 'scissors' && computerSelection === 'rock'):
                playerPoint.textContent = playerScore;
                compPoint.textContent = ++computerScore;
                inform.textContent = 'You lost! scissors is beaten by rock';
                getWinner();
                break;

            case (e.target.id === 'scissors' && computerSelection === 'paper'):
                playerPoint.textContent = ++playerScore;
                compPoint.textContent = computerScore;
                inform.textContent = 'You won! paper is beaten by scissors';
                getWinner();
                break;


            case (e.target.id === computerSelection):
                playerPoint.textContent = playerScore;
                compPoint.textContent = computerScore;
                inform.textContent = "it's a tie";
                getWinner();
                break;
        }
    }
}


playerOptions.forEach((option) => {
    option.addEventListener('click', playGame);
});

// declare the final winner with pop up
function removeInfo() {
    inform.textContent = '';
    playerPoint.textContent = 0;
    compPoint.textContent = 0;
    playerScore = 0;
    computerScore = 0;
    compChoice.textContent = '';
    playerChoice.textContent = '';
    modal.remove();
    overlay.removeAttribute('id');
}

function addInfo() {
    document.body.appendChild(modal);
    overlay.setAttribute('id', 'overlay');
}

function getWinner() {
    if (playerScore === 5) {
        modalHead.textContent = 'yey!! you won';
        addInfo();
        modalBtn.addEventListener('click', removeInfo);

    }
    else if (computerScore === 5) {
        modalHead.textContent = 'ooh!! you lost';
        addInfo();
        modalBtn.addEventListener('click', removeInfo);
    }
}








