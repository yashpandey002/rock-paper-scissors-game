'use strict';

const getComputerChoice = function () {
    const randNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';
    switch (randNum) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
    }

    return computerChoice;
};

const playSingleGame = function () {
    // All posibilities
    // rock against paper
    // paper against rock
    // paper against scissors
    // scissors against paper
    // scissors against rock
    // rock against scissors

    const computerSelection = getComputerChoice();
    const playerSelection = prompt('Enter your choice: ');

    // Check for Rock and Paper
    // rock against paper
    // paper against rock
    if (
        playerSelection.toLowerCase() == 'rock' &&
        computerSelection == 'Paper'
    ) {
        console.log('You Lose! Paper beats Rock');
        return 'computer';
    } else if (
        playerSelection.toLowerCase() == 'paper' &&
        computerSelection == 'Rock'
    ) {
        console.log('You Won! Paper beats Rock');
        return 'player';
    }

    // Check for Paper and Scissors
    // paper against scissors
    // scissors against paper
    else if (
        playerSelection.toLowerCase() == 'paper' &&
        computerSelection == 'Scissors'
    ) {
        console.log('You Lose! Scissors beats Paper');
        return 'computer';
    } else if (
        playerSelection.toLowerCase() == 'scissors' &&
        computerSelection == 'Paper'
    ) {
        console.log('You Won! Scissors beats Paper');
        return 'player';
    }

    // Check for Rock and Scissors
    // scissors against rock
    // rock against scissors
    else if (
        playerSelection.toLowerCase() == 'rock' &&
        computerSelection == 'Scissors'
    ) {
        console.log('You Won! Rock beats Scissors');
        return 'player';
    } else if (
        playerSelection.toLowerCase() == 'scissors' &&
        computerSelection == 'Rock'
    ) {
        console.log('You Lose! Rock beats Scissors');
        return 'computer';
    }

    // If both have same signs
    else {
        console.log('Game tied');
        return 'tied';
    }
};

const game = function () {
    let compWinningCount = 0;
    let playerWinningCount = 0;
    let gameLength = 5;
    for (let i = 0; i < gameLength; i++) {
        const currentWinner = playSingleGame();

        if (currentWinner === 'player') {
            playerWinningCount++;
        } else if (currentWinner == 'computer') {
            compWinningCount++;
        } else if (currentWinner == 'tied') {
            gameLength++;
        }
    }

    console.log(`Computer Won: ${compWinningCount}`);
    console.log(`Player Won: : ${playerWinningCount}`);
};
