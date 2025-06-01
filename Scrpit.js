"use strict";
const Task = (title, note, dueDate, priority, completed = false) => {
  const taskId = crypto.randomUUID(); // unique, private
  let _completed = completed; // private mutable state
  const toggleCompleted = () => {
    _completed = !_completed;
  };
  const getCompleted = () => _completed;

  return {
    title,
    note,
    dueDate,
    priority,
    taskId,
    toggleCompleted,
    getCompleted,
  };
};

const taskManager = (function () {
  let tasks = [];
  // To add a task to the list
  const addTask = (title, note, dueDate, priority) => {
    const task = Task(title, note, dueDate, priority);
    tasks.push(task);
    return task.taskId;
  };
  // To remove a task from the last by its unique ID
  const removeTaskById = (taskId) => {
    tasks = tasks.filter((task) => task.taskId !== taskId);
  };
  // To clear the Task list
  const clearTasks = () => {
    tasks = [];
  };
  // Get (return) a copy of the [tasks]
  const getTasks = () => [...tasks];
  const toggleTaskCompleted = (taskId) => {
    const task = tasks.find((t) => t.taskId === taskId);
    if (task) {
      task.toggleCompleted();
    }
  };
  return {
    addTask,
    removeTaskById,
    clearTasks,
    getTasks,
    toggleTaskCompleted,
  };
})();
taskManager.addTask("task1", "note", "2023-01-01", "high"); // for test
console.log(taskManager.getTasks()); // for test

const DisplayController = (function () {
  //some code
})();
