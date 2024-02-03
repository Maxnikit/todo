// TODO Add sorting by alphabet, due date, priority
// TODO add icons for different prioritys
// TODO add remaining time on task
import Task from "./task.js";
import TodoList from "./todoList.js";
import Project from "./project.js";
import Dom from "./dom.js";
import Storage from "./storage.js";
Storage.clearStorage();
Storage.getTodoList();
let task1 = new Task("Exam", "Prepare for exams", "2022-01-01", "high");
let task2 = new Task("Make a website", "JS+CSS", "2022-01-02", "low");
let task3 = new Task("Study", "Study for 1 hour", "2022-01-03", "medium");
let task4 = new Task("Chill", "Relax", "2022-01-04", "high");

Storage.addProject(new Project("Study"));
// let workProject = new Project("Work", "orange");
// todoList.addProject(workProject);
// let otherProject = new Project("Other", "green");
// todoList.addProject(otherProject);

// Project.addTask(studyProject, task1);
// Project.addTask(workProject, task2);
// Project.addTask(studyProject, task3);
// Project.addTask(otherProject, task4);
console.log(Storage.getTodoList());
Dom.loadPage();
