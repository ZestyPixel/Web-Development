const express = require('express');
const app = express();

let port = 3000;

app.listen(port, ()=>{ //Listens listens for incoming api requests
    console.log("Port: ",port);
}) //Ports are the communication endpoints for servers to connect with clients 

// app.use((req, res)=>{ //Use sends the same response for all incoming requests irrespective of the route.
//     console.log("request received");
//     res.send("<h1>Hello from server<h1>");
// })

app.get("/", (req, res)=>{
    res.send("You contacted route path.")
})

app.get("/search", (req,res)=>{
    let query = req.query.q; //For query parameters
    if(!query) res.send("No query found");
    else res.send("You searched for "+query);
})

app.get("/:username/:id", (req, res)=>{ //For parameterized routes
    let name = req.params.username;
    let id = req.params.id;
    res.send("You contacted "+name+" path and the id is "+id);
})

app.get("/apple", (req, res)=>{
    res.send("You contacted apple path.")
})

app.post("/", (req, res)=>{ //Handles post requests
    res.send("You contacted post request.")
})

app.use((req, res)=>{ //Route to catch all other paths that are not defined above
    console.log("This path does not exist");
    res.send("<h1>This path does not exist</h1>")
})

//Nodemon auto restarts the server whenever there is a change in the code.