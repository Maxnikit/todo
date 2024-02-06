import "normalize.css";
import "./style.css";
import Task from "./task.js";
import Project from "./project.js";
import TodoList from "./todoList.js";
import Storage from "./storage.js";
// import { validate } from "webpack";
let currentProject = Storage.getTodoList().getProjects()[0];
export default class Dom {
  static loadPage() {
    Dom.loadProjects();
    Dom.initAddTaskButton();
    this.showTasks(currentProject);

    console.log("loadPage complete!");
  }
  static loadProjects() {
    const excludedProjectNames = ["Inbox", "Today", "Upcoming", "Done"];
    Storage.getTodoList()
      .getProjects()
      .filter((project) => !excludedProjectNames.includes(project.name))
      .forEach((project) => {
        Dom.createProject(project.name);
      });
    Dom.initAddProjectButton();
    Dom.initSelectProjectButtons();
  }
  static createProject(name) {
    const userProjects = document.getElementById("projectList");
    userProjects.innerHTML += `<div class="custom" ><button class="project"><i class="fa fa-folder-plus"></i> ${name}</button></div>`;
  }
  static showTasks(project) {
    const todoList = Storage.getTodoList();
    console.log(todoList);
    if (typeof project !== "object" || project === null) {
      project = todoList.getProject(project);
    }
    const taskContainer = document.getElementById("taskContainer");

    console.log(project);
    currentProject = project;
    taskContainer.innerHTML = ""; // Clear the container before adding tasks
    project.getTasks().forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "task";
      taskElement.textContent = task.name; // Assuming 'description' is a property of Task
      taskContainer.appendChild(taskElement);
    });
  }
  static initAddProjectButton() {
    const addProjectButton = document.getElementById("addProject");
    addProjectButton.addEventListener("click", () => {
      const addProjectPopup = document.querySelector(".addProjectPopup");
      addProjectPopup.classList.toggle("hide");
      addProjectButton.classList.toggle("hide");
    });

    const todoList = Storage.getTodoList();
    const confirmButton = document.querySelector(".confirmProjectPopupButton");
    const cancelButton = document.querySelector(".cancelProjectPopupButton");
    const input = document.querySelector(".inputAddProject");
    confirmButton.addEventListener("click", () => {
      if (input.checkValidity()) {
        event.preventDefault();
        const addProjectPopup = document.querySelector(".addProjectPopup");
        addProjectPopup.classList.toggle("hide");
        addProjectButton.classList.toggle("hide");
        const projectName = document.querySelector(".inputAddProject").value;
        document.querySelector(".inputAddProject").value = "";
        const project = new Project(projectName);
        Storage.addProject(project);
      }
      //TODO реализовать обновление проектов, переключение на новосозданный Dom.updateProjects();
    });
    cancelButton.addEventListener("click", () => {
      const addProjectPopup = document.querySelector(".addProjectPopup");
      addProjectPopup.classList.toggle("hide");
      addProjectButton.classList.toggle("hide");
      document.querySelector("inputAddProject").value = "";
    });
  }
  static initAddTaskButton() {
    const addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", () => {
      const addTaskPopup = document.querySelector(".addTaskPopup");
      addTaskPopup.classList.toggle("hide");
      addTaskButton.classList.toggle("hide");
    });

    const confirmButton = document.querySelector(".confirmTaskPopupButton");
    const cancelButton = document.querySelector(".cancelTaskPopupButton");
    const input = document.querySelector(".inputAddTask");
    confirmButton.addEventListener("click", () => {
      if (input.checkValidity()) {
        event.preventDefault();
        const addTaskPopup = document.querySelector(".addTaskPopup");
        addTaskPopup.classList.toggle("hide");
        addTaskButton.classList.toggle("hide");
        const taskName = document.querySelector(".inputAddTask").value;
        document.querySelector(".inputAddTask").value = "";
        const task = new Task(taskName);
        currentProject.addTask(task);
      }
      Dom.showTasks(currentProject);
    });
    cancelButton.addEventListener("click", () => {
      const addTaskPopup = document.querySelector(".addTaskPopup");
      addTaskPopup.classList.toggle("hide");
      addTaskButton.classList.toggle("hide");
      document.querySelector("inputAddTask").value = "";
    });
  }
  static initSelectProjectButtons() {
    const selectProjectButtons = document.getElementsByClassName("project");
    Array.from(selectProjectButtons).forEach((button) => {
      button.addEventListener("click", () => {
        const projectName = button.textContent.trim();
        this.showTasks(projectName);
      });
    });
  }
}
