let url = 'https://catfact.ninja/fact'
fetch(url)
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data)=>{
    console.log(data.fact);
    return fetch(url);
})
.then((data)=>{
    return data.json();
})
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})