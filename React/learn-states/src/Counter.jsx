// Props are immutable
// State is a javascript object that holds information about a component's current situation.
// State can be changed, and when it changes, the component re-renders to reflect the new state.
// Hooks are special functions that let you "hook into" React features. The useState hook lets you add state to functional components.
import {useState} from "react";

export default function Counter(){
    let [count, setCount] = useState(Math.random);
    //useState returns an array with two elements:
    //1. The current state value (count)
    //2. A function that lets you update the state (setCount)
    // We use array destructuring to assign these values to variables.
    // We initialize the state with 0 by passing 0 to useState.
    //Component only re-renders if there has been a change in the state
    //If you ever pass a funtion in useState to initialise it with some value, never call the function(by putting paranthesis after the name),
    //as it will call that function everytime the component re-renders and take up resources. Only pass a refrence.
    function inCount(){
        setCount((prevCount)=>{
            return prevCount+1;
        });
    }

    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>
    );
}