import "normalize.css";
import "./style.css";
import { project } from "./project.js";
export function displayProjectList(projectList) {
  const projectListContainer = document.querySelector("#projectList");
  projectListContainer.innerHTML = "";

  projectList.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    const projectHeader = document.createElement("h2");
    projectHeader.textContent = project.name;
    projectItem.appendChild(projectHeader);
    if (project.color !== undefined) {
      projectHeader.style.backgroundColor = project.color;
    }
    project.tasks.forEach((task) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item");

      const taskHeader = document.createElement("button");
      taskHeader.classList.add("collapsible");
      const icon = document.createElement("i");
      icon.classList.add("priority-icon");
      if (task.priority === "high") {
        icon.classList.add("high");
      } else if (task.priority === "medium") {
        icon.classList.add("medium");
      } else if (task.priority === "low") {
        icon.classList.add("low");
      }
      taskHeader.textContent = task.name;
      taskHeader.appendChild(icon);
      taskItem.appendChild(taskHeader);
      projectItem.appendChild(taskItem);

      const taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");
      taskInfo.textContent =
        task.description + " " + task.dueDate + " " + task.priority;
      taskItem.appendChild(taskInfo);
    });

    projectListContainer.appendChild(projectItem);
  });
  const addProjectCard = document.createElement("div");
  addProjectCard.classList.add("add-project");
  const addProjectButton = document.createElement("button");

  const icon = document.createElement("i");
  icon.classList.add("addProjectIcon");
  addProjectButton.appendChild(icon);

  addProjectCard.appendChild(addProjectButton);

  projectListContainer.appendChild(addProjectCard);
}

function addCollapsibility() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}
function headerButtons() {
  const addProjectButton = document.getElementById("addProject");
  const addTaskButton = document.getElementById("addTask");

  addProjectButton.addEventListener("click", () => {
    const modal = document.getElementById("modalForm");
    const nameInput = document.getElementById("projectName");
    const colorInput = document.getElementById("projectColor");

    addProjectButton.addEventListener("click", () => {
      modal.style.display = "block";
    });

    const submitButton = document.getElementById("submitProject");
    submitButton.addEventListener("click", () => {
      const projectName = nameInput.value;
      const projectColor = colorInput.value;
      if (projectName && projectColor) {
        const newProject = new project(projectName, projectColor);
        modal.style.display = "none";
        nameInput.value = "";
        colorInput.value = "";
        // You may need to implement a method to update the UI with the new project
        // updateUIWithNewProject(newProject);
      } else {
        // Handle the case where the name or color is not provided
        // showErrorMessage("Please provide both name and color for the project.");
      }
    });

    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
}

export function addEventListeners() {
  addCollapsibility();
  headerButtons();
}
