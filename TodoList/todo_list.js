const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
let tasks = [];

function addTask() {
    // Get user input and trim all trailing spaces
    const taskText = taskInput.value.trim();

    //validate user input if not empty
    if (taskText !== "") {
        //add task object into tasks array
        tasks.push({ text: taskText, completed: false});
        //clear user input
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    // Clears the existing task list in the UI before re-rendering
    taskList.innerHTML = "";

    // Iterates over the 'tasks' array and creates list items for each task
    tasks.forEach((task, index) => {
        // Creates a new <li> element to hold the task
        const li = document.createElement("li");

        // Sets the inner HTML of the <li> element, including a checkbox and a label
        li.innerHTML = `<label>
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            ${task.text}</label>
        `;

        // Adds an event listener to the checkbox to toggle the task's completion status    
        li.querySelector("input").addEventListener("change", () => toggleTask(index));

        // Appends the created <li> to the taskList element
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Toggle completion status
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed); // Remove only completed tasks
    displayTasks();
}

function clearAllTasks() {
    tasks = []; // Remove all tasks
    displayTasks();
}

// Attach event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);

displayTasks(); // Initial display