import Storage from "./storage.js";
import Project from "./project.js";
export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Inbox"));
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("Upcoming"));
    this.projects.push(new Project("Done"));
  }

  getProjects() {
    return this.projects;
  }

  getProject(name) {
    return this.projects.find((project) => project.name === name);
  }
  contains(name) {
    return this.projects.some((project) => project.name === name);
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }

  deleteProject(projectToDelete) {
    const index = this.projects.findIndex(
      (project) => project.name === projectToDelete.name
    );

    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  setProjects(projects) {
    this.projects = projects;
  }
  updateProject(updatedProject) {
    const index = this.projects.findIndex(
      (project) => project.name === updatedProject.name
    );

    if (index !== -1) {
      this.projects[index] = updatedProject;
    }
  }
}
