#! /user/bin/evn node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
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
    rl.question("Enter your guess: ", (input) => {
        const guess = parseInt(input);
        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            askForGuess();
        }
        else {
            attempts++;
            checkGuess(guess);
        }
    });
}
// Function to check the player's guess
function checkGuess(guess) {
    if (guess === secretNumber) {
        console.log(`Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`);
        rl.close();
    }
    else if (guess < secretNumber) {
        console.log("Too low. Try again.");
        askForGuess();
    }
    else {
        console.log("Too high. Try again.");
        askForGuess();
    }
}
// Start the game
startGame();
