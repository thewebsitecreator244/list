const addbutton = document.querySelector(".button");
const formtask = document.querySelector(".form-task");
const tasklist = document.querySelector(".task-list")

function addNewTask(event){
    event.preventDefault()
    const newItem = document.querySelector("#template").cloneNode(true).content;
}
addbutton.addEventListener("click",addNewTask)