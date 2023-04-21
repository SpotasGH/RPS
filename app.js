let rps = ["Rock", "Paper", "Scissors"];

let buttonsHere = document.querySelectorAll('button');

let pChoice;

let choiceComp;

let text = document.querySelector('.myText')

buttonsHere.forEach(button => button.addEventListener('click', () => {

    if (button.innerText === 'Rock') {
        pChoice = rps[0];
    } else if (button.innerText === 'Paper') {
        pChoice = rps[1];
    } else if (button.innerText === 'Scissors') {
        pChoice = rps[2];
    }
}));

function getComputerChoice() {
    choiceComp = rps[Math.floor(Math.random()*rps.length)];
    return choiceComp
}

function mainGame(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = pChoice;
    let pPoints = 0;
    let cPoints = 0;
    let result = "";

    if (playerSelection === computerSelection) {
        result='DRAWED'
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        result='WIN'
        pPoints++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        result='WIN'
        pPoints++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        result='WIN'
        pPoints++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        result='LOST'
        cPoints++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        result='LOST'
        cPoints++;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        result='LOST'
        cPoints++;
    }
    
    text.innerHTML = 'You ' + result;
}

buttonsHere.forEach(button => button.addEventListener('click', mainGame));
