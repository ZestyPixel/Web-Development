//This file is just to initialise a database with some values while we are building it and testing it.
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

let chats = [
  {
    from: "Neha",
    to: "Priya",
    msg: "Send me pics",
    created_at: new Date()
  },
  {
    from: "Priya",
    to: "Neha",
    msg: "Wait, I’ll send them in a minute",
    created_at: new Date()
  },
  {
    from: "Neha",
    to: "Priya",
    msg: "Okay, no hurry",
    created_at: new Date()
  },
  {
    from: "Priya",
    to: "Neha",
    msg: "Sent! Check WhatsApp",
    created_at: new Date()
  },
  {
    from: "Neha",
    to: "Priya",
    msg: "Got them! Thanks",
    created_at: new Date()
  }
];

Chat.insertMany(chats);


