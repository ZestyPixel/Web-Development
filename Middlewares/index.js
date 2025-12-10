//Middlewares are functions that run during the request-response cycle in an Express application. 
// A middlewhere can either send a response to the client or pass control to the next middleware function in the stack. 
// This allows for modular and reusable code, as well as the ability to handle tasks such as logging, authentication, and error handling in a centralized manner.
const express = require('express');
const app = express();

// app.use((req, res, next)=>{
//    console.log("Hi I am middleware-1");
//    res.send("Middleware Finished"); If we send a response here, the request-response cycle ends and the next middleware or route handler won't be called.
//    next(); This passes control to the next middleware function or what route was called.
// });

// app.use((req, res, next)=>{ You can have multiple middlewares and they will be executed in the order they are defined.
//    console.log("Hi I am middleware-2");
//    next(); This passes control to the next middleware function or what route was called.
// });

//Logger
app.use((req, res, next)=>{ //Always write middlewares at the start.
    req.time = new Date(Date.now()).toString(); //This middleware adds a timestamp to the request object. 
    // new Date(Date.now()) creates a new Date object representing the current date and time, and .toString() converts it to a human-readable string format.
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});



const check = ("/api", (req, res, next)=>{ //This middleware will check api token access in query string.
    let {token} = req.query;
    if(token === "12345"){
        console.log("Access granted");
        res.send("Access Granted");
        next();
    } else{
        console.log("Access denied");
        throw new Error("Access Denied"); //Custom error message.
    }
});

app.get("/api", check, (req, res)=>{
    res.send("This is API.");
});

app.use("/random", (req, res, next)=>{ //This middleware will only be executed for routes that start with /random
    console.log("This is a random middleware");
    next();
});

app.use((req, res, next)=>{
    console.log("Page not found middleware");
    next();
});

app.get("/", (req, res)=>{
    res.send("Hi I am root.");
});

app.get("/random", (req, res)=>{
    res.send("This is a random page.");
});

app.listen(8080, ()=>{
    console.log("Listening to port");
});