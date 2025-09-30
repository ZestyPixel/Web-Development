h1 = document.querySelector('h1');

function setColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}


setColor('green',1000, ()=>{
    setColor('orange',2000,()=>{
        setColor('blue',3000)
    } )
});

//Callback nesting => Callback hell. To save us from this we have Promises, async and await