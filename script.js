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
    
    
function playRound() { // Create a function called playRound
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase(); // Have the user input a random choice between rock, paper, or scissors
    const computerSelection = convertToWord(getComputerChoice()); // Converts the random computer choice to a word i.e 'r' to 'Rock'
    if (playerSelection === "rock" && computerSelection === "Rock") { // If both selections match eachother, return TIE and play again
        return("tie"); 
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') { // If playerSelection does not match computerSelection, return LOSE
        return("lose");
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return("win"); // If computerSelection does not match playerSelection, return WIN
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return("tie");
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return("lose")
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return("win");
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return("tie");
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return('lose');
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return('win');
    }
};
    
// Write a new function called game; use the previous function inside of this function to play a 5round game that keeps score and reports a winner / loser at end

function game() {
    if (playerScore === 5) {
        return 'Winner!';
    } else if (compScore === 5) {
        return 'Loser!';
    }

    const output = playRound();
    if (output === 'win') {
        ++playerScore;
        console.log(`Your score is now ${playerScore}!`);
    } else if (output === 'lose') {
        ++compScore;
        console.log(`Computer score is now ${compScore}!`);
    } else if (output === 'tie') {
        console.log('Tie! No point change!');
    }
};

game();