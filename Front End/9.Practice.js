let test = document.getElementById("test");

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener("mouseout",function(event){
    event.target.style.color = "orange";
});

let btn = document.querySelector('button');
btn.addEventListener('click',function(event){
    btn.style.color = 'orange';
})

    input = document.getElementById("nameInput");
    heading = document.getElementById("displayName");

    input.addEventListener("input", function(event) {
      filteredValue = input.value.replace(/[^a-zA-Z ]/g, '');
      heading.textContent = filteredValue;
    });