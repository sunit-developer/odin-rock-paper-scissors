// Declare and initialize two global scope variables to track players' score
let humanScore = 0;
let computerScore = 0;

// Logic to get the computer choice based on a random number

// Function to generate the computer's choice (rock, paper, or scissors)
function getComputerChoice() {
    // Generate a random number between 1 and 100 by calling getRandomNumber()
    let pickedCompNumber = getRandomNumber();

    // Declare a variable to store the computer's choice (rock, paper, or scissors)
    let pickedCompString;

    // Determine the computer's choice based on the picked number
    if (pickedCompNumber >= 1 && pickedCompNumber <= 33) {
        // If the number is between 1 and 33, the computer chooses "rock"
        pickedCompString = "rock";
    }

    else if (pickedCompNumber >= 34 && pickedCompNumber <= 66) {
        // If the number is between 34 and 66, the computer chooses "paper"
        pickedCompString = "paper";
    }

    else if (pickedCompNumber >= 67 && pickedCompNumber <= 100) {
        // If the number is between 67 and 100, the computer chooses "scissors"
        pickedCompString = "scissors";
    }

    // Return the computer's choice as a string (rock, paper, or scissors)
    return pickedCompString;
}

// Function to generate a random number between 1 to 100
function getRandomNumber() {
    // Generate a random number between 1 and 100 using Math.random() and Math.floor()
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Return the generated random number
    return randomNumber;
}

// Function to get the human player's choice
function getHumanChoice() {
    // Prompt the user to enter their choice (rock, paper, or scissors)
    let humanInput = prompt("Enter your choice:");

    // Check if the input is "rock"
    if (humanInput === "rock") {
        return humanInput;
    }

    // Check if the input is "paper"
    else if (humanInput === "paper") {
        return humanInput;
    }

    // Check if the input is "scissors"
    else if (humanInput === "scissors") {
        return humanInput;
    }

    // If input doesn't match any valid option, nothing is returned (undefined)
}

// Call the function to prompt the user and get their choice
getHumanChoice();

























