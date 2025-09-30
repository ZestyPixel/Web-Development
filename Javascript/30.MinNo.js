let arr = [32,43,65,534,434,645,43,56,43756];

let mini = arr.reduce((min,el) =>{
    if(min<el){
        return min;
    }
    else{
        return el;
    }
});

console.log(mini);