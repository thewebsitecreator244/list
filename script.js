const addbutton = document.querySelector(".button");
const formtask = document.querySelector(".form-task");
const tasklist = document.querySelector(".task-list")


function addNewTask(event){
    event.preventDefault();
    const task = formtask.value;
    const newItem = document.querySelector("#template").cloneNode(true).content;
    newItem.querySelector(".task__text").value = task;
    newItem.querySelector(".task__delete").addEventListener("click",deleteTask);
    tasklist.append(newItem);
    formtask.value = "";
    formtask.focus();

}

function deleteTask(event) {
    let target = event.target.parentElement
    target.remove()
    
    
}
addbutton.addEventListener("click",addNewTask);