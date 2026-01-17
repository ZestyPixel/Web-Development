function Message({userName, textColor}){ //The curly braces are used to destructure props object to directly get userName and textColor props.
    let color = {color: textColor};
    return(
        <h1 style={color}>Hello, {userName}</h1>
    );
}

export default Message;