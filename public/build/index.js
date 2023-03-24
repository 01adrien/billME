"use strict";
(self["webpackChunkbill_app"] = self["webpackChunkbill_app"] || []).push([["index"],{

/***/ "./src/App/assets/js/index.js":
/*!************************************!*\
  !*** ./src/App/assets/js/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_output_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/output.css */ "./src/App/assets/css/output.css");
/* harmony import */ var _lib_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/animation */ "./src/App/assets/js/lib/animation.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/utils */ "./src/App/assets/js/lib/utils.js");




// typeEffect(150,"123456789")(
//   filterStream(x => x )(value => value)(function(x) {
//     x[0] ++;
//     console.log(x)
//   })
// );

(0,_lib_animation__WEBPACK_IMPORTED_MODULE_1__.typeEffect)(150, "123456789")(function (x) {
  x[0]++;
  console.log(x);
});

/***/ }),

/***/ "./src/App/assets/js/lib/animation.js":
/*!********************************************!*\
  !*** ./src/App/assets/js/lib/animation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "typeEffect": () => (/* binding */ typeEffect),
/* harmony export */   "typeEffect2": () => (/* binding */ typeEffect2)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/App/assets/js/lib/utils.js");
/* harmony import */ var _source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source.js */ "./src/App/assets/js/lib/source.js");



var addClass = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.curry)(function (idDiv, className) {
  var target = document.getElementById(idDiv);
  target.classList.add(className);
});
var typeEffect = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.curry)(function (duration, text) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.zip)((0,_source_js__WEBPACK_IMPORTED_MODULE_2__.createInterval)(duration), (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.forOf)(text));
});
var typeEffect2 = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.curry)(function (duration, text) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.merge)((0,_source_js__WEBPACK_IMPORTED_MODULE_2__.createTimeout)(duration), (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.forOf)(text));
});

/***/ }),

/***/ "./src/App/assets/js/lib/source.js":
/*!*****************************************!*\
  !*** ./src/App/assets/js/lib/source.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListener": () => (/* binding */ addListener),
/* harmony export */   "createInterval": () => (/* binding */ createInterval),
/* harmony export */   "createTimeout": () => (/* binding */ createTimeout)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var createTimeout = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.curry)(function (time, listener) {
  var id = setTimeout(listener, time);
  return function () {
    clearTimeout(id);
  };
});
var addListener = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.curry)(function (selector, eventType, listener) {
  var element = document.querySelector(selector);
  element.addEventListener(eventType, listener);
  return function () {
    element.removeEventListener(eventType, listener);
  };
});
var createInterval = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.curry)(function (time, listener) {
  var i = 0;
  var id = setInterval(function () {
    listener(i++);
  }, time);
  return function () {
    clearInterval(id);
  };
});

/***/ }),

/***/ "./src/App/assets/js/lib/utils.js":
/*!****************************************!*\
  !*** ./src/App/assets/js/lib/utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "action": () => (/* binding */ action),
/* harmony export */   "done": () => (/* binding */ done),
/* harmony export */   "filterStream": () => (/* binding */ filterStream),
/* harmony export */   "forOf": () => (/* binding */ forOf),
/* harmony export */   "mapStream": () => (/* binding */ mapStream),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "zip": () => (/* binding */ zip)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var done = 'DONE';
var zip = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.curry)(function (source1, source2, listener) {
  console.log(source1.name);
  console.log(source2);
  var buffer1 = [];
  var cancel1 = source1(function (value) {
    buffer1.push(value);
    if (buffer2.length) {
      listener([buffer1.shift(), buffer2.shift()]);
    }
  });
  var buffer2 = [];
  var cancel2 = source2(function (value) {
    buffer2.push(value);
    if (buffer1.length) {
      listener([buffer1.shift(), buffer2.shift()]);
    }
  });
  return function () {
    cancel1();
    cancel2();
  };
});
var forOf = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.curry)(function (iterable, listener) {
  iterable.split('').map(function (i, j) {
    return iterable.length === j - 1 ? listener(done) : listener(i);
  });
});
var merge = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.curry)(function (source1, source2, listener) {
  var cancel1 = source1(listener);
  var cancel2 = source2(listener);
  return function () {
    cancel1();
    cancel2();
  };
});
var action = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.curry)(function (value, source, listener) {
  source(function () {
    return listener(value);
  });
});
var mapStream = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.curry)(function (fn, source, listener) {
  return source(function (value) {
    if (value === done) {
      listener(done);
      return;
    }
    listener(fn(value));
  });
});
var filterStream = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.curry)(function (predicate, source, listener) {
  return source(function (value) {
    if (value === done) {
      listener(done);
      return;
    }
    !predicate(value) ? null : listener(value);
  });
});

