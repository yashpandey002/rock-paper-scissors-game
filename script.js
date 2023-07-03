'use strict';

const getComputerChoice = function () {
    const randNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';
    switch (randNum) {
        case 1:
            computerChoice = '✊';
            break;
        case 2:
            computerChoice = '✋';
            break;
        case 3:
            computerChoice = '✌';
            break;
    }

    return computerChoice;
};

const playSingleGame = function (playerChoice, computerChoice) {
    // Check for Rock✊ and Paper✋
    if (playerChoice === '✊' && computerChoice === '✋') {
        return [
            {
                winningMessage: 'You Lose! Paper beats Rock',
                winner: 'computer',
            },
        ];
    } else if (playerChoice === '✋' && computerChoice === '✊') {
        return [
            {
                winningMessage: 'You Won! Paper beats Rock',
                winner: 'player',
            },
        ];
    }

    // Check for Rock✊ and Scissors✌
    else if (playerChoice === '✊' && computerChoice === '✌') {
        return [
            {
                winningMessage: 'You Won! Rock beats Scissors',
                winner: 'player',
            },
        ];
    } else if (playerChoice === '✌' && computerChoice === '✊') {
        return [
            {
                winningMessage: 'You Lose! Rock beats Scissors',
                winner: 'computer',
            },
        ];
    }

    // Check for Paper✋ and Scissors✌
    else if (playerChoice === '✋' && computerChoice === '✌') {
        return [
            {
                winningMessage: 'You Lose! Scissors beats Paper',
                winner: 'computer',
            },
        ];
    } else if (playerChoice === '✌' && computerChoice === '✋') {
        return [
            {
                winningMessage: 'You Won! Scissors beats Paper',
                winner: 'player',
            },
        ];
    }

    // If both have same signs
    else {
        return [
            {
                winningMessage: 'Game tied!',
                winner: 'tied',
            },
        ];
    }
};

let gameCount = 0;
let playerWinningCount = 0;
let computerWinningCount = 0;
const optionsPlayerHave = document.querySelectorAll('.option__box');
optionsPlayerHave.forEach((option) => {
    option.addEventListener('click', () => {
        const currentGameUpdate = document.querySelector('.update');
        const playerChoiceEl = document.getElementById('player-choice');
        const computerChoiceEl = document.getElementById('computer-choice');
        const playerScore = document.getElementById('player-score');
        const computerScore = document.getElementById('computer-score');
        const gameOverBox = document.querySelector('.game-over-box');
        const finalWinner = document.getElementById('final-winner');
        const playerChoice = option.getAttribute('id');
        const computerChoice = getComputerChoice();

        playerChoiceEl.textContent = playerChoice;
        computerChoiceEl.textContent = computerChoice;

        if (gameCount <= 5) {
            let [currentResults] = playSingleGame(playerChoice, computerChoice);
            let currentWinner = currentResults.winner;
            let currentWinningMessage = currentResults.winningMessage;

            // Only go in this statement if the winning message is NOT tied
            if (currentWinningMessage !== 'Game tied!') {
                currentGameUpdate.textContent = currentWinningMessage;
                currentGameUpdate.style.color = '#f8e700';
                if (currentWinner === 'player') {
                    playerWinningCount++;
                    playerScore.textContent = playerWinningCount;
                } else if (currentWinner === 'computer') {
                    computerWinningCount++;
                    computerScore.textContent = computerWinningCount;
                }

                // Incrementing the game count with 1
                gameCount++;
            }
            // If game is tied go in this statement
            else {
                currentGameUpdate.textContent = currentWinningMessage;
                // currentGameUpdate.style.color = '#fa4f00';
            }

            if (gameCount === 5) {
                if (computerWinningCount > playerWinningCount) {
                    finalWinner.textContent = 'Sorry you Lose';
                    finalWinner.style.color = '#fa4f00';
                    gameOverBox.style.display = 'flex';
                } else {
                    finalWinner.textContent = 'Congrats you Won';
                    finalWinner.style.color = '#00fa85';
                    gameOverBox.style.display = 'flex';
                }
            }
        }
    });
});

const playAgain = document.getElementById('play-again');
playAgain.addEventListener('click', () => {
    location.reload();
});
