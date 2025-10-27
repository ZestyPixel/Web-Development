const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require('./models/chat.js');
const methodOverride = require("method-override");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

let chat1 = new Chat({
    from: "Neha",
    to: "Priya",
    msg: "Send me pics",
    created_at: new Date() //Will generate random date
});

chat1.save().then((res)=>{
    console.log(res);
})

//Index Route
app.get("/chats", async(req, res)=> {
    let chats = await Chat.find(); //We use async and await since find() is getting data from the server and thus returns a promise.
    res.render("index.ejs", {chats});
});

//New Route
app.get("/chats/new", (req, res)=>{
  res.render("new.ejs");
});

//Create Route
app.post("/chats", (req, res)=>{
  let {from, to, msg} = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: newDate()
  });

  newChat.save()
  .then(res=>{ //If we are using then(), then we do not need to use await.
    console.log("Chat was saved");
  })
  .catch(err=>{
    console.log(err);
  })

  res.redirect("/chats");
});

//Edit route
app.get("/chats/:id/edit", async (req, res)=>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs");
});

//Update Route
app.put("/chats/:id", async (req, res) => {
  let {id} = req.params;
  let {msg: newMsg} = req.body;
  let updatedchat = await Chat.findByIdAndUpdate(
    id,
    {msg: newMsg},
    {runValidators: true, new: true}
  );

  res.redirect("/chats");
});

//Delete Route
app.delete("/chats/:id", async(req, res)=>{
  let {id} = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("working root");
});

app.listen(8080, () => {
  console.log("app is listening");
});
