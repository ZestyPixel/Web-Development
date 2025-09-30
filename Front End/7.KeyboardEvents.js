let btn = document.querySelector('button');
let ipt = document.querySelector('input');

function changeColor(){
    this.style.backgroundColor = "Orange";
}

btn.addEventListener('click',function(event){
    console.log(event);
    console.dir(event);
})

// ipt.addEventListener('keydown',function(){
//     console.log("Key was pressed");
// })

ipt.addEventListener('keyup',function(event){
    console.log("Key was pressed");
    console.dir(event);
    console.dir(event.key);
    console.dir(event.code);

}) 

//code show use key code and key shows us the actual key

//Form Events

let form = document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault(); //To stop default behaviour. In this case going to action.
    alert("Form submitted");
})

