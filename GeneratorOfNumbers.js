/*The Random Number Guessing Game generates a number between 1 and 6 and gives a player 2 attempts to guess the number*/
//Assume the player didn't guess correctly
var correctGuess = false;
//Generate random number from 1 to 6
var randomNumber = Math.floor(Math.random()*6)+1;
var guess = prompt ('I am thinking of a number between 1 and 6. What is it?');
/*Test to see if player
1. Correct
2. Guessed too high
3. Guessed too low
*/
if (parseInt(guess)===randomNumber) {
  correctGuess = true;
}else if (parseInt(guess)<randomNumber){
  var guessMore = prompt('Try again. The number I am thinking of is more than '+guess);
  if (parseInt(guessMore)===randomNumber){
    correctGuess = true;
  }
}else if (parseInt(guess)>randomNumber){
  var guessLess = prompt('Try again. The number I am thinking of is less than '+guess);
  if (parseInt(guessLess)===randomNumber){
    correctGuess = true;
  }
  //test if player is correct and output responce
} if (correctGuess) {
  document.write('<p>You guessed the number!</p>');
}else{
  document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
