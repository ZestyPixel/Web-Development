function Message({userName, textColor}){ //The curly braces are used to destructure props object to directly get userName and textColor props.
    let color = {color: textColor}; //Since style expects a key value pair.
    return(
        <h1 style={color}>Hello, {userName}</h1>
    );
}

export default Message;