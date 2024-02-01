/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* div#contain{
    border: 1px solid black;
} */
div.projectDiv{
    border: 2px solid black;
    font-size: x-large;
    font-family: cursive, Georgia, 'Times New Roman', Times, serif;
}
div.taskDiv{
    border: 1px solid green;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: large;
}
body{
    background-color: rgba(222, 184, 135, 0.548);
}

button{
    background-color: rgb(49, 135, 235);
    color: white;
    border-radius: 4px;
    border-style: none;
    padding-top:  5px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 4px;
}
button:hover{
    cursor: pointer;
    background-color: rgb(10, 116, 236);


}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;GAEG;AACH;IACI,uBAAuB;IACvB,kBAAkB;IAClB,8DAA8D;AAClE;AACA;IACI,uBAAuB;IACvB,qDAAqD;IACrD,gBAAgB;AACpB;AACA;IACI,4CAA4C;AAChD;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,eAAe;IACf,mCAAmC;;;AAGvC","sourcesContent":["/* div#contain{\n    border: 1px solid black;\n} */\ndiv.projectDiv{\n    border: 2px solid black;\n    font-size: x-large;\n    font-family: cursive, Georgia, 'Times New Roman', Times, serif;\n}\ndiv.taskDiv{\n    border: 1px solid green;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: large;\n}\nbody{\n    background-color: rgba(222, 184, 135, 0.548);\n}\n\nbutton{\n    background-color: rgb(49, 135, 235);\n    color: white;\n    border-radius: 4px;\n    border-style: none;\n    padding-top:  5px;\n    padding-bottom: 5px;\n    padding-left: 8px;\n    padding-right: 8px;\n    margin: 4px;\n}\nbutton:hover{\n    cursor: pointer;\n    background-color: rgb(10, 116, 236);\n\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/addFunc.js":
/*!************************!*\
  !*** ./src/addFunc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   projectArray: () => (/* binding */ projectArray),
/* harmony export */   projectFunc: () => (/* binding */ projectFunc)
/* harmony export */ });
/* harmony import */ var _createtask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtask.js */ "./src/createtask.js");


let projectArray = {};
let projectFunc = {};

function addProject(something){
    projectArray[something] = [];
    projectFunc[something] = function(a,b,c,d){projectArray[something].push( new _createtask_js__WEBPACK_IMPORTED_MODULE_0__.create(a,b,c,d))}
}

function deleteTask(projectname,indexnumber){
    

    projectArray[projectname].splice(indexnumber,1);
    
}



/***/ }),

/***/ "./src/createtask.js":
/*!***************************!*\
  !*** ./src/createtask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInHours.mjs");



class create{

    constructor(title,description,duedate,priority){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }

    
    editt(){
        this.title = prompt('Enter new title here, or press ok ',`${this.title}`);
        this.description = prompt('Enter new description here, or press ok ',`${this.description}`);
        this.duedate = prompt('Enter new date here, or press ok ',`${this.duedate}`);
        
        this.priority = prompt('Enter new priority here, or press ok ',`${this.priority}`);
        
    }
    time(t = this.duedate){
        let hoursleft = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.differenceInHours)(t,new Date());
        alert(`Hey you have exactly ${hoursleft/24} days or ${hoursleft} hours left to do this task! `)

    }
    


}





/***/ }),

/***/ "./src/domstuff.js":
/*!*************************!*\
  !*** ./src/domstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMcreate: () => (/* binding */ DOMcreate)
/* harmony export */ });
/* harmony import */ var _addFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addFunc.js */ "./src/addFunc.js");





