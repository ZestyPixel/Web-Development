// let btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log("Hello");
// }

let btn = document.querySelectorAll('button');
function hello(){
    console.log("Hello");
}

function name(){
    console.log("I am Umar");
}

for(bt of btn){
    // bt.onclick = hello; //On click will only execute one function on clicking
    // bt.onmouseenter = function(){
    //     console.log("You touched a button");
    //}

    bt.addEventListener("click",hello);
    bt.addEventListener("dblclick",name);
}

