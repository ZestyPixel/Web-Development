//In async code, we have to use try-catch blocks to catch errors and pass them to next() function.
//Because in async code, throwing an error won't be caught by Express's default error handler.
//ayncWrap is a higher order function that takes an async function and returns a new function
//which calls the original function and catches any errors, passing them to next().
//This way, we can avoid using try-catch blocks in every async route handler.
// function asyncWrap(fn){
//     return function(req, res, next){
//         fn(req, res, next).catch(next).catch((err)=>{
//             console.log("Error caught in asyncWrap:", err);
//         });
//     }
// }
//When handling mongoose errors or other library errors, we can check the error type
//in the error handling middleware and customize the response accordingly.
const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

const check = ("/api", (req, res, next)=>{
    let {token} = req.query;
    if(token === "12345"){
        console.log("Access granted");
        res.send("Access Granted");
        next();
    } else{
        console.log("Access denied");
        throw new ExpressError(401, "Access Denied"); //Will throw custom error
    }
});

app.get("/api", check, (req, res)=>{
    res.send("This is API.");
});

app.get("/err", (req, res)=>{
    abcd = abcd; //This will cause an error
    res.send("This is error page.");
});

app.use((err, req, res, next)=>{ // Error handling middleware
    let {status=500, message="error occured"} = err; 
    //next(err); We do this because we want to pass the error to the next error handling middleware/default error handler.
    res.status(status).send(message);
});

// app.use((err, req, res, next)=>{ This will run after the previous error handling middleware.
//     console.log("Custom error handling middleware");
//     next(); //Passing to default error handler after which Express will send a generic error response.
// });

app.get("/", (req, res)=>{
    res.send("Hi I am root.");
});

app.listen(8080, ()=>{
    console.log("Listening to port");
});