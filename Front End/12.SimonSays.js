let gameSequence = [];
let userSequence = [];
let buttons = ['yellow', 'green', 'red', 'purple'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress',()=>{
    if(started == false){
        console.log('Game has started');
        started = true;
        levelUp();
    }
})

function buttonFlash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },250);
}
function levelUp(){
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = buttons[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    
    buttonFlash(randomButton);
}

function checkColor(index){
    if(userSequence[index] === gameSequence[index]){
        if(userSequence.length == gameSequence.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = (`Game Over! Level: <b>${level}</b> <br> Press any key to start.`);
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor = 'white';
        },250)
        reset();
    }
}

function buttonPress(){
    let button = this;
    buttonFlash(button);
    userColor = button.getAttribute('id');
    userSequence.push(userColor);
    checkColor(userSequence.length-1);
}

let allButtons = document.querySelectorAll('.btn');
for(btn of allButtons){
    btn.addEventListener('click',buttonPress);
}

function reset (){
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
} 



