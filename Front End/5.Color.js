let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

btn.addEventListener('click',function(){ //Can also use these listners on any element. p, div, etc.
    let rand = getRandomColor();
    h3.innerText = rand;
    div.style.backgroundColor = rand;
})

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;

}

