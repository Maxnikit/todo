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
function addProject() {
  var modal = document.getElementById("newProjectModal");
  var btn = document.querySelector(".addProjectIcon");
  var span = document.getElementsByClassName("close")[0];
  const confirmBtn = document.getElementById("confirmBtn");
  btn.onclick = function () {
    modal.style.display = "block";
    alert("Project Added");
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  confirmBtn.onclick = function () {
    event.preventDefault();
    const projectName = document.getElementById("projectName").value;
    const projectColor = document.getElementById("projectColor").value;
    const newProject = new project(projectName, projectColor);
    displayProjectList(project.getProjectList());

    modal.style.display = "none";
  };
}

export function addEventListeners() {
  addCollapsibility();
  addProject();
}
