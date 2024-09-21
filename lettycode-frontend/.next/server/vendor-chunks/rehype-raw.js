"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-raw";
exports.ids = ["vendor-chunks/rehype-raw"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-raw/index.js":
/*!******************************************!*\
  !*** ./node_modules/rehype-raw/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeRaw)\n/* harmony export */ });\n/* harmony import */ var hast_util_raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-raw */ \"(ssr)/./node_modules/hast-util-raw/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast-util-raw').Options} Options\n * @typedef {import('hast-util-raw')} DoNotTouchAsThisImportIncludesRawInTree\n */\n\n\n\n/**\n * Plugin to parse the tree again (and raw nodes).\n * Keeping positional info OK.  🙌\n *\n * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}\n */\nfunction rehypeRaw(options = {}) {\n  return (tree, file) => {\n    // Assume that when a root was given, it’s also returned.\n    const result = /** @type {Root} */ ((0,hast_util_raw__WEBPACK_IMPORTED_MODULE_0__.raw)(tree, file, options))\n    return result\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXJhdy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSxpQ0FBaUM7QUFDOUMsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNlLCtCQUErQjtBQUM5QztBQUNBO0FBQ0EsOEJBQThCLE1BQU0sSUFBSSxrREFBRztBQUMzQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXR0eWNvZGUtZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXJhdy9pbmRleC5qcz9hYThmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QtdXRpbC1yYXcnKS5PcHRpb25zfSBPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0LXV0aWwtcmF3Jyl9IERvTm90VG91Y2hBc1RoaXNJbXBvcnRJbmNsdWRlc1Jhd0luVHJlZVxuICovXG5cbmltcG9ydCB7cmF3fSBmcm9tICdoYXN0LXV0aWwtcmF3J1xuXG4vKipcbiAqIFBsdWdpbiB0byBwYXJzZSB0aGUgdHJlZSBhZ2FpbiAoYW5kIHJhdyBub2RlcykuXG4gKiBLZWVwaW5nIHBvc2l0aW9uYWwgaW5mbyBPSy4gIPCfmYxcbiAqXG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP10gfCBBcnJheTx2b2lkPiwgUm9vdD59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlaHlwZVJhdyhvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuICh0cmVlLCBmaWxlKSA9PiB7XG4gICAgLy8gQXNzdW1lIHRoYXQgd2hlbiBhIHJvb3Qgd2FzIGdpdmVuLCBpdOKAmXMgYWxzbyByZXR1cm5lZC5cbiAgICBjb25zdCByZXN1bHQgPSAvKiogQHR5cGUge1Jvb3R9ICovIChyYXcodHJlZSwgZmlsZSwgb3B0aW9ucykpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-raw/index.js\n");

/***/ })

};
;