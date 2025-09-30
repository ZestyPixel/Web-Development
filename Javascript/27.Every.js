//Returns true if every element of array gives true, otherwise false

let arr = [2,4,6,8];

let value = arr.every((el) => (el%2==0));

console.log(value);

//Some returns true if some elements return true

let arr2 = [1,2,3,4,5,6,7,8,9];

let value2 = arr2.some((el) => (el%2 ==0));

console.log(value2);