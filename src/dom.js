import "normalize.css";
import "./style.css";
import Task from "./task.js";
import Project from "./project.js";
import TodoList from "./todoList.js";
import Storage from "./storage.js";
// import { validate } from "webpack";
let currentProject = Storage.getAndRefreshTodoList().getProjects()[0];
export default class Dom {
  static loadPage() {
    Dom.loadProjects();
    Dom.initAddProjectButton();
    Dom.initAddTaskButton();
    this.showTasks(currentProject);

    console.log("loadPage complete!");
  }
  static loadProjects() {
    const userProjects = document.getElementById("projectList");
    userProjects.innerHTML = "";
    const excludedProjectNames = ["Inbox", "Today", "Upcoming", "Done"];
    Storage.getAndRefreshTodoList()
      .getProjects()
      .filter((project) => !excludedProjectNames.includes(project.name))
      .forEach((project) => {
        Dom.createProject(project.name);
      });

    Dom.initSelectProjectButtons();
    Dom.initDeleteProjectButtons();
  }
  static createProject(name) {
    const userProjects = document.getElementById("projectList");
    userProjects.innerHTML += `<div class="custom" ><button class="project"><i class="fa fa-folder-plus"></i> ${name} <i class="fa fa-times deleteProject"></i></button></div>`;
  }
  static showTasks(project) {
    const todoList = Storage.getAndRefreshTodoList();
    if (!todoList.getProject(project.name)) {
      return;
    }

    const taskHeader = document.getElementById("taskHeader");
    const taskContainer = document.getElementById("taskContainer");

    currentProject = project;
    Dom.highlightCurrentProject();
    taskHeader.innerHTML = currentProject.name;
    taskContainer.innerHTML = ""; // Clear the container before adding tasks
    project.getTasks().forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "task";
      taskElement.textContent = task.name; // Assuming 'description' is a property of Task
      taskContainer.appendChild(taskElement);
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
      const inputValue = document.querySelector(".inputAddTask").value;

      if (inputValue) {
        document.querySelector("inputAddTask").value = "";
      }
    });
  }
  // project section
  static initSelectProjectButtons() {
    const todoList = Storage.getAndRefreshTodoList();
    const selectProjectButtons = document.getElementsByClassName("project");
    Array.from(selectProjectButtons).forEach((button) => {
      button.addEventListener("click", () => {
        const projectName = button.textContent.trim();
        const project = todoList.getProject(projectName);
        this.showTasks(project);
      });
    });
  }
  static initAddProjectButton() {
    const addProjectButton = document.getElementById("addProject");
    addProjectButton.addEventListener("click", () => {
      const addProjectPopup = document.querySelector(".addProjectPopup");
      addProjectPopup.classList.toggle("hide");
      addProjectButton.classList.toggle("hide");
    });

    const todoList = Storage.getAndRefreshTodoList();
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

      Dom.loadProjects();
    });
    cancelButton.addEventListener("click", () => {
      const addProjectPopup = document.querySelector(".addProjectPopup");
      addProjectPopup.classList.toggle("hide");
      addProjectButton.classList.toggle("hide");

      const inputValue = document.querySelector(".inputAddProject").value;

      if (inputValue) {
        document.querySelector("inputAddProject").value = "";
      }
    });
  }
  static initDeleteProjectButtons() {
    const deleteProjectButtons =
      document.getElementsByClassName("deleteProject");
    Array.from(deleteProjectButtons).forEach((button) => {
      button.addEventListener("click", () => {
        const projectName = button.parentElement.textContent.trim();
        const project = Storage.getAndRefreshTodoList().getProject(projectName);
        Storage.deleteProject(project);
        button.parentElement.remove();
        console.log(project);
        console.log(currentProject);
        if (project.name === currentProject.name) {
          currentProject = Storage.getAndRefreshTodoList().getProjects()[0];
          this.showTasks(currentProject);
        }
      });
    });
  }

  static highlightCurrentProject() {
    const projectButtons = document.getElementsByClassName("project");
    Array.from(projectButtons).forEach((button) => {
      if (button.textContent.trim() === currentProject.name) {
        button.classList.add("currentProject");
      } else {
        button.classList.remove("currentProject");
      }
    });
  }
}
