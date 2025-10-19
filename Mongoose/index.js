const mongoose = require('mongoose');

main().then((res)=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

//Model is a class in mongoose with which we construct documents
const User = mongoose.model("User", userSchema); //To create a new collection. Collection name, schema
//The name of the collection will auto get converted into lowercase and plural form.

const user1 = new User({
    name: "Umar",
    email: "umar2004.mahmood@gmail.com",
    age: 21
});

user1.save(); //this returns a promise

const user2 = new User({
    name: "John",
    email: "john2009@gmail.com",
    age: 22
});

user2.save().then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});


