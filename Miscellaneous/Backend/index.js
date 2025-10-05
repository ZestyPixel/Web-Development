const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true})); //So that express can parse data that comes from a post request. We basically have to tell express what kind of data we are 
//sending otherwise it will just print undefined as it doesnt know the type
app.use(express.json()); //If we are sending json data.

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})

app.get('/register',(req,res)=>{
    res.send("Hello World!")
})

app.post('/register',(req,res)=>{
    let {user, password} = req.body;
    res.send(`Post response ${user}`)
})