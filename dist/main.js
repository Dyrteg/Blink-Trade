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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderItem.js */ \"./src/modules/renderItem.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth.js */ \"./src/modules/auth.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_renderItem_js__WEBPACK_IMPORTED_MODULE_0__.render)();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__.accordion)();\r\n(0,_modules_auth_js__WEBPACK_IMPORTED_MODULE_2__.auth)();\n\n//# sourceURL=webpack://blink-trade/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordion: () => (/* binding */ accordion)\n/* harmony export */ });\nconst accordion = () => {\r\n    document.addEventListener(\"DOMContentLoaded\", function () {\r\n        const accordionItems = document.querySelectorAll('.accordion-item');\r\n        const mainItemBlockOne = document.getElementById('main__item-block-one');\r\n        const mainItemBlockTwo = document.getElementById('main__item-block-two');\r\n        const mainItemBlockOneContainer = document.getElementById('main__item-warning-container');\r\n        \r\n        \r\n    \r\n        accordionItems.forEach((item) => {\r\n            const header = item.querySelector('.accordion-header');\r\n            const contentOne = document.querySelector('.accordion-content-one');\r\n            const contentTwo = document.querySelector('.accordion-content-two');\r\n            const arrow = item.querySelector('.arrow'); // Получаем стрелку\r\n    \r\n            header.addEventListener('click', () => {\r\n                contentOne.classList.toggle('active');\r\n                contentTwo.classList.toggle('active');\r\n                arrow.classList.toggle('active'); // Переключаем класс \"active\" для стрелки\r\n                if (contentOne.classList.value === 'accordion-content-one active') {\r\n                    mainItemBlockOne.style.height = \"500px\";\r\n                    mainItemBlockTwo.style.height = \"500px\";\r\n                    mainItemBlockOneContainer.style.height = \"450px\";\r\n                } else {\r\n                    mainItemBlockOne.style.height = \"770px\";\r\n                    mainItemBlockTwo.style.height = \"770px\";\r\n                    mainItemBlockOneContainer.style.height = \"750px\";\r\n                }\r\n                \r\n            });\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://blink-trade/./src/modules/accordion.js?");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var _renderUserItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUserItem */ \"./src/modules/renderUserItem.js\");\n\r\n\r\n\r\nconst auth = () => {\r\n    function openModal() {\r\n        document.getElementById('modal').style.visibility = 'visible';\r\n    }\r\n\r\n    // Функция для закрытия модального окна\r\n    function closeModal() {\r\n        document.getElementById('modal').style.visibility = 'hidden';\r\n    }\r\n\r\n    // Обработчик события клика по кнопке \"Войти\"\r\n    document.getElementById('open-modal-button').addEventListener('click', openModal);\r\n\r\n    // Обработчик события отправки формы авторизации\r\n    document.getElementById('login-form').addEventListener('submit', function (e) {\r\n        e.preventDefault();\r\n        \r\n        const username = document.getElementById('username').value;\r\n        const password = document.getElementById('password').value;\r\n\r\n        fetch('../../json/user.json')\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                const users = data.users;\r\n                const user = users.find(u => u.username === username && u.password === password);\r\n\r\n\r\n                if (user) {\r\n                    document.getElementById('message').textContent = 'Авторизация успешна!';\r\n                    closeModal(); // Закрыть модальное окно после успешной авторизации\r\n                    (0,_renderUserItem__WEBPACK_IMPORTED_MODULE_0__.renderUserItem)(user.id);\r\n                } else {\r\n                    document.getElementById('message').textContent = 'Неправильное имя пользователя или пароль.';\r\n                }\r\n            })\r\n            .catch(error => {\r\n                console.error('Произошла ошибка при загрузке файла auth.json:', error);\r\n            });\r\n    });\r\n\r\n    // Обработчик события клика вне модального окна\r\n    window.addEventListener('click', function (event) {\r\n        const modal = document.getElementById('modal');\r\n        if (event.target === modal) {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n    // Обработчик события клика на крестик\r\n    window.addEventListener('click', function (event) {\r\n        const modal = document.querySelector('.close-button');\r\n        if (event.target === modal) {\r\n            closeModal();\r\n        }\r\n    });\r\n} \r\n\r\n\r\n\n\n//# sourceURL=webpack://blink-trade/./src/modules/auth.js?");

/***/ }),

