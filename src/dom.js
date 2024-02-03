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
    const selectProjectButtons = document.getElementsByClassName("project"););
  }
}
