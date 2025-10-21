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

// const user1 = new User({
//     name: "Umar",
//     email: "umar2004.mahmood@gmail.com",
//     age: 21
// });

// user1.save(); //this returns a promise

// const user2 = new User({
//     name: "John",
//     email: "john2009@gmail.com",
//     age: 22
// });

// user2.save().then(res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.insertMany([ //To insert many docs at once.
//     {name: "Tony", email: "Tony@gmail.com", age: 50},
//     {name: "hello" , email: "Hello", age : 60}
// ]).then((res)=>{
//     console.log(res);
// });

//Mongoose has operation buffering so that you can start using your models immediately without waiting for mongoose to connect to MongoDB. 
//That is why we dont write the data insertion lines in the then of the main function call.

//Find does not return a promise but a query object, but we can still use then() on it.
// find all documents
User.find({}).then((res)=>{
    console.log(res);
});

User.find({age: { $gte: 10 } }).then((res)=>{
    console.log(res[0]);
});

// executes, name LIKE john and only selecting the age and fields
User.find({ name: /john/i }, 'age email').then((res)=>{
    console.log(res);
});

//Similarly we also have findOne() and findById()

//For update we have updateOne() and updateMany() and the format is the same condition and then the change it self seperated by comma.

//const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });

//findOneAndUpdate(), findByIdAndUpdate()

// User.findOneAndUpdate(filter, update, options); returns Query, in options we can put {new: true} so that instead of printing the old doc it will print the updated doc

//Same as update the deleteOne and deleteMany works and for the findOneAndDelete and findByIdAndUpdate, both return a query which we can by options make it so they return
//the deleted doc.



