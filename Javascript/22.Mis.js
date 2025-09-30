const sum = (a,b) => { 
    console.log(a+b);
}

const s = a => {  //If there is just one argument you can skip the parenthesis.
    console.log(a); 
}

const product = (a,b) => (a*b);
//If there is just one line of code in this that you want to return, then you can skip the return statement. And parenthesis are used instead of curly braces for the function

//setTimeout(function,timeout)

console.log("Hello");

setTimeout(() =>{
    console.log("Delhi")
}, 4000);

console.log("Welcome To");

// setInterval(() =>{  //Will print again and again non stop after the defined interval
//     console.log("Umar")
// }, 2000);

// To stop use clearInterval(id)

//Arrow functions inherit the scope of their parent, while normal functions have the scope of the object that called them.

const student = {
  name: "aman",
  marks: 95,
  prop: this, // global scope

  getName: function () {
    console.log(this);
    return this.name;
  },

  getMarks: () => {
    console.log(this); // parent's scope -> window
    return this.marks;
  },

  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // student
    }, 2000);
  },

  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // window
    }, 2000);
  }
};

//To print hello world every two seconds for 5 times 

let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 10000);
