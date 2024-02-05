import "normalize.css";
import "./style.css";
import Task from "./task.js";
import Project from "./project.js";
import TodoList from "./todoList.js";
import Storage from "./storage.js";
let currentProject = Storage.getTodoList().getProjects()[0];
export default class Dom {
  static loadPage() {
    Dom.loadProjects();
    Dom.initAddTaskButton();
  }
  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (
          project.name !== "Inbox" &&
          project.name !== "Today" &&
          project.name !== "Upcoming"
        )
          Dom.createProject(project.name);
      });
    Dom.initAddProjectButton();
    Dom.initSelectProjectButtons();
  }
  static createProject(name) {
    const userProjects = document.getElementById("projectList");
    userProjects.innerHTML += `<div class="custom" ><button class="project"><i class="fa fa-folder-plus"></i> ${name}</button></div>`;
  }

  static initAddProjectButton() {
    const addProjectButton = document.getElementById("addProject");
    addProjectButton.addEventListener("click", () => {
      const addProjectPopup = document.querySelector(".addProjectPopup");
      addProjectPopup.classList.toggle("hide");
      addProjectButton.classList.toggle("hide");
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
    confirmButton.addEventListener("click", () => {
      const input = document.querySelector(".inputAddTask");
      console.log(input.validity);
      if (input.validity.valid === true) {
        const addTaskPopup = document.querySelector(".addTaskPopup");
        addTaskPopup.classList.toggle("hide");
        addTaskButton.classList.toggle("hide");

        const taskName = document.querySelector(".inputAddTask").value;
        // const dueDate = document.querySelector(".inputAddTask2").value;
        // const priority = document.querySelector(".inputAddTask3").value;
        // const project = document.querySelector(".inputAddTask4").value;

        const task = new Task(taskName);
        currentProject.addTask(task);
      }
    });
  }
  static initSelectProjectButtons() {
    const selectProjectButtons = document.getElementsByClassName("project");
    const taskContainer = document.getElementById("taskContainer");
    Array.from(selectProjectButtons).forEach((button) => {
      button.addEventListener("click", () => {
        const projectName = button.textContent.trim();

        const todoList = Storage.getTodoList();
        const project = todoList
          .getProjects()
          .find((p) => p.name === projectName);
        if (project) {
          currentProject = project;
          console.log(currentProject);
          taskContainer.innerHTML = ""; // Clear the container before adding tasks
          project.getTasks().forEach((task) => {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.textContent = task.name; // Assuming 'description' is a property of Task
            taskContainer.appendChild(taskElement);
          });
        }
      });
    });
  }
}
