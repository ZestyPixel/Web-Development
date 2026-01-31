import { useEffect, useState } from "react";

export default function Joker(){
    const url = "https://official-joke-api.appspot.com/random_joke";
    let [joke, setJoke] = useState({});

    const getNewJoke = async()=>{
        let response = await fetch(url);
        let jsonResponse = await response.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    }

    useEffect(() => {async function getFirstJoke(){
        let response = await fetch(url);
        let jsonResponse = await response.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    } getFirstJoke() }, []) //We use an arrow function inside useEffect and then call the async function as useEffect itself cannot be async 
    //that is because useEffect expects either a cleanup function(to be called when the component unmounts) or nothing to be returned, not a Promise(which is what an async function returns).

    return(
        <div>
            <h1>Here is a joke, just for you</h1>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={getNewJoke}>Get new joke</button>
        </div>
    );
}