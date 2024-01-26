// TODO Add sorting by alphabet, due date, priority
// TODO add icons for different prioritys
// TODO add remaining time on task
import { Task } from "./task.js";
import { todoList } from "./todoList.js";
import { displayProjectList, addCollapsibility } from "./dom.js";
import { project } from "./project.js";

let task1 = new Task("Exam", "Prepare for exams", "2022-01-01", "high");
let task2 = new Task("Make a website", "JS+CSS", "2022-01-02", "low");
let task3 = new Task("Study", "Study for 1 hour", "2022-01-03", "medium");
let task4 = new Task("Chill", "Relax", "2022-01-04", "high");

let studyProject = new project("Study", "lightblue");
let workProject = new project("Work", "orange");
let otherProject = new project("Other", "green");

project.addTask(studyProject, task1);
project.addTask(workProject, task2);
project.addTask(studyProject, task3);
project.addTask(otherProject, task4);
console.log(project.getProjectList());
displayProjectList(project.getProjectList());

addCollapsibility();