function DOMcreate(){
    let maindiv = document.getElementById('contain');
    let heading = document.createElement('h1');
    heading.innerHTML = 'toDoList';
    heading.style.textAlign = 'center';
    heading.style.textDecoration = 'underline'
    maindiv.appendChild(heading)

    ///creating a button to add a new project
    let projectButton = document.createElement('button');
    projectButton.textContent = 'ADD PROJECT +';
    maindiv.appendChild(projectButton);
    /////////////////////////////////////////

    projectButton.addEventListener('click',function(){
        let projectName = prompt('Type the name of the project - ');
        
        
        
        (0,_addFunc_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectName);
        ///saving data to local storage///
        function local2(){
            let storeProjectArray; 
            storeProjectArray = JSON.stringify(_addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName])
            localStorage.setItem(projectName,storeProjectArray)
            
        }
        local2();
        //////////////////////////////////

        let projectDiv = document.createElement('div');
        projectDiv.setAttribute("class", "projectDiv");
        projectDiv.innerHTML = `${projectName}`;
        maindiv.appendChild(projectDiv);
        let taskButton = document.createElement('button');
        taskButton.textContent = 'ADD TASK +';
        projectDiv.appendChild(taskButton);

        //////////////////////////////////////////////////////////////////////////////////////
        taskButton.addEventListener('click',function(){
            let titleValue = prompt('write the title');
            let descriptionValue = prompt('write the description here');
            let dueDateValue = prompt('write the due date here','format - new Date(year,month,day,hour,minutes');
            dueDateValue = eval(dueDateValue);
            let priorityValue = prompt('write the priority here - high,medium,low');
            _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectFunc[projectName](titleValue,descriptionValue,dueDateValue,priorityValue);
            let currenttask = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName].length - 1;
            ///saving data to local storage///
            
            local2();
            //////////////////////////////////
            let titlevar = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].title;
            let duedatevar  = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].duedate;
            let desvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].description;
            let priorityvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].priority;

            
            let taskDiv = document.createElement('div');

            ///applying color based on priority
            if(priorityvar=='high'){taskDiv.style.backgroundColor = '#f30606a9'}
            else if(priorityvar=='medium'){taskDiv.style.backgroundColor = '#ffff009f'}
            else if (priorityvar=='low'){taskDiv.style.backgroundColor = '#00800096'}
            ////////////////////////////////////

            taskDiv.setAttribute("class", "taskDiv");
            taskDiv.innerHTML = ` Title - ${titlevar} <br> Due - ${duedatevar} <br>`;
            ///code for the delete button///
            let deletebutton = document.createElement('button');
            deletebutton.textContent = 'Delete';
            
            deletebutton.addEventListener('click',function(){
                (0,_addFunc_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(projectName,currenttask);
                taskDiv.remove();

                ///saving data to local storage///
                local2()
                //////////////////////////////////

            });
            ///code for the time button///
            let timebutton = document.createElement('button');
            timebutton.textContent = 'Time';
            
            timebutton.addEventListener('click', function(){
                _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].time();
             })
             
            ///code for the edit button///
            let editbutton = document.createElement('button');
            editbutton.textContent = 'Edit';
            
            editbutton.addEventListener('click', function(){
                _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].editt();

                
                titlevar = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].title;
                duedatevar  = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].duedate;
                desvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].description;
                priorityvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[projectName][currenttask].priority;
                ///saving data to local storage///
                local2()
                //////////////////////////////////
                
                taskDiv.innerHTML = ` Title - ${titlevar} <br>Due - ${duedatevar} <br> `;
                ///applying color based on priority
                if(priorityvar=='high'){taskDiv.style.backgroundColor = '#f30606a9'}
                else if(priorityvar=='medium'){taskDiv.style.backgroundColor = '#ffff009f'}
                else if (priorityvar=='low'){taskDiv.style.backgroundColor = '00800088'}
                /////////////////////////////////// 
                taskDiv.appendChild(deletebutton);
                taskDiv.appendChild(timebutton);
                taskDiv.appendChild(editbutton);
                taskDiv.appendChild(expandbutton);
                })
                ///code for the expand button///
             let expandbutton = document.createElement('button');
             expandbutton.textContent = 'Expand';
             
             expandbutton.addEventListener('click', function(){
                taskDiv.innerHTML = `Title - ${titlevar} <br> Due - ${duedatevar} <br> Details - ${desvar} <br> Priority - ${priorityvar}`
                taskDiv.appendChild(deletebutton);
                taskDiv.appendChild(timebutton);
                taskDiv.appendChild(editbutton);
             })
            //////////////////////////////
            taskDiv.appendChild(deletebutton);
            taskDiv.appendChild(timebutton);
            taskDiv.appendChild(editbutton);
            taskDiv.appendChild(expandbutton);
            projectDiv.appendChild(taskDiv);



        })
        /////////////////////////////////////////////////////////////////////////////////////////
    })
}




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retriever: () => (/* binding */ retriever)
/* harmony export */ });
/* harmony import */ var _createtask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtask.js */ "./src/createtask.js");
/* harmony import */ var _addFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addFunc.js */ "./src/addFunc.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInHours.mjs");




 
 
 let retriever = function (){
    
    if(localStorage.length == 0){return}
    else{
        let containerdiv = document.getElementById('contain')

        for(let i = 0;i< localStorage.length;i++){

        let keyname = localStorage.key(i);
        let value =   JSON.parse(localStorage.getItem(keyname));
        _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname] = value;
        function local3(){
            let storeProjectArray; 
            storeProjectArray = JSON.stringify(_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname])
            localStorage.setItem(keyname,storeProjectArray)
            
        }
            if (value.length == 0){
                let projectDiv = document.createElement('div');
                projectDiv.setAttribute("class", "projectDiv");
                projectDiv.innerHTML = `${keyname}`;
                containerdiv.appendChild(projectDiv);

                let taskButton = document.createElement('button');
                taskButton.textContent = 'ADD TASK +';
                projectDiv.appendChild(taskButton);

                taskButton.addEventListener('click',function(){
                     let titleValue = prompt('write the title');
                     let descriptionValue = prompt('write the description here');
                     let dueDateValue = prompt('write the due date here','format - new Date(year,month,day,hour,minutes');
                     dueDateValue = eval(dueDateValue);
                     let priorityValue = prompt('write the priority here - high,medium,low');
                     _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectFunc[keyname] = function(a,b,c,d){_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname].push( new _createtask_js__WEBPACK_IMPORTED_MODULE_0__.create(a,b,c,d))}
                     _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectFunc[keyname](titleValue,descriptionValue,dueDateValue,priorityValue);
                     local3()

                     let currenttask = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname].length - 1;
                     let titlevar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].title;
                     let duedatevar  = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].duedate;
                     let desvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].description;
                     let priorityvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].priority;
                     let taskDiv = document.createElement('div');

                     ///applying color based on priority
                     if(priorityvar=='high'){taskDiv.style.backgroundColor = '#f30606a9'}
                     else if(priorityvar=='medium'){taskDiv.style.backgroundColor = '#ffff009f'}
                     else if (priorityvar=='low'){taskDiv.style.backgroundColor = '#00800096'}
                     ////////////////////////////////////
                     taskDiv.setAttribute("class", "taskDiv");
                     taskDiv.innerHTML = ` Title - ${titlevar} <br> Due - ${duedatevar} <br>`;
                      ///code for the delete button///
                     let deletebutton = document.createElement('button');
                     deletebutton.textContent = 'Delete';
            
                     deletebutton.addEventListener('click',function(){
                     (0,_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(keyname,currenttask);
                     taskDiv.remove();
                     local3()
                     })
                     /////////////////////////////////

                     ///code for the time button///
                     let timebutton = document.createElement('button');
                     timebutton.textContent = 'Time';
                     
                     timebutton.addEventListener('click', function(){
                     _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].time();
                     })
                     ////////////////////////////////////////////////
                     ///code for the edit button///
                     let editbutton = document.createElement('button');
                     editbutton.textContent = 'Edit';
            
                     editbutton.addEventListener('click', function(){
                     _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].editt();


                
                     titlevar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].title;
                     duedatevar  = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].duedate;
                     desvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].description;
                     priorityvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].priority;
                     local3()
                     taskDiv.innerHTML = ` Title - ${titlevar} <br>Due - ${duedatevar} <br> `;
                     ///applying color based on priority
                     if(priorityvar=='high'){taskDiv.style.backgroundColor = '#f30606a9'}
                     else if(priorityvar=='medium'){taskDiv.style.backgroundColor = '#ffff009f'}
                     else if (priorityvar=='low'){taskDiv.style.backgroundColor = '00800088'}
                     /////////////////////////////////// 
                     taskDiv.appendChild(deletebutton);
                     taskDiv.appendChild(timebutton);
                     taskDiv.appendChild(editbutton);
                     taskDiv.appendChild(expandbutton);
                     })
                     ///code for the expand button///
                     let expandbutton = document.createElement('button');
                     expandbutton.textContent = 'Expand';
             
                     expandbutton.addEventListener('click', function(){
                     taskDiv.innerHTML = `Title - ${titlevar} <br> Due - ${duedatevar} <br> Details - ${desvar} <br> Priority - ${priorityvar}`
                     taskDiv.appendChild(deletebutton);
                     taskDiv.appendChild(timebutton);
                     taskDiv.appendChild(editbutton);
                     })

                     taskDiv.appendChild(deletebutton);
                     taskDiv.appendChild(timebutton);
                     taskDiv.appendChild(editbutton);
                     taskDiv.appendChild(expandbutton);
                     projectDiv.appendChild(taskDiv);


            })}



            else if(value.length > 0){
                let totalitems = value.length;






                ///code to add project div and task button///
                let projectDiv = document.createElement('div');
                projectDiv.setAttribute("class", "projectDiv");
                projectDiv.innerHTML = `${keyname}`;
                containerdiv.appendChild(projectDiv);

                let taskButton = document.createElement('button');
                taskButton.textContent = 'ADD TASK +';
                projectDiv.appendChild(taskButton);

                taskButton.addEventListener('click',function(){
                     let titleValue = prompt('write the title');
                     let descriptionValue = prompt('write the description here');
                     let dueDateValue = prompt('write the due date here','format - new Date(year,month,day,hour,minutes');
                     dueDateValue = eval(dueDateValue);
                     let priorityValue = prompt('write the priority here - high,medium,low');
                     _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectFunc[keyname] = function(a,b,c,d){_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname].push( new _createtask_js__WEBPACK_IMPORTED_MODULE_0__.create(a,b,c,d))}
                     _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectFunc[keyname](titleValue,descriptionValue,dueDateValue,priorityValue);
                     local3()
                     let currenttask = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname].length - 1;
                     let titlevar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].title;
                     let duedatevar  = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].duedate;
                     let desvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].description;
                     let priorityvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].priority;
                     let taskDiv = document.createElement('div');

                     ///applying color based on priority
                     if(priorityvar=='high'){taskDiv.style.backgroundColor = '#f30606a9'}
                     else if(priorityvar=='medium'){taskDiv.style.backgroundColor = '#ffff009f'}
                     else if (priorityvar=='low'){taskDiv.style.backgroundColor = '#00800096'}
                     ////////////////////////////////////
                     taskDiv.setAttribute("class", "taskDiv");
                     taskDiv.innerHTML = ` Title - ${titlevar} <br> Due - ${duedatevar} <br>`;
                      ///code for the delete button///
                     let deletebutton = document.createElement('button');
                     deletebutton.textContent = 'Delete';
            
                     deletebutton.addEventListener('click',function(){
                     (0,_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(keyname,currenttask);
                     taskDiv.remove();
                     local3()
                     })
                     /////////////////////////////////

                     ///code for the time button///
                     let timebutton = document.createElement('button');
                     timebutton.textContent = 'Time';
                     
                     timebutton.addEventListener('click', function(){
                     _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].time();
                     })
                     ////////////////////////////////////////////////
                     ///code for the edit button///
                     let editbutton = document.createElement('button');
                     editbutton.textContent = 'Edit';
            
                     editbutton.addEventListener('click', function(){
                     _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].editt();

                
                     titlevar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].title;
                     duedatevar  = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].duedate;
                     desvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].description;
                     priorityvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][currenttask].priority;
                     local3()
                     taskDiv.innerHTML = ` Title - ${titlevar} <br>Due - ${duedatevar} <br> `;
                     ///applying color based on priority
                     if(priorityvar=='high'){taskDiv.style.backgroundColor = '#f30606a9'}
                     else if(priorityvar=='medium'){taskDiv.style.backgroundColor = '#ffff009f'}
                     else if (priorityvar=='low'){taskDiv.style.backgroundColor = '00800088'}
                     /////////////////////////////////// 
                     taskDiv.appendChild(deletebutton);
                     taskDiv.appendChild(timebutton);
                     taskDiv.appendChild(editbutton);
                     taskDiv.appendChild(expandbutton);
                     })
                     ///code for the expand button///
                     let expandbutton = document.createElement('button');
                     expandbutton.textContent = 'Expand';
             
                     expandbutton.addEventListener('click', function(){
                     taskDiv.innerHTML = `Title - ${titlevar} <br> Due - ${duedatevar} <br> Details - ${desvar} <br> Priority - ${priorityvar}`
                     taskDiv.appendChild(deletebutton);
                     taskDiv.appendChild(timebutton);
                     taskDiv.appendChild(editbutton);
                     })

                     taskDiv.appendChild(deletebutton);
                     taskDiv.appendChild(timebutton);
                     taskDiv.appendChild(editbutton);
                     taskDiv.appendChild(expandbutton);
                     projectDiv.appendChild(taskDiv);
                    })
                /////////////////////////////////////////////








                for (let i=0;i<totalitems;i++){
                    let titlevar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].title;
                    let duedatevar  = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].duedate;
                    let desvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].description;
                    let priorityvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].priority;
                    let taskDiv = document.createElement('div');
                     ///applying color based on priority
                     if(priorityvar=='high'){taskDiv.style.backgroundColor = '#f30606a9'}
                     else if(priorityvar=='medium'){taskDiv.style.backgroundColor = '#ffff009f'}
                     else if (priorityvar=='low'){taskDiv.style.backgroundColor = '#00800096'}
                     ////////////////////////////////////
                     taskDiv.setAttribute("class", "taskDiv");
                     taskDiv.innerHTML = ` Title - ${titlevar} <br> Due - ${duedatevar} <br>`;

                                           ///code for the delete button///
                                           let deletebutton = document.createElement('button');
                                           deletebutton.textContent = 'Delete';
                                  
                                           deletebutton.addEventListener('click',function(){
                                            (0,_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(keyname,i);
                                            taskDiv.remove();
                                            local3()
                                           })
                                           /////////////////////////////////
                                           ///code for the time button///
                                           let timebutton = document.createElement('button');
                                           timebutton.textContent = 'Time';
                     
                                           timebutton.addEventListener('click', function(){
                                            let hoursleft = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInHours)(duedatevar,new Date());
                                            alert(`Hey you have exactly ${hoursleft/24} days or ${hoursleft} hours left to do this task! `)
                                           })
                                           ////////////////////////////////////////////////
                                           ///code for the edit button///
                                           let editbutton = document.createElement('button');
                                           editbutton.textContent = 'Edit';
            
                                           editbutton.addEventListener('click', function(){
                                            _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].title = prompt('Enter new title here, or press ok ',`${_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].title}`);
                                            _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].description = prompt('Enter new title here, or press ok ',`${_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].description}`);
                                            _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].duedate = prompt('Enter new title here, or press ok ',`${_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].duedate}`);
                                            _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].priority = prompt('Enter new title here, or press ok ',`${_addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].priority}`);
                                            titlevar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].title;
                                            duedatevar  = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].duedate;
                                            desvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].description;
                                            priorityvar = _addFunc_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[keyname][i].priority;
                                            local3()
                                            ///applying color based on priority
                                            if(priorityvar=='high'){taskDiv.style.backgroundColor = '#f30606a9'}
                                            else if(priorityvar=='medium'){taskDiv.style.backgroundColor = '#ffff009f'}
                                            else if (priorityvar=='low'){taskDiv.style.backgroundColor = '#00800096'}
                                            ////////////////////////////////////
                                            taskDiv.setAttribute("class", "taskDiv");
                                            taskDiv.innerHTML = ` Title - ${titlevar} <br> Due - ${duedatevar} <br>`;
                                            taskDiv.appendChild(deletebutton);
                                            taskDiv.appendChild(timebutton);
                                            taskDiv.appendChild(editbutton);
                                            taskDiv.appendChild(expandbutton);

                                            })
                                            //////////////////////////////
                                            ///code for the expand button///
                                            let expandbutton = document.createElement('button');
                                            expandbutton.textContent = 'Expand';
             
                                            expandbutton.addEventListener('click', function(){
                                             taskDiv.innerHTML = `Title - ${titlevar} <br> Due - ${duedatevar} <br> Details - ${desvar} <br> Priority - ${priorityvar}`
                                             taskDiv.appendChild(deletebutton);
                                             taskDiv.appendChild(timebutton);
                                             taskDiv.appendChild(editbutton);
                                             })
                                            /////////////////////////////////





                     taskDiv.appendChild(deletebutton);
                     taskDiv.appendChild(timebutton);
                     taskDiv.appendChild(editbutton);
                     taskDiv.appendChild(expandbutton);
                     projectDiv.appendChild(taskDiv);

                }

            }
        }

    }
}


 


