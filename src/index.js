import { Task } from "./task.js";
import { todoList } from "./todoList.js";
import { displayProjectList, displayTaskList } from "./dom.js";
import { project } from "./project.js";

let task1 = new Task("Exam", "Prepare for exams", "2022-01-01", "high");
let task2 = new Task("Make a website", "JS+CSS", "2022-01-02", "low");
console.log(task1);
todoList.addTask(task1);
todoList.addTask(task2);
console.log(todoList.getTaskList());

let studyProject = new project("Study", "blue");
let workProject = new project("Work", "red");
let otherProject = new project("Other", "green");

project.addTask(studyProject, task1);
project.addTask(studyProject, task2);
console.log(project.getProjectList());
displayProjectList(project.getProjectList());
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
