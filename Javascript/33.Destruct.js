//Storing values of array into variables

let names = ["Umar", "John", "James", "Jonathan", "Jizzel"];

let [winner, runnerUp, ...others] = names; //others contains the rest of the names

console.log(winner, runnerUp, ...others);

let student = {
    name: "Umar",
    age: 21,
    car: "BMW"
};

let {name, car} = student; //It will search the specific key in the object and copy the value of that key into the two variables

let {name: user, city:place = "Delhi"} = student; //If you want to store in a different named variable. City gives a default value to a non existing key, 
// if it did that the value in the object would be the one stored not the default one