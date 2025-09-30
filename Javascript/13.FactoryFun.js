function checkFactory(type) {
    if (type === "even") {
        return function (num) {
            return num % 2 === 0;
        };
    } else if (type === "odd") {
        return function (num) {
            return num % 2 !== 0;
        };
    } else {
        return function () {
            console.log("Invalid type. Use 'odd' or 'even'.");
        };
    }
}

let type = prompt("Do you want to check for 'odd' or 'even'?");
let num = parseInt(prompt("Enter a number:"));

let checker = checkFactory(type);  //Here checker will get one of the functions based on what was asked

if (checker(num)) {
    console.log(`Yes, ${num} is ${type}.`);
} else {
    console.log(`No, ${num} is not ${type}.`);
}