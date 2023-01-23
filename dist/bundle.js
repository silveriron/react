/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("var createDom = function createDom(node) {\n  if (typeof node === \"string\") {\n    var _element = document.createTextNode(node);\n    return _element;\n  }\n  var element = document.createElement(node.tag);\n  node.children.map(createDom).forEach(element.appendChild.bind(element));\n  return element;\n};\nvar vdom = {\n  tag: \"div\",\n  props: {},\n  children: [{\n    tag: \"h1\",\n    props: {},\n    children: [\"첫 컴포넌트\"]\n  }, {\n    tag: \"ul\",\n    props: {},\n    children: [{\n      tag: \"li\",\n      props: {},\n      children: [\"1번 아이템\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"2번 아이템\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"3번 아이템\"]\n    }]\n  }]\n};\ndocument.querySelector(\"#root\").appendChild(createDom(vdom));\n\n//# sourceURL=webpack://react/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;