# Typr: Typing Game

## Technologies Used
* HTML/CSS
   * Used HTML as the framework of the website and CSS to style HTML elements.
* JavaScript
   * Used to grab DOM elements and the game logic.
* JQuery
   * Used specifically to toggle the instructions button and document on load events.

## Approach Taken
1. Build an array with strings.
2. Pick a random word from array.
   * Used Math.random() to generate a random number between 0 and the Array length.
3. Using String.split() to split the string into an array so each letter has an index.
   * Each letter can now be compared, to the keyboard stroke.
4. Use a keyboard event to compare to the split array's index.