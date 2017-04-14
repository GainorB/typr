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
        newWord();
        //Disable buttons
        grabStartBTN.disabled = true;
        //Start the timer
        gameTimer();
    }

    /*
    RESET THE GAME
    */
    resetGame(){
        location.reload();
        //Grab User's focus
        grabOutput.focus();
    }
}

const game1 = new Game();

grabStartBTN.addEventListener("click", function(){
    game1.startGame(); 
})

grabResetBTN.addEventListener("click", function(){
    game1.resetGame(); 
})