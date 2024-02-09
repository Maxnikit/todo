// TODO Add sorting by alphabet, due date, priority
// TODO add icons for different prioritys
// TODO add remaining time on task
import Task from "./task.js";
import TodoList from "./todoList.js";
import Project from "./project.js";
import Dom from "./dom.js";
import Storage from "./storage.js";
import dateTest from "./date.js";

// Storage.clearStorage();
Storage.getAndRefreshTodoList();

Dom.loadPage();
