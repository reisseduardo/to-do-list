const input = document.querySelector("#userInput");
const addTaskButton = document.querySelector("#addTask");
const userTask = document.querySelector(".userTask");


const validateInput = () => input.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return alert("Digite sua tarefa.");
    }

    const userText = document.createElement("li");

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function () {
        if (checkbox.checked) {
            taskText.classList.add("completed");
        }else{
            taskText.classList.remove("completed");
        }
    }
    const taskText = document.createElement("p");
    taskText.innerText = input.value;

    const deleteItem = document.createElement("button");
    const label = document.createTextNode("Remover");
    deleteItem.appendChild(label)
    deleteItem.classList.add("del")

    userTask.appendChild(userText);
    userText.appendChild(checkbox);
    userText.appendChild(taskText);
    userText.appendChild(deleteItem);


    input.value = "";
}

addTaskButton.addEventListener("click", () => handleAddTask());
