// TODO Add sorting by alphabet, due date, priority
// TODO add icons for different prioritys
// TODO add remaining time on task
import { Task } from "./task.js";
import { todoList } from "./todoList.js";
import { Project } from "./project.js";
import { dom } from "./dom.js";
import { Storage } from "./storage.js";

let task1 = new Task("Exam", "Prepare for exams", "2022-01-01", "high");
let task2 = new Task("Make a website", "JS+CSS", "2022-01-02", "low");
let task3 = new Task("Study", "Study for 1 hour", "2022-01-03", "medium");
let task4 = new Task("Chill", "Relax", "2022-01-04", "high");

let studyProject = new Project("Study", "lightblue");
// Diagnostic code
const testTodoList = Storage.getTodoList();
if (!testTodoList) {
  console.error("No todoList found in Storage");
} else if (!testTodoList.addProject) {
  console.error("addProject method is not defined on the todoList");
} else {
  console.log(
    "TodoList and addProject method are defined. Proceeding with adding project..."
  );
}

// Existing code that throws an error
Storage.addProject(new Project("Study", "lightblue"));
Storage.addProject(new Project("Study"));
// let workProject = new Project("Work", "orange");
// todoList.addProject(workProject);
// let otherProject = new Project("Other", "green");
// todoList.addProject(otherProject);

// Project.addTask(studyProject, task1);
// Project.addTask(workProject, task2);
// Project.addTask(studyProject, task3);
// Project.addTask(otherProject, task4);
