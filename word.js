console.log('word.js connected');
var word;

class Word {
  constructor(word) {
    this.word = word;
  }

  /*
    GENERATES A RANDOM WORD
    1. GRABS A RANDOM WORD FROM WORDSLIST ARRAY USING MATH.RANDOM()
    2. TAKES THAT WORD AND SPLITS IT INTO AN ARRAY USING .SPLIT()
    3. LOOP THROUGH EACH LETTER TO STYLE
    4. CLEAR THE DIV
    */
  newWord(word) {
    //Clear the Div
    grabTypr.innerHTML = '';
    //Initilize letterIndex
    letterIndex = 0;
    //Get's a random word, converts to upperCase, and splits word into an Array
    letters = word.toUpperCase().split('');
    //Give each letter a class for styling
    for (let i = 0; i < letters.length; i += 1) {
      var span = document.createElement('span');
      span.classList.add('letter');
      span.setAttribute('id', i);
      span.innerHTML = letters[i];
      grabTypr.appendChild(span);
    }

    //Clear the Div before the next word
    grabOutput.innerHTML = '';
  }

  // GRAB A NEW WORD FROM API
  RandomWord() {
    var api_key = '19e4ca29e868049b580050e3fd50b7e0d3d27a4130593925a';
    var minLength = 1;
    var maxLength = 5; // null
    var maxDictionaryCount = -1; // null
    var minDictionaryCount = 1;

    const baseURL = 'http://api.wordnik.com:80/v4/words.json/';
    const url = `${baseURL}randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=${minDictionaryCount}&maxDictionaryCount=${maxDictionaryCount}&minLength=${minLength}&maxLength=${maxLength}&api_key=${api_key}`;

    // request to get random word
    $.ajax({
      method: 'GET',
      url
    })
      .done(data => {
        words.newWord(data.word);
      })
      .fail(err => {
        console.error(err);
      });
  }
}

//Initilize a new Word
const words = new Word(word);
