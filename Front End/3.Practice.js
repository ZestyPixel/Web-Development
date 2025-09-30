let body = document.querySelector('body');
let button = document.createElement('button');
let input = document.createElement('input');
button.innerText = "Click me";

body.appendChild(button);
body.appendChild(input);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn = document.querySelector('#btn');
btn.style.backgroundColor = "blue";
btn.style.color = "white";

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
body.append(h1);

let p = document.createElement("p");
p.innerHTML = "Umar <b>21</b> Indian";
document.querySelector("body").append(p);


