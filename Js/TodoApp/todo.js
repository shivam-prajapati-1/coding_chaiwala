 const addTaskBtn=document.querySelector("#addTaskBtn")
const newTaskInput=document.querySelector("#newTask")
const todoList=document.querySelector("#todolist")

function CreateTaskElement(taskText){
   let taskElement= document.createElement("div")
   taskElement.innerHTML=`
   <span>${taskText}</span>
   <button id="editTask">Edit</button>
      <button id="deleteTask">Delete</button>
`;

let deleteBtn=taskElement.querySelector("#deleteTask");
deleteBtn.addEventListener("click",()=>{
taskElement.remove();
})

let EditBtn=taskElement.querySelector("#editTask");
EditBtn.addEventListener("click",()=>{
    let newTaskText=prompt("Edit the task ",taskText)
    if(newTaskText !==""){
    taskElement.querySelector("span").innerText=newTaskText
}
})

return taskElement;
}

addTaskBtn.addEventListener("click",()=>{
    let taskText=newTaskInput.value;
    console.log(taskText);

    if(taskText !=""){
        let taskElement= CreateTaskElement(taskText)
        todoList.appendChild(taskElement);
        newTaskInput.value=""
    }
})