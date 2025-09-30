let p = document.createElement('p');
p.innerText = "Hey I am red.";
p.style.color = "red";
let body = document.querySelector('body');
body.append(p);

let h3 = document.createElement('h3');
h3.innerText = "I am a blue h3.";
h3.style.color = "blue";
body.append(h3);

let div = document.createElement('div');
div.style.backgroundColor = "pink";
div.style.border = "black 1px solid";
body.append(div);

let h1 = document.createElement('h1');
h1.innerText = "I am in a div";

let p2 = document.createElement('p');
p2.innerText = "Me TOO";

div.appendChild(h1);
div.insertAdjacentElement("beforeend",p2);
