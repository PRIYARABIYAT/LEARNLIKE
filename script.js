const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function addTodo() {
    const task = todoInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleComplete(this)">${task}</span>
        <button onclick="removeTask(this)">❌</button>
    `;

    todoList.appendChild(li);
    todoInput.value = "";
}

function toggleComplete(element) {
    element.classList.toggle("completed");
}

function removeTask(button) {
    button.parentElement.remove();
}
