console.log("word.js connected");
var word;

class Word{
    constructor(word){
        this.word = word;
    }

    /*
    GENERATES A RANDOM WORD
    1. GRABS A RANDOM WORD FROM WORDSLIST ARRAY USING MATH.RANDOM()
    2. TAKES THAT WORD AND SPLITS IT INTO AN ARRAY USING .SPLIT()
    3. LOOP THROUGH EACH LETTER TO STYLE
    4. CLEAR THE DIV
    */
    newWord(word){
            //Clear the Div
            grabTypr.innerHTML = "";
            //Initilize letterIndex
            letterIndex = 0;
            //Get's a random word, converts to upperCase, and splits word into an Array
            letters = word.toUpperCase().split('');
            //Give each letter a class for styling
            for(let i = 0; i < letters.length; i+=1)
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

        // GRAB A NEW WORD FROM API
        RandomWord(){
            var length = 6;
            var url = `http://setgetgo.com/randomword/get.php?len=${length}`;

            $.ajax({
                url: url
            })
            .done(function(word){
                words.newWord(word);
            });
        }
}

//Initilize a new Word
const words = new Word(word);