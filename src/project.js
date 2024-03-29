import { todoList } from "./todoList.js";
export class Project {
  static projectList = [];
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
  }

  static getProjectList() {
    return this.projectList;
  }
  static addProject(project) {
    this.projectList.push(project);
    console.log("added project: " + project.name);
    console.log(this.projectList);
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
