let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    item = document.createElement('li');
    del = document.createElement('button');
    del.innerText = "Delete";
    del.classList.add('delete');
    item.innerText = input.value;
    item.appendChild(del);
    ul.appendChild(item); 
    input.value = "";
})

let delBtn = document.querySelector('.delete');

ul.addEventListener('click',function(){
    if(event.target.classList.contains('delete')){
        let itemToremove = event.target.parentElement;
        itemToremove.remove();
    }
})
