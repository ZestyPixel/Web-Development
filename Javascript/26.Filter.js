let arr = [1, 2, 3, 45, 66, 4, 5, 6, 7, 8, 9, 10];

//Filter- Adds to array if condition is true, doesnt add if false

let even = arr.filter((el) =>{
    return ((el%2) == 0);
})

even.forEach((el) => { 
    console.log(el);
});
