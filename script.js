// Write a function called game() that takes in a function called playRound() which takes two parameters, playerSelection and computerSelection, to play a 5-round game of rock, paper, scissors. There should be a returned string for each of the outcomes, be it win, draw, or lose. The game() function must also keep score and report a loser / winner at the end of the 5 rounds.

// Write a program that takes a user's input of either rock, paper, or scissors and then compares it against the computer's random choice. If the user's choice is not the value that the computer chose, display a "You lose" message. If the user's choice is the same as the computer's, display a "Draw" message. If the computer's choice is not the value the user chose, display a "You win" message. For each round played, increase the score of either the user or the computer (or don't if there's a draw) until the first player reaches 5.

    // Will this program have a user interface, and if so, what will it look like? What kind of functionality will the interface have? Currently, this game of Rock-Paper-Scissors will be a browser console program. The only user interaction will be a textbox prompt allowing the user to input either rock, paper, or scissors.

    // If there are any inputs this program will have, will they be user-based input or will it come from somewhere else? The user will enter their input inside of a prompt() message.

    // What is the desired output? The desired output is to play a 5-round game of rock, paper, scissors between the user and the computer, with the first player to reach 5 points declared as the winner.

    // Given the inputs, what are the steps necessary to return the desired output?
    // When the user inputs a value between rock, paper, or scissors
    // Have the computer choose a random value between the three
    // If the user selection is wrong against the computer selection, display a You lose message and increase the computer score by 1
    // Else, if the computer selection is wrong against the user selection, display a You win message and increase the user score by 1
    // Else, if both selections are the same, display a Draw message, make no changes to the scoreboard, and keep playing


let playerScore = 0;
let compScore = 0;


function getComputerChoice() { // Have the computer choose a random value between rock, paper, and scissors
        const choices = ['r', 'p', 's'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

function convertToWord(letter) { // Create a function called convertToWord that takes a parameter 'letter'
    if (letter === 'r') return 'Rock'; // If 'letter' is STRICTLY EQUAL to 'r', return a string "Rock"
    if (letter === 'p') return 'Paper'; // If 'letter' is STRICTLY EQUAL to 'p', return a string "Paper"
    return "Scissors"; // Else, return "Scissors"
};

// console.log(getComputerChoice());

// Write a function that plays a single round of Rock, Paper, Scissors. The function should take two parameters - the playerSelection and computerSelection - which then returns a string that declares the winner of the round i.e "You win / lose! (choice) beats (choice)!" Remember to make the playerSelect parameter case-insensitive

// Create a function called playRound that plays a single round of RPS; the function will take two parameters, playerSelection and computerSelection. If playerSelection and computerSelection are not the same, depending on the combination, display a "You win / lose" message. (I.e if playerSelection is 's' and computerSelection is 'r', display a LOSE message. Else, if playerSelection is 'p' and computerSelection is 'r' display a WIN message.) Else, if playerSelection and computerSelection are the same, display a draw and replay the game. 

// IMPORTANT: The results of this function call should be RETURNED, not console.log'd. The returned result will be used later, so the console.log() is only there to test the function.

// Create a function called playRound that takes two parameters, playerSelection and computerSelection
// If playerSelection does not match computerSelection, return a LOSE message
// Else, if computerSelection does not match playerSelection, return a WIN message
// Otherwise, if both selections match each other, return a DRAW message and play again


function playRound() {
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase(); // Have the user input a choice between rock, paper, or scissors
    const computerSelection = convertToWord(getComputerChoice()); // Converts the random choice chosen by the computer into a string 

    switch (playerSelection + computerSelection) { // Evaluates the player's selection and the computer's selection
        case "rockRock": // If the user's choice
        case "paperPaper": // And the computer's choice
        case "scissorsScissors": // Are the same
            return("Draw"); // Return a DRAW message and replay
            break; // Break out of the function

        case "rockPaper": // If the player's choice
        case "paperScissors": // Does not match
        case "scissorsRock": // The computer's choice
            return("Lose"); // Return a LOSE message, try again
            break; 
        case "rockScissors": // If the computer's choice
        case "paperRock": // Does not match
        case "scissorsPaper": // The player's choice
            return("Win"); // You win!
            break;
    }
};

// console.log(playRound());


// Write a new function called game; use the previous function inside of this function to play a 5round game that keeps score and reports a winner / loser at end

function game() { // Create a function called game
    if (playerScore === 5) { // If the player's score is strictly equal to 5 (number), 
        console.log("Winner!"); // Return WIN message
    } else if (compScore === 5) { // Else, if the computer's score is strictly equal to 5,
        console.log("Loser! Try again?"); // Return LOSE message and ask the player to try again
    }

    const output = playRound(); // Declare a constant variable output with a value of the result gained by calling the playRound() function
    if (output === "Win") { // If the output value is strictly equal to "Win" returned value
        ++playerScore; // Increment the player's score by 1
        console.log(`Win! User's score is now ${playerScore}!`); // Return a WIN message and display the player's current score
    } else if (output === "Draw") { // Else, if the output value is strictly equal to the "Draw" returned value
        console.log('Tie! No score change!'); // Return a DRAW message and no score change indicator
    } else if (output === "Lose") { // Else, if the output is strictly equal to the "Lose" returned value
        ++compScore; // Increment the computer's score by 1
        console.log(`Lose! Computer's score is now ${compScore}!`); // Return a LOSE message and display the computer's current score
    }

};

game(); // Calls the game() function



