//window.onload = gameTimer;
//document.addEventListener("click", gameTimer)

$(document).ready(function(){
    //When the page is loaded this section will get focused on
    grabUserInput.focus();
});

/*
GLOBAL VARIABLES
*/
var timer = 120; //Set clock t0 120 seconds
// var finished = false; //Game is Finished when True
var score = 12; //User starts with 10 points: loses 1 point as the time goes, gains 2 points per correct word
var typedKeys = ""; //Key press
const wordsList = ["burger", "lunchtime", "happy", "supreme", "lamborghini", 
                    "apple", "general", "assemb.ly", "jordan", 
                    "floccinaucinihilipilification"]; //Words to spell correctly
//Used to scan the wordsList array
var max = 10; //Used in the getRandom Function used to set the maximum
var min = 0; //Used in the getRandom Function used to set the minimum

/*
GRAB DOM ELEMENTS
*/
var grabClock = document.getElementById('clock'); //grab the clock div
var grabTypr = document.getElementById('typr'); //grab the typr div (where the wordsList shows)
var grabOutput = document.getElementById('userOutput'); //grab the userOutput div (where the users key strokes show)
var grabStartBTN = document.getElementById('start'); //grab the start button
var grabResetBTN = document.getElementById('reset'); //grab the reset button
var grabUserInput = document.getElementById('userInput'); //grab userInput textfield
var grabScore = document.getElementById('score'); //grab score div

/*
SET UP THE CLOCK
The clock will start at 120 seconds and continue until 0 seconds.
At 0 seconds, the game will end and all the initial varibles will reset.
*/
function gameTimer(){
    var interval = setInterval(function(){
        timer -=1; //Decrement the clock by 1
        score -=1; //Decrement score by 1 as the time goes
        grabClock.innerHTML = "Time left:<br>"+timer+" seconds"; //Insert the timer into Clock Div
        grabScore.innerHTML = "Your score:<br>"+score+" points";
        if(timer === 0){ //If the Timer is 0, The Game Is Over. Reset all game elements and display score.
            alert("Game over! Your Score is: " + score); //Alert the user the game is over
            grabClock.innerHTML = ""; //Clear the clock div
            // finished = true; //Game is over
            score = 12; //Reset score to 0
            clearInterval(interval); //Stop the Interval
        }
    }, 1000);
}

/*
PROVIDES A RANDOM NUMBER
*/
function getRandom(){
    return Math.floor(Math.random() * (max - min)) + min;
}

/*
START THE GAME
*/
function startGame(){
    console.log("Game started");

    displayWords();
}

/*
RESET THE GAME
*/
function resetGame(){
    console.log("Reset game")

    //Start the game over
    startGame();

    //Grab User's focus ?????????????????????????
    grabUserInput.focus();

    //Reset all game defaults
    timer = 120;
    score = 12;
    grabTypr.innerHTML = "";
    grabClock.innerHTML = "";
    grabOutput.innerHTML = "";
}

function displayWords(){
    grabTypr.innerHTML = wordsList[getRandom()];
}





// grabStartBTN.addEventListener("click", function(e){
//       gameTimer();
//       //random();
//       grabStartBTN.disabled = true; 
//      // document.addEventListener("keydown", typing, false);
// });









//   document.addEventListener("keydown", function(event) {
//   console.log(event.which);
//   document.getElementById('userOutput').innerHTML = `${event.which}`;
//   if(event.which === 32){
//     console.log('Yea!!!!');
//   }
// });
