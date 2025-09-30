async function greet(){
    return 'hello';
}

greet()
.then((result)=>{
    console.log('Result', result);
})
.catch((err)=>{
    console.log('Error', err);
})

let demo = async ()=>{};

demo()
.then(()=>{
    console.log('Called');
})