import TodoList from "./todoList.js";
import Project from "./project.js";
import Task from "./task.js";
export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getAndRefreshTodoList() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem("todoList"))
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task))
      );
    });
    return todoList;
  }

  static addProject(project) {
    let todoList = Storage.getAndRefreshTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
    Storage.getAndRefreshTodoList();
    Storage.saveTodoList(Storage.getAndRefreshTodoList());
  }
  static deleteProject(project) {
    let todoList = Storage.getAndRefreshTodoList();
    todoList.deleteProject(project);
    Storage.saveTodoList(todoList);
    Storage.getAndRefreshTodoList();
    Storage.saveTodoList(Storage.getAndRefreshTodoList());
  }
  static clearStorage() {
    localStorage.clear();
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const todoList = Storage.getAndRefreshTodoList();
    todoList.getProject(projectName).getTask(taskName).setDueDate(newDueDate);
    Storage.saveTodoList(todoList);
  }

  static setIsDone(project, taskName, isDone) {
    const todoList = Storage.getAndRefreshTodoList();
    console.warn(todoList);
    const task = todoList.getProject(project.name).getTask(taskName);
    task.setIsDone(isDone);
    if (project.name === "Done") {
      todoList.getProject("Inbox").addTask(task);
      todoList.getProject("Done").removeTask(task);
    } else {
      todoList.getProject("Done").addTask(task);
      todoList.getProject(project.name).removeTask(task);
    }
    Storage.saveTodoList(todoList);
    console.warn(Storage.getAndRefreshTodoList());
    Storage.getAndRefreshTodoList();
    Storage.saveTodoList(Storage.getAndRefreshTodoList());
  }
}
