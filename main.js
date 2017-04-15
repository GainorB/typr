console.log("main.js connected");

/*
GLOBAL VARIABLES
*/
var charIndex; //Used to loop through letters array
var letters; //Will be used as an array in newWord() to grab word from array and split word into a string
var timer = 60; //Set clock to 60 seconds
var score = 0; //User starts with 0 points

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
var finalScore = document.getElementById('finalscore'); //grab finalscore div
var grabCongrats = document.getElementById('congratsd'); //grab congrats div
var grabh1 = document.querySelector('.typewriter'); //grab h1 element (header)
var grabInstructionsD = document.getElementById('instructionsd'); //grab instructions div

/*
SET UP THE CLOCK
The clock will start at 60 seconds.
*/
function gameTimer(){
    var interval = setInterval(function(){
        timer--; //Decrement the clock by 1
        grabClock.innerHTML = "Time Left<br>"+timer+" seconds"; //Display timer
        grabScore.innerHTML = "Your Score<br>"+score+" points"; //Display score
        finalScore.innerHTML = "Congrats! You scored "+score+" points"; //Display final score
        if(timer === 0){ //If the Timer is 0, The Game Is Over.
            alert("Game over! Your Score is: " + score); //Alert the user the game is over
            score = 0; //Reset score to 0
            timer = 60; //Reset the clock
            ///////
            ///Hide/Show/Clear DOM elements when timer is 0
            ///////
            grabClock.innerHTML = "";
            grabOutput.style.display = "none";
            grabTypr.style.display = "none";
            grabScore.style.display = "none";
            grabCongrats.style.display = "block";
            grabh1.style.visibility = "hidden";
            clearInterval(interval); //Stops the clock
            ///////
            ///When the timer hits these values, change the background colors/images
            //////
        } else if(timer === 50) { document.body.style.backgroundColor = "red"; } 
          else if(timer === 40) { document.body.style.backgroundColor = "blue"; }
          else if(timer === 30) { document.body.style.backgroundColor = "pink"; }
          else if(timer === 20) { document.body.style.backgroundColor = "purple"; } 
          else if(timer === 10) { 
              document.body.style.backgroundImage = "url('images/distracting.gif')"; 
              document.body.style.backgroundSize = "cover";
              grabClock.style.color = "white";
              grabScore.style.color = "white";
              grabInstructionsD.style.color = "white";
        }
    }, 1000);
}

/*
JQUERY: WHEN DOCUMENT LOADS
*/
$(document).ready(function(){
    //When the page is loaded this section will get focused on
    grabOutput.focus();

    //Toggle Instructions using JQuery
    $('#instructionsb').click(function(){        
         $('#instructionsd').toggle();
    });

    //Grab user input and store the input in event
    document.addEventListener("keydown", function(event){

        //Converts the user input into a Character
        let key = String.fromCharCode(event.keyCode);
        
        //Compare a Letter with the key to find a match
        if(letters[charIndex] == key){
            charIndex++;
            ///////
            ///Add a Span to each typed character to style
            ///////
            let span = document.createElement("span");
            span.classList.add("letter2");
            span.innerHTML = key;
            grabOutput.appendChild(span);
               
            //if the index and length are equal then you've typed the full word
            if(charIndex === letters.length){ 
                score++;
                words.newWord();
            }
        }
    }); 
});