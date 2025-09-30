let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');

btn.addEventListener('click',async ()=>{
    let country = document.querySelector("input").value;
    let colleges = await getColleges(country);
    console.log(colleges);
    show(colleges);
})

function show(colleges){
    let list = document.querySelector('#list');
    list.innerText = "";
    for(let college of colleges){
        let li = document.createElement('li');
        li.innerText = `${college.name} - ${college["state-province"] || "N/A"}`;        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    } catch(error){
        console.log(error);
    }
}
