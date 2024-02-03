/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (39:76)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| \n|   static initSelectProjectButtons() {\n>     const selectProjectButtons = document.getElementsByClassName(\"project\"););\n|   }\n| }");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");

class Project {
  constructor(name) {
    this.name = name;

    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
  getTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


class Storage {
  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    const todoList = Object.assign(
      new _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
      JSON.parse(localStorage.getItem("todoList"))
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
    );

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task))
      );
    });
    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static clearStorage() {
    localStorage.clear();
  }
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Inbox"));
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Today"));
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Upcoming"));
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

  addProject(newProject) {
    if (this.contains(newProject.name)) {
      throw new Error(
        `A project with the name ${newProject.name} already exists.`
      );
    }
    this.projects.push(newProject);
  }

  deleteProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  setProjects(projects) {
    this.projects = projects;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
// TODO Add sorting by alphabet, due date, priority
// TODO add icons for different prioritys
// TODO add remaining time on task





_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].clearStorage();
_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].getTodoList();
let task1 = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Exam", "Prepare for exams", "2022-01-01", "high");
let task2 = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Make a website", "JS+CSS", "2022-01-02", "low");
let task3 = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Study", "Study for 1 hour", "2022-01-03", "medium");
let task4 = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Chill", "Relax", "2022-01-04", "high");

_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].addProject(new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Study"));
// let workProject = new Project("Work", "orange");
// todoList.addProject(workProject);
// let otherProject = new Project("Other", "green");
// todoList.addProject(otherProject);

// Project.addTask(studyProject, task1);
// Project.addTask(workProject, task2);
// Project.addTask(studyProject, task3);
// Project.addTask(otherProject, task4);
console.log(_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].getTodoList());
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].loadPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDdEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFDO0FBQ0Y7QUFDcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9EQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtREFBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm1DO0FBQ0E7QUFDcEI7QUFDZjtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTztBQUNsQywyQkFBMkIsbURBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUM2QjtBQUNRO0FBQ0Y7QUFDUjtBQUNRO0FBQ25DLG1EQUFPO0FBQ1AsbURBQU87QUFDUCxnQkFBZ0IsZ0RBQUk7QUFDcEIsZ0JBQWdCLGdEQUFJO0FBQ3BCLGdCQUFnQixnREFBSTtBQUNwQixnQkFBZ0IsZ0RBQUk7QUFDcEI7QUFDQSxtREFBTyxnQkFBZ0IsbURBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBTztBQUNuQiwrQ0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcblxyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG5cclxuICBzZXRUYXNrcyh0YXNrcykge1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3QuanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuICBzdGF0aWMgc2F2ZVRvZG9MaXN0KGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICBuZXcgVG9kb0xpc3QoKSxcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKVxyXG4gICAgKTtcclxuXHJcbiAgICB0b2RvTGlzdC5zZXRQcm9qZWN0cyhcclxuICAgICAgdG9kb0xpc3RcclxuICAgICAgICAuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXHJcbiAgICApO1xyXG5cclxuICAgIHRvZG9MaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9qZWN0LnNldFRhc2tzKFxyXG4gICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b2RvTGlzdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbGVhclN0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uXCIsXHJcbiAgICBkdWVEYXRlID0gXCJObyBEYXRlXCIsXHJcbiAgICBwcmlvcml0eSA9IFwiTm8gcHJpb3JpdHlcIlxyXG4gICkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xyXG4gIH1cclxuICB0b2dnbGVEb25lKCkge1xyXG4gICAgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmU7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZTogdGhpcy5kdWVEYXRlLFxyXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcclxuICAgICAgaXNEb25lOiB0aGlzLmlzRG9uZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJJbmJveFwiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUb2RheVwiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJVcGNvbWluZ1wiKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdChuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xyXG4gIH1cclxuICBjb250YWlucyhuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgICBpZiAodGhpcy5jb250YWlucyhuZXdQcm9qZWN0Lm5hbWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgQSBwcm9qZWN0IHdpdGggdGhlIG5hbWUgJHtuZXdQcm9qZWN0Lm5hbWV9IGFscmVhZHkgZXhpc3RzLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETyBBZGQgc29ydGluZyBieSBhbHBoYWJldCwgZHVlIGRhdGUsIHByaW9yaXR5XHJcbi8vIFRPRE8gYWRkIGljb25zIGZvciBkaWZmZXJlbnQgcHJpb3JpdHlzXHJcbi8vIFRPRE8gYWRkIHJlbWFpbmluZyB0aW1lIG9uIHRhc2tcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3QuanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgRG9tIGZyb20gXCIuL2RvbS5qc1wiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcblN0b3JhZ2UuY2xlYXJTdG9yYWdlKCk7XHJcblN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcclxubGV0IHRhc2sxID0gbmV3IFRhc2soXCJFeGFtXCIsIFwiUHJlcGFyZSBmb3IgZXhhbXNcIiwgXCIyMDIyLTAxLTAxXCIsIFwiaGlnaFwiKTtcclxubGV0IHRhc2syID0gbmV3IFRhc2soXCJNYWtlIGEgd2Vic2l0ZVwiLCBcIkpTK0NTU1wiLCBcIjIwMjItMDEtMDJcIiwgXCJsb3dcIik7XHJcbmxldCB0YXNrMyA9IG5ldyBUYXNrKFwiU3R1ZHlcIiwgXCJTdHVkeSBmb3IgMSBob3VyXCIsIFwiMjAyMi0wMS0wM1wiLCBcIm1lZGl1bVwiKTtcclxubGV0IHRhc2s0ID0gbmV3IFRhc2soXCJDaGlsbFwiLCBcIlJlbGF4XCIsIFwiMjAyMi0wMS0wNFwiLCBcImhpZ2hcIik7XHJcblxyXG5TdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoXCJTdHVkeVwiKSk7XHJcbi8vIGxldCB3b3JrUHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiV29ya1wiLCBcIm9yYW5nZVwiKTtcclxuLy8gdG9kb0xpc3QuYWRkUHJvamVjdCh3b3JrUHJvamVjdCk7XHJcbi8vIGxldCBvdGhlclByb2plY3QgPSBuZXcgUHJvamVjdChcIk90aGVyXCIsIFwiZ3JlZW5cIik7XHJcbi8vIHRvZG9MaXN0LmFkZFByb2plY3Qob3RoZXJQcm9qZWN0KTtcclxuXHJcbi8vIFByb2plY3QuYWRkVGFzayhzdHVkeVByb2plY3QsIHRhc2sxKTtcclxuLy8gUHJvamVjdC5hZGRUYXNrKHdvcmtQcm9qZWN0LCB0YXNrMik7XHJcbi8vIFByb2plY3QuYWRkVGFzayhzdHVkeVByb2plY3QsIHRhc2szKTtcclxuLy8gUHJvamVjdC5hZGRUYXNrKG90aGVyUHJvamVjdCwgdGFzazQpO1xyXG5jb25zb2xlLmxvZyhTdG9yYWdlLmdldFRvZG9MaXN0KCkpO1xyXG5Eb20ubG9hZFBhZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9