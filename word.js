console.log("word.js connected");

class Word{
    constructor(arr){
        this.arr = [];
    }

    /*
    GENERATES A RANDOM WORD
    1. GRABS A RANDOM WORD FROM WORDSLIST ARRAY USING MATH.RANDOM()
    2. TAKES THAT WORD AND SPLITS IT INTO AN ARRAY USING .SPLIT()
    3. LOOP THROUGH EACH LETTER TO STYLE
    4. CLEAR THE DIV
    */
    newWord(){
        //Clear the Div
        grabTypr.innerHTML = "";
        //Initilize letterIndex to 0
        letterIndex = 0;
        //Create a random number
        let random = Math.floor(Math.random() * wordsList.length);
        //Get's a random word, converts to upperCase, and splits word into an Array
        letters = wordsList[random].toUpperCase().split('');
        //Give each letter a class for styling
        for(let i = 0; i < letters.length; i++)
        {
            var span = document.createElement("span");
            span.classList.add("letter");
            span.setAttribute("id", i);
            span.innerHTML = letters[i];
            grabTypr.appendChild(span);
        }
        //Clear the Div before the next word
        grabOutput.innerHTML = "";
    }
}

//Array of words
const wordsList = ["burger", "lunchtime", "happy", "supreme", "lamborghini", 
                    "apple", "general", "olamide", "jordan", "akanmu", "school", "textbook",
                    "water", "trash", "phone", "samsung", "floor", "table"];

//Initilize a new Word
const words = new Word(wordsList);