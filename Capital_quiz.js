//quiz begins, no answers correct
var correct = 0;
//ask questions
var questions = 5;
var answer1= prompt("Which city is the capital of England? [You have got " + questions +"].");
questions -= 1;
if (answer1.toUpperCase()==="LONDON") {
  correct += 1;
}
var answer2= prompt("Which city is the capital of Ukraine? [You have got " +questions+"].");
questions -= 1;
if (answer2.toUpperCase()==="KYIV") {
  correct += 1;
}
var answer3= prompt("Which city is the capital of Czech Republic? [You have got " +questions+"].");
questions -= 1;
if (answer3.toUpperCase()==="PRAHA") {
  correct += 1;
}
var answer4= prompt("Which city is the capital of Russia? [You have got " +questions+"].");
questions -= 1;
if (answer4.toUpperCase()==="MOSCOW") {
  correct += 1;
}
var answer5= prompt("Which city is the capital of USA? [You have got " +questions+"].");
if (answer5.toUpperCase()==="WASHINGTON"){
  correct += 1;
}
//Output results 
document.write("<p>You got " + correct + " out of 5 questions correct. </p>");
//Output rank
if (correct===5)
{
  document.write("<p><strong>You have got a gold crown!</strong></p>");}
  else if (correct>=3) {
    document.write("<p><strong>You have got a silver crown!</strong></p>");}
    else if (correct===2) {
      document.write("<p><strong>You have got a bronze crown!</strong></p>");}
    else {
      document.write("<p>You have got nothing!</p>");}
