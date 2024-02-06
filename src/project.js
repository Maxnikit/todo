import TodoList from "./todoList.js";
import Storage from "./storage.js";
export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  getTasks() {
    return this.tasks;
  }
  addTask(task) {
    this.tasks.push(task);
    const todoList = Storage.getAndRefreshTodoList();
    todoList.updateProject(this);
    Storage.saveTodoList(todoList);
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((t) => t !== task);
    const todoList = Storage.getAndRefreshTodoList();
    todoList.updateProject(this);
    Storage.saveTodoList(todoList);
  }
  setTasks(tasks) {
    this.tasks = tasks;
  }
}
