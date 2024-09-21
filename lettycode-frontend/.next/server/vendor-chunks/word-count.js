/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/word-count";
exports.ids = ["vendor-chunks/word-count"];
exports.modules = {

/***/ "(ssr)/./node_modules/word-count/index.js":
/*!******************************************!*\
  !*** ./node_modules/word-count/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Word Count\n *\n * Word count in respect of CJK characters.\n *\n * Copyright (c) 2015 - 2016 by Hsiaoming Yang.\n */\n\nvar pattern = /[a-zA-Z0-9_\\u0392-\\u03c9\\u00c0-\\u00ff\\u0600-\\u06ff]+|[\\u4e00-\\u9fff\\u3400-\\u4dbf\\uf900-\\ufaff\\u3040-\\u309f\\uac00-\\ud7af]+/g;\n\nmodule.exports = function (data) {\n  var m = data.match(pattern);\n  var count = 0;\n  if (!m) {\n    return 0;\n  }\n  for (var i = 0; i < m.length; i++) {\n    if (m[i].charCodeAt(0) >= 0x4e00) {\n      count += m[i].length;\n    } else {\n      count += 1;\n    }\n  }\n  return count;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd29yZC1jb3VudC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXR0eWNvZGUtZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvd29yZC1jb3VudC9pbmRleC5qcz82OGEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZCBDb3VudFxuICpcbiAqIFdvcmQgY291bnQgaW4gcmVzcGVjdCBvZiBDSksgY2hhcmFjdGVycy5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgLSAyMDE2IGJ5IEhzaWFvbWluZyBZYW5nLlxuICovXG5cbnZhciBwYXR0ZXJuID0gL1thLXpBLVowLTlfXFx1MDM5Mi1cXHUwM2M5XFx1MDBjMC1cXHUwMGZmXFx1MDYwMC1cXHUwNmZmXSt8W1xcdTRlMDAtXFx1OWZmZlxcdTM0MDAtXFx1NGRiZlxcdWY5MDAtXFx1ZmFmZlxcdTMwNDAtXFx1MzA5ZlxcdWFjMDAtXFx1ZDdhZl0rL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIG0gPSBkYXRhLm1hdGNoKHBhdHRlcm4pO1xuICB2YXIgY291bnQgPSAwO1xuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobVtpXS5jaGFyQ29kZUF0KDApID49IDB4NGUwMCkge1xuICAgICAgY291bnQgKz0gbVtpXS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb3VudDtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/word-count/index.js\n");

/***/ })

};
;