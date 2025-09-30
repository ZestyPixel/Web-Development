function sum(mes,...args){ //can use other parameters with rest as well
    console.log(args.reduce((res, el) => res+el)); //Used to take n number of arguments and collect them in an array ...is rest
    console.log(mes);
}

console.log(sum("hello",2,3,4));