/***/ }),

/***/ "./src/App/assets/css/output.css":
/*!***************************************!*\
  !*** ./src/App/assets/css/output.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_es_function-b88a13"], () => (__webpack_exec__("./src/App/assets/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TXlCLE9BQU8sR0FBR1QsT0FBTyxDQUFDaEIsUUFBUSxDQUFDO0VBQ2pDLE9BQU8sWUFBTTtJQUNUbUIsT0FBTyxFQUFFO0lBQ1RNLE9BQU8sRUFBRTtFQUNiLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSyxJQUFNSyxNQUFNLEdBQUdoRCw2Q0FBSyxDQUFDLFVBQUNzQyxLQUFLLEVBQUVXLE1BQU0sRUFBRS9CLFFBQVEsRUFBSztFQUN2RCtCLE1BQU0sQ0FBQztJQUFBLE9BQU0vQixRQUFRLENBQUNvQixLQUFLLENBQUM7RUFBQSxFQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVLLElBQU1uQyxTQUFTLEdBQUdILDZDQUFLLENBQUMsVUFBQ2tELEVBQUUsRUFBRUQsTUFBTSxFQUFFL0IsUUFBUSxFQUFLO0VBQ3JELE9BQU8rQixNQUFNLENBQUMsVUFBQ1gsS0FBSyxFQUFLO0lBQ3JCLElBQUlBLEtBQUssS0FBS04sSUFBSSxFQUFFO01BQ2hCZCxRQUFRLENBQUNjLElBQUksQ0FBQztNQUNkO0lBQ0o7SUFDQWQsUUFBUSxDQUFDZ0MsRUFBRSxDQUFDWixLQUFLLENBQUMsQ0FBQztFQUN2QixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFSyxJQUFNMUMsWUFBWSxHQUFHSSw2Q0FBSyxDQUFDLFVBQUNtRCxTQUFTLEVBQUVGLE1BQU0sRUFBRS9CLFFBQVEsRUFBSztFQUMvRCxPQUFPK0IsTUFBTSxDQUFDLFVBQUNYLEtBQUssRUFBSztJQUNyQixJQUFJQSxLQUFLLEtBQUtOLElBQUksRUFBRTtNQUNoQmQsUUFBUSxDQUFDYyxJQUFJLENBQUM7TUFDZDtJQUNKO0lBQ0EsQ0FBQ21CLFNBQVMsQ0FBQ2IsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHcEIsUUFBUSxDQUFDb0IsS0FBSyxDQUFDO0VBQzlDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNsRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWxsX2FwcC8uL3NyYy9BcHAvYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL2JpbGxfYXBwLy4vc3JjL0FwcC9hc3NldHMvanMvbGliL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9iaWxsX2FwcC8uL3NyYy9BcHAvYXNzZXRzL2pzL2xpYi9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vYmlsbF9hcHAvLi9zcmMvQXBwL2Fzc2V0cy9qcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmlsbF9hcHAvLi9zcmMvQXBwL2Fzc2V0cy9jc3Mvb3V0cHV0LmNzcz8yYjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Nzcy9vdXRwdXQuY3NzXCJcbmltcG9ydCB7IHR5cGVFZmZlY3QsIHR5cGVFZmZlY3QyIH0gZnJvbSBcIi4vbGliL2FuaW1hdGlvblwiXG5pbXBvcnQgeyBmaWx0ZXJTdHJlYW0gfSBmcm9tIFwiLi9saWIvdXRpbHNcIjtcblxuLy8gdHlwZUVmZmVjdCgxNTAsXCIxMjM0NTY3ODlcIikoXG4vLyAgIGZpbHRlclN0cmVhbSh4ID0+IHggKSh2YWx1ZSA9PiB2YWx1ZSkoZnVuY3Rpb24oeCkge1xuLy8gICAgIHhbMF0gKys7XG4vLyAgICAgY29uc29sZS5sb2coeClcbi8vICAgfSlcbi8vICk7XG5cblxudHlwZUVmZmVjdCgxNTAsXCIxMjM0NTY3ODlcIikoZnVuY3Rpb24oeCkge1xuICB4WzBdICsrIDtcbiAgY29uc29sZS5sb2coeClcbn0pO1xuXG5cbiIsImltcG9ydCB7IGN1cnJ5IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgZm9yT2YsIHppcCwgbWFwU3RyZWFtLCBmaWx0ZXJTdHJlYW0sIG1lcmdlIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUludGVydmFsLCBjcmVhdGVUaW1lb3V0IH0gZnJvbSBcIi4vc291cmNlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRDbGFzcyA9IGN1cnJ5KChpZERpdiwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRGl2KTtcbiAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgdHlwZUVmZmVjdCA9IGN1cnJ5KChkdXJhdGlvbiwgdGV4dCkgPT5cbiAgemlwKGNyZWF0ZUludGVydmFsKGR1cmF0aW9uKSwgZm9yT2YodGV4dCkpXG4pO1xuXG5leHBvcnQgY29uc3QgdHlwZUVmZmVjdDIgPSBjdXJyeSgoZHVyYXRpb24sIHRleHQpID0+XG4gIG1lcmdlKGNyZWF0ZVRpbWVvdXQoZHVyYXRpb24pLCBmb3JPZih0ZXh0KSlcbik7IiwiaW1wb3J0IHsgY3VycnkgfSBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaW1lb3V0ID0gY3VycnkoKHRpbWUsIGxpc3RlbmVyKSA9PiB7XG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KGxpc3RlbmVyLCB0aW1lKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgYWRkTGlzdGVuZXIgPSBjdXJyeSgoc2VsZWN0b3IsIGV2ZW50VHlwZSwgbGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcilcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgY3JlYXRlSW50ZXJ2YWwgPSBjdXJyeSgodGltZSwgbGlzdGVuZXIpID0+IHtcbiAgICBsZXQgaSA9IDBcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbGlzdGVuZXIoaSsrKVxuICAgIH0sIHRpbWUpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZClcbiAgICB9XG59KVxuIiwiaW1wb3J0IHsgY3VycnkgfSBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjb25zdCBkb25lID0gJ0RPTkUnXG5cbmV4cG9ydCBjb25zdCB6aXAgPSBjdXJyeSgoc291cmNlMSwgc291cmNlMiwgbGlzdGVuZXIpID0+IHtcbiAgY29uc29sZS5sb2coc291cmNlMS5uYW1lKVxuICBjb25zb2xlLmxvZyhzb3VyY2UyKVxuICAgIGNvbnN0IGJ1ZmZlcjEgPSBbXVxuICAgIGNvbnN0IGNhbmNlbDEgPSBzb3VyY2UxKCh2YWx1ZSkgPT4ge1xuICAgICAgICBidWZmZXIxLnB1c2godmFsdWUpXG4gICAgICAgIGlmIChidWZmZXIyLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlzdGVuZXIoW2J1ZmZlcjEuc2hpZnQoKSwgYnVmZmVyMi5zaGlmdCgpXSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgYnVmZmVyMiA9IFtdXG4gICAgY29uc3QgY2FuY2VsMiA9IHNvdXJjZTIoKHZhbHVlKSA9PiB7XG4gICAgICAgIGJ1ZmZlcjIucHVzaCh2YWx1ZSlcbiAgICAgICAgaWYgKGJ1ZmZlcjEubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcihbYnVmZmVyMS5zaGlmdCgpLCBidWZmZXIyLnNoaWZ0KCldKVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjYW5jZWwxKClcbiAgICAgICAgY2FuY2VsMigpXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IGZvck9mID0gY3VycnkoKGl0ZXJhYmxlLCBsaXN0ZW5lcikgPT4ge1xuICAgIGl0ZXJhYmxlXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcCgoaSwgaikgPT5cbiAgICAgICAgICAgIGl0ZXJhYmxlLmxlbmd0aCA9PT0gaiAtIDEgPyBsaXN0ZW5lcihkb25lKSA6IGxpc3RlbmVyKGkpXG4gICAgICAgIClcbn0pXG5cbmV4cG9ydCBjb25zdCBtZXJnZSA9IGN1cnJ5KChzb3VyY2UxLCBzb3VyY2UyLCBsaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IGNhbmNlbDEgPSBzb3VyY2UxKGxpc3RlbmVyKVxuICAgIGNvbnN0IGNhbmNlbDIgPSBzb3VyY2UyKGxpc3RlbmVyKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbmNlbDEoKVxuICAgICAgICBjYW5jZWwyKClcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gY3VycnkoKHZhbHVlLCBzb3VyY2UsIGxpc3RlbmVyKSA9PiB7XG4gIHNvdXJjZSgoKSA9PiBsaXN0ZW5lcih2YWx1ZSkpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBtYXBTdHJlYW0gPSBjdXJyeSgoZm4sIHNvdXJjZSwgbGlzdGVuZXIpID0+IHtcbiAgICByZXR1cm4gc291cmNlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IGRvbmUpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKGRvbmUpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcihmbih2YWx1ZSkpXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJTdHJlYW0gPSBjdXJyeSgocHJlZGljYXRlLCBzb3VyY2UsIGxpc3RlbmVyKSA9PiB7XG4gICAgcmV0dXJuIHNvdXJjZSgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBkb25lKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcihkb25lKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgIXByZWRpY2F0ZSh2YWx1ZSkgPyBudWxsIDogbGlzdGVuZXIodmFsdWUpXG4gICAgfSlcbn0pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsidHlwZUVmZmVjdCIsInR5cGVFZmZlY3QyIiwiZmlsdGVyU3RyZWFtIiwieCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyeSIsImZvck9mIiwiemlwIiwibWFwU3RyZWFtIiwibWVyZ2UiLCJjcmVhdGVJbnRlcnZhbCIsImNyZWF0ZVRpbWVvdXQiLCJhZGRDbGFzcyIsImlkRGl2IiwiY2xhc3NOYW1lIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsImR1cmF0aW9uIiwidGV4dCIsInRpbWUiLCJsaXN0ZW5lciIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImFkZExpc3RlbmVyIiwic2VsZWN0b3IiLCJldmVudFR5cGUiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRvbmUiLCJzb3VyY2UxIiwic291cmNlMiIsIm5hbWUiLCJidWZmZXIxIiwiY2FuY2VsMSIsInZhbHVlIiwicHVzaCIsImJ1ZmZlcjIiLCJsZW5ndGgiLCJzaGlmdCIsImNhbmNlbDIiLCJpdGVyYWJsZSIsInNwbGl0IiwibWFwIiwiaiIsImFjdGlvbiIsInNvdXJjZSIsImZuIiwicHJlZGljYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==