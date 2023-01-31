const input = document.querySelector("#userInput");
const addTaskButton = document.querySelector("#addTask");
const userTask = document.querySelector(".userTask");


const validateInput = () => input.value.trim().length > 0;
const handleAddTask = () => {
    const inputIsValid = validateInput();    

    if (!inputIsValid){
        return alert("Digite sua tarefa.");
    }
    const taskItem = document.createElement("ul");
    taskItem.classList.add("task-item");

    const userText = document.createElement("li");
    userText.innerText = input.value;

    const deleteItem = document.createElement("button");
    const label = document.createTextNode("Remover");
    deleteItem.appendChild(label)
    deleteItem.classList.add("del")

    taskItem.appendChild(userText);
    taskItem.appendChild(deleteItem);

    userTask.appendChild(taskItem);

}

addTaskButton.addEventListener("click", () => handleAddTask());

