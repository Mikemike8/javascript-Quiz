const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!")

const  answer1= prompt(" What is the brain of the computer?");
const correct_answer1 = "CPU";

if(answer1.toUpperCase() === correct_answer1) {
    console.log("You got it correct")
}else {
    console.log("You got it wrong...")
}


const  answer2= prompt(" What is better VSCODE OR REPLIT? ");
const correct_answer2 = "vscode";

if(answer2.toLowerCase() === correct_answer2) {
    console.log("You got it correct")
}else {
    console.log("You got it wrong...")
}


const  answer3= prompt(" What is better PC OR LAPTOP ");
const correct_answer3 = "pc";

if(answer3.toLowerCase() === correct_answer3) {
    console.log("You got it correct")
}else {
    console.log("You got it wrong...")
}








