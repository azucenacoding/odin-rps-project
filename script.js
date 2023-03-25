// Begin with a function called getComputerChoice that will randomly return either 'Rock', 'Paper', or 'Scissors'
// Create a function that returns a random choice of rock, paper, or scissors
    // Will this program have a user interface, and if so, what will it look like? What kind of functionality will the interface have? Currently, this game of Rock-Paper-Scissors will be a browser console program. The only user interaction will be allowing users to choose between rock, paper, and scissors against the computer
    // If there are any inputs this program will have, will they be user-based input or will it come from somewhere else? The user will choose / input between rock, paper, and scissors.
    // What is the desired output? The desired output is to play a 5-round game of rock, paper, scissors between the user's choices and the computer's choices.
    // Given the inputs, what are the steps necessary to return the desired output?
    // When the user chooses between rock, paper or scissors
    // Have the computer return one of those choices randomly
    // If the computer chooses the wrong value against the player's choice, display a 'You win' message
    // Else, if the computer chooses the right value against the player choice, display a 'You lose' message
    // Otherwise, draw and replay

function getComputerChoice() {
        const choices = ['r', 'p', 's'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

// console.log(getComputerChoice());

// Write a function that plays a single round of Rock, Paper, Scissors. The function should take two parameters - the playerSelection and computerSelection - which then returns a string that declares the winner of the round i.e "You win / lose! (choice) beats (choice)!" Remember to make the playerSelect parameter case-insensitive


