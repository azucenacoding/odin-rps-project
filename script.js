// Declare a variable selectionButtons and select all the queries with the data-selection attribute as its value
const selectionButtons = document.querySelectorAll('[data-selection]');

// Declare a variable finalColumn and select the query with the attribute data-final-column to assign as its value
const finalColumn = document.querySelector('[data-final-column]');

// Declare a variable compScoreSpan and select the data-comp-score attribute to store as its value
const compScoreSpan = document.querySelector('[data-comp-score]');

// Declare a variable userScoreSpan and select the data-user-score attribute to store as its value
const userScoreSpan = document.querySelector('[data-user-score]');

// Declare a constant variable SELECTIONS that will be used globally and assign an array of objects containing the selection's name, emote, and what it beats to store as its value
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]

// For each selection button, add an event listener that will listen for a click event, which will then run the following: declaring two variables for the name of the selection being made and the selection itself, which loops through the global SELECTIONS until it finds the selection that strictly matches the selectionName variable; the makeSelection() is then called, with that selection variable passed as its parameter
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;  
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    }
    )
})


// The main logic of the game; declare a function makeSelection that takes in a parameter of selection; 3 variables are declared: one that determines the computer's selection by calling the randomSelection() function, and two that determine whether the user or computer won by calling the isWinner function and passing in the selection and compSelection variables as its parameters (depending on who won); two more functions are called, one that adds the result of the selection onto the page by calling the addSelectionResult() function and a second that will increment the score of either side if they won by calling the incrementScore function 
function makeSelection(selection) {
    const compSelection = randomSelection();
    const userWinner = isWinner(selection, compSelection);
    const compWinner = isWinner(compSelection, selection);

    addSelectionResult(compSelection, compWinner);
    addSelectionResult(selection, userWinner);
    
    if (userWinner) incrementScore(userScoreSpan);
    if (compWinner) incrementScore(compScoreSpan);
}

// Declare a function incrementScore that takes in a parameter of scoreSpan, which changes the score span's inner text by first converting the text into an integer and then incrementing it by 1
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

// Declare a function addSelectionResult that takes in selection and winner as its parameters, which will add a div that contains the result of both the user's and computer's selection; if the winner condition is met, a class of 'winner' is added and reflected on the page as such; the result is then inserted after the final column defined in the HTML
function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

// Declare a function isWinner that takes in two parameters (a selection and the opponent's selection) which then checks and returns the value depending on whether selection.beats is STRICTLY equal to the name of the opponent's selection
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

// Declare a function randomSelection that returns a random selection between 0 - 2 every time the function is called
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}