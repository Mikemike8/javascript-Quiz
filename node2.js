const prompt = require("prompt-sync")();


const target = Math.round(Math.random() * 100);
console.log(target);


let guesses = 0;
console.log(target);



const guess = Number(prompt("Guess the number (0-100): "));

if (guess > target ){
    console.log("Your guess is too high.");  
} else if (guess < target) {
    console.log("Your guess is to low");
} else {
    console.log("You guessed it!");
}
