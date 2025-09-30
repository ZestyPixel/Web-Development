let a = "Umar A. Mahmood    ";

console.log(a.trim()); //Removes whitespace from end and start but not middle. Strings are immutable so the original string remains same

console.log(a.toLowerCase());
console.log(a.toUpperCase());

console.log(a.indexOf("U"));
console.log(a.indexOf("ar")); //Will bring up the first letter of the given string

console.log(a.trim().toUpperCase()); //Method chaining

console.log(a.slice(5));
console.log(a.slice(1,4)); //Start,End
console.log(a.slice(-8)); //Length-8, so will print the chars after that

console.log(a.replace("Umar","Tree")); //Only replaces the first occurance 
console.log(a.replace("U","A")); 

console.log(a.repeat(5));



