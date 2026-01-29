function genTicket(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 10)
    }

    return arr;
}

function sum(arr){
    return arr.reduce((sum, curr)=> sum+curr, 0); //Format for reduce is (callbackfn, initialValue). The way this statement works is:
    //It takes each element of the array one by one (curr) and adds it to the accumulated sum (sum), starting from an initial value of 0.
}

export {genTicket, sum};
