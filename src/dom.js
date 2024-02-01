import "normalize.css";
import "./style.css";
import { Project } from "./project.js";

export function displayProjectList() {
  const projectList = Project.getProjectList();

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
  addAddProjectCard(projectListContainer);
}
function addAddProjectCard(projectListContainer) {
  const addProjectCard = document.createElement("div");
  addProjectCard.classList.add("add-project");
  const addProjectButton = document.createElement("button");

  const icon = document.createElement("i");
  icon.classList.add("addProjectIcon");
  addProjectButton.appendChild(icon);

  icon.addEventListener("click", () => {
    let overlay = document.createElement("overlay");
    document.body.appendChild(overlay);
    overlay.classList.add("overlay");
    overlay.style.display = "block";
    dialog.showModal();
  });
  addProjectCard.appendChild(addProjectButton);

  projectListContainer.appendChild(addProjectCard);
}
function closeDialog() {
  dialog.close();

  let overlay = document.querySelector("overlay");
  document.getElementById("name").value = "";
  document.getElementById("color").value = "";
  document.body.removeChild(overlay);
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

function createProject() {
  const name = document.getElementById("name").value;
  const color = document.getElementById("color").value;
  const newProject = new Project(name, color);
  console.log(newProject);
  Project.addProject(newProject);
}
export function addEventListeners() {
  addCollapsibility();
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    submitForm();
  });

  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closeDialog();
  });

  dialog.addEventListener("keydown", (event) =>
    event.key === "Enter" ? submitForm() : null
  );
}

function submitForm() {
  createProject();

  closeDialog();

  displayProjectList();
}
