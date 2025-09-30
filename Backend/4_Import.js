//We only use either require or import not bothexports.sum = (a,b) => a+b;  //Way #3 
import{sum, multi} from "./3_ExportFunctions.js"

console.log(sum(1,2));
console.log(multi(1,2));

//Import can be asynchronous

import{generate} from "random-words";

console.log(generate()); 