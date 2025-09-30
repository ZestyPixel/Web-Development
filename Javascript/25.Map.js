let arr = [1, 2, 3, 45, 66, 4, 5, 6, 7, 8, 9, 10];

//Map- Same as forEach but when the function is performed it creates a new array and puts the new values inside the new array.

let double = arr.map((el) =>{
    return el*2;
})

double.forEach((el) => { //Do for each element
    console.log(el);
});