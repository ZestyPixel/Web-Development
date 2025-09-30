console.log("Hello World")
let a = 5;
let b = 5;
console.log("The sum of a and b is",a+b);
console.log(`The sum is ${a+b}`);

console.log("123" == 123); //Compares only value
console.log("123" === 123); //Compares type and value

if(12>3){
    console.log("Greater");
    console.log(5*a);
}

// ✅ Falsy values
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false (BigInt zero)
console.log(Boolean(""));         // false (empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// ✅ Truthy values(Any that is not falsy)
console.log(Boolean(true));           // true
console.log(Boolean(1));              // true
console.log(Boolean(-1));             // true
console.log(Boolean("hello"));        // true (non-empty string)
console.log(Boolean("0"));            // true (string with 0)
console.log(Boolean([]));             // true (empty array)
console.log(Boolean({}));             // true (empty object)
console.log(Boolean(function(){}));   // true (any function)
console.log(Boolean(Infinity));       // true

// 🔄 Boolean conversion shorthand
console.log(!!"JavaScript"); // true
console.log(!!0);            // false

switch(a){
    case 5:
        console.log("Hi");
    break;

    default:{
        console.log("Hi");
    }
}