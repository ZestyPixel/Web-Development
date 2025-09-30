let arr = [1, 2, 3, 45, 66, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((el) => { //Do for each element
    console.log(el);
});

//Filter- Adds to array if condition is true, doesnt add if false

let even = arr.filter((el) =>{
    return ((el%2) == 0);
})

even.forEach((el) => { //Do for each element
    console.log(el);
});
