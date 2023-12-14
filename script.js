function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const todoList = document.getElementById("todo-list");

        
        const taskItem = document.createElement("div");
        taskItem.classList.add("todo-item");

        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        
        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(taskItem);
        });

        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        
        todoList.appendChild(taskItem);


        taskInput.value = "";
    }
}
