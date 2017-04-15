console.log("game.js connected");

class Game {
    constructor(){}
    
    /*
    START THE GAME
    */
    startGame(){
        //Focus on the input box
        grabOutput.focus();
        //Grab a new word
        words.newWord();
        //Disable Start button
        grabStartBTN.disabled = true;
        //Start the timer
        gameTimer();
    }

    /*
    RESET THE GAME
    */
    resetGame(){
        //Reloads the page
        location.reload();
        //Grab User's focus
        grabOutput.focus();
    }
}

//Initilize a new Game
const game1 = new Game();

//Click event for Start Button
grabStartBTN.addEventListener("click", function(){
    game1.startGame(); 
})

//Click event for Reset Button
grabResetBTN.addEventListener("click", function(){
    game1.resetGame(); 
})