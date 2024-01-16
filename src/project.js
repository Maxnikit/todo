import { todoList } from "./todoList.js";

export class project {
  static projectList = [];
  constructor(name, tasks, color) {
    this.name = name;
    this.tasks = tasks;
    this.color = color;
  }
  static addProject(name, tasks, color) {
    const newProject = new project(name, tasks, color);
    this.projectList.push(newProject);
  }

  static getProjectList() {
    return this.projectList;
  }

  static;
}
