let todo = [];

let req = prompt("Enter your choice");

while(true){
    if(req == "quit"){
        console.log("Quitting app");
        break;
    }

    if(req == "list"){
        for(task of todo){
            console.log("-------------")
            console.log(task);
            console.log("-------------")
        }
    }
    else if(req == "add"){
        let task = prompt("Enter the task you want to add: ");
        todo.push(task);
        console.log("Task added");
    }
    else if(req == "delete"){
        let idx = parseInt(prompt("Enter the index you want to delete: "));
        if(!isNaN(idx) && idx>=0 && idx<todo.length){
            todo.splice(idx, 1);
            console.log("Task deleted");
        }
    }
    else{
        console.log("Invalid request!!"); 
    }
    req = prompt("Enter your next choice");
}