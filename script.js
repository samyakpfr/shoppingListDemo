

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", addToList);

function addToList(){
    let toBeAdded = input.value;
    input.value = '';
    const li = document.createElement("li");
    const itemName = document.createElement("span");
    const delBtn = document.createElement("button");
    li.appendChild(itemName);
    li.appendChild(delBtn);
    itemName.textContent = toBeAdded;
    delBtn.textContent = "Delete";
    ul.appendChild(li);
    delBtn.addEventListener("click",() => delBtn.parentNode.remove());
    input.focus();
}