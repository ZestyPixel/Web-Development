function hello(event){
    console.log("Hello Umar");
    console.log(event);
}

function bye(){//event is an object that contains information about the event that occurred.
    console.log("Bye");
}

export default function Button(){ //onClick event listener.
    //When you write the name of the function inside the curly braces, do not use parentheses after it. 
    //Using parentheses would call the function immediately instead of passing the function as a reference to be called later when the event occurs.
    return(
        <div>
            <button onClick={hello}>Click me</button>
            <p onMouseOver={bye}>Hover Over Me</p>
        </div>
    );
}

