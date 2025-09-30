//Key value pairs
//You can replace any type of data type property with a different type

let student  = {
    name: "Umar",
    age: 21,
    marks: 40,
    fav_colors: ["red","black"]
};

console.log(student["marks"]);
console.log(student.fav_colors); //This format cannot be used with variables

//Js converts all the keys into strings

student.marks = "50"; //To update the value
console.log(student["marks"]);

student.gender = "Male"; //To create a new property
console.log(student["gender"]);

delete student.marks; //To delete a key value pair


const classInfo = { //Nested object literal
    Umar: {
        age: 21,
        marks: 40
    },

    Umar2: {
        age: 20,
        marks: 50
    },
    
    umar3: {
        age: 19,
        marks: 60
    }
};

console.log(classInfo.Umar.age);

let students = [ //Array of objects
    {
        name: "Umar",
        age: 21,
        marks: 85
    },
    {
        name: "Ayesha",
        age: 22,
        marks: 90
    },
    {
        name: "Ravi",
        age: 20,
        marks: 78
    }
];

console.log(students[0].name); 

