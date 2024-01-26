import { todoList } from "./todoList.js";
export class project {
  static projectList = [];
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
    project.projectList.push(this);
  }

  static getProjectList() {
    return this.projectList;
  }

  static removeProject(project) {
    const index = this.projectList.indexOf(project);
    this.projectList.splice(index, 1);
  }

  static addTask(project, task) {
    const index = this.projectList.indexOf(project);
    this.projectList[index].tasks.push(task);
  }
}
