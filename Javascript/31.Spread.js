//Spreads the values

let arr = [1,2,3,4,5];

let name = "Umar A. Mahmood";

console.log(...arr);
console.log(...name);

let arr2 = [...arr];
console.log(arr2);

let char = [..."hello"];
console.log(char);

let arr3 = [...arr,...arr2];
console.log(arr3);

let object = {
    name: "Umar",
    age: 21
};

let object2 = {
    ...object, ...arr, ..."Umar" //Here the key of the string chars and the array elements are their indices
};