/***/ "./src/modules/renderItem.js":
/*!***********************************!*\
  !*** ./src/modules/renderItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = () => {\r\n    document.addEventListener('DOMContentLoaded', function () {\r\n        const cardsContainer = document.querySelector('.main__item-container-two');\r\n    \r\n        // Используйте fetch для получения данных из файла JSON\r\n        fetch('../../json/items.json')\r\n            .then(response => {\r\n                if (!response.ok) {\r\n                    throw new Error('Network response was not ok');\r\n                }\r\n                return response.json(); // Разрешение Promise с данными JSON\r\n            })\r\n            .then(data => {\r\n                // Рендеринг карточек на основе полученных данных\r\n                renderCards(data.items);\r\n            })\r\n            .catch(error => {\r\n                console.error('There was a problem with the fetch operation:', error);\r\n            });\r\n    \r\n        // Функция для рендеринга карточек\r\n        function renderCards(data) {\r\n            data.forEach(cardData => {\r\n                // Создание элементов для каждой карточки\r\n                const card = `\r\n                <div class=\"item__card\">\r\n                    <div class=\"card__image\">\r\n                        <img src=\"${cardData.image}\" alt=\"currier\" class=\"card__picture\">\r\n                    </div>\r\n                            \r\n                    <div class=\"card__description\">\r\n                        <p class=\"card__title\">${cardData.title}</p>\r\n                        <p class=\"card__rarity\">${cardData.rarity}</p>\r\n                        <p class=\"card__price\">${cardData.price}</p>\r\n                        <button class=\"card__basket\">\r\n                            <img src=\"./img/basket.png\" alt=\"basket\" class=\"card__basket-picture\">\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                `\r\n                cardsContainer.insertAdjacentHTML('beforeend', card);\r\n            });\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://blink-trade/./src/modules/renderItem.js?");

/***/ }),

/***/ "./src/modules/renderUserItem.js":
/*!***************************************!*\
  !*** ./src/modules/renderUserItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUserItem: () => (/* binding */ renderUserItem)\n/* harmony export */ });\nconst renderUserItem = (userID) => {\r\n    const mainItemWarning = document.getElementById('main__item-warning-container');\r\n    const mainItemContainerOne = document.querySelector('.main__item-container-one');\r\n\r\n    mainItemContainerOne.style.display = 'flex';\r\n    mainItemWarning.style.display = 'none';\r\n\r\n    const cardsContainer = document.querySelector('.main__item-container-one');\r\n    \r\n        // Используйте fetch для получения данных из файла JSON\r\n    // Загрузка данных о предметах\r\n    fetch('../../json/items.json')\r\n    .then(response => response.json())\r\n    .then(itemsData => {\r\n        // Загрузка данных о пользователях\r\n        fetch('../../json/user.json')\r\n            .then(response => response.json())\r\n            .then(usersData => {\r\n                // Объединение данных и рендеринг пользователей\r\n                const usersWithItems = usersData.users.map(user => {\r\n                    const userItems = user.itemIds.map(itemId => {\r\n                        return itemsData.items.find(item => item.itemId === itemId);\r\n                    });\r\n                    return { ...user, items: userItems };\r\n                });\r\n\r\n                renderItems(usersWithItems);\r\n            })\r\n\r\n    })\r\n\r\n\r\n\r\n    // Функция для рендеринга предметов пользователя\r\n    function renderItems(users) {\r\n        users.forEach(user => {\r\n            if (user.id === userID) {\r\n                user.items.forEach(cardData => {\r\n                    // Создание элементов для каждой карточки\r\n                const card = `\r\n                <div class=\"item__card\">\r\n                    <div class=\"card__image\">\r\n                        <img src=\"${cardData.image}\" alt=\"currier\" class=\"card__picture\">\r\n                    </div>\r\n                                \r\n                    <div class=\"card__description\">\r\n                        <p class=\"card__title\">${cardData.title}</p>\r\n                        <p class=\"card__rarity\">${cardData.rarity}</p>\r\n                        <p class=\"card__price\">${cardData.price}</p>\r\n                        <button class=\"card__basket\">\r\n                            <img src=\"./img/basket.png\" alt=\"basket\" class=\"card__basket-picture\">\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                `\r\n                cardsContainer.insertAdjacentHTML('beforeend', card);\r\n                });\r\n            }\r\n        });\r\n    }\r\n        \r\n        \r\n\r\n    \r\n        // Функция для рендеринга карточек\r\n    // function renderCards(data) {\r\n    //     data.forEach(cardData => {\r\n\r\n    //         console.log(cardData);\r\n    //             // Создание элементов для каждой карточки\r\n    //         const card = `\r\n    //         <div class=\"item__card\">\r\n    //             <div class=\"card__image\">\r\n    //                 <img src=\"${cardData.image}\" alt=\"currier\" class=\"card__picture\">\r\n    //             </div>\r\n                            \r\n    //             <div class=\"card__description\">\r\n    //                 <p class=\"card__title\">${cardData.title}</p>\r\n    //                 <p class=\"card__rarity\">${cardData.rarity}</p>\r\n    //                 <p class=\"card__price\">${cardData.price}</p>\r\n    //                 <button class=\"card__basket\">\r\n    //                     <img src=\"./img/basket.png\" alt=\"basket\" class=\"card__basket-picture\">\r\n    //                 </button>\r\n    //             </div>\r\n    //         </div>\r\n    //         `\r\n    //         cardsContainer.insertAdjacentHTML('beforeend', card);\r\n    //     });\r\n    // }\r\n};\n\n//# sourceURL=webpack://blink-trade/./src/modules/renderUserItem.js?");

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