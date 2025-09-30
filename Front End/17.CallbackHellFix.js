h1 = document.querySelector('h1');

function setColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        h1.style.color = color;
        }, delay);
        resolve('Color changed');
    })
}


setColor('green',1000)
.then((result)=>{
    setColor('blue',2000);
    return setColor('red',3000);
})
.then(()=>{
    console.log('Finished');
})
