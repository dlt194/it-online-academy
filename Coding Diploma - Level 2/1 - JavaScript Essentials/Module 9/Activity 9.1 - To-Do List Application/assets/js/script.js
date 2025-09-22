// Array to store tasks
let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput").value;

  if (taskInput) {
    tasks.push(taskInput);
    document.getElementById("taskInput").value = "";
    displayTasks();
  } else {
    alert("Please enter a task.");
  }
}

function displayTasks() {
  const taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");

    taskItem.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "bg-gray-50",
      "p-2",
      "rounded"
    );
    const taskContent = document.createElement("span");

    taskContent.textContent = task;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("flex", "space-x-2");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add(
      "rounded",
      "bg-red-600",
      "text-white",
      "px-3",
      "py-1",
      "hover:bg-red-700",
      "transition-colors",
      "m-2"
    );
    removeButton.onclick = () => removeTask(index);

    buttonDiv.appendChild(removeButton);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(buttonDiv);
    taskList.appendChild(taskItem);
  });
}

function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
document.getElementById("addTaskButton").addEventListener("click", addTask);
