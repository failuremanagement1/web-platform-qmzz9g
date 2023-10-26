let list = [1, 2, 3];

for(let i = 0; i < list.length; i++){
  console.log(list[i]);
}

let count = 0;
let button = document.getElementById("button");

function update_button(){
  count++; console.log(count);
  button.textContent = "I need sleep";
}