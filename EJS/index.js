const express = require('express');
app = express();
const path = require('path');
// const path = require('path') This and the line after are if you want to run the server in the parent folder so it can execute the ejs file
// app.set("views", path.join(__dirname, "/views"));
const port = 8080;

app.use(express.static(path.join(__dirname,"public/css")));
app.set("view engine", "ejs"); 
app.set("views",path.join(__dirname,"views"));
//We don't have to require ejs as express auto requires it. View engine basically means template engine.
//View engine expects that all of our views will be in a folder named views. To send we use res.render

app.get("/", (req, res)=>{
    res.render("home.ejs");
})

app.get("/ig/:username", (req, res)=>{
    // const followers = ["Umar", "Adam", "John"]
    let {username} = req.params; //This is how we get the username from the url
    const instaData = require("./data.json")
    const data = instaData[username]
    if(data){
        res.render("insta.ejs", {data});
    }else{
        res.render("error.ejs", {username});
    } 
})
 
app.get("/rolldice", (req, res)=>{
    let data = Math.floor(Math.random()*6) + 1; //Here we are assuming that this is data coming from a database
    res.render("rollDice.ejs", {data});
})

app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})

