const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require('./models/chat.js');
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

let chat1 = new Chat({
    from: "Neha",
    to: "Priya",
    message: "Send me pics",
    created_at: new Date() //Will generate random date
});

app.get("/", (req, res) => {
  res.send("working root");
});

app.listen(8080, () => {
  console.log("app is listening");
});
