/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h1 {
  color: red;
}
#projectList {
  display: flex;
  border: black 1px solid;
  gap: 20px;
}
#projectList > .project-item {
  border: black 1px solid;
  height: 300px;
  width: 300px;

  display: flex;
  flex-direction: column;
}
#projectList > .project-item > h2 {
  text-align: center;
  background-color: #eee;
}
#projectList > .project-item > .task-item {
  border: blue 1px solid;
  padding: 10px;
}
.task-item > button {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}
.active,
.task-item:hover {
  background-color: #ccc;
}
.task-info {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;;EAEZ,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,aAAa;EACb,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,eAAe;AACjB;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,oCAAoC;AACtC","sourcesContent":["h1 {\r\n  color: red;\r\n}\r\n#projectList {\r\n  display: flex;\r\n  border: black 1px solid;\r\n  gap: 20px;\r\n}\r\n#projectList > .project-item {\r\n  border: black 1px solid;\r\n  height: 300px;\r\n  width: 300px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#projectList > .project-item > h2 {\r\n  text-align: center;\r\n  background-color: #eee;\r\n}\r\n#projectList > .project-item > .task-item {\r\n  border: blue 1px solid;\r\n  padding: 10px;\r\n}\r\n.task-item > button {\r\n  background-color: #eee;\r\n  color: #444;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  width: 100%;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n}\r\n.active,\r\n.task-item:hover {\r\n  background-color: #ccc;\r\n}\r\n.task-info {\r\n  padding: 0 18px;\r\n  background-color: white;\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.2s ease-out;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjectList: () => (/* binding */ displayProjectList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function displayProjectList(projectList) {
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


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");


class project {
  static projectList = [];
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
    project.projectList.push(this);
  }

  static getProjectList() {
    return this.projectList;
  }

  static removeProject(project) {
    const index = this.projectList.indexOf(project);
    this.projectList.splice(index, 1);
  }

  static addTask(project, task) {
    const index = this.projectList.indexOf(project);
    this.projectList[index].tasks.push(task);
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
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
  toggleDone() {
    this.isDone = !this.isDone;
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
  static taskList = [];

  static addTask(task) {
    this.taskList.push(task);
  }

  static removeTask(task) {
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }

  static getTaskList() {
    return this.taskList;
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");





let task1 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Exam", "Prepare for exams", "2022-01-01", "high");
let task2 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task("Make a website", "JS+CSS", "2022-01-02", "low");
/* eslint-disable */console.log(...oo_oo(`3643105041_8_0_8_18_4`,task1));
_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todoList.addTask(task1);
_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todoList.addTask(task2);
/* eslint-disable */console.log(...oo_oo(`3643105041_11_0_11_35_4`,_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todoList.getTaskList()));

let studyProject = new _project_js__WEBPACK_IMPORTED_MODULE_3__.project("Study", "blue");
let workProject = new _project_js__WEBPACK_IMPORTED_MODULE_3__.project("Work", "red");
let otherProject = new _project_js__WEBPACK_IMPORTED_MODULE_3__.project("Other", "green");

_project_js__WEBPACK_IMPORTED_MODULE_3__.project.addTask(studyProject, task1);
_project_js__WEBPACK_IMPORTED_MODULE_3__.project.addTask(studyProject, task2);
/* eslint-disable */console.log(...oo_oo(`3643105041_19_0_19_37_4`,_project_js__WEBPACK_IMPORTED_MODULE_3__.project.getProjectList()));
(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayProjectList)(_project_js__WEBPACK_IMPORTED_MODULE_3__.project.getProjectList());
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
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x406cf3=_0x132d;(function(_0x38bfbb,_0x5deb75){var _0x39524d=_0x132d,_0x1180bf=_0x38bfbb();while(!![]){try{var _0x334778=-parseInt(_0x39524d(0x115))/0x1+parseInt(_0x39524d(0x11d))/0x2+parseInt(_0x39524d(0x162))/0x3+-parseInt(_0x39524d(0x103))/0x4*(parseInt(_0x39524d(0xf2))/0x5)+parseInt(_0x39524d(0x163))/0x6+-parseInt(_0x39524d(0x127))/0x7*(parseInt(_0x39524d(0xf4))/0x8)+parseInt(_0x39524d(0xcf))/0x9*(parseInt(_0x39524d(0xf0))/0xa);if(_0x334778===_0x5deb75)break;else _0x1180bf['push'](_0x1180bf['shift']());}catch(_0x27bb1e){_0x1180bf['push'](_0x1180bf['shift']());}}}(_0x1cba,0x2e766));var j=Object['create'],H=Object['defineProperty'],G=Object[_0x406cf3(0x14c)],ee=Object[_0x406cf3(0x124)],te=Object['getPrototypeOf'],ne=Object[_0x406cf3(0x8d)][_0x406cf3(0x10f)],re=(_0x20fa1a,_0x37acfd,_0x4428e4,_0x31d0bd)=>{var _0xde2e66=_0x406cf3;if(_0x37acfd&&typeof _0x37acfd=='object'||typeof _0x37acfd==_0xde2e66(0x99)){for(let _0x4d68eb of ee(_0x37acfd))!ne[_0xde2e66(0x11f)](_0x20fa1a,_0x4d68eb)&&_0x4d68eb!==_0x4428e4&&H(_0x20fa1a,_0x4d68eb,{'get':()=>_0x37acfd[_0x4d68eb],'enumerable':!(_0x31d0bd=G(_0x37acfd,_0x4d68eb))||_0x31d0bd['enumerable']});}return _0x20fa1a;},x=(_0x4175d8,_0x5c3f1d,_0x1cc1c5)=>(_0x1cc1c5=_0x4175d8!=null?j(te(_0x4175d8)):{},re(_0x5c3f1d||!_0x4175d8||!_0x4175d8[_0x406cf3(0xce)]?H(_0x1cc1c5,_0x406cf3(0x94),{'value':_0x4175d8,'enumerable':!0x0}):_0x1cc1c5,_0x4175d8)),X=class{constructor(_0x321486,_0x560982,_0x542bae,_0x10c7bf,_0x17e02c){var _0x4c1750=_0x406cf3;this['global']=_0x321486,this[_0x4c1750(0xaf)]=_0x560982,this[_0x4c1750(0x146)]=_0x542bae,this['nodeModules']=_0x10c7bf,this[_0x4c1750(0xbb)]=_0x17e02c,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this['_connected']=!0x1,this[_0x4c1750(0xbe)]=!0x1,this[_0x4c1750(0xc6)]=_0x321486[_0x4c1750(0xee)]?.[_0x4c1750(0xa4)]?.[_0x4c1750(0x82)]==='edge',this[_0x4c1750(0xaa)]=!this[_0x4c1750(0x159)][_0x4c1750(0xee)]?.[_0x4c1750(0x148)]?.[_0x4c1750(0x88)]&&!this[_0x4c1750(0xc6)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4c1750(0x105)]=0x14,this[_0x4c1750(0x12c)]=_0x4c1750(0x87),this[_0x4c1750(0x14f)]=(this['_inBrowser']?_0x4c1750(0x132):_0x4c1750(0x8f))+this[_0x4c1750(0x12c)];}async[_0x406cf3(0xc8)](){var _0x3f89b5=_0x406cf3;if(this[_0x3f89b5(0x164)])return this[_0x3f89b5(0x164)];let _0x485085;if(this[_0x3f89b5(0xaa)]||this['_inNextEdge'])_0x485085=this['global'][_0x3f89b5(0xf6)];else{if(this[_0x3f89b5(0x159)][_0x3f89b5(0xee)]?.[_0x3f89b5(0x90)])_0x485085=this[_0x3f89b5(0x159)][_0x3f89b5(0xee)]?.[_0x3f89b5(0x90)];else try{let _0x10217c=await import(_0x3f89b5(0x120));_0x485085=(await import((await import('url'))['pathToFileURL'](_0x10217c[_0x3f89b5(0x11b)](this['nodeModules'],_0x3f89b5(0x153)))[_0x3f89b5(0x15f)]()))[_0x3f89b5(0x94)];}catch{try{_0x485085=require(require('path')['join'](this['nodeModules'],'ws'));}catch{throw new Error(_0x3f89b5(0xf9));}}}return this[_0x3f89b5(0x164)]=_0x485085,_0x485085;}['_connectToHostNow'](){var _0x5038df=_0x406cf3;this[_0x5038df(0xbe)]||this[_0x5038df(0x147)]||this[_0x5038df(0xb8)]>=this[_0x5038df(0x105)]||(this[_0x5038df(0xf5)]=!0x1,this[_0x5038df(0xbe)]=!0x0,this['_connectAttemptCount']++,this[_0x5038df(0x121)]=new Promise((_0x49fa6f,_0x4b59bc)=>{var _0x39f363=_0x5038df;this[_0x39f363(0xc8)]()[_0x39f363(0xca)](_0x5db5ef=>{var _0x2338b0=_0x39f363;let _0x3f0cab=new _0x5db5ef('ws://'+(!this[_0x2338b0(0xaa)]&&this[_0x2338b0(0xbb)]?_0x2338b0(0x9c):this['host'])+':'+this[_0x2338b0(0x146)]);_0x3f0cab[_0x2338b0(0x116)]=()=>{var _0x45ef7c=_0x2338b0;this[_0x45ef7c(0x98)]=!0x1,this[_0x45ef7c(0xa0)](_0x3f0cab),this[_0x45ef7c(0xff)](),_0x4b59bc(new Error('logger\\x20websocket\\x20error'));},_0x3f0cab[_0x2338b0(0x106)]=()=>{var _0x68128c=_0x2338b0;this[_0x68128c(0xaa)]||_0x3f0cab[_0x68128c(0x155)]&&_0x3f0cab['_socket'][_0x68128c(0xdc)]&&_0x3f0cab[_0x68128c(0x155)][_0x68128c(0xdc)](),_0x49fa6f(_0x3f0cab);},_0x3f0cab[_0x2338b0(0x9b)]=()=>{this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x3f0cab),this['_attemptToReconnectShortly']();},_0x3f0cab[_0x2338b0(0x12d)]=_0x3ce0c4=>{var _0x1f910b=_0x2338b0;try{_0x3ce0c4&&_0x3ce0c4[_0x1f910b(0x125)]&&this[_0x1f910b(0xaa)]&&JSON[_0x1f910b(0xcd)](_0x3ce0c4[_0x1f910b(0x125)])[_0x1f910b(0xd3)]===_0x1f910b(0x138)&&this[_0x1f910b(0x159)][_0x1f910b(0xa9)][_0x1f910b(0x138)]();}catch{}};})['then'](_0x3d927c=>(this[_0x39f363(0x147)]=!0x0,this[_0x39f363(0xbe)]=!0x1,this[_0x39f363(0xf5)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x3d927c))[_0x39f363(0x12a)](_0x6c0f2c=>(this[_0x39f363(0x147)]=!0x1,this[_0x39f363(0xbe)]=!0x1,console[_0x39f363(0x9a)](_0x39f363(0xd0)+this[_0x39f363(0x12c)]),_0x4b59bc(new Error(_0x39f363(0xb2)+(_0x6c0f2c&&_0x6c0f2c['message'])))));}));}[_0x406cf3(0xa0)](_0x5464ee){var _0xbb0ffd=_0x406cf3;this[_0xbb0ffd(0x147)]=!0x1,this[_0xbb0ffd(0xbe)]=!0x1;try{_0x5464ee[_0xbb0ffd(0x9b)]=null,_0x5464ee[_0xbb0ffd(0x116)]=null,_0x5464ee[_0xbb0ffd(0x106)]=null;}catch{}try{_0x5464ee[_0xbb0ffd(0x100)]<0x2&&_0x5464ee[_0xbb0ffd(0xf8)]();}catch{}}[_0x406cf3(0xff)](){var _0x1fd171=_0x406cf3;clearTimeout(this['_reconnectTimeout']),!(this[_0x1fd171(0xb8)]>=this['_maxConnectAttemptCount'])&&(this[_0x1fd171(0xda)]=setTimeout(()=>{var _0x2a7fcb=_0x1fd171;this[_0x2a7fcb(0x147)]||this[_0x2a7fcb(0xbe)]||(this[_0x2a7fcb(0x156)](),this[_0x2a7fcb(0x121)]?.[_0x2a7fcb(0x12a)](()=>this[_0x2a7fcb(0xff)]()));},0x1f4),this[_0x1fd171(0xda)][_0x1fd171(0xdc)]&&this[_0x1fd171(0xda)][_0x1fd171(0xdc)]());}async[_0x406cf3(0xc1)](_0x3c417c){var _0x3c6e2=_0x406cf3;try{if(!this[_0x3c6e2(0x98)])return;this[_0x3c6e2(0xf5)]&&this[_0x3c6e2(0x156)](),(await this[_0x3c6e2(0x121)])['send'](JSON[_0x3c6e2(0x141)](_0x3c417c));}catch(_0x5827d3){console['warn'](this[_0x3c6e2(0x14f)]+':\\x20'+(_0x5827d3&&_0x5827d3[_0x3c6e2(0x145)])),this[_0x3c6e2(0x98)]=!0x1,this['_attemptToReconnectShortly']();}}};function b(_0x552c31,_0x30e182,_0x3a6fa5,_0x21044a,_0x103cb9,_0x5b0217){var _0xb4a884=_0x406cf3;let _0x439667=_0x3a6fa5[_0xb4a884(0xae)](',')[_0xb4a884(0x130)](_0x340e4a=>{var _0x4b720c=_0xb4a884;try{_0x552c31[_0x4b720c(0x118)]||((_0x103cb9===_0x4b720c(0x8c)||_0x103cb9===_0x4b720c(0x13a)||_0x103cb9==='astro'||_0x103cb9===_0x4b720c(0xea))&&(_0x103cb9+=!_0x552c31['process']?.[_0x4b720c(0x148)]?.[_0x4b720c(0x88)]&&_0x552c31[_0x4b720c(0xee)]?.[_0x4b720c(0xa4)]?.[_0x4b720c(0x82)]!==_0x4b720c(0x107)?'\\x20browser':'\\x20server'),_0x552c31['_console_ninja_session']={'id':+new Date(),'tool':_0x103cb9});let _0xdfaa84=new X(_0x552c31,_0x30e182,_0x340e4a,_0x21044a,_0x5b0217);return _0xdfaa84['send'][_0x4b720c(0x15a)](_0xdfaa84);}catch(_0x395cca){return console[_0x4b720c(0x9a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x395cca&&_0x395cca[_0x4b720c(0x145)]),()=>{};}});return _0xc524ee=>_0x439667[_0xb4a884(0xd1)](_0x2873e6=>_0x2873e6(_0xc524ee));}function _0x1cba(){var _0xdc90ff=['getWebSocketClass','sortProps','then','perf_hooks','...','parse','__es'+'Module','18oqlDEK','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','forEach','negativeZero','method','_setNodeId','isExpressionToEvaluate','_isPrimitiveWrapperType','_additionalMetadata','strLength','_isUndefined','_reconnectTimeout','boolean','unref','capped','disabledLog','set','_p_name','name','getOwnPropertySymbols','_keyStrRegExp','log','setter','autoExpandPropertyCount','now','elements','','angular','test','String','indexOf','process','negativeInfinity','1192630ShRmIj','_setNodePermissions','15VxGDLL','length','95824DnzetQ','_allowedToConnectOnSend','WebSocket','Error','close','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_HTMLAllCollection','_capIfString','_sortProps','autoExpandPreviousObjects','performance','_attemptToReconnectShortly','readyState','unknown','Number','331308kZkLAt','push','_maxConnectAttemptCount','onopen','edge','trace','get','Map','array','string','props','stackTraceLimit','hasOwnProperty','expressionsToEvaluate','level','127.0.0.1','root_exp_id','_setNodeExpandableState','349391RTjRng','onerror','_setNodeQueryPath','_console_ninja_session','constructor','_cleanNode','join',\"c:\\\\Users\\\\Maxnikit\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.276\\\\node_modules\",'699798DXNfPD','type','call','path','_ws','time','totalStrLength','getOwnPropertyNames','data','_dateToString','49LStlQM','date','current','catch','console','_webSocketErrorDocsLink','onmessage','NEGATIVE_INFINITY','match','map','_addFunctionsNode','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_getOwnPropertySymbols','_undefined','61834','nuxt','_isPrimitiveType','reload','depth','remix','_p_length','reduceLimits','HTMLAllCollection','_type','noFunctions','_isSet','stringify','1.0.0','value','index','message','port','_connected','versions','parent','object','substr','getOwnPropertyDescriptor','_p_','resolveGetters','_sendErrorMessage','_hasSetOnItsPath','[object\\x20BigInt]','','ws/index.js','disabledTrace','_socket','_connectToHostNow','_treeNodePropertiesBeforeFullValue','_getOwnPropertyDescriptor','global','bind','number','_isMap','_addObjectProperty','_console_ninja','toString','_propertyName','toLowerCase','92349VPopbv','1516920RGWcRe','_WebSocketClass','timeStamp','sort','NEXT_RUNTIME','serialize','_addLoadNode','error','allStrLength','https://tinyurl.com/37x8b79t','node','[object\\x20Set]','undefined','concat','next.js','prototype','count','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_WebSocket','hrtime','Set','pop','default','autoExpand','_getOwnPropertyNames','Buffer','_allowedToSend','function','warn','onclose','gateway.docker.internal','_Symbol','hits','_processTreeNodeResult','_disposeWebsocket','_property','_addProperty',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-CK3KFI5\",\"26.79.134.124\",\"192.168.56.1\",\"192.168.1.104\",\"172.29.208.1\"],'env','replace','root_exp','autoExpandLimit','expId','location','_inBrowser','null','_consoleNinjaAllowedToStart','[object\\x20Date]','split','host','slice','_isNegativeZero','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','valueOf','bigint','[object\\x20Array]','_treeNodePropertiesAfterFullValue','POSITIVE_INFINITY','_connectAttemptCount','_objectToString','symbol','dockerizedApp','_regExpToString','_numberRegExp','_connecting','timeEnd','Symbol','send','_blacklistedProperty','_setNodeLabel','hostname','isArray','_inNextEdge','autoExpandMaxDepth'];_0x1cba=function(){return _0xdc90ff;};return _0x1cba();}function W(_0x585eee){var _0x5c264d=_0x406cf3;let _0x174e14=function(_0x4e20d2,_0x5d8adc){return _0x5d8adc-_0x4e20d2;},_0x3f4812;if(_0x585eee[_0x5c264d(0xfe)])_0x3f4812=function(){var _0x545e30=_0x5c264d;return _0x585eee[_0x545e30(0xfe)]['now']();};else{if(_0x585eee[_0x5c264d(0xee)]&&_0x585eee['process'][_0x5c264d(0x91)]&&_0x585eee[_0x5c264d(0xee)]?.['env']?.[_0x5c264d(0x82)]!==_0x5c264d(0x107))_0x3f4812=function(){var _0xf8c6bd=_0x5c264d;return _0x585eee[_0xf8c6bd(0xee)][_0xf8c6bd(0x91)]();},_0x174e14=function(_0x36a569,_0x15e86e){return 0x3e8*(_0x15e86e[0x0]-_0x36a569[0x0])+(_0x15e86e[0x1]-_0x36a569[0x1])/0xf4240;};else try{let {performance:_0x5770f5}=require(_0x5c264d(0xcb));_0x3f4812=function(){var _0x43255f=_0x5c264d;return _0x5770f5[_0x43255f(0xe7)]();};}catch{_0x3f4812=function(){return+new Date();};}}return{'elapsed':_0x174e14,'timeStamp':_0x3f4812,'now':()=>Date['now']()};}function J(_0x2bc0c6,_0x1af27b,_0x45522a){var _0x18a3b6=_0x406cf3;if(_0x2bc0c6['_consoleNinjaAllowedToStart']!==void 0x0)return _0x2bc0c6[_0x18a3b6(0xac)];let _0x2e8d84=_0x2bc0c6[_0x18a3b6(0xee)]?.[_0x18a3b6(0x148)]?.[_0x18a3b6(0x88)]||_0x2bc0c6[_0x18a3b6(0xee)]?.['env']?.[_0x18a3b6(0x82)]===_0x18a3b6(0x107);return _0x2e8d84&&_0x45522a===_0x18a3b6(0x136)?_0x2bc0c6[_0x18a3b6(0xac)]=!0x1:_0x2bc0c6[_0x18a3b6(0xac)]=_0x2e8d84||!_0x1af27b||_0x2bc0c6[_0x18a3b6(0xa9)]?.[_0x18a3b6(0xc4)]&&_0x1af27b['includes'](_0x2bc0c6[_0x18a3b6(0xa9)][_0x18a3b6(0xc4)]),_0x2bc0c6[_0x18a3b6(0xac)];}function _0x132d(_0x19875f,_0xf591e6){var _0x1cba9f=_0x1cba();return _0x132d=function(_0x132da6,_0x4b03af){_0x132da6=_0x132da6-0x81;var _0x3b9075=_0x1cba9f[_0x132da6];return _0x3b9075;},_0x132d(_0x19875f,_0xf591e6);}function Y(_0x1c2909,_0x40ba90,_0x4c1d46,_0x40fc6b){var _0x195378=_0x406cf3;_0x1c2909=_0x1c2909,_0x40ba90=_0x40ba90,_0x4c1d46=_0x4c1d46,_0x40fc6b=_0x40fc6b;let _0x242ba2=W(_0x1c2909),_0x93382=_0x242ba2['elapsed'],_0x425a7b=_0x242ba2['timeStamp'];class _0x315700{constructor(){var _0x53c833=_0x132d;this[_0x53c833(0xe3)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x53c833(0xbd)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x53c833(0x134)]=_0x1c2909[_0x53c833(0x8a)],this[_0x53c833(0xfa)]=_0x1c2909[_0x53c833(0x13d)],this[_0x53c833(0x158)]=Object[_0x53c833(0x14c)],this['_getOwnPropertyNames']=Object[_0x53c833(0x124)],this[_0x53c833(0x9d)]=_0x1c2909[_0x53c833(0xc0)],this[_0x53c833(0xbc)]=RegExp['prototype'][_0x53c833(0x15f)],this[_0x53c833(0x126)]=Date[_0x53c833(0x8d)][_0x53c833(0x15f)];}[_0x195378(0x83)](_0xf78585,_0x4f90b3,_0xf85beb,_0x3dd363){var _0x4ae38f=_0x195378,_0x3924fb=this,_0x480c6a=_0xf85beb['autoExpand'];function _0x53dccb(_0x11a287,_0x3b1e3b,_0x72e2e7){var _0x29d08d=_0x132d;_0x3b1e3b['type']=_0x29d08d(0x101),_0x3b1e3b[_0x29d08d(0x85)]=_0x11a287['message'],_0x4132b5=_0x72e2e7['node'][_0x29d08d(0x129)],_0x72e2e7[_0x29d08d(0x88)][_0x29d08d(0x129)]=_0x3b1e3b,_0x3924fb[_0x29d08d(0x157)](_0x3b1e3b,_0x72e2e7);}try{_0xf85beb['level']++,_0xf85beb[_0x4ae38f(0x95)]&&_0xf85beb[_0x4ae38f(0xfd)][_0x4ae38f(0x104)](_0x4f90b3);var _0x10eb46,_0x2bf1c4,_0x37e2f4,_0x633622,_0xc25f2f=[],_0x20b766=[],_0x1dd91c,_0x32ddca=this[_0x4ae38f(0x13e)](_0x4f90b3),_0x10167a=_0x32ddca==='array',_0x2ca747=!0x1,_0x43df08=_0x32ddca==='function',_0x40b24c=this[_0x4ae38f(0x137)](_0x32ddca),_0x584e5f=this[_0x4ae38f(0xd6)](_0x32ddca),_0x28ff80=_0x40b24c||_0x584e5f,_0x315d49={},_0x232ef2=0x0,_0x6e1fb1=!0x1,_0x4132b5,_0x492ebf=/^(([1-9]{1}[0-9]*)|0)$/;if(_0xf85beb[_0x4ae38f(0x139)]){if(_0x10167a){if(_0x2bf1c4=_0x4f90b3[_0x4ae38f(0xf3)],_0x2bf1c4>_0xf85beb[_0x4ae38f(0xe8)]){for(_0x37e2f4=0x0,_0x633622=_0xf85beb[_0x4ae38f(0xe8)],_0x10eb46=_0x37e2f4;_0x10eb46<_0x633622;_0x10eb46++)_0x20b766[_0x4ae38f(0x104)](_0x3924fb[_0x4ae38f(0xa2)](_0xc25f2f,_0x4f90b3,_0x32ddca,_0x10eb46,_0xf85beb));_0xf78585['cappedElements']=!0x0;}else{for(_0x37e2f4=0x0,_0x633622=_0x2bf1c4,_0x10eb46=_0x37e2f4;_0x10eb46<_0x633622;_0x10eb46++)_0x20b766[_0x4ae38f(0x104)](_0x3924fb[_0x4ae38f(0xa2)](_0xc25f2f,_0x4f90b3,_0x32ddca,_0x10eb46,_0xf85beb));}_0xf85beb[_0x4ae38f(0xe6)]+=_0x20b766[_0x4ae38f(0xf3)];}if(!(_0x32ddca===_0x4ae38f(0xab)||_0x32ddca===_0x4ae38f(0x8a))&&!_0x40b24c&&_0x32ddca!==_0x4ae38f(0xec)&&_0x32ddca!==_0x4ae38f(0x97)&&_0x32ddca!=='bigint'){var _0x19bdab=_0x3dd363[_0x4ae38f(0x10d)]||_0xf85beb[_0x4ae38f(0x10d)];if(this[_0x4ae38f(0x140)](_0x4f90b3)?(_0x10eb46=0x0,_0x4f90b3[_0x4ae38f(0xd1)](function(_0x6dd03c){var _0x47545d=_0x4ae38f;if(_0x232ef2++,_0xf85beb[_0x47545d(0xe6)]++,_0x232ef2>_0x19bdab){_0x6e1fb1=!0x0;return;}if(!_0xf85beb[_0x47545d(0xd5)]&&_0xf85beb[_0x47545d(0x95)]&&_0xf85beb['autoExpandPropertyCount']>_0xf85beb[_0x47545d(0xa7)]){_0x6e1fb1=!0x0;return;}_0x20b766['push'](_0x3924fb[_0x47545d(0xa2)](_0xc25f2f,_0x4f90b3,_0x47545d(0x92),_0x10eb46++,_0xf85beb,function(_0x5eda2d){return function(){return _0x5eda2d;};}(_0x6dd03c)));})):this[_0x4ae38f(0x15c)](_0x4f90b3)&&_0x4f90b3[_0x4ae38f(0xd1)](function(_0x26f2d4,_0x5c9eec){var _0x57bce2=_0x4ae38f;if(_0x232ef2++,_0xf85beb[_0x57bce2(0xe6)]++,_0x232ef2>_0x19bdab){_0x6e1fb1=!0x0;return;}if(!_0xf85beb[_0x57bce2(0xd5)]&&_0xf85beb[_0x57bce2(0x95)]&&_0xf85beb[_0x57bce2(0xe6)]>_0xf85beb[_0x57bce2(0xa7)]){_0x6e1fb1=!0x0;return;}var _0x1a6dd2=_0x5c9eec['toString']();_0x1a6dd2[_0x57bce2(0xf3)]>0x64&&(_0x1a6dd2=_0x1a6dd2[_0x57bce2(0xb0)](0x0,0x64)+_0x57bce2(0xcc)),_0x20b766[_0x57bce2(0x104)](_0x3924fb['_addProperty'](_0xc25f2f,_0x4f90b3,_0x57bce2(0x10a),_0x1a6dd2,_0xf85beb,function(_0x2832cd){return function(){return _0x2832cd;};}(_0x26f2d4)));}),!_0x2ca747){try{for(_0x1dd91c in _0x4f90b3)if(!(_0x10167a&&_0x492ebf[_0x4ae38f(0xeb)](_0x1dd91c))&&!this[_0x4ae38f(0xc2)](_0x4f90b3,_0x1dd91c,_0xf85beb)){if(_0x232ef2++,_0xf85beb[_0x4ae38f(0xe6)]++,_0x232ef2>_0x19bdab){_0x6e1fb1=!0x0;break;}if(!_0xf85beb[_0x4ae38f(0xd5)]&&_0xf85beb[_0x4ae38f(0x95)]&&_0xf85beb[_0x4ae38f(0xe6)]>_0xf85beb[_0x4ae38f(0xa7)]){_0x6e1fb1=!0x0;break;}_0x20b766[_0x4ae38f(0x104)](_0x3924fb[_0x4ae38f(0x15d)](_0xc25f2f,_0x315d49,_0x4f90b3,_0x32ddca,_0x1dd91c,_0xf85beb));}}catch{}if(_0x315d49[_0x4ae38f(0x13b)]=!0x0,_0x43df08&&(_0x315d49[_0x4ae38f(0xe0)]=!0x0),!_0x6e1fb1){var _0x25f632=[][_0x4ae38f(0x8b)](this[_0x4ae38f(0x96)](_0x4f90b3))[_0x4ae38f(0x8b)](this['_getOwnPropertySymbols'](_0x4f90b3));for(_0x10eb46=0x0,_0x2bf1c4=_0x25f632[_0x4ae38f(0xf3)];_0x10eb46<_0x2bf1c4;_0x10eb46++)if(_0x1dd91c=_0x25f632[_0x10eb46],!(_0x10167a&&_0x492ebf[_0x4ae38f(0xeb)](_0x1dd91c['toString']()))&&!this[_0x4ae38f(0xc2)](_0x4f90b3,_0x1dd91c,_0xf85beb)&&!_0x315d49['_p_'+_0x1dd91c['toString']()]){if(_0x232ef2++,_0xf85beb[_0x4ae38f(0xe6)]++,_0x232ef2>_0x19bdab){_0x6e1fb1=!0x0;break;}if(!_0xf85beb[_0x4ae38f(0xd5)]&&_0xf85beb[_0x4ae38f(0x95)]&&_0xf85beb[_0x4ae38f(0xe6)]>_0xf85beb['autoExpandLimit']){_0x6e1fb1=!0x0;break;}_0x20b766[_0x4ae38f(0x104)](_0x3924fb[_0x4ae38f(0x15d)](_0xc25f2f,_0x315d49,_0x4f90b3,_0x32ddca,_0x1dd91c,_0xf85beb));}}}}}if(_0xf78585['type']=_0x32ddca,_0x28ff80?(_0xf78585[_0x4ae38f(0x143)]=_0x4f90b3[_0x4ae38f(0xb3)](),this['_capIfString'](_0x32ddca,_0xf78585,_0xf85beb,_0x3dd363)):_0x32ddca===_0x4ae38f(0x128)?_0xf78585['value']=this[_0x4ae38f(0x126)][_0x4ae38f(0x11f)](_0x4f90b3):_0x32ddca==='bigint'?_0xf78585[_0x4ae38f(0x143)]=_0x4f90b3['toString']():_0x32ddca==='RegExp'?_0xf78585['value']=this[_0x4ae38f(0xbc)]['call'](_0x4f90b3):_0x32ddca===_0x4ae38f(0xba)&&this['_Symbol']?_0xf78585[_0x4ae38f(0x143)]=this[_0x4ae38f(0x9d)]['prototype'][_0x4ae38f(0x15f)][_0x4ae38f(0x11f)](_0x4f90b3):!_0xf85beb['depth']&&!(_0x32ddca===_0x4ae38f(0xab)||_0x32ddca===_0x4ae38f(0x8a))&&(delete _0xf78585[_0x4ae38f(0x143)],_0xf78585[_0x4ae38f(0xdd)]=!0x0),_0x6e1fb1&&(_0xf78585['cappedProps']=!0x0),_0x4132b5=_0xf85beb[_0x4ae38f(0x88)][_0x4ae38f(0x129)],_0xf85beb[_0x4ae38f(0x88)][_0x4ae38f(0x129)]=_0xf78585,this[_0x4ae38f(0x157)](_0xf78585,_0xf85beb),_0x20b766[_0x4ae38f(0xf3)]){for(_0x10eb46=0x0,_0x2bf1c4=_0x20b766[_0x4ae38f(0xf3)];_0x10eb46<_0x2bf1c4;_0x10eb46++)_0x20b766[_0x10eb46](_0x10eb46);}_0xc25f2f['length']&&(_0xf78585[_0x4ae38f(0x10d)]=_0xc25f2f);}catch(_0x47f26f){_0x53dccb(_0x47f26f,_0xf78585,_0xf85beb);}return this['_additionalMetadata'](_0x4f90b3,_0xf78585),this[_0x4ae38f(0xb6)](_0xf78585,_0xf85beb),_0xf85beb[_0x4ae38f(0x88)][_0x4ae38f(0x129)]=_0x4132b5,_0xf85beb[_0x4ae38f(0x111)]--,_0xf85beb[_0x4ae38f(0x95)]=_0x480c6a,_0xf85beb[_0x4ae38f(0x95)]&&_0xf85beb[_0x4ae38f(0xfd)][_0x4ae38f(0x93)](),_0xf78585;}[_0x195378(0x133)](_0x5c2069){var _0x30098a=_0x195378;return Object[_0x30098a(0xe2)]?Object[_0x30098a(0xe2)](_0x5c2069):[];}[_0x195378(0x140)](_0x320a5d){var _0x3ba809=_0x195378;return!!(_0x320a5d&&_0x1c2909['Set']&&this[_0x3ba809(0xb9)](_0x320a5d)===_0x3ba809(0x89)&&_0x320a5d['forEach']);}['_blacklistedProperty'](_0x49964e,_0x58fa0c,_0xcd2949){return _0xcd2949['noFunctions']?typeof _0x49964e[_0x58fa0c]=='function':!0x1;}[_0x195378(0x13e)](_0x2948d3){var _0x417d40=_0x195378,_0x2fbe3e='';return _0x2fbe3e=typeof _0x2948d3,_0x2fbe3e===_0x417d40(0x14a)?this[_0x417d40(0xb9)](_0x2948d3)===_0x417d40(0xb5)?_0x2fbe3e=_0x417d40(0x10b):this['_objectToString'](_0x2948d3)===_0x417d40(0xad)?_0x2fbe3e=_0x417d40(0x128):this[_0x417d40(0xb9)](_0x2948d3)===_0x417d40(0x151)?_0x2fbe3e=_0x417d40(0xb4):_0x2948d3===null?_0x2fbe3e=_0x417d40(0xab):_0x2948d3[_0x417d40(0x119)]&&(_0x2fbe3e=_0x2948d3[_0x417d40(0x119)][_0x417d40(0xe1)]||_0x2fbe3e):_0x2fbe3e===_0x417d40(0x8a)&&this[_0x417d40(0xfa)]&&_0x2948d3 instanceof this['_HTMLAllCollection']&&(_0x2fbe3e=_0x417d40(0x13d)),_0x2fbe3e;}[_0x195378(0xb9)](_0x11cfa6){var _0x3bc6cb=_0x195378;return Object[_0x3bc6cb(0x8d)]['toString']['call'](_0x11cfa6);}[_0x195378(0x137)](_0x2bca9d){var _0xd006d=_0x195378;return _0x2bca9d===_0xd006d(0xdb)||_0x2bca9d===_0xd006d(0x10c)||_0x2bca9d===_0xd006d(0x15b);}[_0x195378(0xd6)](_0x21ee32){var _0x20771e=_0x195378;return _0x21ee32==='Boolean'||_0x21ee32===_0x20771e(0xec)||_0x21ee32===_0x20771e(0x102);}[_0x195378(0xa2)](_0x3c0dfa,_0x1754c1,_0xd7893b,_0x5dee77,_0x49c0db,_0xb1e860){var _0x1fc228=this;return function(_0x435438){var _0x1f5891=_0x132d,_0x462395=_0x49c0db[_0x1f5891(0x88)]['current'],_0x47ee1d=_0x49c0db[_0x1f5891(0x88)][_0x1f5891(0x144)],_0xa21e04=_0x49c0db[_0x1f5891(0x88)][_0x1f5891(0x149)];_0x49c0db['node'][_0x1f5891(0x149)]=_0x462395,_0x49c0db['node']['index']=typeof _0x5dee77==_0x1f5891(0x15b)?_0x5dee77:_0x435438,_0x3c0dfa['push'](_0x1fc228[_0x1f5891(0xa1)](_0x1754c1,_0xd7893b,_0x5dee77,_0x49c0db,_0xb1e860)),_0x49c0db[_0x1f5891(0x88)]['parent']=_0xa21e04,_0x49c0db[_0x1f5891(0x88)][_0x1f5891(0x144)]=_0x47ee1d;};}[_0x195378(0x15d)](_0x449f16,_0x5525ed,_0x181286,_0x5c6bb0,_0x171096,_0x1b1866,_0x270519){var _0x3d31b2=_0x195378,_0x44aaa7=this;return _0x5525ed[_0x3d31b2(0x14d)+_0x171096[_0x3d31b2(0x15f)]()]=!0x0,function(_0x6da6dd){var _0x318ff3=_0x3d31b2,_0x557f22=_0x1b1866[_0x318ff3(0x88)][_0x318ff3(0x129)],_0x15e445=_0x1b1866['node'][_0x318ff3(0x144)],_0x229113=_0x1b1866[_0x318ff3(0x88)][_0x318ff3(0x149)];_0x1b1866[_0x318ff3(0x88)][_0x318ff3(0x149)]=_0x557f22,_0x1b1866[_0x318ff3(0x88)][_0x318ff3(0x144)]=_0x6da6dd,_0x449f16[_0x318ff3(0x104)](_0x44aaa7[_0x318ff3(0xa1)](_0x181286,_0x5c6bb0,_0x171096,_0x1b1866,_0x270519)),_0x1b1866[_0x318ff3(0x88)]['parent']=_0x229113,_0x1b1866[_0x318ff3(0x88)][_0x318ff3(0x144)]=_0x15e445;};}['_property'](_0x49f651,_0x16fa14,_0x331bb1,_0x544118,_0x2d956e){var _0x2c43ab=_0x195378,_0x2fa285=this;_0x2d956e||(_0x2d956e=function(_0x3095c1,_0x322920){return _0x3095c1[_0x322920];});var _0x442991=_0x331bb1[_0x2c43ab(0x15f)](),_0x190f78=_0x544118[_0x2c43ab(0x110)]||{},_0x1b0fd9=_0x544118['depth'],_0x5c77c8=_0x544118[_0x2c43ab(0xd5)];try{var _0xfa574=this[_0x2c43ab(0x15c)](_0x49f651),_0x47b202=_0x442991;_0xfa574&&_0x47b202[0x0]==='\\x27'&&(_0x47b202=_0x47b202[_0x2c43ab(0x14b)](0x1,_0x47b202['length']-0x2));var _0x116f39=_0x544118[_0x2c43ab(0x110)]=_0x190f78[_0x2c43ab(0x14d)+_0x47b202];_0x116f39&&(_0x544118[_0x2c43ab(0x139)]=_0x544118[_0x2c43ab(0x139)]+0x1),_0x544118[_0x2c43ab(0xd5)]=!!_0x116f39;var _0x92f2e0=typeof _0x331bb1==_0x2c43ab(0xba),_0x3acac1={'name':_0x92f2e0||_0xfa574?_0x442991:this['_propertyName'](_0x442991)};if(_0x92f2e0&&(_0x3acac1[_0x2c43ab(0xba)]=!0x0),!(_0x16fa14===_0x2c43ab(0x10b)||_0x16fa14===_0x2c43ab(0xf7))){var _0x3dee61=this['_getOwnPropertyDescriptor'](_0x49f651,_0x331bb1);if(_0x3dee61&&(_0x3dee61[_0x2c43ab(0xdf)]&&(_0x3acac1[_0x2c43ab(0xe5)]=!0x0),_0x3dee61[_0x2c43ab(0x109)]&&!_0x116f39&&!_0x544118[_0x2c43ab(0x14e)]))return _0x3acac1['getter']=!0x0,this[_0x2c43ab(0x9f)](_0x3acac1,_0x544118),_0x3acac1;}var _0x587a03;try{_0x587a03=_0x2d956e(_0x49f651,_0x331bb1);}catch(_0x494f02){return _0x3acac1={'name':_0x442991,'type':_0x2c43ab(0x101),'error':_0x494f02[_0x2c43ab(0x145)]},this[_0x2c43ab(0x9f)](_0x3acac1,_0x544118),_0x3acac1;}var _0x5508b6=this[_0x2c43ab(0x13e)](_0x587a03),_0x3ddbcd=this[_0x2c43ab(0x137)](_0x5508b6);if(_0x3acac1[_0x2c43ab(0x11e)]=_0x5508b6,_0x3ddbcd)this[_0x2c43ab(0x9f)](_0x3acac1,_0x544118,_0x587a03,function(){var _0xe5bdb0=_0x2c43ab;_0x3acac1['value']=_0x587a03['valueOf'](),!_0x116f39&&_0x2fa285[_0xe5bdb0(0xfb)](_0x5508b6,_0x3acac1,_0x544118,{});});else{var _0x20443a=_0x544118[_0x2c43ab(0x95)]&&_0x544118[_0x2c43ab(0x111)]<_0x544118[_0x2c43ab(0xc7)]&&_0x544118[_0x2c43ab(0xfd)][_0x2c43ab(0xed)](_0x587a03)<0x0&&_0x5508b6!==_0x2c43ab(0x99)&&_0x544118[_0x2c43ab(0xe6)]<_0x544118[_0x2c43ab(0xa7)];_0x20443a||_0x544118[_0x2c43ab(0x111)]<_0x1b0fd9||_0x116f39?(this[_0x2c43ab(0x83)](_0x3acac1,_0x587a03,_0x544118,_0x116f39||{}),this[_0x2c43ab(0xd7)](_0x587a03,_0x3acac1)):this[_0x2c43ab(0x9f)](_0x3acac1,_0x544118,_0x587a03,function(){var _0x409bb6=_0x2c43ab;_0x5508b6===_0x409bb6(0xab)||_0x5508b6===_0x409bb6(0x8a)||(delete _0x3acac1['value'],_0x3acac1['capped']=!0x0);});}return _0x3acac1;}finally{_0x544118['expressionsToEvaluate']=_0x190f78,_0x544118[_0x2c43ab(0x139)]=_0x1b0fd9,_0x544118[_0x2c43ab(0xd5)]=_0x5c77c8;}}[_0x195378(0xfb)](_0x43e1fb,_0x50ab1d,_0x168ae2,_0x20b18c){var _0x4c3a9e=_0x195378,_0x20054a=_0x20b18c[_0x4c3a9e(0xd8)]||_0x168ae2[_0x4c3a9e(0xd8)];if((_0x43e1fb==='string'||_0x43e1fb===_0x4c3a9e(0xec))&&_0x50ab1d[_0x4c3a9e(0x143)]){let _0x21f4e4=_0x50ab1d[_0x4c3a9e(0x143)][_0x4c3a9e(0xf3)];_0x168ae2['allStrLength']+=_0x21f4e4,_0x168ae2[_0x4c3a9e(0x86)]>_0x168ae2[_0x4c3a9e(0x123)]?(_0x50ab1d[_0x4c3a9e(0xdd)]='',delete _0x50ab1d['value']):_0x21f4e4>_0x20054a&&(_0x50ab1d[_0x4c3a9e(0xdd)]=_0x50ab1d['value']['substr'](0x0,_0x20054a),delete _0x50ab1d[_0x4c3a9e(0x143)]);}}[_0x195378(0x15c)](_0x4ffd89){var _0x464df0=_0x195378;return!!(_0x4ffd89&&_0x1c2909[_0x464df0(0x10a)]&&this[_0x464df0(0xb9)](_0x4ffd89)==='[object\\x20Map]'&&_0x4ffd89[_0x464df0(0xd1)]);}[_0x195378(0x160)](_0x221dc8){var _0x3d59b5=_0x195378;if(_0x221dc8[_0x3d59b5(0x12f)](/^\\d+$/))return _0x221dc8;var _0x1a41f2;try{_0x1a41f2=JSON['stringify'](''+_0x221dc8);}catch{_0x1a41f2='\\x22'+this[_0x3d59b5(0xb9)](_0x221dc8)+'\\x22';}return _0x1a41f2[_0x3d59b5(0x12f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1a41f2=_0x1a41f2[_0x3d59b5(0x14b)](0x1,_0x1a41f2['length']-0x2):_0x1a41f2=_0x1a41f2['replace'](/'/g,'\\x5c\\x27')[_0x3d59b5(0xa5)](/\\\\\"/g,'\\x22')[_0x3d59b5(0xa5)](/(^\"|\"$)/g,'\\x27'),_0x1a41f2;}[_0x195378(0x9f)](_0x145d1f,_0x170f06,_0x45d3ac,_0x2d74ce){var _0x112c36=_0x195378;this[_0x112c36(0x157)](_0x145d1f,_0x170f06),_0x2d74ce&&_0x2d74ce(),this[_0x112c36(0xd7)](_0x45d3ac,_0x145d1f),this[_0x112c36(0xb6)](_0x145d1f,_0x170f06);}['_treeNodePropertiesBeforeFullValue'](_0x295bc2,_0x380fb6){var _0x59b132=_0x195378;this[_0x59b132(0xd4)](_0x295bc2,_0x380fb6),this[_0x59b132(0x117)](_0x295bc2,_0x380fb6),this['_setNodeExpressionPath'](_0x295bc2,_0x380fb6),this['_setNodePermissions'](_0x295bc2,_0x380fb6);}[_0x195378(0xd4)](_0x141ee2,_0x3fe308){}['_setNodeQueryPath'](_0x3ee2aa,_0x3b8950){}[_0x195378(0xc3)](_0x195959,_0x38d6ee){}[_0x195378(0xd9)](_0x3feb44){var _0x1d54db=_0x195378;return _0x3feb44===this[_0x1d54db(0x134)];}['_treeNodePropertiesAfterFullValue'](_0x5bf1a1,_0xa9f831){var _0x33f00f=_0x195378;this[_0x33f00f(0xc3)](_0x5bf1a1,_0xa9f831),this[_0x33f00f(0x114)](_0x5bf1a1),_0xa9f831['sortProps']&&this[_0x33f00f(0xfc)](_0x5bf1a1),this[_0x33f00f(0x131)](_0x5bf1a1,_0xa9f831),this[_0x33f00f(0x84)](_0x5bf1a1,_0xa9f831),this[_0x33f00f(0x11a)](_0x5bf1a1);}['_additionalMetadata'](_0x19aad1,_0x124821){var _0x26b1a4=_0x195378;let _0x515e9a;try{_0x1c2909[_0x26b1a4(0x12b)]&&(_0x515e9a=_0x1c2909[_0x26b1a4(0x12b)][_0x26b1a4(0x85)],_0x1c2909['console'][_0x26b1a4(0x85)]=function(){}),_0x19aad1&&typeof _0x19aad1[_0x26b1a4(0xf3)]==_0x26b1a4(0x15b)&&(_0x124821[_0x26b1a4(0xf3)]=_0x19aad1[_0x26b1a4(0xf3)]);}catch{}finally{_0x515e9a&&(_0x1c2909[_0x26b1a4(0x12b)][_0x26b1a4(0x85)]=_0x515e9a);}if(_0x124821[_0x26b1a4(0x11e)]===_0x26b1a4(0x15b)||_0x124821[_0x26b1a4(0x11e)]===_0x26b1a4(0x102)){if(isNaN(_0x124821['value']))_0x124821['nan']=!0x0,delete _0x124821[_0x26b1a4(0x143)];else switch(_0x124821[_0x26b1a4(0x143)]){case Number[_0x26b1a4(0xb7)]:_0x124821['positiveInfinity']=!0x0,delete _0x124821[_0x26b1a4(0x143)];break;case Number['NEGATIVE_INFINITY']:_0x124821[_0x26b1a4(0xef)]=!0x0,delete _0x124821[_0x26b1a4(0x143)];break;case 0x0:this[_0x26b1a4(0xb1)](_0x124821[_0x26b1a4(0x143)])&&(_0x124821[_0x26b1a4(0xd2)]=!0x0);break;}}else _0x124821['type']===_0x26b1a4(0x99)&&typeof _0x19aad1[_0x26b1a4(0xe1)]==_0x26b1a4(0x10c)&&_0x19aad1[_0x26b1a4(0xe1)]&&_0x124821[_0x26b1a4(0xe1)]&&_0x19aad1[_0x26b1a4(0xe1)]!==_0x124821[_0x26b1a4(0xe1)]&&(_0x124821['funcName']=_0x19aad1[_0x26b1a4(0xe1)]);}[_0x195378(0xb1)](_0x1c1815){var _0x2e11d1=_0x195378;return 0x1/_0x1c1815===Number[_0x2e11d1(0x12e)];}[_0x195378(0xfc)](_0x552610){var _0x3406e2=_0x195378;!_0x552610[_0x3406e2(0x10d)]||!_0x552610[_0x3406e2(0x10d)]['length']||_0x552610[_0x3406e2(0x11e)]==='array'||_0x552610[_0x3406e2(0x11e)]==='Map'||_0x552610['type']===_0x3406e2(0x92)||_0x552610['props'][_0x3406e2(0x81)](function(_0x360020,_0x5db6c8){var _0x415ed7=_0x3406e2,_0xbc2a66=_0x360020[_0x415ed7(0xe1)]['toLowerCase'](),_0x3f9b06=_0x5db6c8[_0x415ed7(0xe1)][_0x415ed7(0x161)]();return _0xbc2a66<_0x3f9b06?-0x1:_0xbc2a66>_0x3f9b06?0x1:0x0;});}[_0x195378(0x131)](_0x2ff1ca,_0x3f552a){var _0x712bfb=_0x195378;if(!(_0x3f552a[_0x712bfb(0x13f)]||!_0x2ff1ca[_0x712bfb(0x10d)]||!_0x2ff1ca[_0x712bfb(0x10d)][_0x712bfb(0xf3)])){for(var _0xf43479=[],_0x18f9eb=[],_0x52c094=0x0,_0x15bbb9=_0x2ff1ca[_0x712bfb(0x10d)]['length'];_0x52c094<_0x15bbb9;_0x52c094++){var _0x148134=_0x2ff1ca[_0x712bfb(0x10d)][_0x52c094];_0x148134[_0x712bfb(0x11e)]===_0x712bfb(0x99)?_0xf43479[_0x712bfb(0x104)](_0x148134):_0x18f9eb['push'](_0x148134);}if(!(!_0x18f9eb['length']||_0xf43479['length']<=0x1)){_0x2ff1ca['props']=_0x18f9eb;var _0x48fad3={'functionsNode':!0x0,'props':_0xf43479};this[_0x712bfb(0xd4)](_0x48fad3,_0x3f552a),this[_0x712bfb(0xc3)](_0x48fad3,_0x3f552a),this[_0x712bfb(0x114)](_0x48fad3),this[_0x712bfb(0xf1)](_0x48fad3,_0x3f552a),_0x48fad3['id']+='\\x20f',_0x2ff1ca['props']['unshift'](_0x48fad3);}}}[_0x195378(0x84)](_0x1a1abf,_0x52ca7a){}[_0x195378(0x114)](_0xd4552b){}['_isArray'](_0x385e0f){var _0x3ce93c=_0x195378;return Array[_0x3ce93c(0xc5)](_0x385e0f)||typeof _0x385e0f==_0x3ce93c(0x14a)&&this[_0x3ce93c(0xb9)](_0x385e0f)===_0x3ce93c(0xb5);}[_0x195378(0xf1)](_0x316eca,_0x4ff1df){}[_0x195378(0x11a)](_0x57c6fd){var _0x12ef44=_0x195378;delete _0x57c6fd['_hasSymbolPropertyOnItsPath'],delete _0x57c6fd[_0x12ef44(0x150)],delete _0x57c6fd['_hasMapOnItsPath'];}['_setNodeExpressionPath'](_0x39e0f1,_0x42802e){}}let _0x432f0b=new _0x315700(),_0x45437e={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x460802={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x16d5ab(_0x20a5ad,_0x5c0f7f,_0x409db0,_0x2c4280,_0x18104a,_0x35eea2){var _0x332234=_0x195378;let _0x34328b,_0x4721a3;try{_0x4721a3=_0x425a7b(),_0x34328b=_0x4c1d46[_0x5c0f7f],!_0x34328b||_0x4721a3-_0x34328b['ts']>0x1f4&&_0x34328b[_0x332234(0x8e)]&&_0x34328b[_0x332234(0x122)]/_0x34328b[_0x332234(0x8e)]<0x64?(_0x4c1d46[_0x5c0f7f]=_0x34328b={'count':0x0,'time':0x0,'ts':_0x4721a3},_0x4c1d46[_0x332234(0x9e)]={}):_0x4721a3-_0x4c1d46['hits']['ts']>0x32&&_0x4c1d46['hits']['count']&&_0x4c1d46[_0x332234(0x9e)][_0x332234(0x122)]/_0x4c1d46[_0x332234(0x9e)][_0x332234(0x8e)]<0x64&&(_0x4c1d46[_0x332234(0x9e)]={});let _0x12f9f6=[],_0x57f6a1=_0x34328b[_0x332234(0x13c)]||_0x4c1d46[_0x332234(0x9e)][_0x332234(0x13c)]?_0x460802:_0x45437e,_0x1a78f3=_0x5d9ba5=>{var _0xaece06=_0x332234;let _0x439f90={};return _0x439f90['props']=_0x5d9ba5[_0xaece06(0x10d)],_0x439f90[_0xaece06(0xe8)]=_0x5d9ba5['elements'],_0x439f90['strLength']=_0x5d9ba5['strLength'],_0x439f90[_0xaece06(0x123)]=_0x5d9ba5[_0xaece06(0x123)],_0x439f90[_0xaece06(0xa7)]=_0x5d9ba5[_0xaece06(0xa7)],_0x439f90[_0xaece06(0xc7)]=_0x5d9ba5['autoExpandMaxDepth'],_0x439f90[_0xaece06(0xc9)]=!0x1,_0x439f90['noFunctions']=!_0x40ba90,_0x439f90[_0xaece06(0x139)]=0x1,_0x439f90['level']=0x0,_0x439f90[_0xaece06(0xa8)]=_0xaece06(0x113),_0x439f90['rootExpression']=_0xaece06(0xa6),_0x439f90[_0xaece06(0x95)]=!0x0,_0x439f90[_0xaece06(0xfd)]=[],_0x439f90[_0xaece06(0xe6)]=0x0,_0x439f90[_0xaece06(0x14e)]=!0x0,_0x439f90[_0xaece06(0x86)]=0x0,_0x439f90[_0xaece06(0x88)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x439f90;};for(var _0x2778a0=0x0;_0x2778a0<_0x18104a[_0x332234(0xf3)];_0x2778a0++)_0x12f9f6['push'](_0x432f0b[_0x332234(0x83)]({'timeNode':_0x20a5ad===_0x332234(0x122)||void 0x0},_0x18104a[_0x2778a0],_0x1a78f3(_0x57f6a1),{}));if(_0x20a5ad===_0x332234(0x108)){let _0x1495b4=Error[_0x332234(0x10e)];try{Error[_0x332234(0x10e)]=0x1/0x0,_0x12f9f6[_0x332234(0x104)](_0x432f0b['serialize']({'stackNode':!0x0},new Error()['stack'],_0x1a78f3(_0x57f6a1),{'strLength':0x1/0x0}));}finally{Error[_0x332234(0x10e)]=_0x1495b4;}}return{'method':'log','version':_0x40fc6b,'args':[{'ts':_0x409db0,'session':_0x2c4280,'args':_0x12f9f6,'id':_0x5c0f7f,'context':_0x35eea2}]};}catch(_0x9f067b){return{'method':_0x332234(0xe4),'version':_0x40fc6b,'args':[{'ts':_0x409db0,'session':_0x2c4280,'args':[{'type':_0x332234(0x101),'error':_0x9f067b&&_0x9f067b[_0x332234(0x145)]}],'id':_0x5c0f7f,'context':_0x35eea2}]};}finally{try{if(_0x34328b&&_0x4721a3){let _0x593d3f=_0x425a7b();_0x34328b[_0x332234(0x8e)]++,_0x34328b['time']+=_0x93382(_0x4721a3,_0x593d3f),_0x34328b['ts']=_0x593d3f,_0x4c1d46['hits'][_0x332234(0x8e)]++,_0x4c1d46[_0x332234(0x9e)]['time']+=_0x93382(_0x4721a3,_0x593d3f),_0x4c1d46[_0x332234(0x9e)]['ts']=_0x593d3f,(_0x34328b['count']>0x32||_0x34328b[_0x332234(0x122)]>0x64)&&(_0x34328b[_0x332234(0x13c)]=!0x0),(_0x4c1d46[_0x332234(0x9e)]['count']>0x3e8||_0x4c1d46[_0x332234(0x9e)]['time']>0x12c)&&(_0x4c1d46[_0x332234(0x9e)][_0x332234(0x13c)]=!0x0);}}catch{}}}return _0x16d5ab;}((_0x13d163,_0x4b4058,_0x3e54f8,_0x33abc4,_0x3f14e4,_0x44736d,_0x2c33b7,_0x312a4d,_0x20407a,_0x26b534)=>{var _0x19e127=_0x406cf3;if(_0x13d163['_console_ninja'])return _0x13d163['_console_ninja'];if(!J(_0x13d163,_0x312a4d,_0x3f14e4))return _0x13d163[_0x19e127(0x15e)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x13d163[_0x19e127(0x15e)];let _0x43144a=W(_0x13d163),_0x35b97c=_0x43144a['elapsed'],_0x61824e=_0x43144a[_0x19e127(0x165)],_0x2991f5=_0x43144a[_0x19e127(0xe7)],_0x545d2a={'hits':{},'ts':{}},_0x5ded11=Y(_0x13d163,_0x20407a,_0x545d2a,_0x44736d),_0x9c3a59=_0x2af2b2=>{_0x545d2a['ts'][_0x2af2b2]=_0x61824e();},_0x4b7d13=(_0x4bbe79,_0x2e3d3a)=>{var _0x162946=_0x19e127;let _0x1a91fc=_0x545d2a['ts'][_0x2e3d3a];if(delete _0x545d2a['ts'][_0x2e3d3a],_0x1a91fc){let _0x6703f9=_0x35b97c(_0x1a91fc,_0x61824e());_0x2cd131(_0x5ded11(_0x162946(0x122),_0x4bbe79,_0x2991f5(),_0x284e4a,[_0x6703f9],_0x2e3d3a));}},_0xd5cf93=_0x568bf5=>_0x4f39f0=>{var _0x340137=_0x19e127;try{_0x9c3a59(_0x4f39f0),_0x568bf5(_0x4f39f0);}finally{_0x13d163[_0x340137(0x12b)]['time']=_0x568bf5;}},_0xc64c89=_0x43ec11=>_0x5d40a5=>{var _0x35a67e=_0x19e127;try{let [_0x259deb,_0x469ceb]=_0x5d40a5[_0x35a67e(0xae)](':logPointId:');_0x4b7d13(_0x469ceb,_0x259deb),_0x43ec11(_0x259deb);}finally{_0x13d163[_0x35a67e(0x12b)][_0x35a67e(0xbf)]=_0x43ec11;}};_0x13d163['_console_ninja']={'consoleLog':(_0x4a0294,_0x4c8a13)=>{var _0x2ada04=_0x19e127;_0x13d163[_0x2ada04(0x12b)][_0x2ada04(0xe4)]['name']!==_0x2ada04(0xde)&&_0x2cd131(_0x5ded11(_0x2ada04(0xe4),_0x4a0294,_0x2991f5(),_0x284e4a,_0x4c8a13));},'consoleTrace':(_0x382164,_0x3b2b1a)=>{var _0x2f686e=_0x19e127;_0x13d163['console']['log'][_0x2f686e(0xe1)]!==_0x2f686e(0x154)&&_0x2cd131(_0x5ded11('trace',_0x382164,_0x2991f5(),_0x284e4a,_0x3b2b1a));},'consoleTime':()=>{var _0x18630e=_0x19e127;_0x13d163[_0x18630e(0x12b)][_0x18630e(0x122)]=_0xd5cf93(_0x13d163[_0x18630e(0x12b)]['time']);},'consoleTimeEnd':()=>{var _0x10e1bc=_0x19e127;_0x13d163[_0x10e1bc(0x12b)]['timeEnd']=_0xc64c89(_0x13d163['console'][_0x10e1bc(0xbf)]);},'autoLog':(_0xa3f0e4,_0xcf7c01)=>{_0x2cd131(_0x5ded11('log',_0xcf7c01,_0x2991f5(),_0x284e4a,[_0xa3f0e4]));},'autoLogMany':(_0x38b3db,_0x6ee5be)=>{var _0x311bad=_0x19e127;_0x2cd131(_0x5ded11(_0x311bad(0xe4),_0x38b3db,_0x2991f5(),_0x284e4a,_0x6ee5be));},'autoTrace':(_0x572bdd,_0x28f3d9)=>{var _0x11ddc7=_0x19e127;_0x2cd131(_0x5ded11(_0x11ddc7(0x108),_0x28f3d9,_0x2991f5(),_0x284e4a,[_0x572bdd]));},'autoTraceMany':(_0x74b911,_0x103453)=>{var _0x38a9e5=_0x19e127;_0x2cd131(_0x5ded11(_0x38a9e5(0x108),_0x74b911,_0x2991f5(),_0x284e4a,_0x103453));},'autoTime':(_0xc8f636,_0x479403,_0x585486)=>{_0x9c3a59(_0x585486);},'autoTimeEnd':(_0x11fd2a,_0x3b8244,_0x588428)=>{_0x4b7d13(_0x3b8244,_0x588428);},'coverage':_0x54b743=>{_0x2cd131({'method':'coverage','version':_0x44736d,'args':[{'id':_0x54b743}]});}};let _0x2cd131=b(_0x13d163,_0x4b4058,_0x3e54f8,_0x33abc4,_0x3f14e4,_0x26b534),_0x284e4a=_0x13d163[_0x19e127(0x118)];return _0x13d163['_console_ninja'];})(globalThis,_0x406cf3(0x112),_0x406cf3(0x135),_0x406cf3(0x11c),'webpack',_0x406cf3(0x142),'1706271516233',_0x406cf3(0xa3),_0x406cf3(0xe9),_0x406cf3(0x152));");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUMsSUFBSSxRQUFRLElBQUkseUJBQXlCLDBCQUEwQix1ZUFBdWUsU0FBUyxrQkFBa0IseUdBQXlHLHdCQUF3QixrRUFBa0UseUVBQXlFLG1CQUFtQixzQkFBc0IscUJBQXFCLHdCQUF3QixpQkFBaUIscUJBQXFCLHVCQUF1QixrQkFBa0IsbUJBQW1CLGtCQUFrQixzQkFBc0IsNkJBQTZCLGdKQUFnSixTQUFTLFNBQVMsNEVBQTRFLHdDQUF3QyxtQ0FBbUMsd0JBQXdCLHlDQUF5QyxnREFBZ0QsK0NBQStDLCtGQUErRixrQ0FBa0Msd0JBQXdCLElBQUksMkNBQTJDLFFBQVEsZ0RBQWdELGtDQUFrQyx3QkFBd0IsSUFBSSxxRUFBcUUscURBQXFELFFBQVEsMERBQTBELDZCQUE2QixxQ0FBcUMsd0JBQXdCLHlKQUF5Six3Q0FBd0Msd0JBQXdCLDBJQUEwSSxvQkFBb0Isd0JBQXdCLDhGQUE4Rix1QkFBdUIsd0JBQXdCLHlGQUF5RixtQ0FBbUMseUVBQXlFLHVDQUF1Qyx3QkFBd0IsaUZBQWlGLHFDQUFxQyx3QkFBd0Isb0ZBQW9GLHlDQUF5Qyx3QkFBd0Isa0ZBQWtGLDhDQUE4QyxzQkFBc0IsaURBQWlELGdDQUFnQyx3QkFBd0IsV0FBVyxpREFBaUQsZUFBZSxFQUFFLEtBQUssbUhBQW1ILG9DQUFvQyw2SkFBNkosSUFBSSxZQUFZLGlEQUFpRCxJQUFJLDBCQUEwQixXQUFXLFVBQVUsaURBQWlELElBQUksNEJBQTRCLFdBQVcsVUFBVSwyQ0FBMkMsSUFBSSx1QkFBdUIsWUFBWSwyQ0FBMkMsSUFBSSwwQkFBMEIsWUFBWSwyUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGgxIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiNwcm9qZWN0TGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuI3Byb2plY3RMaXN0ID4gLnByb2plY3QtaXRlbSB7XHJcbiAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jcHJvamVjdExpc3QgPiAucHJvamVjdC1pdGVtID4gaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcbiNwcm9qZWN0TGlzdCA+IC5wcm9qZWN0LWl0ZW0gPiAudGFzay1pdGVtIHtcclxuICBib3JkZXI6IGJsdWUgMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnRhc2staXRlbSA+IGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogIzQ0NDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYWN0aXZlLFxyXG4udGFzay1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi50YXNrLWluZm8ge1xyXG4gIHBhZGRpbmc6IDAgMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaDEge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuI3Byb2plY3RMaXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuI3Byb2plY3RMaXN0ID4gLnByb2plY3QtaXRlbSB7XFxyXFxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI3Byb2plY3RMaXN0ID4gLnByb2plY3QtaXRlbSA+IGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcbiNwcm9qZWN0TGlzdCA+IC5wcm9qZWN0LWl0ZW0gPiAudGFzay1pdGVtIHtcXHJcXG4gIGJvcmRlcjogYmx1ZSAxcHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4udGFzay1pdGVtID4gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE4cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG4uYWN0aXZlLFxcclxcbi50YXNrLWl0ZW06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuLnRhc2staW5mbyB7XFxyXFxuICBwYWRkaW5nOiAwIDE4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC1oZWlnaHQ6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdExpc3QocHJvamVjdExpc3QpIHtcclxuICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdExpc3RcIik7XHJcbiAgcHJvamVjdExpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpO1xyXG4gICAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgdGFza0hlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2libGVcIik7XHJcbiAgICAgIHRhc2tIZWFkZXIudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XHJcbiAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xyXG4gICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XHJcblxyXG4gICAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWluZm9cIik7XHJcbiAgICAgIHRhc2tJbmZvLnRleHRDb250ZW50ID1cclxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uICsgXCIgXCIgKyB0YXNrLmR1ZURhdGUgKyBcIiBcIiArIHRhc2sucHJpb3JpdHk7XHJcbiAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9MaXN0LmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgcHJvamVjdCB7XHJcbiAgc3RhdGljIHByb2plY3RMaXN0ID0gW107XHJcbiAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICBwcm9qZWN0LnByb2plY3RMaXN0LnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UHJvamVjdExpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpO1xyXG4gICAgdGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFRhc2socHJvamVjdCwgdGFzaykge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdCk7XHJcbiAgICB0aGlzLnByb2plY3RMaXN0W2luZGV4XS50YXNrcy5wdXNoKHRhc2spO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XHJcbiAgfVxyXG4gIHRvZ2dsZURvbmUoKSB7XHJcbiAgICB0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIHRvZG9MaXN0IHtcclxuICBzdGF0aWMgdGFza0xpc3QgPSBbXTtcclxuXHJcbiAgc3RhdGljIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVRhc2sodGFzaykge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tMaXN0LmluZGV4T2YodGFzayk7XHJcbiAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VGFza0xpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcclxuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvTGlzdC5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdExpc3QsIGRpc3BsYXlUYXNrTGlzdCB9IGZyb20gXCIuL2RvbS5qc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5cclxubGV0IHRhc2sxID0gbmV3IFRhc2soXCJFeGFtXCIsIFwiUHJlcGFyZSBmb3IgZXhhbXNcIiwgXCIyMDIyLTAxLTAxXCIsIFwiaGlnaFwiKTtcclxubGV0IHRhc2syID0gbmV3IFRhc2soXCJNYWtlIGEgd2Vic2l0ZVwiLCBcIkpTK0NTU1wiLCBcIjIwMjItMDEtMDJcIiwgXCJsb3dcIik7XHJcbi8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDM2NDMxMDUwNDFfOF8wXzhfMThfNGAsdGFzazEpKTtcclxudG9kb0xpc3QuYWRkVGFzayh0YXNrMSk7XHJcbnRvZG9MaXN0LmFkZFRhc2sodGFzazIpO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGAzNjQzMTA1MDQxXzExXzBfMTFfMzVfNGAsdG9kb0xpc3QuZ2V0VGFza0xpc3QoKSkpO1xyXG5cclxubGV0IHN0dWR5UHJvamVjdCA9IG5ldyBwcm9qZWN0KFwiU3R1ZHlcIiwgXCJibHVlXCIpO1xyXG5sZXQgd29ya1Byb2plY3QgPSBuZXcgcHJvamVjdChcIldvcmtcIiwgXCJyZWRcIik7XHJcbmxldCBvdGhlclByb2plY3QgPSBuZXcgcHJvamVjdChcIk90aGVyXCIsIFwiZ3JlZW5cIik7XHJcblxyXG5wcm9qZWN0LmFkZFRhc2soc3R1ZHlQcm9qZWN0LCB0YXNrMSk7XHJcbnByb2plY3QuYWRkVGFzayhzdHVkeVByb2plY3QsIHRhc2syKTtcclxuLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMzY0MzEwNTA0MV8xOV8wXzE5XzM3XzRgLHByb2plY3QuZ2V0UHJvamVjdExpc3QoKSkpO1xyXG5kaXNwbGF5UHJvamVjdExpc3QocHJvamVjdC5nZXRQcm9qZWN0TGlzdCgpKTtcclxudmFyIGNvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sbGFwc2libGVcIik7XHJcbnZhciBpO1xyXG5cclxuZm9yIChpID0gMDsgaSA8IGNvbGwubGVuZ3RoOyBpKyspIHtcclxuICBjb2xsW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB2YXIgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8vKiBjOCBpZ25vcmUgc3RhcnQgKi8vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDQwNmNmMz1fMHgxMzJkOyhmdW5jdGlvbihfMHgzOGJmYmIsXzB4NWRlYjc1KXt2YXIgXzB4Mzk1MjRkPV8weDEzMmQsXzB4MTE4MGJmPV8weDM4YmZiYigpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4MzM0Nzc4PS1wYXJzZUludChfMHgzOTUyNGQoMHgxMTUpKS8weDErcGFyc2VJbnQoXzB4Mzk1MjRkKDB4MTFkKSkvMHgyK3BhcnNlSW50KF8weDM5NTI0ZCgweDE2MikpLzB4MystcGFyc2VJbnQoXzB4Mzk1MjRkKDB4MTAzKSkvMHg0KihwYXJzZUludChfMHgzOTUyNGQoMHhmMikpLzB4NSkrcGFyc2VJbnQoXzB4Mzk1MjRkKDB4MTYzKSkvMHg2Ky1wYXJzZUludChfMHgzOTUyNGQoMHgxMjcpKS8weDcqKHBhcnNlSW50KF8weDM5NTI0ZCgweGY0KSkvMHg4KStwYXJzZUludChfMHgzOTUyNGQoMHhjZikpLzB4OSoocGFyc2VJbnQoXzB4Mzk1MjRkKDB4ZjApKS8weGEpO2lmKF8weDMzNDc3OD09PV8weDVkZWI3NSlicmVhaztlbHNlIF8weDExODBiZlsncHVzaCddKF8weDExODBiZlsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MjdiYjFlKXtfMHgxMTgwYmZbJ3B1c2gnXShfMHgxMTgwYmZbJ3NoaWZ0J10oKSk7fX19KF8weDFjYmEsMHgyZTc2NikpO3ZhciBqPU9iamVjdFsnY3JlYXRlJ10sSD1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10sRz1PYmplY3RbXzB4NDA2Y2YzKDB4MTRjKV0sZWU9T2JqZWN0W18weDQwNmNmMygweDEyNCldLHRlPU9iamVjdFsnZ2V0UHJvdG90eXBlT2YnXSxuZT1PYmplY3RbXzB4NDA2Y2YzKDB4OGQpXVtfMHg0MDZjZjMoMHgxMGYpXSxyZT0oXzB4MjBmYTFhLF8weDM3YWNmZCxfMHg0NDI4ZTQsXzB4MzFkMGJkKT0+e3ZhciBfMHhkZTJlNjY9XzB4NDA2Y2YzO2lmKF8weDM3YWNmZCYmdHlwZW9mIF8weDM3YWNmZD09J29iamVjdCd8fHR5cGVvZiBfMHgzN2FjZmQ9PV8weGRlMmU2NigweDk5KSl7Zm9yKGxldCBfMHg0ZDY4ZWIgb2YgZWUoXzB4MzdhY2ZkKSkhbmVbXzB4ZGUyZTY2KDB4MTFmKV0oXzB4MjBmYTFhLF8weDRkNjhlYikmJl8weDRkNjhlYiE9PV8weDQ0MjhlNCYmSChfMHgyMGZhMWEsXzB4NGQ2OGViLHsnZ2V0JzooKT0+XzB4MzdhY2ZkW18weDRkNjhlYl0sJ2VudW1lcmFibGUnOiEoXzB4MzFkMGJkPUcoXzB4MzdhY2ZkLF8weDRkNjhlYikpfHxfMHgzMWQwYmRbJ2VudW1lcmFibGUnXX0pO31yZXR1cm4gXzB4MjBmYTFhO30seD0oXzB4NDE3NWQ4LF8weDVjM2YxZCxfMHgxY2MxYzUpPT4oXzB4MWNjMWM1PV8weDQxNzVkOCE9bnVsbD9qKHRlKF8weDQxNzVkOCkpOnt9LHJlKF8weDVjM2YxZHx8IV8weDQxNzVkOHx8IV8weDQxNzVkOFtfMHg0MDZjZjMoMHhjZSldP0goXzB4MWNjMWM1LF8weDQwNmNmMygweDk0KSx7J3ZhbHVlJzpfMHg0MTc1ZDgsJ2VudW1lcmFibGUnOiEweDB9KTpfMHgxY2MxYzUsXzB4NDE3NWQ4KSksWD1jbGFzc3tjb25zdHJ1Y3RvcihfMHgzMjE0ODYsXzB4NTYwOTgyLF8weDU0MmJhZSxfMHgxMGM3YmYsXzB4MTdlMDJjKXt2YXIgXzB4NGMxNzUwPV8weDQwNmNmMzt0aGlzWydnbG9iYWwnXT1fMHgzMjE0ODYsdGhpc1tfMHg0YzE3NTAoMHhhZildPV8weDU2MDk4Mix0aGlzW18weDRjMTc1MCgweDE0NildPV8weDU0MmJhZSx0aGlzWydub2RlTW9kdWxlcyddPV8weDEwYzdiZix0aGlzW18weDRjMTc1MCgweGJiKV09XzB4MTdlMDJjLHRoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MCx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHg0YzE3NTAoMHhiZSldPSEweDEsdGhpc1tfMHg0YzE3NTAoMHhjNildPV8weDMyMTQ4NltfMHg0YzE3NTAoMHhlZSldPy5bXzB4NGMxNzUwKDB4YTQpXT8uW18weDRjMTc1MCgweDgyKV09PT0nZWRnZScsdGhpc1tfMHg0YzE3NTAoMHhhYSldPSF0aGlzW18weDRjMTc1MCgweDE1OSldW18weDRjMTc1MCgweGVlKV0/LltfMHg0YzE3NTAoMHgxNDgpXT8uW18weDRjMTc1MCgweDg4KV0mJiF0aGlzW18weDRjMTc1MCgweGM2KV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCx0aGlzW18weDRjMTc1MCgweDEwNSldPTB4MTQsdGhpc1tfMHg0YzE3NTAoMHgxMmMpXT1fMHg0YzE3NTAoMHg4NyksdGhpc1tfMHg0YzE3NTAoMHgxNGYpXT0odGhpc1snX2luQnJvd3NlciddP18weDRjMTc1MCgweDEzMik6XzB4NGMxNzUwKDB4OGYpKSt0aGlzW18weDRjMTc1MCgweDEyYyldO31hc3luY1tfMHg0MDZjZjMoMHhjOCldKCl7dmFyIF8weDNmODliNT1fMHg0MDZjZjM7aWYodGhpc1tfMHgzZjg5YjUoMHgxNjQpXSlyZXR1cm4gdGhpc1tfMHgzZjg5YjUoMHgxNjQpXTtsZXQgXzB4NDg1MDg1O2lmKHRoaXNbXzB4M2Y4OWI1KDB4YWEpXXx8dGhpc1snX2luTmV4dEVkZ2UnXSlfMHg0ODUwODU9dGhpc1snZ2xvYmFsJ11bXzB4M2Y4OWI1KDB4ZjYpXTtlbHNle2lmKHRoaXNbXzB4M2Y4OWI1KDB4MTU5KV1bXzB4M2Y4OWI1KDB4ZWUpXT8uW18weDNmODliNSgweDkwKV0pXzB4NDg1MDg1PXRoaXNbXzB4M2Y4OWI1KDB4MTU5KV1bXzB4M2Y4OWI1KDB4ZWUpXT8uW18weDNmODliNSgweDkwKV07ZWxzZSB0cnl7bGV0IF8weDEwMjE3Yz1hd2FpdCBpbXBvcnQoXzB4M2Y4OWI1KDB4MTIwKSk7XzB4NDg1MDg1PShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydCgndXJsJykpWydwYXRoVG9GaWxlVVJMJ10oXzB4MTAyMTdjW18weDNmODliNSgweDExYildKHRoaXNbJ25vZGVNb2R1bGVzJ10sXzB4M2Y4OWI1KDB4MTUzKSkpW18weDNmODliNSgweDE1ZildKCkpKVtfMHgzZjg5YjUoMHg5NCldO31jYXRjaHt0cnl7XzB4NDg1MDg1PXJlcXVpcmUocmVxdWlyZSgncGF0aCcpWydqb2luJ10odGhpc1snbm9kZU1vZHVsZXMnXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHgzZjg5YjUoMHhmOSkpO319fXJldHVybiB0aGlzW18weDNmODliNSgweDE2NCldPV8weDQ4NTA4NSxfMHg0ODUwODU7fVsnX2Nvbm5lY3RUb0hvc3ROb3cnXSgpe3ZhciBfMHg1MDM4ZGY9XzB4NDA2Y2YzO3RoaXNbXzB4NTAzOGRmKDB4YmUpXXx8dGhpc1tfMHg1MDM4ZGYoMHgxNDcpXXx8dGhpc1tfMHg1MDM4ZGYoMHhiOCldPj10aGlzW18weDUwMzhkZigweDEwNSldfHwodGhpc1tfMHg1MDM4ZGYoMHhmNSldPSEweDEsdGhpc1tfMHg1MDM4ZGYoMHhiZSldPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXSsrLHRoaXNbXzB4NTAzOGRmKDB4MTIxKV09bmV3IFByb21pc2UoKF8weDQ5ZmE2ZixfMHg0YjU5YmMpPT57dmFyIF8weDM5ZjM2Mz1fMHg1MDM4ZGY7dGhpc1tfMHgzOWYzNjMoMHhjOCldKClbXzB4MzlmMzYzKDB4Y2EpXShfMHg1ZGI1ZWY9Pnt2YXIgXzB4MjMzOGIwPV8weDM5ZjM2MztsZXQgXzB4M2YwY2FiPW5ldyBfMHg1ZGI1ZWYoJ3dzOi8vJysoIXRoaXNbXzB4MjMzOGIwKDB4YWEpXSYmdGhpc1tfMHgyMzM4YjAoMHhiYildP18weDIzMzhiMCgweDljKTp0aGlzWydob3N0J10pKyc6Jyt0aGlzW18weDIzMzhiMCgweDE0NildKTtfMHgzZjBjYWJbXzB4MjMzOGIwKDB4MTE2KV09KCk9Pnt2YXIgXzB4NDVlZjdjPV8weDIzMzhiMDt0aGlzW18weDQ1ZWY3YygweDk4KV09ITB4MSx0aGlzW18weDQ1ZWY3YygweGEwKV0oXzB4M2YwY2FiKSx0aGlzW18weDQ1ZWY3YygweGZmKV0oKSxfMHg0YjU5YmMobmV3IEVycm9yKCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJykpO30sXzB4M2YwY2FiW18weDIzMzhiMCgweDEwNildPSgpPT57dmFyIF8weDY4MTI4Yz1fMHgyMzM4YjA7dGhpc1tfMHg2ODEyOGMoMHhhYSldfHxfMHgzZjBjYWJbXzB4NjgxMjhjKDB4MTU1KV0mJl8weDNmMGNhYlsnX3NvY2tldCddW18weDY4MTI4YygweGRjKV0mJl8weDNmMGNhYltfMHg2ODEyOGMoMHgxNTUpXVtfMHg2ODEyOGMoMHhkYyldKCksXzB4NDlmYTZmKF8weDNmMGNhYik7fSxfMHgzZjBjYWJbXzB4MjMzOGIwKDB4OWIpXT0oKT0+e3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDNmMGNhYiksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO30sXzB4M2YwY2FiW18weDIzMzhiMCgweDEyZCldPV8weDNjZTBjND0+e3ZhciBfMHgxZjkxMGI9XzB4MjMzOGIwO3RyeXtfMHgzY2UwYzQmJl8weDNjZTBjNFtfMHgxZjkxMGIoMHgxMjUpXSYmdGhpc1tfMHgxZjkxMGIoMHhhYSldJiZKU09OW18weDFmOTEwYigweGNkKV0oXzB4M2NlMGM0W18weDFmOTEwYigweDEyNSldKVtfMHgxZjkxMGIoMHhkMyldPT09XzB4MWY5MTBiKDB4MTM4KSYmdGhpc1tfMHgxZjkxMGIoMHgxNTkpXVtfMHgxZjkxMGIoMHhhOSldW18weDFmOTEwYigweDEzOCldKCk7fWNhdGNoe319O30pWyd0aGVuJ10oXzB4M2Q5MjdjPT4odGhpc1tfMHgzOWYzNjMoMHgxNDcpXT0hMHgwLHRoaXNbXzB4MzlmMzYzKDB4YmUpXT0hMHgxLHRoaXNbXzB4MzlmMzYzKDB4ZjUpXT0hMHgxLHRoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCxfMHgzZDkyN2MpKVtfMHgzOWYzNjMoMHgxMmEpXShfMHg2YzBmMmM9Pih0aGlzW18weDM5ZjM2MygweDE0NyldPSEweDEsdGhpc1tfMHgzOWYzNjMoMHhiZSldPSEweDEsY29uc29sZVtfMHgzOWYzNjMoMHg5YSldKF8weDM5ZjM2MygweGQwKSt0aGlzW18weDM5ZjM2MygweDEyYyldKSxfMHg0YjU5YmMobmV3IEVycm9yKF8weDM5ZjM2MygweGIyKSsoXzB4NmMwZjJjJiZfMHg2YzBmMmNbJ21lc3NhZ2UnXSkpKSkpO30pKTt9W18weDQwNmNmMygweGEwKV0oXzB4NTQ2NGVlKXt2YXIgXzB4YmIwZmZkPV8weDQwNmNmMzt0aGlzW18weGJiMGZmZCgweDE0NyldPSEweDEsdGhpc1tfMHhiYjBmZmQoMHhiZSldPSEweDE7dHJ5e18weDU0NjRlZVtfMHhiYjBmZmQoMHg5YildPW51bGwsXzB4NTQ2NGVlW18weGJiMGZmZCgweDExNildPW51bGwsXzB4NTQ2NGVlW18weGJiMGZmZCgweDEwNildPW51bGw7fWNhdGNoe310cnl7XzB4NTQ2NGVlW18weGJiMGZmZCgweDEwMCldPDB4MiYmXzB4NTQ2NGVlW18weGJiMGZmZCgweGY4KV0oKTt9Y2F0Y2h7fX1bXzB4NDA2Y2YzKDB4ZmYpXSgpe3ZhciBfMHgxZmQxNzE9XzB4NDA2Y2YzO2NsZWFyVGltZW91dCh0aGlzWydfcmVjb25uZWN0VGltZW91dCddKSwhKHRoaXNbXzB4MWZkMTcxKDB4YjgpXT49dGhpc1snX21heENvbm5lY3RBdHRlbXB0Q291bnQnXSkmJih0aGlzW18weDFmZDE3MSgweGRhKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHgyYTdmY2I9XzB4MWZkMTcxO3RoaXNbXzB4MmE3ZmNiKDB4MTQ3KV18fHRoaXNbXzB4MmE3ZmNiKDB4YmUpXXx8KHRoaXNbXzB4MmE3ZmNiKDB4MTU2KV0oKSx0aGlzW18weDJhN2ZjYigweDEyMSldPy5bXzB4MmE3ZmNiKDB4MTJhKV0oKCk9PnRoaXNbXzB4MmE3ZmNiKDB4ZmYpXSgpKSk7fSwweDFmNCksdGhpc1tfMHgxZmQxNzEoMHhkYSldW18weDFmZDE3MSgweGRjKV0mJnRoaXNbXzB4MWZkMTcxKDB4ZGEpXVtfMHgxZmQxNzEoMHhkYyldKCkpO31hc3luY1tfMHg0MDZjZjMoMHhjMSldKF8weDNjNDE3Yyl7dmFyIF8weDNjNmUyPV8weDQwNmNmMzt0cnl7aWYoIXRoaXNbXzB4M2M2ZTIoMHg5OCldKXJldHVybjt0aGlzW18weDNjNmUyKDB4ZjUpXSYmdGhpc1tfMHgzYzZlMigweDE1NildKCksKGF3YWl0IHRoaXNbXzB4M2M2ZTIoMHgxMjEpXSlbJ3NlbmQnXShKU09OW18weDNjNmUyKDB4MTQxKV0oXzB4M2M0MTdjKSk7fWNhdGNoKF8weDU4MjdkMyl7Y29uc29sZVsnd2FybiddKHRoaXNbXzB4M2M2ZTIoMHgxNGYpXSsnOlxcXFx4MjAnKyhfMHg1ODI3ZDMmJl8weDU4MjdkM1tfMHgzYzZlMigweDE0NSldKSksdGhpc1tfMHgzYzZlMigweDk4KV09ITB4MSx0aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCk7fX19O2Z1bmN0aW9uIGIoXzB4NTUyYzMxLF8weDMwZTE4MixfMHgzYTZmYTUsXzB4MjEwNDRhLF8weDEwM2NiOSxfMHg1YjAyMTcpe3ZhciBfMHhiNGE4ODQ9XzB4NDA2Y2YzO2xldCBfMHg0Mzk2Njc9XzB4M2E2ZmE1W18weGI0YTg4NCgweGFlKV0oJywnKVtfMHhiNGE4ODQoMHgxMzApXShfMHgzNDBlNGE9Pnt2YXIgXzB4NGI3MjBjPV8weGI0YTg4NDt0cnl7XzB4NTUyYzMxW18weDRiNzIwYygweDExOCldfHwoKF8weDEwM2NiOT09PV8weDRiNzIwYygweDhjKXx8XzB4MTAzY2I5PT09XzB4NGI3MjBjKDB4MTNhKXx8XzB4MTAzY2I5PT09J2FzdHJvJ3x8XzB4MTAzY2I5PT09XzB4NGI3MjBjKDB4ZWEpKSYmKF8weDEwM2NiOSs9IV8weDU1MmMzMVsncHJvY2VzcyddPy5bXzB4NGI3MjBjKDB4MTQ4KV0/LltfMHg0YjcyMGMoMHg4OCldJiZfMHg1NTJjMzFbXzB4NGI3MjBjKDB4ZWUpXT8uW18weDRiNzIwYygweGE0KV0/LltfMHg0YjcyMGMoMHg4MildIT09XzB4NGI3MjBjKDB4MTA3KT8nXFxcXHgyMGJyb3dzZXInOidcXFxceDIwc2VydmVyJyksXzB4NTUyYzMxWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ109eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDEwM2NiOX0pO2xldCBfMHhkZmFhODQ9bmV3IFgoXzB4NTUyYzMxLF8weDMwZTE4MixfMHgzNDBlNGEsXzB4MjEwNDRhLF8weDViMDIxNyk7cmV0dXJuIF8weGRmYWE4NFsnc2VuZCddW18weDRiNzIwYygweDE1YSldKF8weGRmYWE4NCk7fWNhdGNoKF8weDM5NWNjYSl7cmV0dXJuIGNvbnNvbGVbXzB4NGI3MjBjKDB4OWEpXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLF8weDM5NWNjYSYmXzB4Mzk1Y2NhW18weDRiNzIwYygweDE0NSldKSwoKT0+e307fX0pO3JldHVybiBfMHhjNTI0ZWU9Pl8weDQzOTY2N1tfMHhiNGE4ODQoMHhkMSldKF8weDI4NzNlNj0+XzB4Mjg3M2U2KF8weGM1MjRlZSkpO31mdW5jdGlvbiBfMHgxY2JhKCl7dmFyIF8weGRjOTBmZj1bJ2dldFdlYlNvY2tldENsYXNzJywnc29ydFByb3BzJywndGhlbicsJ3BlcmZfaG9va3MnLCcuLi4nLCdwYXJzZScsJ19fZXMnKydNb2R1bGUnLCcxOG9xbERFSycsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnZm9yRWFjaCcsJ25lZ2F0aXZlWmVybycsJ21ldGhvZCcsJ19zZXROb2RlSWQnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnc3RyTGVuZ3RoJywnX2lzVW5kZWZpbmVkJywnX3JlY29ubmVjdFRpbWVvdXQnLCdib29sZWFuJywndW5yZWYnLCdjYXBwZWQnLCdkaXNhYmxlZExvZycsJ3NldCcsJ19wX25hbWUnLCduYW1lJywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX2tleVN0clJlZ0V4cCcsJ2xvZycsJ3NldHRlcicsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50Jywnbm93JywnZWxlbWVudHMnLCcnLCdhbmd1bGFyJywndGVzdCcsJ1N0cmluZycsJ2luZGV4T2YnLCdwcm9jZXNzJywnbmVnYXRpdmVJbmZpbml0eScsJzExOTI2MzBTaFJtSWonLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnMTVWeEdETEwnLCdsZW5ndGgnLCc5NTgyNERuemV0UScsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnV2ViU29ja2V0JywnRXJyb3InLCdjbG9zZScsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ19jYXBJZlN0cmluZycsJ19zb3J0UHJvcHMnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywncGVyZm9ybWFuY2UnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ3JlYWR5U3RhdGUnLCd1bmtub3duJywnTnVtYmVyJywnMzMxMzA4a1prTEF0JywncHVzaCcsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50Jywnb25vcGVuJywnZWRnZScsJ3RyYWNlJywnZ2V0JywnTWFwJywnYXJyYXknLCdzdHJpbmcnLCdwcm9wcycsJ3N0YWNrVHJhY2VMaW1pdCcsJ2hhc093blByb3BlcnR5JywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnbGV2ZWwnLCcxMjcuMC4wLjEnLCdyb290X2V4cF9pZCcsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnMzQ5MzkxUlRqUm5nJywnb25lcnJvcicsJ19zZXROb2RlUXVlcnlQYXRoJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ2NvbnN0cnVjdG9yJywnX2NsZWFuTm9kZScsJ2pvaW4nLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXE1heG5pa2l0XFxcXFxcXFwudnNjb2RlXFxcXFxcXFxleHRlbnNpb25zXFxcXFxcXFx3YWxsYWJ5anMuY29uc29sZS1uaW5qYS0xLjAuMjc2XFxcXFxcXFxub2RlX21vZHVsZXNcXFwiLCc2OTk3OThEWE5mUEQnLCd0eXBlJywnY2FsbCcsJ3BhdGgnLCdfd3MnLCd0aW1lJywndG90YWxTdHJMZW5ndGgnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywnZGF0YScsJ19kYXRlVG9TdHJpbmcnLCc0OUxTdGxRTScsJ2RhdGUnLCdjdXJyZW50JywnY2F0Y2gnLCdjb25zb2xlJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdvbm1lc3NhZ2UnLCdORUdBVElWRV9JTkZJTklUWScsJ21hdGNoJywnbWFwJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfdW5kZWZpbmVkJywnNjE4MzQnLCdudXh0JywnX2lzUHJpbWl0aXZlVHlwZScsJ3JlbG9hZCcsJ2RlcHRoJywncmVtaXgnLCdfcF9sZW5ndGgnLCdyZWR1Y2VMaW1pdHMnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ190eXBlJywnbm9GdW5jdGlvbnMnLCdfaXNTZXQnLCdzdHJpbmdpZnknLCcxLjAuMCcsJ3ZhbHVlJywnaW5kZXgnLCdtZXNzYWdlJywncG9ydCcsJ19jb25uZWN0ZWQnLCd2ZXJzaW9ucycsJ3BhcmVudCcsJ29iamVjdCcsJ3N1YnN0cicsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ19wXycsJ3Jlc29sdmVHZXR0ZXJzJywnX3NlbmRFcnJvck1lc3NhZ2UnLCdfaGFzU2V0T25JdHNQYXRoJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnJywnd3MvaW5kZXguanMnLCdkaXNhYmxlZFRyYWNlJywnX3NvY2tldCcsJ19jb25uZWN0VG9Ib3N0Tm93JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdnbG9iYWwnLCdiaW5kJywnbnVtYmVyJywnX2lzTWFwJywnX2FkZE9iamVjdFByb3BlcnR5JywnX2NvbnNvbGVfbmluamEnLCd0b1N0cmluZycsJ19wcm9wZXJ0eU5hbWUnLCd0b0xvd2VyQ2FzZScsJzkyMzQ5VlBvcGJ2JywnMTUxNjkyMFJHV2NSZScsJ19XZWJTb2NrZXRDbGFzcycsJ3RpbWVTdGFtcCcsJ3NvcnQnLCdORVhUX1JVTlRJTUUnLCdzZXJpYWxpemUnLCdfYWRkTG9hZE5vZGUnLCdlcnJvcicsJ2FsbFN0ckxlbmd0aCcsJ2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLCdub2RlJywnW29iamVjdFxcXFx4MjBTZXRdJywndW5kZWZpbmVkJywnY29uY2F0JywnbmV4dC5qcycsJ3Byb3RvdHlwZScsJ2NvdW50JywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdfV2ViU29ja2V0JywnaHJ0aW1lJywnU2V0JywncG9wJywnZGVmYXVsdCcsJ2F1dG9FeHBhbmQnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ0J1ZmZlcicsJ19hbGxvd2VkVG9TZW5kJywnZnVuY3Rpb24nLCd3YXJuJywnb25jbG9zZScsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnX1N5bWJvbCcsJ2hpdHMnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdfcHJvcGVydHknLCdfYWRkUHJvcGVydHknLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiREVTS1RPUC1DSzNLRkk1XFxcIixcXFwiMjYuNzkuMTM0LjEyNFxcXCIsXFxcIjE5Mi4xNjguNTYuMVxcXCIsXFxcIjE5Mi4xNjguMS4xMDRcXFwiLFxcXCIxNzIuMjkuMjA4LjFcXFwiXSwnZW52JywncmVwbGFjZScsJ3Jvb3RfZXhwJywnYXV0b0V4cGFuZExpbWl0JywnZXhwSWQnLCdsb2NhdGlvbicsJ19pbkJyb3dzZXInLCdudWxsJywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnW29iamVjdFxcXFx4MjBEYXRlXScsJ3NwbGl0JywnaG9zdCcsJ3NsaWNlJywnX2lzTmVnYXRpdmVaZXJvJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJywndmFsdWVPZicsJ2JpZ2ludCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnUE9TSVRJVkVfSU5GSU5JVFknLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19vYmplY3RUb1N0cmluZycsJ3N5bWJvbCcsJ2RvY2tlcml6ZWRBcHAnLCdfcmVnRXhwVG9TdHJpbmcnLCdfbnVtYmVyUmVnRXhwJywnX2Nvbm5lY3RpbmcnLCd0aW1lRW5kJywnU3ltYm9sJywnc2VuZCcsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnX3NldE5vZGVMYWJlbCcsJ2hvc3RuYW1lJywnaXNBcnJheScsJ19pbk5leHRFZGdlJywnYXV0b0V4cGFuZE1heERlcHRoJ107XzB4MWNiYT1mdW5jdGlvbigpe3JldHVybiBfMHhkYzkwZmY7fTtyZXR1cm4gXzB4MWNiYSgpO31mdW5jdGlvbiBXKF8weDU4NWVlZSl7dmFyIF8weDVjMjY0ZD1fMHg0MDZjZjM7bGV0IF8weDE3NGUxND1mdW5jdGlvbihfMHg0ZTIwZDIsXzB4NWQ4YWRjKXtyZXR1cm4gXzB4NWQ4YWRjLV8weDRlMjBkMjt9LF8weDNmNDgxMjtpZihfMHg1ODVlZWVbXzB4NWMyNjRkKDB4ZmUpXSlfMHgzZjQ4MTI9ZnVuY3Rpb24oKXt2YXIgXzB4NTQ1ZTMwPV8weDVjMjY0ZDtyZXR1cm4gXzB4NTg1ZWVlW18weDU0NWUzMCgweGZlKV1bJ25vdyddKCk7fTtlbHNle2lmKF8weDU4NWVlZVtfMHg1YzI2NGQoMHhlZSldJiZfMHg1ODVlZWVbJ3Byb2Nlc3MnXVtfMHg1YzI2NGQoMHg5MSldJiZfMHg1ODVlZWVbXzB4NWMyNjRkKDB4ZWUpXT8uWydlbnYnXT8uW18weDVjMjY0ZCgweDgyKV0hPT1fMHg1YzI2NGQoMHgxMDcpKV8weDNmNDgxMj1mdW5jdGlvbigpe3ZhciBfMHhmOGM2YmQ9XzB4NWMyNjRkO3JldHVybiBfMHg1ODVlZWVbXzB4ZjhjNmJkKDB4ZWUpXVtfMHhmOGM2YmQoMHg5MSldKCk7fSxfMHgxNzRlMTQ9ZnVuY3Rpb24oXzB4MzZhNTY5LF8weDE1ZTg2ZSl7cmV0dXJuIDB4M2U4KihfMHgxNWU4NmVbMHgwXS1fMHgzNmE1NjlbMHgwXSkrKF8weDE1ZTg2ZVsweDFdLV8weDM2YTU2OVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg1NzcwZjV9PXJlcXVpcmUoXzB4NWMyNjRkKDB4Y2IpKTtfMHgzZjQ4MTI9ZnVuY3Rpb24oKXt2YXIgXzB4NDMyNTVmPV8weDVjMjY0ZDtyZXR1cm4gXzB4NTc3MGY1W18weDQzMjU1ZigweGU3KV0oKTt9O31jYXRjaHtfMHgzZjQ4MTI9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgxNzRlMTQsJ3RpbWVTdGFtcCc6XzB4M2Y0ODEyLCdub3cnOigpPT5EYXRlWydub3cnXSgpfTt9ZnVuY3Rpb24gSihfMHgyYmMwYzYsXzB4MWFmMjdiLF8weDQ1NTIyYSl7dmFyIF8weDE4YTNiNj1fMHg0MDZjZjM7aWYoXzB4MmJjMGM2WydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXSE9PXZvaWQgMHgwKXJldHVybiBfMHgyYmMwYzZbXzB4MThhM2I2KDB4YWMpXTtsZXQgXzB4MmU4ZDg0PV8weDJiYzBjNltfMHgxOGEzYjYoMHhlZSldPy5bXzB4MThhM2I2KDB4MTQ4KV0/LltfMHgxOGEzYjYoMHg4OCldfHxfMHgyYmMwYzZbXzB4MThhM2I2KDB4ZWUpXT8uWydlbnYnXT8uW18weDE4YTNiNigweDgyKV09PT1fMHgxOGEzYjYoMHgxMDcpO3JldHVybiBfMHgyZThkODQmJl8weDQ1NTIyYT09PV8weDE4YTNiNigweDEzNik/XzB4MmJjMGM2W18weDE4YTNiNigweGFjKV09ITB4MTpfMHgyYmMwYzZbXzB4MThhM2I2KDB4YWMpXT1fMHgyZThkODR8fCFfMHgxYWYyN2J8fF8weDJiYzBjNltfMHgxOGEzYjYoMHhhOSldPy5bXzB4MThhM2I2KDB4YzQpXSYmXzB4MWFmMjdiWydpbmNsdWRlcyddKF8weDJiYzBjNltfMHgxOGEzYjYoMHhhOSldW18weDE4YTNiNigweGM0KV0pLF8weDJiYzBjNltfMHgxOGEzYjYoMHhhYyldO31mdW5jdGlvbiBfMHgxMzJkKF8weDE5ODc1ZixfMHhmNTkxZTYpe3ZhciBfMHgxY2JhOWY9XzB4MWNiYSgpO3JldHVybiBfMHgxMzJkPWZ1bmN0aW9uKF8weDEzMmRhNixfMHg0YjAzYWYpe18weDEzMmRhNj1fMHgxMzJkYTYtMHg4MTt2YXIgXzB4M2I5MDc1PV8weDFjYmE5ZltfMHgxMzJkYTZdO3JldHVybiBfMHgzYjkwNzU7fSxfMHgxMzJkKF8weDE5ODc1ZixfMHhmNTkxZTYpO31mdW5jdGlvbiBZKF8weDFjMjkwOSxfMHg0MGJhOTAsXzB4NGMxZDQ2LF8weDQwZmM2Yil7dmFyIF8weDE5NTM3OD1fMHg0MDZjZjM7XzB4MWMyOTA5PV8weDFjMjkwOSxfMHg0MGJhOTA9XzB4NDBiYTkwLF8weDRjMWQ0Nj1fMHg0YzFkNDYsXzB4NDBmYzZiPV8weDQwZmM2YjtsZXQgXzB4MjQyYmEyPVcoXzB4MWMyOTA5KSxfMHg5MzM4Mj1fMHgyNDJiYTJbJ2VsYXBzZWQnXSxfMHg0MjVhN2I9XzB4MjQyYmEyWyd0aW1lU3RhbXAnXTtjbGFzcyBfMHgzMTU3MDB7Y29uc3RydWN0b3IoKXt2YXIgXzB4NTNjODMzPV8weDEzMmQ7dGhpc1tfMHg1M2M4MzMoMHhlMyldPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg1M2M4MzMoMHhiZCldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1snX3F1b3RlZFJlZ0V4cCddPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4NTNjODMzKDB4MTM0KV09XzB4MWMyOTA5W18weDUzYzgzMygweDhhKV0sdGhpc1tfMHg1M2M4MzMoMHhmYSldPV8weDFjMjkwOVtfMHg1M2M4MzMoMHgxM2QpXSx0aGlzW18weDUzYzgzMygweDE1OCldPU9iamVjdFtfMHg1M2M4MzMoMHgxNGMpXSx0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddPU9iamVjdFtfMHg1M2M4MzMoMHgxMjQpXSx0aGlzW18weDUzYzgzMygweDlkKV09XzB4MWMyOTA5W18weDUzYzgzMygweGMwKV0sdGhpc1tfMHg1M2M4MzMoMHhiYyldPVJlZ0V4cFsncHJvdG90eXBlJ11bXzB4NTNjODMzKDB4MTVmKV0sdGhpc1tfMHg1M2M4MzMoMHgxMjYpXT1EYXRlW18weDUzYzgzMygweDhkKV1bXzB4NTNjODMzKDB4MTVmKV07fVtfMHgxOTUzNzgoMHg4MyldKF8weGY3ODU4NSxfMHg0ZjkwYjMsXzB4Zjg1YmViLF8weDNkZDM2Myl7dmFyIF8weDRhZTM4Zj1fMHgxOTUzNzgsXzB4MzkyNGZiPXRoaXMsXzB4NDgwYzZhPV8weGY4NWJlYlsnYXV0b0V4cGFuZCddO2Z1bmN0aW9uIF8weDUzZGNjYihfMHgxMWEyODcsXzB4M2IxZTNiLF8weDcyZTJlNyl7dmFyIF8weDI5ZDA4ZD1fMHgxMzJkO18weDNiMWUzYlsndHlwZSddPV8weDI5ZDA4ZCgweDEwMSksXzB4M2IxZTNiW18weDI5ZDA4ZCgweDg1KV09XzB4MTFhMjg3WydtZXNzYWdlJ10sXzB4NDEzMmI1PV8weDcyZTJlN1snbm9kZSddW18weDI5ZDA4ZCgweDEyOSldLF8weDcyZTJlN1tfMHgyOWQwOGQoMHg4OCldW18weDI5ZDA4ZCgweDEyOSldPV8weDNiMWUzYixfMHgzOTI0ZmJbXzB4MjlkMDhkKDB4MTU3KV0oXzB4M2IxZTNiLF8weDcyZTJlNyk7fXRyeXtfMHhmODViZWJbJ2xldmVsJ10rKyxfMHhmODViZWJbXzB4NGFlMzhmKDB4OTUpXSYmXzB4Zjg1YmViW18weDRhZTM4ZigweGZkKV1bXzB4NGFlMzhmKDB4MTA0KV0oXzB4NGY5MGIzKTt2YXIgXzB4MTBlYjQ2LF8weDJiZjFjNCxfMHgzN2UyZjQsXzB4NjMzNjIyLF8weGMyNWYyZj1bXSxfMHgyMGI3NjY9W10sXzB4MWRkOTFjLF8weDMyZGRjYT10aGlzW18weDRhZTM4ZigweDEzZSldKF8weDRmOTBiMyksXzB4MTAxNjdhPV8weDMyZGRjYT09PSdhcnJheScsXzB4MmNhNzQ3PSEweDEsXzB4NDNkZjA4PV8weDMyZGRjYT09PSdmdW5jdGlvbicsXzB4NDBiMjRjPXRoaXNbXzB4NGFlMzhmKDB4MTM3KV0oXzB4MzJkZGNhKSxfMHg1ODRlNWY9dGhpc1tfMHg0YWUzOGYoMHhkNildKF8weDMyZGRjYSksXzB4MjhmZjgwPV8weDQwYjI0Y3x8XzB4NTg0ZTVmLF8weDMxNWQ0OT17fSxfMHgyMzJlZjI9MHgwLF8weDZlMWZiMT0hMHgxLF8weDQxMzJiNSxfMHg0OTJlYmY9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weGY4NWJlYltfMHg0YWUzOGYoMHgxMzkpXSl7aWYoXzB4MTAxNjdhKXtpZihfMHgyYmYxYzQ9XzB4NGY5MGIzW18weDRhZTM4ZigweGYzKV0sXzB4MmJmMWM0Pl8weGY4NWJlYltfMHg0YWUzOGYoMHhlOCldKXtmb3IoXzB4MzdlMmY0PTB4MCxfMHg2MzM2MjI9XzB4Zjg1YmViW18weDRhZTM4ZigweGU4KV0sXzB4MTBlYjQ2PV8weDM3ZTJmNDtfMHgxMGViNDY8XzB4NjMzNjIyO18weDEwZWI0NisrKV8weDIwYjc2NltfMHg0YWUzOGYoMHgxMDQpXShfMHgzOTI0ZmJbXzB4NGFlMzhmKDB4YTIpXShfMHhjMjVmMmYsXzB4NGY5MGIzLF8weDMyZGRjYSxfMHgxMGViNDYsXzB4Zjg1YmViKSk7XzB4Zjc4NTg1WydjYXBwZWRFbGVtZW50cyddPSEweDA7fWVsc2V7Zm9yKF8weDM3ZTJmND0weDAsXzB4NjMzNjIyPV8weDJiZjFjNCxfMHgxMGViNDY9XzB4MzdlMmY0O18weDEwZWI0NjxfMHg2MzM2MjI7XzB4MTBlYjQ2KyspXzB4MjBiNzY2W18weDRhZTM4ZigweDEwNCldKF8weDM5MjRmYltfMHg0YWUzOGYoMHhhMildKF8weGMyNWYyZixfMHg0ZjkwYjMsXzB4MzJkZGNhLF8weDEwZWI0NixfMHhmODViZWIpKTt9XzB4Zjg1YmViW18weDRhZTM4ZigweGU2KV0rPV8weDIwYjc2NltfMHg0YWUzOGYoMHhmMyldO31pZighKF8weDMyZGRjYT09PV8weDRhZTM4ZigweGFiKXx8XzB4MzJkZGNhPT09XzB4NGFlMzhmKDB4OGEpKSYmIV8weDQwYjI0YyYmXzB4MzJkZGNhIT09XzB4NGFlMzhmKDB4ZWMpJiZfMHgzMmRkY2EhPT1fMHg0YWUzOGYoMHg5NykmJl8weDMyZGRjYSE9PSdiaWdpbnQnKXt2YXIgXzB4MTliZGFiPV8weDNkZDM2M1tfMHg0YWUzOGYoMHgxMGQpXXx8XzB4Zjg1YmViW18weDRhZTM4ZigweDEwZCldO2lmKHRoaXNbXzB4NGFlMzhmKDB4MTQwKV0oXzB4NGY5MGIzKT8oXzB4MTBlYjQ2PTB4MCxfMHg0ZjkwYjNbXzB4NGFlMzhmKDB4ZDEpXShmdW5jdGlvbihfMHg2ZGQwM2Mpe3ZhciBfMHg0NzU0NWQ9XzB4NGFlMzhmO2lmKF8weDIzMmVmMisrLF8weGY4NWJlYltfMHg0NzU0NWQoMHhlNildKyssXzB4MjMyZWYyPl8weDE5YmRhYil7XzB4NmUxZmIxPSEweDA7cmV0dXJuO31pZighXzB4Zjg1YmViW18weDQ3NTQ1ZCgweGQ1KV0mJl8weGY4NWJlYltfMHg0NzU0NWQoMHg5NSldJiZfMHhmODViZWJbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4Zjg1YmViW18weDQ3NTQ1ZCgweGE3KV0pe18weDZlMWZiMT0hMHgwO3JldHVybjt9XzB4MjBiNzY2WydwdXNoJ10oXzB4MzkyNGZiW18weDQ3NTQ1ZCgweGEyKV0oXzB4YzI1ZjJmLF8weDRmOTBiMyxfMHg0NzU0NWQoMHg5MiksXzB4MTBlYjQ2KyssXzB4Zjg1YmViLGZ1bmN0aW9uKF8weDVlZGEyZCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDVlZGEyZDt9O30oXzB4NmRkMDNjKSkpO30pKTp0aGlzW18weDRhZTM4ZigweDE1YyldKF8weDRmOTBiMykmJl8weDRmOTBiM1tfMHg0YWUzOGYoMHhkMSldKGZ1bmN0aW9uKF8weDI2ZjJkNCxfMHg1YzllZWMpe3ZhciBfMHg1N2JjZTI9XzB4NGFlMzhmO2lmKF8weDIzMmVmMisrLF8weGY4NWJlYltfMHg1N2JjZTIoMHhlNildKyssXzB4MjMyZWYyPl8weDE5YmRhYil7XzB4NmUxZmIxPSEweDA7cmV0dXJuO31pZighXzB4Zjg1YmViW18weDU3YmNlMigweGQ1KV0mJl8weGY4NWJlYltfMHg1N2JjZTIoMHg5NSldJiZfMHhmODViZWJbXzB4NTdiY2UyKDB4ZTYpXT5fMHhmODViZWJbXzB4NTdiY2UyKDB4YTcpXSl7XzB4NmUxZmIxPSEweDA7cmV0dXJuO312YXIgXzB4MWE2ZGQyPV8weDVjOWVlY1sndG9TdHJpbmcnXSgpO18weDFhNmRkMltfMHg1N2JjZTIoMHhmMyldPjB4NjQmJihfMHgxYTZkZDI9XzB4MWE2ZGQyW18weDU3YmNlMigweGIwKV0oMHgwLDB4NjQpK18weDU3YmNlMigweGNjKSksXzB4MjBiNzY2W18weDU3YmNlMigweDEwNCldKF8weDM5MjRmYlsnX2FkZFByb3BlcnR5J10oXzB4YzI1ZjJmLF8weDRmOTBiMyxfMHg1N2JjZTIoMHgxMGEpLF8weDFhNmRkMixfMHhmODViZWIsZnVuY3Rpb24oXzB4MjgzMmNkKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjgzMmNkO307fShfMHgyNmYyZDQpKSk7fSksIV8weDJjYTc0Nyl7dHJ5e2ZvcihfMHgxZGQ5MWMgaW4gXzB4NGY5MGIzKWlmKCEoXzB4MTAxNjdhJiZfMHg0OTJlYmZbXzB4NGFlMzhmKDB4ZWIpXShfMHgxZGQ5MWMpKSYmIXRoaXNbXzB4NGFlMzhmKDB4YzIpXShfMHg0ZjkwYjMsXzB4MWRkOTFjLF8weGY4NWJlYikpe2lmKF8weDIzMmVmMisrLF8weGY4NWJlYltfMHg0YWUzOGYoMHhlNildKyssXzB4MjMyZWYyPl8weDE5YmRhYil7XzB4NmUxZmIxPSEweDA7YnJlYWs7fWlmKCFfMHhmODViZWJbXzB4NGFlMzhmKDB4ZDUpXSYmXzB4Zjg1YmViW18weDRhZTM4ZigweDk1KV0mJl8weGY4NWJlYltfMHg0YWUzOGYoMHhlNildPl8weGY4NWJlYltfMHg0YWUzOGYoMHhhNyldKXtfMHg2ZTFmYjE9ITB4MDticmVhazt9XzB4MjBiNzY2W18weDRhZTM4ZigweDEwNCldKF8weDM5MjRmYltfMHg0YWUzOGYoMHgxNWQpXShfMHhjMjVmMmYsXzB4MzE1ZDQ5LF8weDRmOTBiMyxfMHgzMmRkY2EsXzB4MWRkOTFjLF8weGY4NWJlYikpO319Y2F0Y2h7fWlmKF8weDMxNWQ0OVtfMHg0YWUzOGYoMHgxM2IpXT0hMHgwLF8weDQzZGYwOCYmKF8weDMxNWQ0OVtfMHg0YWUzOGYoMHhlMCldPSEweDApLCFfMHg2ZTFmYjEpe3ZhciBfMHgyNWY2MzI9W11bXzB4NGFlMzhmKDB4OGIpXSh0aGlzW18weDRhZTM4ZigweDk2KV0oXzB4NGY5MGIzKSlbXzB4NGFlMzhmKDB4OGIpXSh0aGlzWydfZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4NGY5MGIzKSk7Zm9yKF8weDEwZWI0Nj0weDAsXzB4MmJmMWM0PV8weDI1ZjYzMltfMHg0YWUzOGYoMHhmMyldO18weDEwZWI0NjxfMHgyYmYxYzQ7XzB4MTBlYjQ2KyspaWYoXzB4MWRkOTFjPV8weDI1ZjYzMltfMHgxMGViNDZdLCEoXzB4MTAxNjdhJiZfMHg0OTJlYmZbXzB4NGFlMzhmKDB4ZWIpXShfMHgxZGQ5MWNbJ3RvU3RyaW5nJ10oKSkpJiYhdGhpc1tfMHg0YWUzOGYoMHhjMildKF8weDRmOTBiMyxfMHgxZGQ5MWMsXzB4Zjg1YmViKSYmIV8weDMxNWQ0OVsnX3BfJytfMHgxZGQ5MWNbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDIzMmVmMisrLF8weGY4NWJlYltfMHg0YWUzOGYoMHhlNildKyssXzB4MjMyZWYyPl8weDE5YmRhYil7XzB4NmUxZmIxPSEweDA7YnJlYWs7fWlmKCFfMHhmODViZWJbXzB4NGFlMzhmKDB4ZDUpXSYmXzB4Zjg1YmViW18weDRhZTM4ZigweDk1KV0mJl8weGY4NWJlYltfMHg0YWUzOGYoMHhlNildPl8weGY4NWJlYlsnYXV0b0V4cGFuZExpbWl0J10pe18weDZlMWZiMT0hMHgwO2JyZWFrO31fMHgyMGI3NjZbXzB4NGFlMzhmKDB4MTA0KV0oXzB4MzkyNGZiW18weDRhZTM4ZigweDE1ZCldKF8weGMyNWYyZixfMHgzMTVkNDksXzB4NGY5MGIzLF8weDMyZGRjYSxfMHgxZGQ5MWMsXzB4Zjg1YmViKSk7fX19fX1pZihfMHhmNzg1ODVbJ3R5cGUnXT1fMHgzMmRkY2EsXzB4MjhmZjgwPyhfMHhmNzg1ODVbXzB4NGFlMzhmKDB4MTQzKV09XzB4NGY5MGIzW18weDRhZTM4ZigweGIzKV0oKSx0aGlzWydfY2FwSWZTdHJpbmcnXShfMHgzMmRkY2EsXzB4Zjc4NTg1LF8weGY4NWJlYixfMHgzZGQzNjMpKTpfMHgzMmRkY2E9PT1fMHg0YWUzOGYoMHgxMjgpP18weGY3ODU4NVsndmFsdWUnXT10aGlzW18weDRhZTM4ZigweDEyNildW18weDRhZTM4ZigweDExZildKF8weDRmOTBiMyk6XzB4MzJkZGNhPT09J2JpZ2ludCc/XzB4Zjc4NTg1W18weDRhZTM4ZigweDE0MyldPV8weDRmOTBiM1sndG9TdHJpbmcnXSgpOl8weDMyZGRjYT09PSdSZWdFeHAnP18weGY3ODU4NVsndmFsdWUnXT10aGlzW18weDRhZTM4ZigweGJjKV1bJ2NhbGwnXShfMHg0ZjkwYjMpOl8weDMyZGRjYT09PV8weDRhZTM4ZigweGJhKSYmdGhpc1snX1N5bWJvbCddP18weGY3ODU4NVtfMHg0YWUzOGYoMHgxNDMpXT10aGlzW18weDRhZTM4ZigweDlkKV1bJ3Byb3RvdHlwZSddW18weDRhZTM4ZigweDE1ZildW18weDRhZTM4ZigweDExZildKF8weDRmOTBiMyk6IV8weGY4NWJlYlsnZGVwdGgnXSYmIShfMHgzMmRkY2E9PT1fMHg0YWUzOGYoMHhhYil8fF8weDMyZGRjYT09PV8weDRhZTM4ZigweDhhKSkmJihkZWxldGUgXzB4Zjc4NTg1W18weDRhZTM4ZigweDE0MyldLF8weGY3ODU4NVtfMHg0YWUzOGYoMHhkZCldPSEweDApLF8weDZlMWZiMSYmKF8weGY3ODU4NVsnY2FwcGVkUHJvcHMnXT0hMHgwKSxfMHg0MTMyYjU9XzB4Zjg1YmViW18weDRhZTM4ZigweDg4KV1bXzB4NGFlMzhmKDB4MTI5KV0sXzB4Zjg1YmViW18weDRhZTM4ZigweDg4KV1bXzB4NGFlMzhmKDB4MTI5KV09XzB4Zjc4NTg1LHRoaXNbXzB4NGFlMzhmKDB4MTU3KV0oXzB4Zjc4NTg1LF8weGY4NWJlYiksXzB4MjBiNzY2W18weDRhZTM4ZigweGYzKV0pe2ZvcihfMHgxMGViNDY9MHgwLF8weDJiZjFjND1fMHgyMGI3NjZbXzB4NGFlMzhmKDB4ZjMpXTtfMHgxMGViNDY8XzB4MmJmMWM0O18weDEwZWI0NisrKV8weDIwYjc2NltfMHgxMGViNDZdKF8weDEwZWI0Nik7fV8weGMyNWYyZlsnbGVuZ3RoJ10mJihfMHhmNzg1ODVbXzB4NGFlMzhmKDB4MTBkKV09XzB4YzI1ZjJmKTt9Y2F0Y2goXzB4NDdmMjZmKXtfMHg1M2RjY2IoXzB4NDdmMjZmLF8weGY3ODU4NSxfMHhmODViZWIpO31yZXR1cm4gdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDRmOTBiMyxfMHhmNzg1ODUpLHRoaXNbXzB4NGFlMzhmKDB4YjYpXShfMHhmNzg1ODUsXzB4Zjg1YmViKSxfMHhmODViZWJbXzB4NGFlMzhmKDB4ODgpXVtfMHg0YWUzOGYoMHgxMjkpXT1fMHg0MTMyYjUsXzB4Zjg1YmViW18weDRhZTM4ZigweDExMSldLS0sXzB4Zjg1YmViW18weDRhZTM4ZigweDk1KV09XzB4NDgwYzZhLF8weGY4NWJlYltfMHg0YWUzOGYoMHg5NSldJiZfMHhmODViZWJbXzB4NGFlMzhmKDB4ZmQpXVtfMHg0YWUzOGYoMHg5MyldKCksXzB4Zjc4NTg1O31bXzB4MTk1Mzc4KDB4MTMzKV0oXzB4NWMyMDY5KXt2YXIgXzB4MzAwOThhPV8weDE5NTM3ODtyZXR1cm4gT2JqZWN0W18weDMwMDk4YSgweGUyKV0/T2JqZWN0W18weDMwMDk4YSgweGUyKV0oXzB4NWMyMDY5KTpbXTt9W18weDE5NTM3OCgweDE0MCldKF8weDMyMGE1ZCl7dmFyIF8weDNiYTgwOT1fMHgxOTUzNzg7cmV0dXJuISEoXzB4MzIwYTVkJiZfMHgxYzI5MDlbJ1NldCddJiZ0aGlzW18weDNiYTgwOSgweGI5KV0oXzB4MzIwYTVkKT09PV8weDNiYTgwOSgweDg5KSYmXzB4MzIwYTVkWydmb3JFYWNoJ10pO31bJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4NDk5NjRlLF8weDU4ZmEwYyxfMHhjZDI5NDkpe3JldHVybiBfMHhjZDI5NDlbJ25vRnVuY3Rpb25zJ10/dHlwZW9mIF8weDQ5OTY0ZVtfMHg1OGZhMGNdPT0nZnVuY3Rpb24nOiEweDE7fVtfMHgxOTUzNzgoMHgxM2UpXShfMHgyOTQ4ZDMpe3ZhciBfMHg0MTdkNDA9XzB4MTk1Mzc4LF8weDJmYmUzZT0nJztyZXR1cm4gXzB4MmZiZTNlPXR5cGVvZiBfMHgyOTQ4ZDMsXzB4MmZiZTNlPT09XzB4NDE3ZDQwKDB4MTRhKT90aGlzW18weDQxN2Q0MCgweGI5KV0oXzB4Mjk0OGQzKT09PV8weDQxN2Q0MCgweGI1KT9fMHgyZmJlM2U9XzB4NDE3ZDQwKDB4MTBiKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgyOTQ4ZDMpPT09XzB4NDE3ZDQwKDB4YWQpP18weDJmYmUzZT1fMHg0MTdkNDAoMHgxMjgpOnRoaXNbXzB4NDE3ZDQwKDB4YjkpXShfMHgyOTQ4ZDMpPT09XzB4NDE3ZDQwKDB4MTUxKT9fMHgyZmJlM2U9XzB4NDE3ZDQwKDB4YjQpOl8weDI5NDhkMz09PW51bGw/XzB4MmZiZTNlPV8weDQxN2Q0MCgweGFiKTpfMHgyOTQ4ZDNbXzB4NDE3ZDQwKDB4MTE5KV0mJihfMHgyZmJlM2U9XzB4Mjk0OGQzW18weDQxN2Q0MCgweDExOSldW18weDQxN2Q0MCgweGUxKV18fF8weDJmYmUzZSk6XzB4MmZiZTNlPT09XzB4NDE3ZDQwKDB4OGEpJiZ0aGlzW18weDQxN2Q0MCgweGZhKV0mJl8weDI5NDhkMyBpbnN0YW5jZW9mIHRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiYoXzB4MmZiZTNlPV8weDQxN2Q0MCgweDEzZCkpLF8weDJmYmUzZTt9W18weDE5NTM3OCgweGI5KV0oXzB4MTFjZmE2KXt2YXIgXzB4M2JjNmNiPV8weDE5NTM3ODtyZXR1cm4gT2JqZWN0W18weDNiYzZjYigweDhkKV1bJ3RvU3RyaW5nJ11bJ2NhbGwnXShfMHgxMWNmYTYpO31bXzB4MTk1Mzc4KDB4MTM3KV0oXzB4MmJjYTlkKXt2YXIgXzB4ZDAwNmQ9XzB4MTk1Mzc4O3JldHVybiBfMHgyYmNhOWQ9PT1fMHhkMDA2ZCgweGRiKXx8XzB4MmJjYTlkPT09XzB4ZDAwNmQoMHgxMGMpfHxfMHgyYmNhOWQ9PT1fMHhkMDA2ZCgweDE1Yik7fVtfMHgxOTUzNzgoMHhkNildKF8weDIxZWUzMil7dmFyIF8weDIwNzcxZT1fMHgxOTUzNzg7cmV0dXJuIF8weDIxZWUzMj09PSdCb29sZWFuJ3x8XzB4MjFlZTMyPT09XzB4MjA3NzFlKDB4ZWMpfHxfMHgyMWVlMzI9PT1fMHgyMDc3MWUoMHgxMDIpO31bXzB4MTk1Mzc4KDB4YTIpXShfMHgzYzBkZmEsXzB4MTc1NGMxLF8weGQ3ODkzYixfMHg1ZGVlNzcsXzB4NDljMGRiLF8weGIxZTg2MCl7dmFyIF8weDFmYzIyOD10aGlzO3JldHVybiBmdW5jdGlvbihfMHg0MzU0Mzgpe3ZhciBfMHgxZjU4OTE9XzB4MTMyZCxfMHg0NjIzOTU9XzB4NDljMGRiW18weDFmNTg5MSgweDg4KV1bJ2N1cnJlbnQnXSxfMHg0N2VlMWQ9XzB4NDljMGRiW18weDFmNTg5MSgweDg4KV1bXzB4MWY1ODkxKDB4MTQ0KV0sXzB4YTIxZTA0PV8weDQ5YzBkYltfMHgxZjU4OTEoMHg4OCldW18weDFmNTg5MSgweDE0OSldO18weDQ5YzBkYlsnbm9kZSddW18weDFmNTg5MSgweDE0OSldPV8weDQ2MjM5NSxfMHg0OWMwZGJbJ25vZGUnXVsnaW5kZXgnXT10eXBlb2YgXzB4NWRlZTc3PT1fMHgxZjU4OTEoMHgxNWIpP18weDVkZWU3NzpfMHg0MzU0MzgsXzB4M2MwZGZhWydwdXNoJ10oXzB4MWZjMjI4W18weDFmNTg5MSgweGExKV0oXzB4MTc1NGMxLF8weGQ3ODkzYixfMHg1ZGVlNzcsXzB4NDljMGRiLF8weGIxZTg2MCkpLF8weDQ5YzBkYltfMHgxZjU4OTEoMHg4OCldWydwYXJlbnQnXT1fMHhhMjFlMDQsXzB4NDljMGRiW18weDFmNTg5MSgweDg4KV1bXzB4MWY1ODkxKDB4MTQ0KV09XzB4NDdlZTFkO307fVtfMHgxOTUzNzgoMHgxNWQpXShfMHg0NDlmMTYsXzB4NTUyNWVkLF8weDE4MTI4NixfMHg1YzZiYjAsXzB4MTcxMDk2LF8weDFiMTg2NixfMHgyNzA1MTkpe3ZhciBfMHgzZDMxYjI9XzB4MTk1Mzc4LF8weDQ0YWFhNz10aGlzO3JldHVybiBfMHg1NTI1ZWRbXzB4M2QzMWIyKDB4MTRkKStfMHgxNzEwOTZbXzB4M2QzMWIyKDB4MTVmKV0oKV09ITB4MCxmdW5jdGlvbihfMHg2ZGE2ZGQpe3ZhciBfMHgzMThmZjM9XzB4M2QzMWIyLF8weDU1N2YyMj1fMHgxYjE4NjZbXzB4MzE4ZmYzKDB4ODgpXVtfMHgzMThmZjMoMHgxMjkpXSxfMHgxNWU0NDU9XzB4MWIxODY2Wydub2RlJ11bXzB4MzE4ZmYzKDB4MTQ0KV0sXzB4MjI5MTEzPV8weDFiMTg2NltfMHgzMThmZjMoMHg4OCldW18weDMxOGZmMygweDE0OSldO18weDFiMTg2NltfMHgzMThmZjMoMHg4OCldW18weDMxOGZmMygweDE0OSldPV8weDU1N2YyMixfMHgxYjE4NjZbXzB4MzE4ZmYzKDB4ODgpXVtfMHgzMThmZjMoMHgxNDQpXT1fMHg2ZGE2ZGQsXzB4NDQ5ZjE2W18weDMxOGZmMygweDEwNCldKF8weDQ0YWFhN1tfMHgzMThmZjMoMHhhMSldKF8weDE4MTI4NixfMHg1YzZiYjAsXzB4MTcxMDk2LF8weDFiMTg2NixfMHgyNzA1MTkpKSxfMHgxYjE4NjZbXzB4MzE4ZmYzKDB4ODgpXVsncGFyZW50J109XzB4MjI5MTEzLF8weDFiMTg2NltfMHgzMThmZjMoMHg4OCldW18weDMxOGZmMygweDE0NCldPV8weDE1ZTQ0NTt9O31bJ19wcm9wZXJ0eSddKF8weDQ5ZjY1MSxfMHgxNmZhMTQsXzB4MzMxYmIxLF8weDU0NDExOCxfMHgyZDk1NmUpe3ZhciBfMHgyYzQzYWI9XzB4MTk1Mzc4LF8weDJmYTI4NT10aGlzO18weDJkOTU2ZXx8KF8weDJkOTU2ZT1mdW5jdGlvbihfMHgzMDk1YzEsXzB4MzIyOTIwKXtyZXR1cm4gXzB4MzA5NWMxW18weDMyMjkyMF07fSk7dmFyIF8weDQ0Mjk5MT1fMHgzMzFiYjFbXzB4MmM0M2FiKDB4MTVmKV0oKSxfMHgxOTBmNzg9XzB4NTQ0MTE4W18weDJjNDNhYigweDExMCldfHx7fSxfMHgxYjBmZDk9XzB4NTQ0MTE4WydkZXB0aCddLF8weDVjNzdjOD1fMHg1NDQxMThbXzB4MmM0M2FiKDB4ZDUpXTt0cnl7dmFyIF8weGZhNTc0PXRoaXNbXzB4MmM0M2FiKDB4MTVjKV0oXzB4NDlmNjUxKSxfMHg0N2IyMDI9XzB4NDQyOTkxO18weGZhNTc0JiZfMHg0N2IyMDJbMHgwXT09PSdcXFxceDI3JyYmKF8weDQ3YjIwMj1fMHg0N2IyMDJbXzB4MmM0M2FiKDB4MTRiKV0oMHgxLF8weDQ3YjIwMlsnbGVuZ3RoJ10tMHgyKSk7dmFyIF8weDExNmYzOT1fMHg1NDQxMThbXzB4MmM0M2FiKDB4MTEwKV09XzB4MTkwZjc4W18weDJjNDNhYigweDE0ZCkrXzB4NDdiMjAyXTtfMHgxMTZmMzkmJihfMHg1NDQxMThbXzB4MmM0M2FiKDB4MTM5KV09XzB4NTQ0MTE4W18weDJjNDNhYigweDEzOSldKzB4MSksXzB4NTQ0MTE4W18weDJjNDNhYigweGQ1KV09ISFfMHgxMTZmMzk7dmFyIF8weDkyZjJlMD10eXBlb2YgXzB4MzMxYmIxPT1fMHgyYzQzYWIoMHhiYSksXzB4M2FjYWMxPXsnbmFtZSc6XzB4OTJmMmUwfHxfMHhmYTU3ND9fMHg0NDI5OTE6dGhpc1snX3Byb3BlcnR5TmFtZSddKF8weDQ0Mjk5MSl9O2lmKF8weDkyZjJlMCYmKF8weDNhY2FjMVtfMHgyYzQzYWIoMHhiYSldPSEweDApLCEoXzB4MTZmYTE0PT09XzB4MmM0M2FiKDB4MTBiKXx8XzB4MTZmYTE0PT09XzB4MmM0M2FiKDB4ZjcpKSl7dmFyIF8weDNkZWU2MT10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4NDlmNjUxLF8weDMzMWJiMSk7aWYoXzB4M2RlZTYxJiYoXzB4M2RlZTYxW18weDJjNDNhYigweGRmKV0mJihfMHgzYWNhYzFbXzB4MmM0M2FiKDB4ZTUpXT0hMHgwKSxfMHgzZGVlNjFbXzB4MmM0M2FiKDB4MTA5KV0mJiFfMHgxMTZmMzkmJiFfMHg1NDQxMThbXzB4MmM0M2FiKDB4MTRlKV0pKXJldHVybiBfMHgzYWNhYzFbJ2dldHRlciddPSEweDAsdGhpc1tfMHgyYzQzYWIoMHg5ZildKF8weDNhY2FjMSxfMHg1NDQxMTgpLF8weDNhY2FjMTt9dmFyIF8weDU4N2EwMzt0cnl7XzB4NTg3YTAzPV8weDJkOTU2ZShfMHg0OWY2NTEsXzB4MzMxYmIxKTt9Y2F0Y2goXzB4NDk0ZjAyKXtyZXR1cm4gXzB4M2FjYWMxPXsnbmFtZSc6XzB4NDQyOTkxLCd0eXBlJzpfMHgyYzQzYWIoMHgxMDEpLCdlcnJvcic6XzB4NDk0ZjAyW18weDJjNDNhYigweDE0NSldfSx0aGlzW18weDJjNDNhYigweDlmKV0oXzB4M2FjYWMxLF8weDU0NDExOCksXzB4M2FjYWMxO312YXIgXzB4NTUwOGI2PXRoaXNbXzB4MmM0M2FiKDB4MTNlKV0oXzB4NTg3YTAzKSxfMHgzZGRiY2Q9dGhpc1tfMHgyYzQzYWIoMHgxMzcpXShfMHg1NTA4YjYpO2lmKF8weDNhY2FjMVtfMHgyYzQzYWIoMHgxMWUpXT1fMHg1NTA4YjYsXzB4M2RkYmNkKXRoaXNbXzB4MmM0M2FiKDB4OWYpXShfMHgzYWNhYzEsXzB4NTQ0MTE4LF8weDU4N2EwMyxmdW5jdGlvbigpe3ZhciBfMHhlNWJkYjA9XzB4MmM0M2FiO18weDNhY2FjMVsndmFsdWUnXT1fMHg1ODdhMDNbJ3ZhbHVlT2YnXSgpLCFfMHgxMTZmMzkmJl8weDJmYTI4NVtfMHhlNWJkYjAoMHhmYildKF8weDU1MDhiNixfMHgzYWNhYzEsXzB4NTQ0MTE4LHt9KTt9KTtlbHNle3ZhciBfMHgyMDQ0M2E9XzB4NTQ0MTE4W18weDJjNDNhYigweDk1KV0mJl8weDU0NDExOFtfMHgyYzQzYWIoMHgxMTEpXTxfMHg1NDQxMThbXzB4MmM0M2FiKDB4YzcpXSYmXzB4NTQ0MTE4W18weDJjNDNhYigweGZkKV1bXzB4MmM0M2FiKDB4ZWQpXShfMHg1ODdhMDMpPDB4MCYmXzB4NTUwOGI2IT09XzB4MmM0M2FiKDB4OTkpJiZfMHg1NDQxMThbXzB4MmM0M2FiKDB4ZTYpXTxfMHg1NDQxMThbXzB4MmM0M2FiKDB4YTcpXTtfMHgyMDQ0M2F8fF8weDU0NDExOFtfMHgyYzQzYWIoMHgxMTEpXTxfMHgxYjBmZDl8fF8weDExNmYzOT8odGhpc1tfMHgyYzQzYWIoMHg4MyldKF8weDNhY2FjMSxfMHg1ODdhMDMsXzB4NTQ0MTE4LF8weDExNmYzOXx8e30pLHRoaXNbXzB4MmM0M2FiKDB4ZDcpXShfMHg1ODdhMDMsXzB4M2FjYWMxKSk6dGhpc1tfMHgyYzQzYWIoMHg5ZildKF8weDNhY2FjMSxfMHg1NDQxMTgsXzB4NTg3YTAzLGZ1bmN0aW9uKCl7dmFyIF8weDQwOWJiNj1fMHgyYzQzYWI7XzB4NTUwOGI2PT09XzB4NDA5YmI2KDB4YWIpfHxfMHg1NTA4YjY9PT1fMHg0MDliYjYoMHg4YSl8fChkZWxldGUgXzB4M2FjYWMxWyd2YWx1ZSddLF8weDNhY2FjMVsnY2FwcGVkJ109ITB4MCk7fSk7fXJldHVybiBfMHgzYWNhYzE7fWZpbmFsbHl7XzB4NTQ0MTE4WydleHByZXNzaW9uc1RvRXZhbHVhdGUnXT1fMHgxOTBmNzgsXzB4NTQ0MTE4W18weDJjNDNhYigweDEzOSldPV8weDFiMGZkOSxfMHg1NDQxMThbXzB4MmM0M2FiKDB4ZDUpXT1fMHg1Yzc3Yzg7fX1bXzB4MTk1Mzc4KDB4ZmIpXShfMHg0M2UxZmIsXzB4NTBhYjFkLF8weDE2OGFlMixfMHgyMGIxOGMpe3ZhciBfMHg0YzNhOWU9XzB4MTk1Mzc4LF8weDIwMDU0YT1fMHgyMGIxOGNbXzB4NGMzYTllKDB4ZDgpXXx8XzB4MTY4YWUyW18weDRjM2E5ZSgweGQ4KV07aWYoKF8weDQzZTFmYj09PSdzdHJpbmcnfHxfMHg0M2UxZmI9PT1fMHg0YzNhOWUoMHhlYykpJiZfMHg1MGFiMWRbXzB4NGMzYTllKDB4MTQzKV0pe2xldCBfMHgyMWY0ZTQ9XzB4NTBhYjFkW18weDRjM2E5ZSgweDE0MyldW18weDRjM2E5ZSgweGYzKV07XzB4MTY4YWUyWydhbGxTdHJMZW5ndGgnXSs9XzB4MjFmNGU0LF8weDE2OGFlMltfMHg0YzNhOWUoMHg4NildPl8weDE2OGFlMltfMHg0YzNhOWUoMHgxMjMpXT8oXzB4NTBhYjFkW18weDRjM2E5ZSgweGRkKV09JycsZGVsZXRlIF8weDUwYWIxZFsndmFsdWUnXSk6XzB4MjFmNGU0Pl8weDIwMDU0YSYmKF8weDUwYWIxZFtfMHg0YzNhOWUoMHhkZCldPV8weDUwYWIxZFsndmFsdWUnXVsnc3Vic3RyJ10oMHgwLF8weDIwMDU0YSksZGVsZXRlIF8weDUwYWIxZFtfMHg0YzNhOWUoMHgxNDMpXSk7fX1bXzB4MTk1Mzc4KDB4MTVjKV0oXzB4NGZmZDg5KXt2YXIgXzB4NDY0ZGYwPV8weDE5NTM3ODtyZXR1cm4hIShfMHg0ZmZkODkmJl8weDFjMjkwOVtfMHg0NjRkZjAoMHgxMGEpXSYmdGhpc1tfMHg0NjRkZjAoMHhiOSldKF8weDRmZmQ4OSk9PT0nW29iamVjdFxcXFx4MjBNYXBdJyYmXzB4NGZmZDg5W18weDQ2NGRmMCgweGQxKV0pO31bXzB4MTk1Mzc4KDB4MTYwKV0oXzB4MjIxZGM4KXt2YXIgXzB4M2Q1OWI1PV8weDE5NTM3ODtpZihfMHgyMjFkYzhbXzB4M2Q1OWI1KDB4MTJmKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDIyMWRjODt2YXIgXzB4MWE0MWYyO3RyeXtfMHgxYTQxZjI9SlNPTlsnc3RyaW5naWZ5J10oJycrXzB4MjIxZGM4KTt9Y2F0Y2h7XzB4MWE0MWYyPSdcXFxceDIyJyt0aGlzW18weDNkNTliNSgweGI5KV0oXzB4MjIxZGM4KSsnXFxcXHgyMic7fXJldHVybiBfMHgxYTQxZjJbXzB4M2Q1OWI1KDB4MTJmKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgxYTQxZjI9XzB4MWE0MWYyW18weDNkNTliNSgweDE0YildKDB4MSxfMHgxYTQxZjJbJ2xlbmd0aCddLTB4Mik6XzB4MWE0MWYyPV8weDFhNDFmMlsncmVwbGFjZSddKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4M2Q1OWI1KDB4YTUpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHgzZDU5YjUoMHhhNSldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgxYTQxZjI7fVtfMHgxOTUzNzgoMHg5ZildKF8weDE0NWQxZixfMHgxNzBmMDYsXzB4NDVkM2FjLF8weDJkNzRjZSl7dmFyIF8weDExMmMzNj1fMHgxOTUzNzg7dGhpc1tfMHgxMTJjMzYoMHgxNTcpXShfMHgxNDVkMWYsXzB4MTcwZjA2KSxfMHgyZDc0Y2UmJl8weDJkNzRjZSgpLHRoaXNbXzB4MTEyYzM2KDB4ZDcpXShfMHg0NWQzYWMsXzB4MTQ1ZDFmKSx0aGlzW18weDExMmMzNigweGI2KV0oXzB4MTQ1ZDFmLF8weDE3MGYwNik7fVsnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDI5NWJjMixfMHgzODBmYjYpe3ZhciBfMHg1OWIxMzI9XzB4MTk1Mzc4O3RoaXNbXzB4NTliMTMyKDB4ZDQpXShfMHgyOTViYzIsXzB4MzgwZmI2KSx0aGlzW18weDU5YjEzMigweDExNyldKF8weDI5NWJjMixfMHgzODBmYjYpLHRoaXNbJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgyOTViYzIsXzB4MzgwZmI2KSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4Mjk1YmMyLF8weDM4MGZiNik7fVtfMHgxOTUzNzgoMHhkNCldKF8weDE0MWVlMixfMHgzZmUzMDgpe31bJ19zZXROb2RlUXVlcnlQYXRoJ10oXzB4M2VlMmFhLF8weDNiODk1MCl7fVtfMHgxOTUzNzgoMHhjMyldKF8weDE5NTk1OSxfMHgzOGQ2ZWUpe31bXzB4MTk1Mzc4KDB4ZDkpXShfMHgzZmViNDQpe3ZhciBfMHgxZDU0ZGI9XzB4MTk1Mzc4O3JldHVybiBfMHgzZmViNDQ9PT10aGlzW18weDFkNTRkYigweDEzNCldO31bJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDViZjFhMSxfMHhhOWY4MzEpe3ZhciBfMHgzM2YwMGY9XzB4MTk1Mzc4O3RoaXNbXzB4MzNmMDBmKDB4YzMpXShfMHg1YmYxYTEsXzB4YTlmODMxKSx0aGlzW18weDMzZjAwZigweDExNCldKF8weDViZjFhMSksXzB4YTlmODMxWydzb3J0UHJvcHMnXSYmdGhpc1tfMHgzM2YwMGYoMHhmYyldKF8weDViZjFhMSksdGhpc1tfMHgzM2YwMGYoMHgxMzEpXShfMHg1YmYxYTEsXzB4YTlmODMxKSx0aGlzW18weDMzZjAwZigweDg0KV0oXzB4NWJmMWExLF8weGE5ZjgzMSksdGhpc1tfMHgzM2YwMGYoMHgxMWEpXShfMHg1YmYxYTEpO31bJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgxOWFhZDEsXzB4MTI0ODIxKXt2YXIgXzB4MjZiMWE0PV8weDE5NTM3ODtsZXQgXzB4NTE1ZTlhO3RyeXtfMHgxYzI5MDlbXzB4MjZiMWE0KDB4MTJiKV0mJihfMHg1MTVlOWE9XzB4MWMyOTA5W18weDI2YjFhNCgweDEyYildW18weDI2YjFhNCgweDg1KV0sXzB4MWMyOTA5Wydjb25zb2xlJ11bXzB4MjZiMWE0KDB4ODUpXT1mdW5jdGlvbigpe30pLF8weDE5YWFkMSYmdHlwZW9mIF8weDE5YWFkMVtfMHgyNmIxYTQoMHhmMyldPT1fMHgyNmIxYTQoMHgxNWIpJiYoXzB4MTI0ODIxW18weDI2YjFhNCgweGYzKV09XzB4MTlhYWQxW18weDI2YjFhNCgweGYzKV0pO31jYXRjaHt9ZmluYWxseXtfMHg1MTVlOWEmJihfMHgxYzI5MDlbXzB4MjZiMWE0KDB4MTJiKV1bXzB4MjZiMWE0KDB4ODUpXT1fMHg1MTVlOWEpO31pZihfMHgxMjQ4MjFbXzB4MjZiMWE0KDB4MTFlKV09PT1fMHgyNmIxYTQoMHgxNWIpfHxfMHgxMjQ4MjFbXzB4MjZiMWE0KDB4MTFlKV09PT1fMHgyNmIxYTQoMHgxMDIpKXtpZihpc05hTihfMHgxMjQ4MjFbJ3ZhbHVlJ10pKV8weDEyNDgyMVsnbmFuJ109ITB4MCxkZWxldGUgXzB4MTI0ODIxW18weDI2YjFhNCgweDE0MyldO2Vsc2Ugc3dpdGNoKF8weDEyNDgyMVtfMHgyNmIxYTQoMHgxNDMpXSl7Y2FzZSBOdW1iZXJbXzB4MjZiMWE0KDB4YjcpXTpfMHgxMjQ4MjFbJ3Bvc2l0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHgxMjQ4MjFbXzB4MjZiMWE0KDB4MTQzKV07YnJlYWs7Y2FzZSBOdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ106XzB4MTI0ODIxW18weDI2YjFhNCgweGVmKV09ITB4MCxkZWxldGUgXzB4MTI0ODIxW18weDI2YjFhNCgweDE0MyldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4MjZiMWE0KDB4YjEpXShfMHgxMjQ4MjFbXzB4MjZiMWE0KDB4MTQzKV0pJiYoXzB4MTI0ODIxW18weDI2YjFhNCgweGQyKV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDEyNDgyMVsndHlwZSddPT09XzB4MjZiMWE0KDB4OTkpJiZ0eXBlb2YgXzB4MTlhYWQxW18weDI2YjFhNCgweGUxKV09PV8weDI2YjFhNCgweDEwYykmJl8weDE5YWFkMVtfMHgyNmIxYTQoMHhlMSldJiZfMHgxMjQ4MjFbXzB4MjZiMWE0KDB4ZTEpXSYmXzB4MTlhYWQxW18weDI2YjFhNCgweGUxKV0hPT1fMHgxMjQ4MjFbXzB4MjZiMWE0KDB4ZTEpXSYmKF8weDEyNDgyMVsnZnVuY05hbWUnXT1fMHgxOWFhZDFbXzB4MjZiMWE0KDB4ZTEpXSk7fVtfMHgxOTUzNzgoMHhiMSldKF8weDFjMTgxNSl7dmFyIF8weDJlMTFkMT1fMHgxOTUzNzg7cmV0dXJuIDB4MS9fMHgxYzE4MTU9PT1OdW1iZXJbXzB4MmUxMWQxKDB4MTJlKV07fVtfMHgxOTUzNzgoMHhmYyldKF8weDU1MjYxMCl7dmFyIF8weDM0MDZlMj1fMHgxOTUzNzg7IV8weDU1MjYxMFtfMHgzNDA2ZTIoMHgxMGQpXXx8IV8weDU1MjYxMFtfMHgzNDA2ZTIoMHgxMGQpXVsnbGVuZ3RoJ118fF8weDU1MjYxMFtfMHgzNDA2ZTIoMHgxMWUpXT09PSdhcnJheSd8fF8weDU1MjYxMFtfMHgzNDA2ZTIoMHgxMWUpXT09PSdNYXAnfHxfMHg1NTI2MTBbJ3R5cGUnXT09PV8weDM0MDZlMigweDkyKXx8XzB4NTUyNjEwWydwcm9wcyddW18weDM0MDZlMigweDgxKV0oZnVuY3Rpb24oXzB4MzYwMDIwLF8weDVkYjZjOCl7dmFyIF8weDQxNWVkNz1fMHgzNDA2ZTIsXzB4YmMyYTY2PV8weDM2MDAyMFtfMHg0MTVlZDcoMHhlMSldWyd0b0xvd2VyQ2FzZSddKCksXzB4M2Y5YjA2PV8weDVkYjZjOFtfMHg0MTVlZDcoMHhlMSldW18weDQxNWVkNygweDE2MSldKCk7cmV0dXJuIF8weGJjMmE2NjxfMHgzZjliMDY/LTB4MTpfMHhiYzJhNjY+XzB4M2Y5YjA2PzB4MToweDA7fSk7fVtfMHgxOTUzNzgoMHgxMzEpXShfMHgyZmYxY2EsXzB4M2Y1NTJhKXt2YXIgXzB4NzEyYmZiPV8weDE5NTM3ODtpZighKF8weDNmNTUyYVtfMHg3MTJiZmIoMHgxM2YpXXx8IV8weDJmZjFjYVtfMHg3MTJiZmIoMHgxMGQpXXx8IV8weDJmZjFjYVtfMHg3MTJiZmIoMHgxMGQpXVtfMHg3MTJiZmIoMHhmMyldKSl7Zm9yKHZhciBfMHhmNDM0Nzk9W10sXzB4MThmOWViPVtdLF8weDUyYzA5ND0weDAsXzB4MTViYmI5PV8weDJmZjFjYVtfMHg3MTJiZmIoMHgxMGQpXVsnbGVuZ3RoJ107XzB4NTJjMDk0PF8weDE1YmJiOTtfMHg1MmMwOTQrKyl7dmFyIF8weDE0ODEzND1fMHgyZmYxY2FbXzB4NzEyYmZiKDB4MTBkKV1bXzB4NTJjMDk0XTtfMHgxNDgxMzRbXzB4NzEyYmZiKDB4MTFlKV09PT1fMHg3MTJiZmIoMHg5OSk/XzB4ZjQzNDc5W18weDcxMmJmYigweDEwNCldKF8weDE0ODEzNCk6XzB4MThmOWViWydwdXNoJ10oXzB4MTQ4MTM0KTt9aWYoISghXzB4MThmOWViWydsZW5ndGgnXXx8XzB4ZjQzNDc5WydsZW5ndGgnXTw9MHgxKSl7XzB4MmZmMWNhWydwcm9wcyddPV8weDE4ZjllYjt2YXIgXzB4NDhmYWQzPXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weGY0MzQ3OX07dGhpc1tfMHg3MTJiZmIoMHhkNCldKF8weDQ4ZmFkMyxfMHgzZjU1MmEpLHRoaXNbXzB4NzEyYmZiKDB4YzMpXShfMHg0OGZhZDMsXzB4M2Y1NTJhKSx0aGlzW18weDcxMmJmYigweDExNCldKF8weDQ4ZmFkMyksdGhpc1tfMHg3MTJiZmIoMHhmMSldKF8weDQ4ZmFkMyxfMHgzZjU1MmEpLF8weDQ4ZmFkM1snaWQnXSs9J1xcXFx4MjBmJyxfMHgyZmYxY2FbJ3Byb3BzJ11bJ3Vuc2hpZnQnXShfMHg0OGZhZDMpO319fVtfMHgxOTUzNzgoMHg4NCldKF8weDFhMWFiZixfMHg1MmNhN2Epe31bXzB4MTk1Mzc4KDB4MTE0KV0oXzB4ZDQ1NTJiKXt9WydfaXNBcnJheSddKF8weDM4NWUwZil7dmFyIF8weDNjZTkzYz1fMHgxOTUzNzg7cmV0dXJuIEFycmF5W18weDNjZTkzYygweGM1KV0oXzB4Mzg1ZTBmKXx8dHlwZW9mIF8weDM4NWUwZj09XzB4M2NlOTNjKDB4MTRhKSYmdGhpc1tfMHgzY2U5M2MoMHhiOSldKF8weDM4NWUwZik9PT1fMHgzY2U5M2MoMHhiNSk7fVtfMHgxOTUzNzgoMHhmMSldKF8weDMxNmVjYSxfMHg0ZmYxZGYpe31bXzB4MTk1Mzc4KDB4MTFhKV0oXzB4NTdjNmZkKXt2YXIgXzB4MTJlZjQ0PV8weDE5NTM3ODtkZWxldGUgXzB4NTdjNmZkWydfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnXSxkZWxldGUgXzB4NTdjNmZkW18weDEyZWY0NCgweDE1MCldLGRlbGV0ZSBfMHg1N2M2ZmRbJ19oYXNNYXBPbkl0c1BhdGgnXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4MzllMGYxLF8weDQyODAyZSl7fX1sZXQgXzB4NDMyZjBiPW5ldyBfMHgzMTU3MDAoKSxfMHg0NTQzN2U9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4NDYwODAyPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4MTZkNWFiKF8weDIwYTVhZCxfMHg1YzBmN2YsXzB4NDA5ZGIwLF8weDJjNDI4MCxfMHgxODEwNGEsXzB4MzVlZWEyKXt2YXIgXzB4MzMyMjM0PV8weDE5NTM3ODtsZXQgXzB4MzQzMjhiLF8weDQ3MjFhMzt0cnl7XzB4NDcyMWEzPV8weDQyNWE3YigpLF8weDM0MzI4Yj1fMHg0YzFkNDZbXzB4NWMwZjdmXSwhXzB4MzQzMjhifHxfMHg0NzIxYTMtXzB4MzQzMjhiWyd0cyddPjB4MWY0JiZfMHgzNDMyOGJbXzB4MzMyMjM0KDB4OGUpXSYmXzB4MzQzMjhiW18weDMzMjIzNCgweDEyMildL18weDM0MzI4YltfMHgzMzIyMzQoMHg4ZSldPDB4NjQ/KF8weDRjMWQ0NltfMHg1YzBmN2ZdPV8weDM0MzI4Yj17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDQ3MjFhM30sXzB4NGMxZDQ2W18weDMzMjIzNCgweDllKV09e30pOl8weDQ3MjFhMy1fMHg0YzFkNDZbJ2hpdHMnXVsndHMnXT4weDMyJiZfMHg0YzFkNDZbJ2hpdHMnXVsnY291bnQnXSYmXzB4NGMxZDQ2W18weDMzMjIzNCgweDllKV1bXzB4MzMyMjM0KDB4MTIyKV0vXzB4NGMxZDQ2W18weDMzMjIzNCgweDllKV1bXzB4MzMyMjM0KDB4OGUpXTwweDY0JiYoXzB4NGMxZDQ2W18weDMzMjIzNCgweDllKV09e30pO2xldCBfMHgxMmY5ZjY9W10sXzB4NTdmNmExPV8weDM0MzI4YltfMHgzMzIyMzQoMHgxM2MpXXx8XzB4NGMxZDQ2W18weDMzMjIzNCgweDllKV1bXzB4MzMyMjM0KDB4MTNjKV0/XzB4NDYwODAyOl8weDQ1NDM3ZSxfMHgxYTc4ZjM9XzB4NWQ5YmE1PT57dmFyIF8weGFlY2UwNj1fMHgzMzIyMzQ7bGV0IF8weDQzOWY5MD17fTtyZXR1cm4gXzB4NDM5ZjkwWydwcm9wcyddPV8weDVkOWJhNVtfMHhhZWNlMDYoMHgxMGQpXSxfMHg0MzlmOTBbXzB4YWVjZTA2KDB4ZTgpXT1fMHg1ZDliYTVbJ2VsZW1lbnRzJ10sXzB4NDM5ZjkwWydzdHJMZW5ndGgnXT1fMHg1ZDliYTVbJ3N0ckxlbmd0aCddLF8weDQzOWY5MFtfMHhhZWNlMDYoMHgxMjMpXT1fMHg1ZDliYTVbXzB4YWVjZTA2KDB4MTIzKV0sXzB4NDM5ZjkwW18weGFlY2UwNigweGE3KV09XzB4NWQ5YmE1W18weGFlY2UwNigweGE3KV0sXzB4NDM5ZjkwW18weGFlY2UwNigweGM3KV09XzB4NWQ5YmE1WydhdXRvRXhwYW5kTWF4RGVwdGgnXSxfMHg0MzlmOTBbXzB4YWVjZTA2KDB4YzkpXT0hMHgxLF8weDQzOWY5MFsnbm9GdW5jdGlvbnMnXT0hXzB4NDBiYTkwLF8weDQzOWY5MFtfMHhhZWNlMDYoMHgxMzkpXT0weDEsXzB4NDM5ZjkwWydsZXZlbCddPTB4MCxfMHg0MzlmOTBbXzB4YWVjZTA2KDB4YTgpXT1fMHhhZWNlMDYoMHgxMTMpLF8weDQzOWY5MFsncm9vdEV4cHJlc3Npb24nXT1fMHhhZWNlMDYoMHhhNiksXzB4NDM5ZjkwW18weGFlY2UwNigweDk1KV09ITB4MCxfMHg0MzlmOTBbXzB4YWVjZTA2KDB4ZmQpXT1bXSxfMHg0MzlmOTBbXzB4YWVjZTA2KDB4ZTYpXT0weDAsXzB4NDM5ZjkwW18weGFlY2UwNigweDE0ZSldPSEweDAsXzB4NDM5ZjkwW18weGFlY2UwNigweDg2KV09MHgwLF8weDQzOWY5MFtfMHhhZWNlMDYoMHg4OCldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDQzOWY5MDt9O2Zvcih2YXIgXzB4Mjc3OGEwPTB4MDtfMHgyNzc4YTA8XzB4MTgxMDRhW18weDMzMjIzNCgweGYzKV07XzB4Mjc3OGEwKyspXzB4MTJmOWY2WydwdXNoJ10oXzB4NDMyZjBiW18weDMzMjIzNCgweDgzKV0oeyd0aW1lTm9kZSc6XzB4MjBhNWFkPT09XzB4MzMyMjM0KDB4MTIyKXx8dm9pZCAweDB9LF8weDE4MTA0YVtfMHgyNzc4YTBdLF8weDFhNzhmMyhfMHg1N2Y2YTEpLHt9KSk7aWYoXzB4MjBhNWFkPT09XzB4MzMyMjM0KDB4MTA4KSl7bGV0IF8weDE0OTViND1FcnJvcltfMHgzMzIyMzQoMHgxMGUpXTt0cnl7RXJyb3JbXzB4MzMyMjM0KDB4MTBlKV09MHgxLzB4MCxfMHgxMmY5ZjZbXzB4MzMyMjM0KDB4MTA0KV0oXzB4NDMyZjBiWydzZXJpYWxpemUnXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbJ3N0YWNrJ10sXzB4MWE3OGYzKF8weDU3ZjZhMSkseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4MzMyMjM0KDB4MTBlKV09XzB4MTQ5NWI0O319cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg0MGZjNmIsJ2FyZ3MnOlt7J3RzJzpfMHg0MDlkYjAsJ3Nlc3Npb24nOl8weDJjNDI4MCwnYXJncyc6XzB4MTJmOWY2LCdpZCc6XzB4NWMwZjdmLCdjb250ZXh0JzpfMHgzNWVlYTJ9XX07fWNhdGNoKF8weDlmMDY3Yil7cmV0dXJueydtZXRob2QnOl8weDMzMjIzNCgweGU0KSwndmVyc2lvbic6XzB4NDBmYzZiLCdhcmdzJzpbeyd0cyc6XzB4NDA5ZGIwLCdzZXNzaW9uJzpfMHgyYzQyODAsJ2FyZ3MnOlt7J3R5cGUnOl8weDMzMjIzNCgweDEwMSksJ2Vycm9yJzpfMHg5ZjA2N2ImJl8weDlmMDY3YltfMHgzMzIyMzQoMHgxNDUpXX1dLCdpZCc6XzB4NWMwZjdmLCdjb250ZXh0JzpfMHgzNWVlYTJ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDM0MzI4YiYmXzB4NDcyMWEzKXtsZXQgXzB4NTkzZDNmPV8weDQyNWE3YigpO18weDM0MzI4YltfMHgzMzIyMzQoMHg4ZSldKyssXzB4MzQzMjhiWyd0aW1lJ10rPV8weDkzMzgyKF8weDQ3MjFhMyxfMHg1OTNkM2YpLF8weDM0MzI4YlsndHMnXT1fMHg1OTNkM2YsXzB4NGMxZDQ2WydoaXRzJ11bXzB4MzMyMjM0KDB4OGUpXSsrLF8weDRjMWQ0NltfMHgzMzIyMzQoMHg5ZSldWyd0aW1lJ10rPV8weDkzMzgyKF8weDQ3MjFhMyxfMHg1OTNkM2YpLF8weDRjMWQ0NltfMHgzMzIyMzQoMHg5ZSldWyd0cyddPV8weDU5M2QzZiwoXzB4MzQzMjhiWydjb3VudCddPjB4MzJ8fF8weDM0MzI4YltfMHgzMzIyMzQoMHgxMjIpXT4weDY0KSYmKF8weDM0MzI4YltfMHgzMzIyMzQoMHgxM2MpXT0hMHgwKSwoXzB4NGMxZDQ2W18weDMzMjIzNCgweDllKV1bJ2NvdW50J10+MHgzZTh8fF8weDRjMWQ0NltfMHgzMzIyMzQoMHg5ZSldWyd0aW1lJ10+MHgxMmMpJiYoXzB4NGMxZDQ2W18weDMzMjIzNCgweDllKV1bXzB4MzMyMjM0KDB4MTNjKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MTZkNWFiO30oKF8weDEzZDE2MyxfMHg0YjQwNTgsXzB4M2U1NGY4LF8weDMzYWJjNCxfMHgzZjE0ZTQsXzB4NDQ3MzZkLF8weDJjMzNiNyxfMHgzMTJhNGQsXzB4MjA0MDdhLF8weDI2YjUzNCk9Pnt2YXIgXzB4MTllMTI3PV8weDQwNmNmMztpZihfMHgxM2QxNjNbJ19jb25zb2xlX25pbmphJ10pcmV0dXJuIF8weDEzZDE2M1snX2NvbnNvbGVfbmluamEnXTtpZighSihfMHgxM2QxNjMsXzB4MzEyYTRkLF8weDNmMTRlNCkpcmV0dXJuIF8weDEzZDE2M1tfMHgxOWUxMjcoMHgxNWUpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MTNkMTYzW18weDE5ZTEyNygweDE1ZSldO2xldCBfMHg0MzE0NGE9VyhfMHgxM2QxNjMpLF8weDM1Yjk3Yz1fMHg0MzE0NGFbJ2VsYXBzZWQnXSxfMHg2MTgyNGU9XzB4NDMxNDRhW18weDE5ZTEyNygweDE2NSldLF8weDI5OTFmNT1fMHg0MzE0NGFbXzB4MTllMTI3KDB4ZTcpXSxfMHg1NDVkMmE9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg1ZGVkMTE9WShfMHgxM2QxNjMsXzB4MjA0MDdhLF8weDU0NWQyYSxfMHg0NDczNmQpLF8weDljM2E1OT1fMHgyYWYyYjI9PntfMHg1NDVkMmFbJ3RzJ11bXzB4MmFmMmIyXT1fMHg2MTgyNGUoKTt9LF8weDRiN2QxMz0oXzB4NGJiZTc5LF8weDJlM2QzYSk9Pnt2YXIgXzB4MTYyOTQ2PV8weDE5ZTEyNztsZXQgXzB4MWE5MWZjPV8weDU0NWQyYVsndHMnXVtfMHgyZTNkM2FdO2lmKGRlbGV0ZSBfMHg1NDVkMmFbJ3RzJ11bXzB4MmUzZDNhXSxfMHgxYTkxZmMpe2xldCBfMHg2NzAzZjk9XzB4MzViOTdjKF8weDFhOTFmYyxfMHg2MTgyNGUoKSk7XzB4MmNkMTMxKF8weDVkZWQxMShfMHgxNjI5NDYoMHgxMjIpLF8weDRiYmU3OSxfMHgyOTkxZjUoKSxfMHgyODRlNGEsW18weDY3MDNmOV0sXzB4MmUzZDNhKSk7fX0sXzB4ZDVjZjkzPV8weDU2OGJmNT0+XzB4NGYzOWYwPT57dmFyIF8weDM0MDEzNz1fMHgxOWUxMjc7dHJ5e18weDljM2E1OShfMHg0ZjM5ZjApLF8weDU2OGJmNShfMHg0ZjM5ZjApO31maW5hbGx5e18weDEzZDE2M1tfMHgzNDAxMzcoMHgxMmIpXVsndGltZSddPV8weDU2OGJmNTt9fSxfMHhjNjRjODk9XzB4NDNlYzExPT5fMHg1ZDQwYTU9Pnt2YXIgXzB4MzVhNjdlPV8weDE5ZTEyNzt0cnl7bGV0IFtfMHgyNTlkZWIsXzB4NDY5Y2ViXT1fMHg1ZDQwYTVbXzB4MzVhNjdlKDB4YWUpXSgnOmxvZ1BvaW50SWQ6Jyk7XzB4NGI3ZDEzKF8weDQ2OWNlYixfMHgyNTlkZWIpLF8weDQzZWMxMShfMHgyNTlkZWIpO31maW5hbGx5e18weDEzZDE2M1tfMHgzNWE2N2UoMHgxMmIpXVtfMHgzNWE2N2UoMHhiZildPV8weDQzZWMxMTt9fTtfMHgxM2QxNjNbJ19jb25zb2xlX25pbmphJ109eydjb25zb2xlTG9nJzooXzB4NGEwMjk0LF8weDRjOGExMyk9Pnt2YXIgXzB4MmFkYTA0PV8weDE5ZTEyNztfMHgxM2QxNjNbXzB4MmFkYTA0KDB4MTJiKV1bXzB4MmFkYTA0KDB4ZTQpXVsnbmFtZSddIT09XzB4MmFkYTA0KDB4ZGUpJiZfMHgyY2QxMzEoXzB4NWRlZDExKF8weDJhZGEwNCgweGU0KSxfMHg0YTAyOTQsXzB4Mjk5MWY1KCksXzB4Mjg0ZTRhLF8weDRjOGExMykpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDM4MjE2NCxfMHgzYjJiMWEpPT57dmFyIF8weDJmNjg2ZT1fMHgxOWUxMjc7XzB4MTNkMTYzWydjb25zb2xlJ11bJ2xvZyddW18weDJmNjg2ZSgweGUxKV0hPT1fMHgyZjY4NmUoMHgxNTQpJiZfMHgyY2QxMzEoXzB4NWRlZDExKCd0cmFjZScsXzB4MzgyMTY0LF8weDI5OTFmNSgpLF8weDI4NGU0YSxfMHgzYjJiMWEpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MTg2MzBlPV8weDE5ZTEyNztfMHgxM2QxNjNbXzB4MTg2MzBlKDB4MTJiKV1bXzB4MTg2MzBlKDB4MTIyKV09XzB4ZDVjZjkzKF8weDEzZDE2M1tfMHgxODYzMGUoMHgxMmIpXVsndGltZSddKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4MTBlMWJjPV8weDE5ZTEyNztfMHgxM2QxNjNbXzB4MTBlMWJjKDB4MTJiKV1bJ3RpbWVFbmQnXT1fMHhjNjRjODkoXzB4MTNkMTYzWydjb25zb2xlJ11bXzB4MTBlMWJjKDB4YmYpXSk7fSwnYXV0b0xvZyc6KF8weGEzZjBlNCxfMHhjZjdjMDEpPT57XzB4MmNkMTMxKF8weDVkZWQxMSgnbG9nJyxfMHhjZjdjMDEsXzB4Mjk5MWY1KCksXzB4Mjg0ZTRhLFtfMHhhM2YwZTRdKSk7fSwnYXV0b0xvZ01hbnknOihfMHgzOGIzZGIsXzB4NmVlNWJlKT0+e3ZhciBfMHgzMTFiYWQ9XzB4MTllMTI3O18weDJjZDEzMShfMHg1ZGVkMTEoXzB4MzExYmFkKDB4ZTQpLF8weDM4YjNkYixfMHgyOTkxZjUoKSxfMHgyODRlNGEsXzB4NmVlNWJlKSk7fSwnYXV0b1RyYWNlJzooXzB4NTcyYmRkLF8weDI4ZjNkOSk9Pnt2YXIgXzB4MTFkZGM3PV8weDE5ZTEyNztfMHgyY2QxMzEoXzB4NWRlZDExKF8weDExZGRjNygweDEwOCksXzB4MjhmM2Q5LF8weDI5OTFmNSgpLF8weDI4NGU0YSxbXzB4NTcyYmRkXSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHg3NGI5MTEsXzB4MTAzNDUzKT0+e3ZhciBfMHgzOGE5ZTU9XzB4MTllMTI3O18weDJjZDEzMShfMHg1ZGVkMTEoXzB4MzhhOWU1KDB4MTA4KSxfMHg3NGI5MTEsXzB4Mjk5MWY1KCksXzB4Mjg0ZTRhLF8weDEwMzQ1MykpO30sJ2F1dG9UaW1lJzooXzB4YzhmNjM2LF8weDQ3OTQwMyxfMHg1ODU0ODYpPT57XzB4OWMzYTU5KF8weDU4NTQ4Nik7fSwnYXV0b1RpbWVFbmQnOihfMHgxMWZkMmEsXzB4M2I4MjQ0LF8weDU4ODQyOCk9PntfMHg0YjdkMTMoXzB4M2I4MjQ0LF8weDU4ODQyOCk7fSwnY292ZXJhZ2UnOl8weDU0Yjc0Mz0+e18weDJjZDEzMSh7J21ldGhvZCc6J2NvdmVyYWdlJywndmVyc2lvbic6XzB4NDQ3MzZkLCdhcmdzJzpbeydpZCc6XzB4NTRiNzQzfV19KTt9fTtsZXQgXzB4MmNkMTMxPWIoXzB4MTNkMTYzLF8weDRiNDA1OCxfMHgzZTU0ZjgsXzB4MzNhYmM0LF8weDNmMTRlNCxfMHgyNmI1MzQpLF8weDI4NGU0YT1fMHgxM2QxNjNbXzB4MTllMTI3KDB4MTE4KV07cmV0dXJuIF8weDEzZDE2M1snX2NvbnNvbGVfbmluamEnXTt9KShnbG9iYWxUaGlzLF8weDQwNmNmMygweDExMiksXzB4NDA2Y2YzKDB4MTM1KSxfMHg0MDZjZjMoMHgxMWMpLCd3ZWJwYWNrJyxfMHg0MDZjZjMoMHgxNDIpLCcxNzA2MjcxNTE2MjMzJyxfMHg0MDZjZjMoMHhhMyksXzB4NDA2Y2YzKDB4ZTkpLF8weDQwNmNmMygweDE1MikpO1wiKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9