document.all[8].innerText = "Peter Parker";

console.dir(window);

let obj = document.getElementById("mainImg");

console.dir(obj);

let obj2 = document.getElementsByClassName("oldImg"); //This returns a collection, which is similar to an array but not all of array methods work on it.
console.dir(obj2)

//getElementsByTag is also the same

//dir returns an interactable object form

for(let i=0; i<obj2.length; i++){
    console.dir(obj2[i]);
}

//Query Selectors

console.dir(document.querySelector("p")); //can also use #description, .oldImg, or nesting (div a) all types as in css. Selects only the first of type
console.dir(document.querySelectorAll("div a")); //To select all anchor tags in div


//Text:
//innerText: Visible text in the node(on screen)
//textContent: Shows the full text(all the content in the html file, hidden elements too)
//innerHTML: Shows the full markup

//Manipulating attributes

let img = document.querySelector("img");
console.dir(img.getAttribute('id')); //getter
img.setAttribute('id','spidermanImg'); //setter can also set value for and attribute that doesn't exist

//Manipulating attributes
console.dir(img.style);

let heading = document.querySelector('h1');
heading.style.color = 'purple';

let links = document.querySelectorAll('.box a');
for(let i = 0; i<links.length; i++){
    links[i].style.color = 'yellow';
}

//Style cannot change CSS, only html inline styling

//Class list
console.dir(img.classList); //basically if you want to apply some common changest to many things, just create a class in css and then add it to each element
img.classList.add('hij'); 
console.dir(img.classList);
img.classList.remove('hij');
console.dir(img.classList.contains('hij'));
console.dir(img.classList.toggle('hij')); //Switch, add if not present, remeoves if present. Returns true if added, false if removed
console.dir(img.classList.toggle('hij'));

//Navigation
let h4 = document.querySelector('h4');
console.dir(h4.parentElement);
console.dir(h4.children);
console.dir(h4.childElementCount);
console.dir(h4.nextSibling);
console.dir(h4.previousSibling);
console.dir(h4.previousElementSibling);

img.previousElementSibling.style.backgroundColor = 'black';

//Adding Elements: Create a new element and then add it

let p = document.createElement('p');
p.innerText = "Hello I am Umar."
let body = document.querySelector('body');
body.appendChild(p);
p.append(" I am 21 years old.") //To make changes inside the element. Can also insert elements, buttons, etc inside. Adds to the end
p.prepend("Ahem. "); //Adds to start

//Insert Element
let b = document.createElement('button');
b.innerText = "Yohoooo";
p.insertAdjacentElement('afterbegin',b); //beforebegin, afterbegin, beforeend, afterend

//To remove, removechild and remove(element)









