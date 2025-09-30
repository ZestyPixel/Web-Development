//Square and sum elements using arrow function

let arr = [1,2,3,4,5,6,7,8,9,10];

let square = arr.map((el) => {
    return el*el
});

console.log(square);

let sum = arr.reduce((res,el) => el+res );
console.log(sum);

let avg = sum/arr.length;
console.log (avg);

//New array where each element is +5 than original

let newarr = arr.map((el) => el+5);
console.log(newarr);

//New array where the words are in uppercase 

let strings = ["adam", "bob", "catlyn", "donald", "eve"];

console.log(strings.map((string) => string.toUpperCase()));

//Function that accepts two objects and returns a new object with all the keys and values of the first

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const objectA = { 
    a: 1, 
    b: 2 
};
const objectB = { 
    b: 3, 
    c: 4 
};

const result = mergeObjects(objectA, objectB);
console.log(result);    
