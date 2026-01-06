//Session: A session is a server-side record that stores information about a user for a limited time while they interact with an application.
//Stateful system: Remembers user, Depends on previous requests, Uses sessions / memory(ftp)
//Stateless system: Forgets everything after each request, Each request is independent, No memory of past requests(http)

const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash'); //Flash messages are used to store temporary messages that can be displayed to the user on the next page they visit. 
// They are typically used for notifications like success or error messages. 
//Flash messages are stored in the session and are cleared after being displayed once.
//In order to use flash messages, you need to have session management set up in your Express application, 
// as flash messages rely on sessions to store the messages temporarily.

const path = require('path');

//resave forces session to be saved back to session store even if no changes were made.
//saveUninitialized forces a system which hasn't even been initialised to be saved back to the store.
const sessionOptions = {
    secret: "mysupersecretcode", //secret key is used to sign the session ID cookie, which is sent to the client.
    resave: false, 
    saveUninitialized: true
};

app.use(session(sessionOptions));
app.use(flash());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next)=>{ //Middleware to make flash messages available in all templates
     //This middleware runs on every request and sets res.locals.success and res.locals.error to the respective flash messages.
     //res.locals is an object that contains local variables for the response, which are available in the templates rendered for that response.
     //By setting these variables here, they become accessible in all EJS templates without needing to pass them explicitly each time.
     //This is useful for displaying flash messages consistently across different pages of the application.
    res.locals.success = req.flash("success"); 
    res.locals.error = req.flash("error");
    next();
});

app.get("/register", (req, res)=>{
    let {name = "Dunno who this"} = req.query;
    req.session.name = name;
    if(name === "Dunno who this"){
        req.flash("error", "You must provide a name to register!");
    } else {
        req.flash("success", "Successfully registered!");
    }
         //Here, a flash message with the key "success" is being set with the value "Successfully registered!".
    //key is used to identify the message type, and the value is the actual message content.
    res.redirect("/hello");
});

app.get("/hello", (req, res)=>{
    res.render("page.ejs", {name: req.session.name});
});

//Here once either flash message is flashed, it will be available in page.esj through res.locals.success or res.locals.error and will be displayed to the user.

app.get("/reqcount", (req, res)=>{ //This route is an example of how in stateful sessions the response can depend on previous requests becasue the server is keeping track of the number of requests made by the client using sessions.
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    res.send(`You sent a request ${req.session.count} time/times`);
});

app.get("/test", (req, res)=>{
    res.send("Working");
});

app.listen(3000, ()=>{
    console.log("server is listening");
});

