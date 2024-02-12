const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!")

let correctAnswers = 0; 
const totalQuestions = 3;



const  answer1= prompt(" What is the brain of the computer?");
const correctAnswer1 = "CPU";

if(answer1.toUpperCase() === correctAnswer1) {
    console.log("You got it correct");
    correctAnswers++;
}else {
    console.log("You got it wrong...");
}





const  answer2= prompt(" What is better VSCODE OR MAC? ");
const correctAnswer2 = "vscode";

if(answer2.toLowerCase() === correctAnswer2) {
    console.log("You got it correct");
    correctAnswers++;
}else {
    console.log("You got it wrong...");
}


const  answer3= prompt(" What is better PC OR LAPTOP ");
const correctAnswer3 = "pc";

if(answer3.toLowerCase() === correctAnswer3) {
    console.log("You got it correct");
    correctAnswers++;
}else {
    console.log("You got it wrong...");
}


const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You Got", correctAnswers, "Questions correct!" )

console.log("You Scored", percent.toString() + "%" )






