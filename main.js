console.log('main.js connected');

/*
GLOBAL VARIABLES
*/
var letterIndex; //Used to loop through letters array
var letters; //Will be used as an array in newWord()
var timer = 60; //Set clock to 60 seconds
var score = 0; //User starts with 0 points
var userTyped = 0;

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
var colors = [
  'red',
  'lightblue',
  'yellow',
  'blue',
  'pink',
  'purple',
  'orange',
  'green',
  'grey',
  'burgundy'
]; //random colors for BG

/*
GENERATE A RANDOM BACKGROUND COLOR
*/
function randomBGC(arr) {
  const length = arr.length;
  let random = Math.floor(Math.random() * length);
  let newArr = [];

  // GET A RANDOM COLOR FROM ARR
  let randomC = arr[random];
  // REMOVE RANDOM COLOR FROM ARR
  let removedC = arr.splice(arr.indexOf(randomC), 1);
  // INSERT RANDOM REMOVED COLOR INTO NEWARR
  newArr.push(removedC);

  return newArr[0][0];
}

/*
TIMER
*/
function gameTimer() {
  var interval = setInterval(function() {
    timer--; //Decrement the clock by 1
    grabClock.innerHTML = timer + ' seconds <br> remaining'; //Display timer
    grabScore.innerHTML = score + ' points'; //Display score
    finalScore.innerHTML = 'Congrats! You scored ' + score + ' points.'; //Display final score
    if (timer === 0) {
      //If the Timer is 0, The Game Is Over.
      ///////
      ///Hide/Show/Clear DOM elements when timer is 0
      ///////
      grabClock.style.visibility = 'hidden';
      grabOutput.style.display = 'none';
      grabTypr.style.display = 'none';
      grabScore.style.display = 'none';
      grabCongrats.style.visibility = 'visible';
      grabh1.style.visibility = 'hidden';
      //Check for High Score
      if (
        window.localStorage.highscore === undefined ||
        isNaN(window.localStorage.highscore) ||
        score > window.localStorage.highscore
      ) {
        highScore(score);
        grabClock.style.visibility = 'visible';
        grabClock.innerHTML = 'New High Score!<br>' + window.localStorage.highscore + ' points';
      }
      clearInterval(interval); //Stops the clock
      ///////
      ///When the timer hits these values, change the background colors/images
      //////
    } else if (timer === 50) {
      $('body').css({ 'background-color': randomBGC(colors) });
    } else if (timer === 40) {
      $('body').css({ 'background-color': randomBGC(colors) });
    } else if (timer === 30) {
      $('body').css({ 'background-color': randomBGC(colors) });
    } else if (timer === 20) {
      $('body').css({ 'background-color': randomBGC(colors) });
    } else if (timer === 10) {
      document.body.style.backgroundImage = "url('images/distracting.gif')";
      document.body.style.backgroundSize = 'cover';
      grabClock.style.color = 'white';
      grabScore.style.color = 'white';
      grabInstructionsD.style.color = 'white';
    }
  }, 1000);
}

/*
HIGH SCORE STORAGE
*/
function highScore(score) {
  //Checks to see if browser supports Local/Session Storage
  if (typeof Storage !== 'undefined') {
    if (localStorage.highscore) {
      //Store the highscore
      localStorage.highscore = parseInt(score);
    } else {
      localStorage.highscore = 0;
    }
  } else {
    console.log('Sorry, your browser does not support web storage...');
  }
}

/*
* If word and typed match, means the word was correctly typed
*/
function checkForCorrect(word, typed) {
  if (word === typed) {
    score++;
  } else {
    score--;
  }
}

/*
JQUERY: WHEN DOCUMENT LOADS
*/

$(function() {
  //When the page is loaded this section will get focused on
  grabOutput.focus();

  //Toggle Instructions using JQuery
  $('#instructionsb').click(function() {
    $('#instructionsd').fadeToggle(1000);
  });

  //Grab user input and store the input in event
  document.addEventListener('keydown', function(event) {
    let key = event.key;
    key = key.toUpperCase();
    let span = $('<span />');
    const numOfCorrectLetters = letters.length;

    //Compare a Letter with the key to find a match
    if (letters[letterIndex].toUpperCase() === key) {
      userTyped++;
      document.getElementById(letterIndex).style.color = 'green';
      span.text(key).css('color', 'green');
      $('#userOutput').append(span);
    } else {
      userTyped--;
      document.getElementById(letterIndex).style.color = 'red';
      span.text(key).css('color', 'red');
      $('#userOutput').append(span);
    }

    letterIndex++;

    //if the index and length are equal then you've typed the full word
    if (letterIndex === letters.length) {
      words.RandomWord();
      checkForCorrect(numOfCorrectLetters, userTyped);
      userTyped = 0;
    }
  });
});
