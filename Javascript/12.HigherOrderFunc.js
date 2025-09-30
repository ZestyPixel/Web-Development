function multipleGreet(func,count){
    for(let a = 0; a<count; a++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet,5);