// function saveData(data, success, reject) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success(data); // CALL BACK HELL
//     } else {
//         reject();
//     }
// }

// saveData('umar', (data) => {
//     console.log('Your data was saved.', data);
//     saveData('mahmood',(data)=>{
//         console.log('Data 2 saved.', data);
//         saveData('Amity', (data)=>{
//             console.log('Your data 3 was saved.', data);
//         }, ()=>{
//             console.log('Your data 3 was not saved.'); 
//         })
//     }, ()=>{
//         console.log('Your data2 was not saved');
//     })
// }, () => {
//     console.log('Your data was not saved.');
// });

//Promise object has resolve(success) and reject(reject)

function saveData(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
            resolve('Data was as saved');
        }
        else{
            reject('Weak connection');
        }
    })
}

//If you want to do work after resolve you use .then() and if after reject you use .catch()

saveData('Umar')
    .then((result)=>{
        console.log('Promise fullfilled.');
        console.log(result);
        return saveData('Mahmood');
    })
    .then((result)=>{
        console.log('Data 2 saved');
        console.log(result);
        return saveData('Shoe');
    })
    .then((result)=>{
        console.log('Data 3 saved')
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
        console.log('Promise rejected');
    })
