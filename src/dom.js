import "./style.css";

export function displayTaskList(tasks) {
  const listElement = document.querySelector("#placeholder");

  // Clear the current content
  listElement.innerHTML = "";

  // Create and append tasks to the list element
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task.name; // Assuming each task has a 'title' property
    listElement.appendChild(taskItem);
  });
}
