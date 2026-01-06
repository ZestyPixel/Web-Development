//Cookies are basically small pieces of data that are stored on the client-side (browser) and sent to the server with each request. 
// They are commonly used for session management, user preferences, and tracking user behavior.
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser'); //middleware to parse cookies

app.use(cookieParser("supersecretcode"));//secret code for signed cookies
//Signed cookies are cookies that have been cryptographically signed to ensure their integrity and authenticity.
// This means that the server can verify that the cookie has not been tampered with by the client.
// If a signed cookie is modified in any way, the server will reject it.
// This is useful for storing sensitive information in cookies, as it helps prevent unauthorized access or manipulation of the data.

app.get("/getcookies", (req, res)=>{
    res.cookie("greet", "hello", {signed: true});
    res.send("Sent cookies");
});

app.get("/greet", (req, res)=>{
    let {name = "dunno who this"} = req.cookies;
    res.send(`Hello, ${name}`);
});

app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});

app.listen(3030, () => {
  console.log("server is listening to 3000");
});