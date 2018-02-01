console.log('game.js connected');

class Game {
  /*
    START THE GAME
    1. USE FOCUS() TO FOCUS ON THE DIV WHERE THE USER IS TYPING
    2. GENERATE A RANDOM WORD
    3. START THE TIMER
    */
  startGame() {
    //Grab a new word
    words.RandomWord();
    //Disable Start button
    grabStartBTN.disabled = true;
    //Start the timer
    gameTimer();
  }

  /*
    RESET THE GAME
    1. RELOAD THE PAGE
    2. USE FOCUS() TO FOCUS ON THE DIV WHERE THE USER IS TYPING 
    */
  resetGame() {
    //Reloads the page
    location.reload();
    //Grab User's focus
    grabOutput.focus();
  }
}

//Initilize a new Game
const game = new Game();

//Click event for Start Button
grabStartBTN.addEventListener('click', function() {
  game.startGame();
});

//Click event for Reset Button
grabResetBTN.addEventListener('click', function() {
  game.resetGame();
});
