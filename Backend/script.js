console.log("Hello, World!");
console.log(process.argv);

let args = process.argv;

for(let i = 2; i<args.length; i++){ //i = 2 to ignore the first two paths
    console.log(args[i]);
}