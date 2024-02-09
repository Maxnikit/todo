import "normalize.css";
import "./style.css";
import Task from "./task.js";
import Project from "./project.js";
import TodoList from "./todoList.js";
import Storage from "./storage.js";
import Date from "./date.js";
// import { validate } from "webpack";
let currentProject = Storage.getAndRefreshTodoList().getProjects()[0];
export default class Dom {
  static loadPage() {
    Dom.loadProjects();
    Dom.initAddProjectButton();
    Dom.initAddTaskButton();
    Dom.loadTasks(currentProject);

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
    Dom.highlightCurrentProject();
  }
  static loadTasks(currentProject) {
    Dom.showTasks(currentProject);
    Dom.showDate();
    Dom.initCalendars();
    Dom.initDeleteTaskButtons();
    Dom.highlightCurrentProject();
    console.log("Tasks loaded!");
  }
  static showTasks(project) {
    const todoList = Storage.getAndRefreshTodoList();
    if (!todoList.getProject(project.name)) {
      return;
    }

    const taskHeader = document.getElementById("taskHeader");
    const taskContainer = document.getElementById("taskContainer");

    currentProject = project;

    taskHeader.innerHTML = currentProject.name;
    taskContainer.innerHTML = ""; // Clear the container before adding tasks
    project.getTasks().forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "task";

      const radioBox = document.createElement("input");
      const taskName = document.createElement("p");
      const timeRemaining = document.createElement("p");
      const date = document.createElement("p");
      const calendar = document.createElement("input");
      radioBox.type = "radio";
      taskName.textContent = task.name;
      console.log(task.dueDate);
      if (task.dueDate === "No Date") {
        timeRemaining.textContent = "";
        calendar.value = "";
      } else {
        timeRemaining.textContent = Date.getTimeRemaining(task.dueDate);
        calendar.value = task.dueDate;
      }

      date.textContent = task.dueDate;
      calendar.type = "date";
      radioBox.classList.add("radioBox");
      taskName.classList.add("taskName");
      timeRemaining.classList.add("timeRemaining");
      date.classList.add("date");
      calendar.classList.add("calendar");

      taskElement.appendChild(radioBox);
      taskElement.appendChild(taskName);
      taskElement.appendChild(timeRemaining);
      taskElement.appendChild(date);
      taskElement.appendChild(calendar);

      taskContainer.appendChild(taskElement);
      taskElement.innerHTML += `<i class="fa fa-times deleteTask"></i>`;
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
        const taskName = document.querySelector(".inputAddTask").value;
        if (!currentProject.hasTask(taskName)) {
          const addTaskPopup = document.querySelector(".addTaskPopup");
          addTaskPopup.classList.toggle("hide");
          addTaskButton.classList.toggle("hide");
          document.querySelector(".inputAddTask").value = "";
          const task = new Task(taskName);
          currentProject.addTask(task);
          Dom.loadTasks(currentProject);
        } else {
          alert(`A task with the name ${taskName} already exists.`);
          // Task with this name already exists, prohibit it
          // Add code to display error message or handle the situation
        }
      }
    });
    cancelButton.addEventListener("click", () => {
      const addTaskPopup = document.querySelector(".addTaskPopup");
      addTaskPopup.classList.toggle("hide");
      addTaskButton.classList.toggle("hide");
      const inputValue = document.querySelector(".inputAddTask").value;
      if (inputValue) {
        document.querySelector(".inputAddTask").value = "";
      }
    });
  }
  static initDeleteTaskButtons() {
    const deleteTaskButtons = document.getElementsByClassName("deleteTask");
    Array.from(deleteTaskButtons).forEach((button) => {
      button.addEventListener("click", () => {
        const taskName = button.parentElement.children[1]?.textContent;
        const task = currentProject.getTask(taskName);

        currentProject.removeTask(task);
        Dom.loadTasks(currentProject);
      });
    });
  }
  static showDate() {
    console.log("showing date");
    const tasksHTML = document.querySelectorAll(".task");

    Array.from(tasksHTML).forEach((taskHTML) => {
      const task = currentProject.getTask(taskHTML.children[1].textContent);
      console.log(task.getTask());
      if (task.dueDate === "No Date") {
        taskHTML.children[3].classList.add("hide");
        taskHTML.children[4].classList.remove("hide");
      } else {
        taskHTML.children[3].classList.remove("hide");
        taskHTML.children[4].classList.add("hide");
      }
    });
  }

  static initCalendars() {
    const calendars = document.querySelectorAll(".calendar");
    Array.from(calendars).forEach((calendar) => {
      calendar.addEventListener("change", () => {
        console.log("change occured!");
        const taskName = calendar.parentElement.children[1].textContent;
        const task = currentProject.getTask(taskName);
        task.dueDate = calendar.value;
        Dom.loadTasks(currentProject);
        Storage.setTaskDate(currentProject.name, taskName, task.dueDate);
      });
    });
  }
  // project section
  static createProject(name) {
    const userProjects = document.getElementById("projectList");
    userProjects.innerHTML += `<div class="custom" ><button class="project"><i class="fa fa-folder-plus"></i> ${name} <i class="fa fa-times deleteProject"></i></button></div>`;
  }
  static initSelectProjectButtons() {
    const todoList = Storage.getAndRefreshTodoList();
    const selectProjectButtons = document.getElementsByClassName("project");
    Array.from(selectProjectButtons).forEach((button) => {
      button.addEventListener("click", () => {
        const projectName = button.textContent.trim();
        const project = todoList.getProject(projectName);

        Dom.loadTasks(project);
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
        if (!todoList.getProject(input.value)) {
          const addProjectPopup = document.querySelector(".addProjectPopup");
          addProjectPopup.classList.toggle("hide");
          addProjectButton.classList.toggle("hide");
          document.querySelector(".inputAddProject").value = "";
          const project = new Project(input.value);
          currentProject = project;
          Storage.addProject(project);
          Dom.loadTasks(project);
        } else {
          alert(`A project with the name ${input.value} already exists.`);
        }
      }

      Dom.loadProjects();
    });
    cancelButton.addEventListener("click", () => {
      const addProjectPopup = document.querySelector(".addProjectPopup");
      addProjectPopup.classList.toggle("hide");
      addProjectButton.classList.toggle("hide");

      const inputValue = document.querySelector(".inputAddProject").value;

      if (inputValue) {
        document.querySelector(".inputAddProject").value = "";
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

        if (project.name === currentProject.name) {
          currentProject = Storage.getAndRefreshTodoList().getProjects()[0];
          this.loadTasks(currentProject);
        }
      });
    });
  }

  static highlightCurrentProject() {
    console.log(`highlighting ${currentProject.name}`);
    const projectButtons = document.getElementsByClassName("project");
    Array.from(projectButtons).forEach((button) => {
      console.log(button.textContent.trim());
      if (button.textContent.trim() === currentProject.name) {
        console.log("add");
        button.classList.add("currentProject");
      } else {
        button.classList.remove("currentProject");
      }
    });
  }
}
