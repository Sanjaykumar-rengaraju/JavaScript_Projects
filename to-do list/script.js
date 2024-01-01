const textInput = document.getElementById('task-input');
const btn = document.getElementById('btn');
const taskContainer = document.getElementById('task-container');

document.addEventListener('DOMContentLoaded', () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.forEach((taskText) => {
        addTaskToDOM(taskText);
    });
});

function handleTaskAddition() {
    let taskText = textInput.value.trim();

    if (taskText === "") {
        alert('Please enter a task!');
        return;
    }

    addTaskToDOM(taskText);

    textInput.value = "";
}

btn.addEventListener('click', handleTaskAddition);

textInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        handleTaskAddition();
    }
});

function addTaskToDOM(taskText) {
    let task = document.createElement('div');
    task.classList.add("task");

    let li = document.createElement('li');
    li.innerText = taskText;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    taskContainer.appendChild(task);

    saveTaskToLocalStorage(taskText);

    checkButton.addEventListener('click', function() {
        this.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function() {
        this.parentElement.remove();

        removeTaskFromLocalStorage(taskText);
    });
}

function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

function removeTaskFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}