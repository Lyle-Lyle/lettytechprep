"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/omit.js";
exports.ids = ["vendor-chunks/omit.js"];
exports.modules = {

/***/ "(ssr)/./node_modules/omit.js/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/omit.js/es/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction omit(obj, fields) {\n  // eslint-disable-next-line prefer-object-spread\n  var shallowCopy = Object.assign({}, obj);\n\n  for (var i = 0; i < fields.length; i += 1) {\n    var key = fields[i];\n    delete shallowCopy[key];\n  }\n\n  return shallowCopy;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (omit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb21pdC5qcy9lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEMsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0dHljb2RlLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL29taXQuanMvZXMvaW5kZXguanM/YTY3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvbWl0KG9iaiwgZmllbGRzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItb2JqZWN0LXNwcmVhZFxuICB2YXIgc2hhbGxvd0NvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGtleSA9IGZpZWxkc1tpXTtcbiAgICBkZWxldGUgc2hhbGxvd0NvcHlba2V5XTtcbiAgfVxuXG4gIHJldHVybiBzaGFsbG93Q29weTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb21pdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/omit.js/es/index.js\n");

/***/ })

};
;