// let form = document.querySelector('form');
// form.addEventListener('submit',function(event){
//     event.preventDefault();

//     // let user = document.querySelector('#user');
//     // let pass = document.querySelector('#pass');
//     let user = this.elements[0]; //better way. there is a collection of elements in the from
//     let pass = form.elements[1];
//     console.dir(user.value);
//     console.dir(pass.value);
//     alert(`Hi ${user.value} your password is ${pass.value}`);
// })

let inp = document.querySelector('input');
inp.addEventListener('change',function(){ //Tracks changes when there is a difference between initial and final value.
    console.log("Change event");
    console.log("Value =", this.value);
})

inp.addEventListener('input',function(){ //Tracks each change as they are made.
    console.log("Input event");
    console.log("Value =", this.value);
})

let he = document.querySelector('#hello');
let heading = document.querySelector('h1')
he.addEventListener('input',function(){
    heading.innerText = he.value;
})