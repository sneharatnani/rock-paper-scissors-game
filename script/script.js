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
let modal = document.createElement('div');
let modalHead = document.createElement('h2');
let modalBtn = document.createElement('button');
modalHead.classList.add('pop-head');
modal.classList.add('pop-up');
modalBtn.classList.add('pop-button');
modalBtn.textContent = 'play again';
modal.append(modalHead, modalBtn);



// make a function to get random choice from computer
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
                inform.textContent = "You loose! paper beats rock";
                getWinner();
                break;

            case (e.target.id === 'rock' && computerSelection === "scissors"):
                playerPoint.textContent = ++playerScore;
                compPoint.textContent = computerScore;
                inform.textContent = "You win! rock beats scissors";
                getWinner();
                break;

            case (e.target.id === 'paper' && computerSelection === 'rock'):
                playerPoint.textContent = ++playerScore;
                compPoint.textContent = computerScore;
                inform.textContent = 'You win! paper beats rock';
                getWinner();
                break;

            case (e.target.id === 'paper' && computerSelection === 'scissors'):
                playerPoint.textContent = playerScore;
                compPoint.textContent = ++computerScore;
                inform.textContent = 'You loose! scissors beats paper';
                getWinner();
                break;


            case (e.target.id === 'scissors' && computerSelection === 'rock'):
                playerPoint.textContent = playerScore;
                compPoint.textContent = ++computerScore;
                inform.textContent = 'You loose! rock beats scissors';
                getWinner();
                break;

            case (e.target.id === 'scissors' && computerSelection === 'paper'):
                playerPoint.textContent = ++playerScore;
                compPoint.textContent = computerScore
                inform.textContent = 'You win! scissors beats paper'
                getWinner();
                break;


            case (e.target.id === computerSelection):
                playerPoint.textContent = playerScore;
                compPoint.textContent = computerScore;
                inform.textContent = "it's a tie"
                getWinner();
                break;
        }
    }
}


playerOptions.forEach((option) => {
    option.addEventListener('click', playGame);
});


// declare the final winner
function getWinner() {
    if (playerScore === 5) {
        modalHead.textContent = 'yey!! you won';
        inform.textContent = '';
        playerPoint.textContent = 0;
        compPoint.textContent = 0;
        playerScore = 0;
        computerScore = 0;
        compChoice.textContent = '';
        playerChoice.textContent = '';
        modal.style.visibility = 'visible';
        // document.body.setAttribute("style", 'visibility: hidden');
        document.body.appendChild(modal);
        main.setAttribute('id', "overlay");


        modalBtn.addEventListener('click', () => {
            modal.remove();
            // document.body.removeAttribute("style");
            main.removeAttribute('id');
        });

    }
    else if (computerScore === 5) {
        modalHead.textContent = 'ooh!! you lost';
        inform.textContent = '';
        playerPoint.textContent = 0;
        compPoint.textContent = 0;
        playerScore = 0;
        computerScore = 0;
        compChoice.textContent = '';
        playerChoice.textContent = '';
        /*     modal.style.visibility = 'visible';
            document.body.setAttribute("style", 'visibility: hidden'); */
        document.body.appendChild(modal);
        main.setAttribute('id', "overlay");


        modalBtn.addEventListener('click', () => {
            modal.remove();
            /* document.body.removeAttribute("style"); */
            main.setAttribute('id');


        });
    }
}








