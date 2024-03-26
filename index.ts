#! /user/bin/evn node
import * as readline from 'readline';

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create interface for reading input from console 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the range for the random number
const minNumber = 1;
const maxNumber = 100;
const secretNumber = getRandomNumber(minNumber, maxNumber);
let attempts = 0;

// Function to start the game
function startGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}.`);
    askForGuess();
}

// Function to ask for player's guess
function askForGuess() {
    rl.question("Enter your guess: ", (input: string) => {
        const guess = parseInt(input);
        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            askForGuess();
        } else {
            attempts++;
            checkGuess(guess);
        }
    });
}

// Function to check the player's guess
function checkGuess(guess: number) {
    if (guess === secretNumber) {
        console.log(`Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`);
        rl.close();
    } else if (guess < secretNumber) {
        console.log("Too low. Try again.");
        askForGuess();
    } else {
        console.log("Too high. Try again.");
        askForGuess();
    }
}

// Start the game
startGame();
