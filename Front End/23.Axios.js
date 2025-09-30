let btn = document.querySelector('button');
let para = document.querySelector('p');

let url = 'https://catfact.ninja/fact';

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(error){
        console.log(error);
        return 'No fact found';
    }
}

btn.addEventListener('click',async ()=>{
    let fact = await getFacts();
    para.innerText = fact;
})

let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
  let link = await getImage();
  let img = document.querySelector('img');
  img.setAttribute("src", link);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log("error – ", e);
    return "/";
  }
}


