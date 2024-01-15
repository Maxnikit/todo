import { Task } from "./task.js";
import { todoList } from "./todoList.js";
import { displayTaskList } from "./dom.js";

let task1 = new Task("Task 1", "Description 1", "2022-01-01", "high");
let task2 = new Task("Task 2", "Description 2", "2022-01-02", "low");
console.log(task1);
todoList.addTask(task1);
todoList.addTask(task2);
console.log(todoList.getTaskList());

displayTaskList(todoList.getTaskList());
