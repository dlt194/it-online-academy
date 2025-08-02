function addTask() {
  const taskInput = document.getElementById("taskInput").value.trim();

  if (taskInput) {
    const taskList = document.getElementById("taskList");

    const taskItem = document.createElement("li");

    taskItem.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "bg-gray-50",
      "p-2",
      "rounded"
    );
    const task = document.createElement("span");

    task.textContent = taskInput;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("flex", "space-x-2");

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add(
      "rounded",
      "bg-green-600",
      "text-white",
      "px-3",
      "py-1",
      "hover:bg-green-700",
      "transition-colors",
      "m-2"
    );
    completeButton.onclick = () => {
      if (completeButton.textContent === "Complete") {
        task.classList.toggle("line-through");
        completeButton.textContent = "Incomplete";
        completeButton.classList.toggle("bg-green-600");
        completeButton.classList.toggle("bg-yellow-600");
        completeButton.classList.toggle("hover:bg-green-700");
        completeButton.classList.toggle("hover:bg-yellow-700");
        task.classList.toggle("opacity-50");
      } else {
        task.classList.toggle("line-through");
        completeButton.textContent = "Complete";
        completeButton.classList.toggle("bg-yellow-600");
        completeButton.classList.toggle("bg-green-600");
        completeButton.classList.toggle("hover:bg-yellow-700");
        completeButton.classList.toggle("hover:bg-green-700");
        task.classList.toggle("opacity-100");
      }
    };

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
    removeButton.onclick = () => taskList.removeChild(taskItem);

    buttonDiv.appendChild(completeButton);
    buttonDiv.appendChild(removeButton);
    taskItem.appendChild(task);
    taskItem.appendChild(buttonDiv);
    taskList.appendChild(taskItem);

    document.getElementById("taskInput").value = "";
  } else {
    alert("Please enter a task.");
  }
}

document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
document.getElementById("addTaskButton").addEventListener("click", addTask);
