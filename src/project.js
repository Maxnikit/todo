import TodoList from "./todoList.js";
export default class Project {
  constructor(name) {
    this.name = name;

    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
  getTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }
}
