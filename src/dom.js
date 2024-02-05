import "normalize.css";
import "./style.css";
import Project from "./project.js";
import TodoList from "./todoList.js";
import Storage from "./storage.js";
export default class Dom {
  static loadPage() {
    Dom.loadProjects();
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
    console.log("init complete");
  }

  static initSelectProjectButtons() {
    const selectProjectButtons = document.getElementsByClassName("project");
    const taskContainer = document.getElementById("taskContainer");
    Array.from(selectProjectButtons).forEach((button) => {
      button.addEventListener("click", () => {
        console.log("boop");
        const projectName = button.textContent.trim();
        const todoList = Storage.getTodoList();
        const project = todoList
          .getProjects()
          .find((p) => p.name === projectName);
        if (project) {
          taskContainer.innerHTML = ""; // Clear the container before adding tasks
          project.getTasks().forEach((task) => {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.textContent = task.description; // Assuming 'description' is a property of Task
            taskContainer.appendChild(taskElement);
          });
        }
      });
    });
  }
}
