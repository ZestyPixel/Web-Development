//One to squillions
//Basically instead of storing child documents or their ids inside parent document, we will create separate collection for both parent and child
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId, //To tell mongoose that we are storing object ids
        ref: "User", //Reference to which model
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async() =>{
    let user1 = new User({
        username: "John Doe",
        email: "johndoe@gmail.com",
    });

    let post1 = new Post({
        content: "This is my first post",
        likes: 100,
    });

    post1.user = user1; //Even though we are assigning entire user, only id will be stored in post document.

    let result1 = await user1.save();
    let result2 = await post1.save();
    console.log(result1);
    console.log(result2);
};

addData();

let check = async() => {
    let user = await User.findOne({username: "John Doe"});
    let posts = await Post.find({user: user._id}); //Finding all posts whose user id matches with user._id
    console.log(posts);
};

check();

//You can use populate to get complete user details while querying post
//Post.findOne({content: "This is my first post"}).populate("user").then(data => console.log(data));
//Here, mongoose will fetch complete user details from User collection whose id is stored in user field of post document