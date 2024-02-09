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
    console.log(taskName);
    console.log(this.tasks.find((task) => task.name === taskName));
    return this.tasks.find((task) => task.name === taskName);
  }
  addTask(task) {
    this.tasks.push(task);
    const todoList = Storage.getAndRefreshTodoList();
    todoList.updateProject(this);
    Storage.saveTodoList(todoList);
  }
  hasTask(taskName) {
    return this.tasks.some((task) => task.name === taskName);
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
  updateTask(updatedTask) {
    const index = this.tasks.findIndex(
      (task) => task.name === updatedTask.name
    );

    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
}
