let taskList = [
  // { status: "incomplete", text: "Example task" },
];

function addTask(event) {
  event.preventDefault();
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText) {
    taskList.push({
      status: "incomplete",
      task: taskText,
    });
    taskInput.value = "";
    displayTasks();
  }
}

function displayTasks() {
  const taskListElement = document.getElementById("task-list");
  taskListElement.innerHTML = "";

  taskList.forEach((taskObj, index) => {
    // <li> is a flex row, vertically centered, full width
    const listItem = document.createElement("li");
    listItem.className = "flex items-center w-full py-2";

    // Decide which icon to show based on status
    const isCompleted = taskObj.status === "complete";
    const icon = isCompleted ? "✕" : "✓";
    const bgColor = isCompleted ? "bg-gray-400" : "bg-green-600";
    const hoverColor = isCompleted ? "hover:bg-gray-300" : "hover:bg-green-500";

    // “Complete/Uncomplete” button on the left
    const completeButton = document.createElement("button");
    completeButton.innerHTML = icon;
    completeButton.className = [
      "px-2",
      "py-1",
      bgColor,
      "text-white",
      "rounded",
      hoverColor,
      // if already completed, maybe dim it a bit
      isCompleted ? "opacity-75" : "",
    ]
      .filter(Boolean)
      .join(" ");
    completeButton.onclick = () => markTaskCompleted(index);

    // Task text in the middle
    const textSpan = document.createElement("span");
    textSpan.className = [
      "flex-1",
      "flex",
      "items-center",
      "ml-4",
      // If completed, add line-through & gray text
      isCompleted ? "line-through text-gray-500" : "",
    ]
      .filter(Boolean)
      .join(" ");
    textSpan.textContent = taskObj.task;

    // "Edit Button"
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className =
      "px-2 py-1 ml-4 outline-solid bg-blue-600 text-white rounded hover:bg-blue-500";
    editButton.onclick = () => editTask(index);

    // “Delete” button on the right
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className =
      "px-2 py-1 ml-4 bg-red-600 text-white rounded hover:bg-red-500";
    deleteButton.onclick = () => deleteTask(index);

    // Append children: [icon-button] [text] [delete-button]
    listItem.appendChild(completeButton);
    listItem.appendChild(textSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskListElement.appendChild(listItem);
  });
}

let currentEditIndex = null;

function editTask(index) {
  currentEditIndex = index;

  const editInput = document.getElementById("edit-task-input");
  editInput.value = taskList[index].task;

  const overlay = document.getElementById("edit-modal-overlay");
  overlay.classList.remove("hidden");
  overlay.classList.add("flex"); // make it a flex‐centered overlay
  editInput.focus();
  // Optionally select all text:
  editInput.setSelectionRange(0, editInput.value.length);
}

function saveEditedTask() {
  if (currentEditIndex === null) return;

  const newText = document.getElementById("edit-task-input").value.trim();
  if (newText) {
    taskList[currentEditIndex].task = newText;
    displayTasks();
  }
  closeEditModal();
}

function closeEditModal() {
  currentEditIndex = null;
  const overlay = document.getElementById("edit-modal-overlay");
  overlay.classList.remove("flex");
  overlay.classList.add("hidden");
}

function deleteTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}

function markTaskCompleted(index) {
  if (!taskList[index]) return;

  // Toggle between "incomplete" and "complete"
  if (taskList[index].status === "incomplete") {
    taskList[index].status = "complete";
  } else {
    taskList[index].status = "incomplete";
  }

  displayTasks();
}

window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("cancel-edit-btn")
    .addEventListener("click", closeEditModal);

  document
    .getElementById("save-edit-btn")
    .addEventListener("click", saveEditedTask);

  // Also allow pressing Enter in the input field to save
  document
    .getElementById("edit-task-input")
    .addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        saveEditedTask();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeEditModal();
      }
    });
});
