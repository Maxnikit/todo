import "normalize.css";
import "./style.css";

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
}

export function addCollapsibility() {
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
