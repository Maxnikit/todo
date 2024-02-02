"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
// TODO Add sorting by alphabet, due date, priority
// TODO add icons for different prioritys
// TODO add remaining time on task




let task1 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Exam", "Prepare for exams", "2022-01-01", "high");
let task2 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Make a website", "JS+CSS", "2022-01-02", "low");
let task3 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Study", "Study for 1 hour", "2022-01-03", "medium");
let task4 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Chill", "Relax", "2022-01-04", "high");

let studyProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project("Study", "lightblue");
_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todoList.addProject(studyProject);
let workProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project("Work", "orange");
_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todoList.addProject(workProject);
let otherProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project("Other", "green");
_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todoList.addProject(otherProject);

_project_js__WEBPACK_IMPORTED_MODULE_2__.Project.addTask(studyProject, task1);
_project_js__WEBPACK_IMPORTED_MODULE_2__.Project.addTask(workProject, task2);
_project_js__WEBPACK_IMPORTED_MODULE_2__.Project.addTask(studyProject, task3);
_project_js__WEBPACK_IMPORTED_MODULE_2__.Project.addTask(otherProject, task4);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");

class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(
    name,
    description = "No description",
    dueDate = "No Date",
    priority = "No priority"
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
  toggleDone() {
    this.isDone = !this.isDone;
  }

  getTask() {
    return {
      name: this.name,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      isDone: this.isDone,
    };
  }
}


/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoList: () => (/* binding */ todoList)
/* harmony export */ });
class todoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Inbox"));
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("Upcoming"));
  }

  getProjects() {
    return this.projects;
  }

  getProject(name) {
    return this.projects.find((project) => project.name === name);
  }
  contains(name) {
    return this.projects.some((project) => project.name === name);
  }

  addProject(project) {
    if (!this.contains(project.name)) {
      this.projects.push(project);
    }
  }

  deleteProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2lDO0FBQ1E7QUFDRjtBQUN2QztBQUNBLGdCQUFnQiwwQ0FBSTtBQUNwQixnQkFBZ0IsMENBQUk7QUFDcEIsZ0JBQWdCLDBDQUFJO0FBQ3BCLGdCQUFnQiwwQ0FBSTtBQUNwQjtBQUNBLHVCQUF1QixnREFBTztBQUM5QixrREFBUTtBQUNSLHNCQUFzQixnREFBTztBQUM3QixrREFBUTtBQUNSLHVCQUF1QixnREFBTztBQUM5QixrREFBUTtBQUNSO0FBQ0EsZ0RBQU87QUFDUCxnREFBTztBQUNQLGdEQUFPO0FBQ1AsZ0RBQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmtDO0FBQ2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPIEFkZCBzb3J0aW5nIGJ5IGFscGhhYmV0LCBkdWUgZGF0ZSwgcHJpb3JpdHlcclxuLy8gVE9ETyBhZGQgaWNvbnMgZm9yIGRpZmZlcmVudCBwcmlvcml0eXNcclxuLy8gVE9ETyBhZGQgcmVtYWluaW5nIHRpbWUgb24gdGFza1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9MaXN0LmpzXCI7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcblxyXG5sZXQgdGFzazEgPSBuZXcgVGFzayhcIkV4YW1cIiwgXCJQcmVwYXJlIGZvciBleGFtc1wiLCBcIjIwMjItMDEtMDFcIiwgXCJoaWdoXCIpO1xyXG5sZXQgdGFzazIgPSBuZXcgVGFzayhcIk1ha2UgYSB3ZWJzaXRlXCIsIFwiSlMrQ1NTXCIsIFwiMjAyMi0wMS0wMlwiLCBcImxvd1wiKTtcclxubGV0IHRhc2szID0gbmV3IFRhc2soXCJTdHVkeVwiLCBcIlN0dWR5IGZvciAxIGhvdXJcIiwgXCIyMDIyLTAxLTAzXCIsIFwibWVkaXVtXCIpO1xyXG5sZXQgdGFzazQgPSBuZXcgVGFzayhcIkNoaWxsXCIsIFwiUmVsYXhcIiwgXCIyMDIyLTAxLTA0XCIsIFwiaGlnaFwiKTtcclxuXHJcbmxldCBzdHVkeVByb2plY3QgPSBuZXcgUHJvamVjdChcIlN0dWR5XCIsIFwibGlnaHRibHVlXCIpO1xyXG50b2RvTGlzdC5hZGRQcm9qZWN0KHN0dWR5UHJvamVjdCk7XHJcbmxldCB3b3JrUHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiV29ya1wiLCBcIm9yYW5nZVwiKTtcclxudG9kb0xpc3QuYWRkUHJvamVjdCh3b3JrUHJvamVjdCk7XHJcbmxldCBvdGhlclByb2plY3QgPSBuZXcgUHJvamVjdChcIk90aGVyXCIsIFwiZ3JlZW5cIik7XHJcbnRvZG9MaXN0LmFkZFByb2plY3Qob3RoZXJQcm9qZWN0KTtcclxuXHJcblByb2plY3QuYWRkVGFzayhzdHVkeVByb2plY3QsIHRhc2sxKTtcclxuUHJvamVjdC5hZGRUYXNrKHdvcmtQcm9qZWN0LCB0YXNrMik7XHJcblByb2plY3QuYWRkVGFzayhzdHVkeVByb2plY3QsIHRhc2szKTtcclxuUHJvamVjdC5hZGRUYXNrKG90aGVyUHJvamVjdCwgdGFzazQpO1xyXG4iLCJpbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9MaXN0LmpzXCI7XHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uXCIsXHJcbiAgICBkdWVEYXRlID0gXCJObyBEYXRlXCIsXHJcbiAgICBwcmlvcml0eSA9IFwiTm8gcHJpb3JpdHlcIlxyXG4gICkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xyXG4gIH1cclxuICB0b2dnbGVEb25lKCkge1xyXG4gICAgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmU7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZTogdGhpcy5kdWVEYXRlLFxyXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcclxuICAgICAgaXNEb25lOiB0aGlzLmlzRG9uZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyB0b2RvTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJJbmJveFwiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUb2RheVwiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJVcGNvbWluZ1wiKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdChuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xyXG4gIH1cclxuICBjb250YWlucyhuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbnMocHJvamVjdC5uYW1lKSkge1xyXG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==