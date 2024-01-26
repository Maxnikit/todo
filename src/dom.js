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
    project.tasks.forEach((task) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item");
      const taskHeader = document.createElement("button");
      taskHeader.classList.add("collapsible");
      taskHeader.textContent = task.name;
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
