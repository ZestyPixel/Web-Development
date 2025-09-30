//await can only be used inside an async function

function getNum(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10) + 1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}

demo();

let h = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 2) {
                reject('Failed');
                return;
            }
            h.style.color = color;
            resolve();
        }, delay);
    });
}

async function colorChange() {
    try {
        await changeColor('red', 1000);
        await changeColor('blue', 2000);
        await changeColor('green', 3000);
    } catch (error) {
        console.log("Error caught:", error);
    }

    let a = 6; //This code runs even if there is an error in the above await ones
    console.log(a);
}

colorChange();