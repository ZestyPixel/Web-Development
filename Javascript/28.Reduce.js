//Reduces array to a single value. The two arguments are accumulator and element.

let arr = [1,2,3,4,5,6,7,8,9,10];

let value = arr.reduce((res,el) => res+el); //at first res = 0 and el = 1, then res = res+el and el = 2.

console.log(value);

//For finding maximum element

let maxi = arr.reduce((max,el) =>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});

console.log(maxi);