const addbutton = document.querySelector(".button");
const formtask = document.querySelector(".form-task");
const tasklist = document.querySelector(".task-list")

function addNewTask(event){
    event.preventDefault();
    const task = formtask.value;
    const newItem = document.querySelector("#template").cloneNode(true).content;
    newItem.querySelector(".task__text").value = task
    tasklist.append(newItem)
    formtask.value = ""
    formtask.focus()
}
addbutton.addEventListener("click",addNewTask);