/***/ }),

/***/ "./node_modules/date-fns/_lib/getRoundingMethod.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getRoundingMethod.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)
/* harmony export */ });
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/differenceInHours.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/differenceInHours.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInHours: () => (/* binding */ differenceInHours)
/* harmony export */ });
/* harmony import */ var _lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/getRoundingMethod.mjs */ "./node_modules/date-fns/_lib/getRoundingMethod.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMilliseconds.mjs */ "./node_modules/date-fns/differenceInMilliseconds.mjs");




/**
 * The {@link differenceInHours} function options.
 */

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(dateLeft, dateRight, options) {
  const diff =
    (0,_differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__.differenceInMilliseconds)(dateLeft, dateRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsInHour;
  return (0,_lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInHours);


/***/ }),

/***/ "./node_modules/date-fns/differenceInMilliseconds.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInMilliseconds: () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dateLeft, dateRight) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft) - +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMilliseconds);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _domstuff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domstuff.js */ "./src/domstuff.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
 





(0,_domstuff_js__WEBPACK_IMPORTED_MODULE_1__.DOMcreate)();

(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.retriever)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNMEQ7QUFDWjtBQUNxQjs7QUFFMUU7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsSUFBSSx1RkFBd0Isd0JBQXdCLDhEQUFrQjtBQUN0RSxTQUFTLDZFQUFpQjtBQUMxQjs7QUFFQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDSzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxVQUFVLG1EQUFNLGNBQWMsbURBQU07QUFDcEM7O0FBRUE7QUFDQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUN6RHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjtBQUNEOzs7O0FBSXpDLHVEQUFTOztBQUVULHNEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZEZ1bmMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRldGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21zdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0Um91bmRpbmdNZXRob2QubWpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluSG91cnMubWpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogZGl2I2NvbnRhaW57XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59ICovXG5kaXYucHJvamVjdERpdntcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmUsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5kaXYudGFza0RpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMTg0LCAxMzUsIDAuNTQ4KTtcbn1cblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgMTM1LCAyMzUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAgNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIG1hcmdpbjogNHB4O1xufVxuYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAsIDExNiwgMjM2KTtcblxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7R0FFRztBQUNIO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw4REFBOEQ7QUFDbEU7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixxREFBcUQ7SUFDckQsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQzs7O0FBR3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGRpdiNjb250YWlue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59ICovXFxuZGl2LnByb2plY3REaXZ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5kaXYudGFza0RpdntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMTg0LCAxMzUsIDAuNTQ4KTtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDEzNSwgMjM1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy10b3A6ICA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMTYsIDIzNik7XFxuXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCIuL2NyZWF0ZXRhc2suanNcIjtcblxubGV0IHByb2plY3RBcnJheSA9IHt9O1xubGV0IHByb2plY3RGdW5jID0ge307XG5cbmZ1bmN0aW9uIGFkZFByb2plY3Qoc29tZXRoaW5nKXtcbiAgICBwcm9qZWN0QXJyYXlbc29tZXRoaW5nXSA9IFtdO1xuICAgIHByb2plY3RGdW5jW3NvbWV0aGluZ10gPSBmdW5jdGlvbihhLGIsYyxkKXtwcm9qZWN0QXJyYXlbc29tZXRoaW5nXS5wdXNoKCBuZXcgY3JlYXRlKGEsYixjLGQpKX1cbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0bmFtZSxpbmRleG51bWJlcil7XG4gICAgXG5cbiAgICBwcm9qZWN0QXJyYXlbcHJvamVjdG5hbWVdLnNwbGljZShpbmRleG51bWJlciwxKTtcbiAgICBcbn1cblxuZXhwb3J0e2FkZFByb2plY3QsZGVsZXRlVGFzayxwcm9qZWN0QXJyYXkscHJvamVjdEZ1bmN9IiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluSG91cnMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuXG5jbGFzcyBjcmVhdGV7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBcbiAgICBlZGl0dCgpe1xuICAgICAgICB0aGlzLnRpdGxlID0gcHJvbXB0KCdFbnRlciBuZXcgdGl0bGUgaGVyZSwgb3IgcHJlc3Mgb2sgJyxgJHt0aGlzLnRpdGxlfWApO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvbXB0KCdFbnRlciBuZXcgZGVzY3JpcHRpb24gaGVyZSwgb3IgcHJlc3Mgb2sgJyxgJHt0aGlzLmRlc2NyaXB0aW9ufWApO1xuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBwcm9tcHQoJ0VudGVyIG5ldyBkYXRlIGhlcmUsIG9yIHByZXNzIG9rICcsYCR7dGhpcy5kdWVkYXRlfWApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByb21wdCgnRW50ZXIgbmV3IHByaW9yaXR5IGhlcmUsIG9yIHByZXNzIG9rICcsYCR7dGhpcy5wcmlvcml0eX1gKTtcbiAgICAgICAgXG4gICAgfVxuICAgIHRpbWUodCA9IHRoaXMuZHVlZGF0ZSl7XG4gICAgICAgIGxldCBob3Vyc2xlZnQgPSBkaWZmZXJlbmNlSW5Ib3Vycyh0LG5ldyBEYXRlKCkpO1xuICAgICAgICBhbGVydChgSGV5IHlvdSBoYXZlIGV4YWN0bHkgJHtob3Vyc2xlZnQvMjR9IGRheXMgb3IgJHtob3Vyc2xlZnR9IGhvdXJzIGxlZnQgdG8gZG8gdGhpcyB0YXNrISBgKVxuXG4gICAgfVxuICAgIFxuXG5cbn1cblxuZXhwb3J0IHtjcmVhdGV9XG5cbiIsIlxuXG5pbXBvcnQge3Byb2plY3RBcnJheSxwcm9qZWN0RnVuYyxhZGRQcm9qZWN0LGRlbGV0ZVRhc2t9IGZyb20gXCIuL2FkZEZ1bmMuanNcIjtcblxuXG5mdW5jdGlvbiBET01jcmVhdGUoKXtcbiAgICBsZXQgbWFpbmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluJyk7XG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gJ3RvRG9MaXN0JztcbiAgICBoZWFkaW5nLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGhlYWRpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJ1xuICAgIG1haW5kaXYuYXBwZW5kQ2hpbGQoaGVhZGluZylcblxuICAgIC8vL2NyZWF0aW5nIGEgYnV0dG9uIHRvIGFkZCBhIG5ldyBwcm9qZWN0XG4gICAgbGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FERCBQUk9KRUNUICsnO1xuICAgIG1haW5kaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb21wdCgnVHlwZSB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdCAtICcpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgLy8vc2F2aW5nIGRhdGEgdG8gbG9jYWwgc3RvcmFnZS8vL1xuICAgICAgICBmdW5jdGlvbiBsb2NhbDIoKXtcbiAgICAgICAgICAgIGxldCBzdG9yZVByb2plY3RBcnJheTsgXG4gICAgICAgICAgICBzdG9yZVByb2plY3RBcnJheSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheVtwcm9qZWN0TmFtZV0pXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSxzdG9yZVByb2plY3RBcnJheSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGxvY2FsMigpO1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3REaXZcIik7XG4gICAgICAgIHByb2plY3REaXYuaW5uZXJIVE1MID0gYCR7cHJvamVjdE5hbWV9YDtcbiAgICAgICAgbWFpbmRpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgICAgbGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBREQgVEFTSyArJztcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IHRpdGxlVmFsdWUgPSBwcm9tcHQoJ3dyaXRlIHRoZSB0aXRsZScpO1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBwcm9tcHQoJ3dyaXRlIHRoZSBkZXNjcmlwdGlvbiBoZXJlJyk7XG4gICAgICAgICAgICBsZXQgZHVlRGF0ZVZhbHVlID0gcHJvbXB0KCd3cml0ZSB0aGUgZHVlIGRhdGUgaGVyZScsJ2Zvcm1hdCAtIG5ldyBEYXRlKHllYXIsbW9udGgsZGF5LGhvdXIsbWludXRlcycpO1xuICAgICAgICAgICAgZHVlRGF0ZVZhbHVlID0gZXZhbChkdWVEYXRlVmFsdWUpO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBwcm9tcHQoJ3dyaXRlIHRoZSBwcmlvcml0eSBoZXJlIC0gaGlnaCxtZWRpdW0sbG93Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RnVuY1twcm9qZWN0TmFtZV0odGl0bGVWYWx1ZSxkZXNjcmlwdGlvblZhbHVlLGR1ZURhdGVWYWx1ZSxwcmlvcml0eVZhbHVlKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50dGFzayA9IHByb2plY3RBcnJheVtwcm9qZWN0TmFtZV0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vL3NhdmluZyBkYXRhIHRvIGxvY2FsIHN0b3JhZ2UvLy9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbG9jYWwyKCk7XG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICBsZXQgdGl0bGV2YXIgPSBwcm9qZWN0QXJyYXlbcHJvamVjdE5hbWVdW2N1cnJlbnR0YXNrXS50aXRsZTtcbiAgICAgICAgICAgIGxldCBkdWVkYXRldmFyICA9IHByb2plY3RBcnJheVtwcm9qZWN0TmFtZV1bY3VycmVudHRhc2tdLmR1ZWRhdGU7XG4gICAgICAgICAgICBsZXQgZGVzdmFyID0gcHJvamVjdEFycmF5W3Byb2plY3ROYW1lXVtjdXJyZW50dGFza10uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHl2YXIgPSBwcm9qZWN0QXJyYXlbcHJvamVjdE5hbWVdW2N1cnJlbnR0YXNrXS5wcmlvcml0eTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAvLy9hcHBseWluZyBjb2xvciBiYXNlZCBvbiBwcmlvcml0eVxuICAgICAgICAgICAgaWYocHJpb3JpdHl2YXI9PSdoaWdoJyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YzMDYwNmE5J31cbiAgICAgICAgICAgIGVsc2UgaWYocHJpb3JpdHl2YXI9PSdtZWRpdW0nKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZjAwOWYnfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJpb3JpdHl2YXI9PSdsb3cnKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA4MDAwOTYnfVxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrRGl2XCIpO1xuICAgICAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSBgIFRpdGxlIC0gJHt0aXRsZXZhcn0gPGJyPiBEdWUgLSAke2R1ZWRhdGV2YXJ9IDxicj5gO1xuICAgICAgICAgICAgLy8vY29kZSBmb3IgdGhlIGRlbGV0ZSBidXR0b24vLy9cbiAgICAgICAgICAgIGxldCBkZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFzayhwcm9qZWN0TmFtZSxjdXJyZW50dGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIC8vL3NhdmluZyBkYXRhIHRvIGxvY2FsIHN0b3JhZ2UvLy9cbiAgICAgICAgICAgICAgICBsb2NhbDIoKVxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLy9jb2RlIGZvciB0aGUgdGltZSBidXR0b24vLy9cbiAgICAgICAgICAgIGxldCB0aW1lYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0aW1lYnV0dG9uLnRleHRDb250ZW50ID0gJ1RpbWUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aW1lYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbcHJvamVjdE5hbWVdW2N1cnJlbnR0YXNrXS50aW1lKCk7XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vL2NvZGUgZm9yIHRoZSBlZGl0IGJ1dHRvbi8vL1xuICAgICAgICAgICAgbGV0IGVkaXRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRidXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVkaXRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtwcm9qZWN0TmFtZV1bY3VycmVudHRhc2tdLmVkaXR0KCk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aXRsZXZhciA9IHByb2plY3RBcnJheVtwcm9qZWN0TmFtZV1bY3VycmVudHRhc2tdLnRpdGxlO1xuICAgICAgICAgICAgICAgIGR1ZWRhdGV2YXIgID0gcHJvamVjdEFycmF5W3Byb2plY3ROYW1lXVtjdXJyZW50dGFza10uZHVlZGF0ZTtcbiAgICAgICAgICAgICAgICBkZXN2YXIgPSBwcm9qZWN0QXJyYXlbcHJvamVjdE5hbWVdW2N1cnJlbnR0YXNrXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBwcmlvcml0eXZhciA9IHByb2plY3RBcnJheVtwcm9qZWN0TmFtZV1bY3VycmVudHRhc2tdLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgIC8vL3NhdmluZyBkYXRhIHRvIGxvY2FsIHN0b3JhZ2UvLy9cbiAgICAgICAgICAgICAgICBsb2NhbDIoKVxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IGAgVGl0bGUgLSAke3RpdGxldmFyfSA8YnI+RHVlIC0gJHtkdWVkYXRldmFyfSA8YnI+IGA7XG4gICAgICAgICAgICAgICAgLy8vYXBwbHlpbmcgY29sb3IgYmFzZWQgb24gcHJpb3JpdHlcbiAgICAgICAgICAgICAgICBpZihwcmlvcml0eXZhcj09J2hpZ2gnKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjMwNjA2YTknfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocHJpb3JpdHl2YXI9PSdtZWRpdW0nKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZjAwOWYnfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5dmFyPT0nbG93Jyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnMDA4MDAwODgnfVxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFxuICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYnV0dG9uKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpbWVidXR0b24pO1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmRidXR0b24pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8vY29kZSBmb3IgdGhlIGV4cGFuZCBidXR0b24vLy9cbiAgICAgICAgICAgICBsZXQgZXhwYW5kYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgZXhwYW5kYnV0dG9uLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgZXhwYW5kYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IGBUaXRsZSAtICR7dGl0bGV2YXJ9IDxicj4gRHVlIC0gJHtkdWVkYXRldmFyfSA8YnI+IERldGFpbHMgLSAke2Rlc3Zhcn0gPGJyPiBQcmlvcml0eSAtICR7cHJpb3JpdHl2YXJ9YFxuICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYnV0dG9uKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpbWVidXR0b24pO1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdGJ1dHRvbik7XG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVidXR0b24pO1xuICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aW1lYnV0dG9uKTtcbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdGJ1dHRvbik7XG4gICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZGJ1dHRvbik7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG5cblxuICAgICAgICB9KVxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH0pXG59XG5cbmV4cG9ydHtET01jcmVhdGV9XG4iLCJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCIuL2NyZWF0ZXRhc2suanNcIjtcbmltcG9ydCB7cHJvamVjdEFycmF5LHByb2plY3RGdW5jLGFkZFByb2plY3QsZGVsZXRlVGFza30gZnJvbSBcIi4vYWRkRnVuYy5qc1wiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluSG91cnMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbiBcbiBcbiBsZXQgcmV0cmlldmVyID0gZnVuY3Rpb24gKCl7XG4gICAgXG4gICAgaWYobG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwKXtyZXR1cm59XG4gICAgZWxzZXtcbiAgICAgICAgbGV0IGNvbnRhaW5lcmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluJylcblxuICAgICAgICBmb3IobGV0IGkgPSAwO2k8IGxvY2FsU3RvcmFnZS5sZW5ndGg7aSsrKXtcblxuICAgICAgICBsZXQga2V5bmFtZSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgIGxldCB2YWx1ZSA9ICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXluYW1lKSk7XG4gICAgICAgIHByb2plY3RBcnJheVtrZXluYW1lXSA9IHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBsb2NhbDMoKXtcbiAgICAgICAgICAgIGxldCBzdG9yZVByb2plY3RBcnJheTsgXG4gICAgICAgICAgICBzdG9yZVByb2plY3RBcnJheSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheVtrZXluYW1lXSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleW5hbWUsc3RvcmVQcm9qZWN0QXJyYXkpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0RGl2XCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3REaXYuaW5uZXJIVE1MID0gYCR7a2V5bmFtZX1gO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcmRpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgICAgICAgICAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBREQgVEFTSyArJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZVZhbHVlID0gcHJvbXB0KCd3cml0ZSB0aGUgdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvblZhbHVlID0gcHJvbXB0KCd3cml0ZSB0aGUgZGVzY3JpcHRpb24gaGVyZScpO1xuICAgICAgICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IHByb21wdCgnd3JpdGUgdGhlIGR1ZSBkYXRlIGhlcmUnLCdmb3JtYXQgLSBuZXcgRGF0ZSh5ZWFyLG1vbnRoLGRheSxob3VyLG1pbnV0ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVWYWx1ZSA9IGV2YWwoZHVlRGF0ZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gcHJvbXB0KCd3cml0ZSB0aGUgcHJpb3JpdHkgaGVyZSAtIGhpZ2gsbWVkaXVtLGxvdycpO1xuICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZ1bmNba2V5bmFtZV0gPSBmdW5jdGlvbihhLGIsYyxkKXtwcm9qZWN0QXJyYXlba2V5bmFtZV0ucHVzaCggbmV3IGNyZWF0ZShhLGIsYyxkKSl9XG4gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RnVuY1trZXluYW1lXSh0aXRsZVZhbHVlLGRlc2NyaXB0aW9uVmFsdWUsZHVlRGF0ZVZhbHVlLHByaW9yaXR5VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgbG9jYWwzKClcblxuICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnR0YXNrID0gcHJvamVjdEFycmF5W2tleW5hbWVdLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGV2YXIgPSBwcm9qZWN0QXJyYXlba2V5bmFtZV1bY3VycmVudHRhc2tdLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgbGV0IGR1ZWRhdGV2YXIgID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2N1cnJlbnR0YXNrXS5kdWVkYXRlO1xuICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc3ZhciA9IHByb2plY3RBcnJheVtrZXluYW1lXVtjdXJyZW50dGFza10uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHl2YXIgPSBwcm9qZWN0QXJyYXlba2V5bmFtZV1bY3VycmVudHRhc2tdLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgLy8vYXBwbHlpbmcgY29sb3IgYmFzZWQgb24gcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgIGlmKHByaW9yaXR5dmFyPT0naGlnaCcpe3Rhc2tEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMzA2MDZhOSd9XG4gICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5dmFyPT0nbWVkaXVtJyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmYwMDlmJ31cbiAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5dmFyPT0nbG93Jyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwODAwMDk2J31cbiAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tEaXZcIik7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IGAgVGl0bGUgLSAke3RpdGxldmFyfSA8YnI+IER1ZSAtICR7ZHVlZGF0ZXZhcn0gPGJyPmA7XG4gICAgICAgICAgICAgICAgICAgICAgLy8vY29kZSBmb3IgdGhlIGRlbGV0ZSBidXR0b24vLy9cbiAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBkZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrKGtleW5hbWUsY3VycmVudHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgIGxvY2FsMygpXG4gICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAgICAgICAgICAgIC8vL2NvZGUgZm9yIHRoZSB0aW1lIGJ1dHRvbi8vL1xuICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgIHRpbWVidXR0b24udGV4dENvbnRlbnQgPSAnVGltZSc7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIHRpbWVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2tleW5hbWVdW2N1cnJlbnR0YXNrXS50aW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAgICAgICAgICAvLy9jb2RlIGZvciB0aGUgZWRpdCBidXR0b24vLy9cbiAgICAgICAgICAgICAgICAgICAgIGxldCBlZGl0YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICBlZGl0YnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBlZGl0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtrZXluYW1lXVtjdXJyZW50dGFza10uZWRpdHQoKTtcblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICB0aXRsZXZhciA9IHByb2plY3RBcnJheVtrZXluYW1lXVtjdXJyZW50dGFza10udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICBkdWVkYXRldmFyICA9IHByb2plY3RBcnJheVtrZXluYW1lXVtjdXJyZW50dGFza10uZHVlZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgIGRlc3ZhciA9IHByb2plY3RBcnJheVtrZXluYW1lXVtjdXJyZW50dGFza10uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICBwcmlvcml0eXZhciA9IHByb2plY3RBcnJheVtrZXluYW1lXVtjdXJyZW50dGFza10ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgICBsb2NhbDMoKVxuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSBgIFRpdGxlIC0gJHt0aXRsZXZhcn0gPGJyPkR1ZSAtICR7ZHVlZGF0ZXZhcn0gPGJyPiBgO1xuICAgICAgICAgICAgICAgICAgICAgLy8vYXBwbHlpbmcgY29sb3IgYmFzZWQgb24gcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgIGlmKHByaW9yaXR5dmFyPT0naGlnaCcpe3Rhc2tEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMzA2MDZhOSd9XG4gICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5dmFyPT0nbWVkaXVtJyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmYwMDlmJ31cbiAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5dmFyPT0nbG93Jyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnMDA4MDAwODgnfVxuICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gXG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpbWVidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0YnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kYnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAvLy9jb2RlIGZvciB0aGUgZXhwYW5kIGJ1dHRvbi8vL1xuICAgICAgICAgICAgICAgICAgICAgbGV0IGV4cGFuZGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgZXhwYW5kYnV0dG9uLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBleHBhbmRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSBgVGl0bGUgLSAke3RpdGxldmFyfSA8YnI+IER1ZSAtICR7ZHVlZGF0ZXZhcn0gPGJyPiBEZXRhaWxzIC0gJHtkZXN2YXJ9IDxicj4gUHJpb3JpdHkgLSAke3ByaW9yaXR5dmFyfWBcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGltZWJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVkaXRidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aW1lYnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG5cbiAgICAgICAgICAgIH0pfVxuXG5cblxuICAgICAgICAgICAgZWxzZSBpZih2YWx1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxpdGVtcyA9IHZhbHVlLmxlbmd0aDtcblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAvLy9jb2RlIHRvIGFkZCBwcm9qZWN0IGRpdiBhbmQgdGFzayBidXR0b24vLy9cbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0RGl2XCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3REaXYuaW5uZXJIVE1MID0gYCR7a2V5bmFtZX1gO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcmRpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgICAgICAgICAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBREQgVEFTSyArJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZVZhbHVlID0gcHJvbXB0KCd3cml0ZSB0aGUgdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvblZhbHVlID0gcHJvbXB0KCd3cml0ZSB0aGUgZGVzY3JpcHRpb24gaGVyZScpO1xuICAgICAgICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IHByb21wdCgnd3JpdGUgdGhlIGR1ZSBkYXRlIGhlcmUnLCdmb3JtYXQgLSBuZXcgRGF0ZSh5ZWFyLG1vbnRoLGRheSxob3VyLG1pbnV0ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVWYWx1ZSA9IGV2YWwoZHVlRGF0ZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gcHJvbXB0KCd3cml0ZSB0aGUgcHJpb3JpdHkgaGVyZSAtIGhpZ2gsbWVkaXVtLGxvdycpO1xuICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZ1bmNba2V5bmFtZV0gPSBmdW5jdGlvbihhLGIsYyxkKXtwcm9qZWN0QXJyYXlba2V5bmFtZV0ucHVzaCggbmV3IGNyZWF0ZShhLGIsYyxkKSl9XG4gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RnVuY1trZXluYW1lXSh0aXRsZVZhbHVlLGRlc2NyaXB0aW9uVmFsdWUsZHVlRGF0ZVZhbHVlLHByaW9yaXR5VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgbG9jYWwzKClcbiAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50dGFzayA9IHByb2plY3RBcnJheVtrZXluYW1lXS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxldmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2N1cnJlbnR0YXNrXS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgIGxldCBkdWVkYXRldmFyICA9IHByb2plY3RBcnJheVtrZXluYW1lXVtjdXJyZW50dGFza10uZHVlZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgIGxldCBkZXN2YXIgPSBwcm9qZWN0QXJyYXlba2V5bmFtZV1bY3VycmVudHRhc2tdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5dmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2N1cnJlbnR0YXNrXS5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgIC8vL2FwcGx5aW5nIGNvbG9yIGJhc2VkIG9uIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICBpZihwcmlvcml0eXZhcj09J2hpZ2gnKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjMwNjA2YTknfVxuICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihwcmlvcml0eXZhcj09J21lZGl1bScpe3Rhc2tEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmMDA5Zid9XG4gICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcmlvcml0eXZhcj09J2xvdycpe3Rhc2tEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDgwMDA5Nid9XG4gICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrRGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgPSBgIFRpdGxlIC0gJHt0aXRsZXZhcn0gPGJyPiBEdWUgLSAke2R1ZWRhdGV2YXJ9IDxicj5gO1xuICAgICAgICAgICAgICAgICAgICAgIC8vL2NvZGUgZm9yIHRoZSBkZWxldGUgYnV0dG9uLy8vXG4gICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICBkZWxldGVidXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgZGVsZXRlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFzayhrZXluYW1lLGN1cnJlbnR0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICBsb2NhbDMoKVxuICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgICAgICAgICAgICAgICAvLy9jb2RlIGZvciB0aGUgdGltZSBidXR0b24vLy9cbiAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICB0aW1lYnV0dG9uLnRleHRDb250ZW50ID0gJ1RpbWUnO1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICB0aW1lYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtrZXluYW1lXVtjdXJyZW50dGFza10udGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAgICAgICAgLy8vY29kZSBmb3IgdGhlIGVkaXQgYnV0dG9uLy8vXG4gICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgZWRpdGJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgZWRpdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlba2V5bmFtZV1bY3VycmVudHRhc2tdLmVkaXR0KCk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIHRpdGxldmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2N1cnJlbnR0YXNrXS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgIGR1ZWRhdGV2YXIgID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2N1cnJlbnR0YXNrXS5kdWVkYXRlO1xuICAgICAgICAgICAgICAgICAgICAgZGVzdmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2N1cnJlbnR0YXNrXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5dmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2N1cnJlbnR0YXNrXS5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgIGxvY2FsMygpXG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IGAgVGl0bGUgLSAke3RpdGxldmFyfSA8YnI+RHVlIC0gJHtkdWVkYXRldmFyfSA8YnI+IGA7XG4gICAgICAgICAgICAgICAgICAgICAvLy9hcHBseWluZyBjb2xvciBiYXNlZCBvbiBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgICAgaWYocHJpb3JpdHl2YXI9PSdoaWdoJyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YzMDYwNmE5J31cbiAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocHJpb3JpdHl2YXI9PSdtZWRpdW0nKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZjAwOWYnfVxuICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJpb3JpdHl2YXI9PSdsb3cnKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcwMDgwMDA4OCd9XG4gICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGltZWJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVkaXRidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChleHBhbmRidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgIC8vL2NvZGUgZm9yIHRoZSBleHBhbmQgYnV0dG9uLy8vXG4gICAgICAgICAgICAgICAgICAgICBsZXQgZXhwYW5kYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICBleHBhbmRidXR0b24udGV4dENvbnRlbnQgPSAnRXhwYW5kJztcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IGBUaXRsZSAtICR7dGl0bGV2YXJ9IDxicj4gRHVlIC0gJHtkdWVkYXRldmFyfSA8YnI+IERldGFpbHMgLSAke2Rlc3Zhcn0gPGJyPiBQcmlvcml0eSAtICR7cHJpb3JpdHl2YXJ9YFxuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aW1lYnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpbWVidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0YnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kYnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPHRvdGFsaXRlbXM7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxldmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2ldLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZHVlZGF0ZXZhciAgPSBwcm9qZWN0QXJyYXlba2V5bmFtZV1baV0uZHVlZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc3ZhciA9IHByb2plY3RBcnJheVtrZXluYW1lXVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5dmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2ldLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgLy8vYXBwbHlpbmcgY29sb3IgYmFzZWQgb24gcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgIGlmKHByaW9yaXR5dmFyPT0naGlnaCcpe3Rhc2tEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMzA2MDZhOSd9XG4gICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5dmFyPT0nbWVkaXVtJyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmYwMDlmJ31cbiAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5dmFyPT0nbG93Jyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwODAwMDk2J31cbiAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tEaXZcIik7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IGAgVGl0bGUgLSAke3RpdGxldmFyfSA8YnI+IER1ZSAtICR7ZHVlZGF0ZXZhcn0gPGJyPmA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy9jb2RlIGZvciB0aGUgZGVsZXRlIGJ1dHRvbi8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVidXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2soa2V5bmFtZSxpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWwzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vL2NvZGUgZm9yIHRoZSB0aW1lIGJ1dHRvbi8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWJ1dHRvbi50ZXh0Q29udGVudCA9ICdUaW1lJztcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91cnNsZWZ0ID0gZGlmZmVyZW5jZUluSG91cnMoZHVlZGF0ZXZhcixuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYEhleSB5b3UgaGF2ZSBleGFjdGx5ICR7aG91cnNsZWZ0LzI0fSBkYXlzIG9yICR7aG91cnNsZWZ0fSBob3VycyBsZWZ0IHRvIGRvIHRoaXMgdGFzayEgYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vL2NvZGUgZm9yIHRoZSBlZGl0IGJ1dHRvbi8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlZGl0YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlba2V5bmFtZV1baV0udGl0bGUgPSBwcm9tcHQoJ0VudGVyIG5ldyB0aXRsZSBoZXJlLCBvciBwcmVzcyBvayAnLGAke3Byb2plY3RBcnJheVtrZXluYW1lXVtpXS50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2tleW5hbWVdW2ldLmRlc2NyaXB0aW9uID0gcHJvbXB0KCdFbnRlciBuZXcgdGl0bGUgaGVyZSwgb3IgcHJlc3Mgb2sgJyxgJHtwcm9qZWN0QXJyYXlba2V5bmFtZV1baV0uZGVzY3JpcHRpb259YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RBcnJheVtrZXluYW1lXVtpXS5kdWVkYXRlID0gcHJvbXB0KCdFbnRlciBuZXcgdGl0bGUgaGVyZSwgb3IgcHJlc3Mgb2sgJyxgJHtwcm9qZWN0QXJyYXlba2V5bmFtZV1baV0uZHVlZGF0ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2tleW5hbWVdW2ldLnByaW9yaXR5ID0gcHJvbXB0KCdFbnRlciBuZXcgdGl0bGUgaGVyZSwgb3IgcHJlc3Mgb2sgJyxgJHtwcm9qZWN0QXJyYXlba2V5bmFtZV1baV0ucHJpb3JpdHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxldmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2ldLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVkYXRldmFyICA9IHByb2plY3RBcnJheVtrZXluYW1lXVtpXS5kdWVkYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN2YXIgPSBwcm9qZWN0QXJyYXlba2V5bmFtZV1baV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5dmFyID0gcHJvamVjdEFycmF5W2tleW5hbWVdW2ldLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbDMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy9hcHBseWluZyBjb2xvciBiYXNlZCBvbiBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcmlvcml0eXZhcj09J2hpZ2gnKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjMwNjA2YTknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHByaW9yaXR5dmFyPT0nbWVkaXVtJyl7dGFza0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmYwMDlmJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJpb3JpdHl2YXI9PSdsb3cnKXt0YXNrRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDA4MDAwOTYnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tEaXZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gYCBUaXRsZSAtICR7dGl0bGV2YXJ9IDxicj4gRHVlIC0gJHtkdWVkYXRldmFyfSA8YnI+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpbWVidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVkaXRidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGV4cGFuZGJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vL2NvZGUgZm9yIHRoZSBleHBhbmQgYnV0dG9uLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHBhbmRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kYnV0dG9uLnRleHRDb250ZW50ID0gJ0V4cGFuZCc7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmlubmVySFRNTCA9IGBUaXRsZSAtICR7dGl0bGV2YXJ9IDxicj4gRHVlIC0gJHtkdWVkYXRldmFyfSA8YnI+IERldGFpbHMgLSAke2Rlc3Zhcn0gPGJyPiBQcmlvcml0eSAtICR7cHJpb3JpdHl2YXJ9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aW1lYnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpbWVidXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0YnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kYnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cbiBleHBvcnR7cmV0cmlldmVyfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJvdW5kID0gbWV0aG9kID8gTWF0aFttZXRob2RdIDogTWF0aC50cnVuYztcbiAgICBjb25zdCByZXN1bHQgPSByb3VuZChudW1iZXIpO1xuICAgIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICAgIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xuICB9O1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsImltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4vX2xpYi9nZXRSb3VuZGluZ01ldGhvZC5tanNcIjtcbmltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJbkhvdXJzfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluSG91cnNcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBob3Vyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBob3VycyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAwNjo1MDowMCBhbmQgMiBKdWx5IDIwMTQgMTk6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Ib3VycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTksIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCA1MClcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGlmZiA9XG4gICAgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5Ib3VyO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucz8ucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkhvdXJzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGVMZWZ0KSAtICt0b0RhdGUoZGF0ZVJpZ2h0KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHM7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnIFxuaW1wb3J0IHsgRE9NY3JlYXRlIH0gZnJvbSBcIi4vZG9tc3R1ZmYuanNcIjtcbmltcG9ydCB7IHJldHJpZXZlciB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cblxuXG5ET01jcmVhdGUoKTtcblxucmV0cmlldmVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9