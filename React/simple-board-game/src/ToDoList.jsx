//For practice implement a feature to update one, update all and add a line through feature to mark tasks as done.
import { useState } from "react";
import {v4 as uuidv4} from "uuid"; // Importing uuid to generate unique IDs for each task, React requires a unique key for each list item.

export default function ToDoList(){
    let [todos, setTodos] = useState([{
        task: "Sample Task", 
        id: uuidv4()
    }]);
    
    let [newtodo, setNewToDo] = useState();

    function addNewTask(){
        setTodos((prevtodos)=>{
            return [...prevtodos, {task: newtodo, id: uuidv4()}];
        });
        setNewToDo(""); // Clear the input field after adding the task
    }

    function updateToDoValue(event){
        setNewToDo(event.target.value);
    }

    function deleteToDo(id){
        setTodos((prevToDo)=>(prevToDo.filter((todo)=>(todo.id != id)))); //Using callback form of setState to ensure we have the latest state
    }

    return(
        <div>
            <h1>To Do List</h1>
            <input type="text" placeholder="Write a Task" value={newtodo} onChange={updateToDoValue}/> <br></br> <br />
{/* Here what the value and onChange do:
- The value attribute sets the current value of the input field to the newtodo state variable. This means that whatever text is stored in newtodo will be displayed in the input field.
- The onChange attribute is an event handler that listens for changes to the input field. Whenever the user types something into the input field, the updateToDoValue function is called. 
This function takes the event object as an argument and updates the newtodo state variable with the current value of the input field (event.target.value). 
This ensures that the newtodo state variable always reflects what the user has typed into the input field.

The reason we need to use value to display the current value of the input field and not just let it work on its own is to 
maintain a single source of truth for the input's value. 
By controlling the input's value through React state (newtodo), we can easily manage and manipulate the input data within our component. 
This approach is known as a "controlled component" in React. */}
            <button onClick={addNewTask}>Add</button> <br></br>

            <h2><u>List</u></h2>
            <ul>
                {
                    todos.map((todo)=>( //Normal paranthesis are used here to directly return the JSX element for each todo item.
                        <li>
                            Id: {todo.id} Task: {todo.task}
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteToDo(todo.id)}>Delete</button> 
                            {/* We use the arrow function in onClick so that the func is not called immediately and only called when delete button is clicked */}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}