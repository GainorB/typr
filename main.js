console.log("main.js connected");

/*
GLOBAL VARIABLES
*/
var letterIndex; //Used to loop through letters array
var letters; //Will be used as an array in newWord()
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
TIMER
*/
function gameTimer(){
    var interval = setInterval(function(){
        timer--; //Decrement the clock by 1
        grabClock.innerHTML = timer+" seconds <br> remaining"; //Display timer
        grabScore.innerHTML = score+" points"; //Display score
        finalScore.innerHTML = "Congrats! You scored "+score+" points."; //Display final score
        if(timer === 0){ //If the Timer is 0, The Game Is Over.
            ///////
            ///Hide/Show/Clear DOM elements when timer is 0
            ///////
            grabClock.style.visibility = "hidden";
            grabOutput.style.display = "none";
            grabTypr.style.display = "none";
            grabScore.style.display = "none";
            grabCongrats.style.visibility = "visible";
            grabh1.style.visibility = "hidden";
            //Check for High Score
            if((window.localStorage.highscore) === undefined 
                    || isNaN(window.localStorage.highscore)
                    || score > window.localStorage.highscore){
                highScore(score);
                grabClock.style.visibility = "visible";
                grabClock.innerHTML = "New High Score!<br>"+window.localStorage.highscore+" points";
            }
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
HIGH SCORE STORAGE
*/
function highScore(score){
    //Checks to see if browser supports Local/Session Storage
    if(typeof(Storage) !== "undefined"){
        if(localStorage.highscore){
            //Store the highscore
            localStorage.highscore = parseInt(score);
        } else {
            localStorage.highscore = 0;
        }
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}

/*
JQUERY: WHEN DOCUMENT LOADS
*/
$(document).ready(function(){
    //When the page is loaded this section will get focused on
    grabOutput.focus();

    //Toggle Instructions using JQuery
    $('#instructionsb').click(function(){        
         $('#instructionsd').fadeToggle(1000);
    });

    //Grab user input and store the input in event
    document.addEventListener("keydown", function(event){
        //Converts the user input into a Character
        let key = String.fromCharCode(event.keyCode);
        //Compare a Letter with the key to find a match        
        if(letters[letterIndex] == key){
            ///////
            ///Add a Span to each typed character to style
            ///////
            let span = document.createElement("span");
            span.classList.add("letter2");
            span.innerHTML = key;
            grabOutput.appendChild(span);  

            if(letterIndex > 0){
                 document.getElementById(letterIndex-1).style.color = 'white';
            }  
            document.getElementById(letterIndex).style.color = 'red';
            letterIndex++;
            //if the index and length are equal then you've typed the full word
            if(letterIndex === letters.length){ 
                words.newWord();
                score++;
            }
        }
    }); 
});