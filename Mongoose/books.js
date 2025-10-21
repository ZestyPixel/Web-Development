//Schema validation
//Schema validation only works on the time of inserting data and not when updating. If you want them to work then you have to set runValidators to true in the 
//options of the update method
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String
    },
    price:{
        type: Number,
        min: [100, "Price is too low"], //We can in an array define both the validator value and also what error should be shown if not met.
        default: 300
    },
    category:{
        type: String,
        enum: ["fiction", "non-fiction"] //Enum to check if the entered value is in this array.
    }
});

const Book = mongoose.model("Book", bookSchema);

let Book1 = new Book({
    title: "Harry Potter and The Deathly Hallows",
    author: "JK Rowling",
    price: 600,
    category: "fiction"
});

Book.findOneAndUpdate({author : "JK Rowling"}, {price : 800}, {runValidators: true}, {new: true} )
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message); //To see the message only.
});


