const math = require("./1_functions"); //a built in function to include external modules that exist in seperate files

console.log(math);
console.log(math.sum(2,3));

//If you want to take data from files in a seperate directory. 
// In that directory create a file called index.js in which require all of the files you want 
// and combine them into an array and then export that index.js file. 
// And in the file where you want to import, just require the name of the directory. 
// The file must always be named index.js as it is the entry point that js looks for when we import from a directory instead of going to each individual file