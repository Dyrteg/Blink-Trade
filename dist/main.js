/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion.js */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth.js */ \"./src/modules/auth.js\");\n\r\n\r\n\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__.accordion)();\r\n(0,_modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.auth)();\n\n//# sourceURL=webpack://blink-trade/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordion: () => (/* binding */ accordion)\n/* harmony export */ });\nconst accordion = () => {\r\n    document.addEventListener(\"DOMContentLoaded\", function () {\r\n        const accordionItems = document.querySelectorAll('.accordion-item');\r\n        const mainItemBlockOne = document.getElementById('main__item-block-one');\r\n        const mainItemBlockTwo = document.getElementById('main__item-block-two');\r\n        \r\n    \r\n        accordionItems.forEach((item) => {\r\n            const header = item.querySelector('.accordion-header');\r\n            const contentOne = document.querySelector('.accordion-content-one');\r\n            const contentTwo = document.querySelector('.accordion-content-two');\r\n            const arrow = item.querySelector('.arrow'); // Получаем стрелку\r\n    \r\n            header.addEventListener('click', () => {\r\n                contentOne.classList.toggle('active');\r\n                contentTwo.classList.toggle('active');\r\n                arrow.classList.toggle('active'); // Переключаем класс \"active\" для стрелки\r\n                console.log(contentOne.classList.value);\r\n                if (contentOne.classList.value === 'accordion-content-one active') {\r\n                    mainItemBlockOne.style.height = \"500px\";\r\n                    mainItemBlockTwo.style.height = \"500px\";\r\n                } else {\r\n                    mainItemBlockOne.style.height = \"750px\";\r\n                    mainItemBlockTwo.style.height = \"750px\";\r\n                }\r\n                \r\n            });\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://blink-trade/./src/modules/accordion.js?");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n\r\nconst auth = () => {\r\n    function openModal() {\r\n        document.getElementById('modal').style.visibility = 'visible';\r\n    }\r\n\r\n    // Функция для закрытия модального окна\r\n    function closeModal() {\r\n        document.getElementById('modal').style.visibility = 'hidden';\r\n    }\r\n\r\n    // Обработчик события клика по кнопке \"Войти\"\r\n    document.getElementById('open-modal-button').addEventListener('click', openModal);\r\n\r\n    // Обработчик события отправки формы авторизации\r\n    document.getElementById('login-form').addEventListener('submit', function (e) {\r\n        e.preventDefault();\r\n        \r\n        const username = document.getElementById('username').value;\r\n        const password = document.getElementById('password').value;\r\n\r\n        fetch('../../json/auth.json')\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                const users = data.users;\r\n                const user = users.find(u => u.username === username && u.password === password);\r\n\r\n                if (user) {\r\n                    document.getElementById('message').textContent = 'Авторизация успешна!';\r\n                    closeModal(); // Закрыть модальное окно после успешной авторизации\r\n                } else {\r\n                    document.getElementById('message').textContent = 'Неправильное имя пользователя или пароль.';\r\n                }\r\n            })\r\n            .catch(error => {\r\n                console.error('Произошла ошибка при загрузке файла auth.json:', error);\r\n            });\r\n    });\r\n\r\n    // Обработчик события клика вне модального окна\r\n    window.addEventListener('click', function (event) {\r\n        const modal = document.getElementById('modal');\r\n        if (event.target === modal) {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n    // Обработчик события клика на крестик\r\n    window.addEventListener('click', function (event) {\r\n        const modal = document.querySelector('.close-button');\r\n        if (event.target === modal) {\r\n            closeModal();\r\n        }\r\n    });\r\n} \r\n\r\n\r\n\n\n//# sourceURL=webpack://blink-trade/./src/modules/auth.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;