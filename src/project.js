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
  getTask(taskName) {
    return this.tasks.find((task) => task.name === taskName);
  }
  addTask(task) {
    this.tasks.push(task);
    const todoList = Storage.getAndRefreshTodoList();
    todoList.updateProject(this);
    Storage.saveTodoList(todoList);
  }

  removeTask(task) {
    console.log(this.tasks);
    this.tasks = this.tasks.filter((t) => t !== task);
    console.log(this.tasks);
    const todoList = Storage.getAndRefreshTodoList();
    todoList.updateProject(this);
    Storage.saveTodoList(todoList);
  }
  setTasks(tasks) {
    this.tasks = tasks;
  }
}
