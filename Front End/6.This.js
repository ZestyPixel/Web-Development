//this is basically the object for which the even listner is created for

let btn = document.querySelector('button');
let h5 = document.querySelector('h5');
let h6 = document.querySelector('h6');
let p = document.querySelector('p');

function changeColor(){
    this.style.backgroundColor = "Orange";
}

h5.addEventListener('click',changeColor);
h6.addEventListener('click',changeColor);
p.addEventListener('click',changeColor);


btn.addEventListener('click',function(){
    console.log(this.innerText);
    console.dir(this);
    this.style.backgroundColor = "blue";
})

