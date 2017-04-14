console.log("main.js connected");

/*
GLOBAL VARIABLES
*/
var charIndex; //Used to loop through letters array
var letters; //Will be used as an array in newWord() to compare letters
var timer = 60; //Set clock to 60 seconds
var score = 0; //User starts with 0 points
const wordsList = ["burger", "lunchtime", "happy", "supreme", "lamborghini", 
                    "apple", "general", "olamide", "jordan", "akanmu", "school", "textbook",
                    "water", "trash", "phone", "samsung", "floor", "table"];
/*
GRAB DOM ELEMENTS
*/ 
var grabClock = document.getElementById('clock'); //grab the clock div
var grabTypr = document.getElementById('typr'); //grab the typr div (where the wordsList shows)
var grabOutput = document.getElementById('userOutput'); //grab the userOutput div (where the users key strokes show)
var grabStartBTN = document.getElementById('start'); //grab start button
var grabResetBTN = document.getElementById('reset'); //grab reset button
var grabInstructionsBTN = document.getElementById('instructionsb'); //grab instructions button
var grabUserInput = document.getElementById('userInput'); //grab userInput textfield
var grabScore = document.getElementById('score'); //grab score div

/*
SET UP THE CLOCK
The clock will start at 60 seconds.
*/
function gameTimer(){
    var interval = setInterval(function(){
        timer--; //Decrement the clock by 1
        grabClock.innerHTML = "Time left<br>"+timer+" seconds"; //Insert the timer
        grabScore.innerHTML = "Your score<br>"+score+" points"; //Insert the score
        if(timer === 0){ //If the Timer is 0, The Game Is Over. Reset all game elements and display score.
            alert("Game over! Your Score is: " + score); //Alert the user the game is over
            grabClock.innerHTML = ""; //Clear the clock div
            score = 0; //Reset score to 0
            timer = 60; //Reset the clock
            grabOutput.setAttribute('display', 'none'); //Hide the div (to prevent additional input) 
            grabTypr.innerHTML = ""; //Clear the Typr div         
            clearInterval(interval); //Stop the clock
        } else if(timer === 50) { document.body.style.backgroundColor = "red"; } 
          else if(timer === 40) { document.body.style.backgroundColor = "blue"; }
          else if(timer === 30) { document.body.style.backgroundColor = "pink"; }
          else if(timer === 20) { document.body.style.backgroundColor = "purple"; } 
          else if(timer === 10) { 
              document.body.style.backgroundImage = "url('images/distracting.gif')"; 
              document.body.style.backgroundSize = "cover";
              grabClock.style.color = "white";
              grabScore.style.color = "white";
        }
    }, 1000); //60 seconds
}

/*
GENERATES A NEW WORD
*/
function newWord(){
    //Clear the Div
    grabTypr.innerHTML = "";
    //Initilize charIndex to 0
    charIndex = 0;
    //Create a random number
	let random = Math.floor(Math.random() * wordsList.length);
	
    //Get's a random word, converts to upperCase, and splits word into an Array
    letters = wordsList[random].toUpperCase().split('');
    
    //Give each letter a class
    for(let i = 0; i < letters.length; i++)
    {
        var span = document.createElement("span");
        span.classList.add("letter");
        span.innerHTML = letters[i];
        grabTypr.appendChild(span);
    }
    
	//Clear the Div before the next word
    grabOutput.innerHTML = "";
}

/*
JQUERY: WHEN DOCUMENT LOADS
*/
$(document).ready(function(){
    //When the page is loaded this section will get focused on
    grabOutput.focus();

    //Toggle Instructions using JQuery
    $('#instructionsb').click(function() {        
         $('#instructionsd').toggle();
    });

    //Grab user input and store the input in event
    document.addEventListener("keydown", function(event){
    
        //Converts the user input into a Character
        let keyStr = String.fromCharCode(event.keyCode);
        
        //Compare a Letter with the keyStr to find a match
        if(letters[charIndex] == keyStr){
            charIndex++;
           // grabOutput.innerHTML += keyStr;

                let span = document.createElement("span");
                span.classList.add("letter2");
                span.innerHTML += keyStr;
                grabOutput.appendChild(span);
               
            //if the index and length are equal then you've typed the full word
            if(charIndex === letters.length){ 
                score++;
                newWord();
            }
        }
    }); 
});


/*
Errors: 
1. Repeating words
2. When game resets the timer speeds up

*/