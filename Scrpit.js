"use strict";
// Select DOM elements
// Select DOM elements
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
taskInput.addEventListener("keydown", handleKeyPress);

// Attach the event listener using a named function
addTaskBtn.addEventListener("click", handleAddTask);

// Function to handle adding a new task
function handleAddTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  listItem.addEventListener("click", handleToggleTask);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "20px";

  deleteBtn.addEventListener("click", handleDeleteTask);
  // When the delete button is clicked, run the handleDeleteTask() function.

  taskList.appendChild(listItem);
  // Adds the new list item (with the button inside) to the <ul> list on the page.

  listItem.appendChild(deleteBtn);
  // Adds the delete button as a child of the new list item.

  taskInput.value = "";
  // Clears the input field after adding a task.
}

// Function to toggle task completion
function handleToggleTask(event) {
  const taskItem = event.currentTarget;
  taskItem.classList.toggle("done");
}

// Function to delete a task
function handleDeleteTask(event) {
  event.stopPropagation();
  const taskItem = event.currentTarget.parentNode;
  taskList.removeChild(taskItem);
}
function handleKeyPress(event) {
  if (event.key === "Enter") {
    handleAddTask();
  }
}
