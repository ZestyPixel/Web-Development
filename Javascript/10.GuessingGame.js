const max = parseInt(prompt("Enter the max number:"));
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your guess:");

while (true) {
    if (guess === "quit") {
        console.log("User quit.");
        break;
    }

    const guessNum = parseInt(guess);

    if (guessNum === random) {
        console.log("🎉 Right guess!!");
        break;
    } 
    else if (guessNum < random) {
        guess = prompt("Too low! Try again or type 'quit' to exit:");
    } 
    else if (guessNum > random) {
        guess = prompt("Too high! Try again or type 'quit' to exit:");
    } 
    else {
        guess = prompt("Invalid input. Please enter a number or type 'quit':");
    }
}
