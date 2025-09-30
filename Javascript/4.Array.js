let marks = [99, 85, 93, 76, 62]; //Arrays are mutable
let names = ["adam", "bob", "catlyn"];
let info = ["aman", 25, 6.1];  // mixed array
let newArr = [];

console.log(marks.length);
console.log(marks[0]);
console.log(names[0][0]); //To access 0th character of 0th string

names.push("Umar"); //To add at the end
console.log(names[3]);

console.log(names.pop()); //To removes the last element and returns it

names.unshift("James"); //To add at the start
console.log(names[0]);

console.log(names.shift()); //To removes the first element and returns it

console.log(marks.indexOf(85)); 
console.log(marks.includes(76)); //True or false whether the array has it or not

console.log(marks.concat(names)); //Merge two arrays

console.log(names.reverse());

//Slice method is same as for strings

let colors = ["red","blue","green","white","black","grey"];

console.log(colors.splice(4));
console.log(colors.splice(0,1)); //Start end
console.log(colors.splice(0,2,"black","grey")); //Index we want to add at/start value, till what we want to delete, what we want to add
console.log(colors);

console.log(names.sort());
console.log(marks.sort()); //For numbers sorting can be wrong as the nos are converted into strings first and then sorted.

// The array variable names are called refrences as they only hold the addresses of the values of the array. so even if the first element of two arrays is equal
// javascript will treat them as not being equal as they are comparing the addresses and not the actual values.
// Thus in the code below arrCopy only got the address of the elements of arr and thus changes made in arrCopy also affect arr and thus arr and arrCopy are shown to be equal.
let arr = [1,2,3];
let arrCopy = arr;
arrCopy.push(4);
console.log(arr);
console.log(arr==arrCopy);

//When we use constant for a variable it means we can no longer change its value. But in a constant array we can change the individual elements but not the object itself.
//Because as we know and array store an address and not the individual elements.

const array1 = [1,2,3];
array1.push(4);
console.log(array1);


let nums = [[1,2], [3,4], [5,6], [7,8]]; //Nested array
console.log(nums);
console.log(nums.length); //Length of array
console.log(nums[0].length); //Length of first nested array
console.log(nums[1][1]);