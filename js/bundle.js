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

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calc() {\r\n    const result = document.querySelector('.calculating__result span')\r\n\r\n    let sex, ratio, height, weight, age \r\n\r\n    if (localStorage.getItem('sex')) {\r\n        sex = localStorage.getItem('sex')\r\n    } else {\r\n        sex = 'female'\r\n        localStorage.setItem('sex', 'female')\r\n    }\r\n\r\n    if (localStorage.getItem('ratio')) {\r\n        ratio = localStorage.getItem('ratio')\r\n    } else {\r\n        ratio = 1.375\r\n        localStorage.setItem('ratio', 1.375)\r\n    }\r\n\r\n    function initLocalSettings(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector)\r\n\r\n        elements.forEach(el => {\r\n            el.classList.remove(activeClass)\r\n            if (el.getAttribute('id') === localStorage.getItem('sex')) {\r\n                el.classList.add(activeClass)\r\n            }\r\n            if (el.getAttribute('data-ratio') === localStorage.getItem('ratio')) {\r\n                el.classList.add(activeClass)\r\n            }\r\n        })\r\n    }\r\n\r\n    initLocalSettings('#gender div', 'calculating__choose-item_active')\r\n    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active')\r\n\r\n\r\n    function calcTotal() {\r\n        if (!sex || !height || !weight || !age || !ratio) {\r\n            result.textContent = '_______'\r\n            return\r\n        }\r\n\r\n        if (sex === 'female') {\r\n            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)\r\n        } else {\r\n            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)\r\n        }\r\n    }\r\n\r\n    calcTotal()\r\n\r\n    function getStaticInfo(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector)\r\n\r\n        elements.forEach(el => {\r\n            el.addEventListener('click', e => {\r\n                if (e.target.getAttribute('data-ratio')) {\r\n                    ratio = +e.target.getAttribute('data-ratio')\r\n                    localStorage.setItem('ratio', ratio)\r\n\r\n                } else {\r\n                    sex = e.target.getAttribute('id')\r\n                    localStorage.setItem('sex', sex)\r\n                }\r\n    \r\n                elements.forEach(el => {\r\n                    el.classList.remove(activeClass)\r\n                })\r\n    \r\n                e.target.classList.add(activeClass)\r\n                calcTotal()\r\n    \r\n            })\r\n        })\r\n    }\r\n\r\n    getStaticInfo('#gender div', 'calculating__choose-item_active')\r\n    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active')\r\n\r\n    function checkInputValue(value) {\r\n        if (value.match(/\\D/)) {\r\n            return\r\n        }\r\n        return value\r\n    }\r\n\r\n    function getDynamicInfo(selector) {\r\n        const input = document.querySelector(selector)\r\n        input.addEventListener('input', (e) => {\r\n            \r\n            if (e.target.value.match(/\\D/)) {\r\n                e.target.style.border = '2px solid red'\r\n            } else {\r\n                e.target.style.border = 'none'\r\n            }\r\n\r\n            switch(input.getAttribute('id')) {\r\n                case 'height': \r\n                    height = checkInputValue(e.target.value)\r\n                    break\r\n                case 'weight': \r\n                    weight = checkInputValue(e.target.value)\r\n                    break\r\n                case 'age': \r\n                    age = checkInputValue(e.target.value)\r\n                    break\r\n            }\r\n            calcTotal()\r\n        })\r\n\r\n    }\r\n\r\n    getDynamicInfo('#height')\r\n    getDynamicInfo('#weight')\r\n    getDynamicInfo('#age')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack://food/./js/modules/calc.js?");

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction cards() {\r\n    class Menu {\r\n        constructor(img, alt, title, descr, price, parentSelector, ...classes) {\r\n            this.img = img,\r\n            this.alt = alt\r\n            this.title = title,\r\n            this.parent = document.querySelector(parentSelector)\r\n            this.descr = descr,\r\n            this.price = price,\r\n            this.classes = classes\r\n        }\r\n\r\n        create() {\r\n            const menu = document.createElement('div')\r\n            if (this.classes.length === 0) {\r\n                this.classes.push('menu__item')\r\n            }\r\n            this.classes.forEach(className => menu.classList.add(className))\r\n\r\n            menu.innerHTML = `<img src=${this.img} alt=${this.alt}>\r\n                              <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n                              <div class=\"menu__item-descr\">${this.descr}</div>\r\n                              <div class=\"menu__item-divider\"></div>\r\n                              <div class=\"menu__item-price\">\r\n                                <div class=\"menu__item-cost\">Цена:</div>\r\n                                <div class=\"menu__item-total\"><span>${this.price}</span> грн/день</div>\r\n                              </div>`\r\n\r\n            this.parent.append(menu)\r\n        }\r\n    }\r\n\r\n    const getResourse = async (url) => {\r\n        const res = await fetch(url)\r\n\r\n        if (!res.ok) {\r\n            throw new Error(`Could not fetch ${url}, status: ${res.status}`)\r\n        }\r\n\r\n        return await res.json()\r\n    }\r\n    \r\n    getResourse('http://localhost:3000/menu')\r\n        .then(data => {\r\n            data.forEach(({img, altimg, title, descr, price}) => {\r\n                new Menu(img, altimg, title, descr, price, '.menu .container').create()\r\n            })\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\r\n\n\n//# sourceURL=webpack://food/./js/modules/cards.js?");

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction forms() {\r\n    const message = {\r\n       loading: 'icons/spinner.svg',\r\n       success: 'Спасибо, скоро мы с Вами свяжемся.',\r\n       failure: 'Что-то пошло не так...',\r\n    }\r\n\r\n    const forms = document.querySelectorAll('form')\r\n\r\n    forms.forEach(form => {\r\n       bindPostData(form)\r\n    })\r\n\r\n    const postData = async (url, data) => {\r\n       const res = await fetch(url, {\r\n           method: \"POST\",\r\n           headers: {\r\n               'Content-type': 'application/json'\r\n           },\r\n           body: data\r\n        })\r\n\r\n       return await res.json()\r\n    }\r\n\r\n    function bindPostData(form) {\r\n       form.addEventListener('submit', e => {\r\n           e.preventDefault()\r\n            \r\n           const statusMessage = document.createElement('img')\r\n           statusMessage.classList.add('status')\r\n           statusMessage.src = message.loading\r\n           form.insertAdjacentElement('afterend', statusMessage)\r\n\r\n           const formData = new FormData(form)\r\n           const json = JSON.stringify(Object.fromEntries(formData.entries()))\r\n\r\n           postData('http://localhost:3000/requests', json)\r\n           .then(data => {\r\n               console.log('post', data)\r\n               showThanksModal(message.success)\r\n               statusMessage.remove()\r\n           }).catch((err) => {\r\n               showThanksModal(message.failure)\r\n               console.log('ERROR', err)\r\n           }).finally(() => {\r\n               form.reset()\r\n           })\r\n       })\r\n    }\r\n\r\n\r\n    function showThanksModal(message) {\r\n        const prevModalDialog = document.querySelector('.modal__dialog')\r\n        prevModalDialog.classList.add('hide')\r\n\r\n        openModal()\r\n\r\n        const thanksModal = document.createElement('div')\r\n        thanksModal.classList.add('modal__dialog')\r\n        thanksModal.innerHTML = `\r\n            <div class='modal__content'>\r\n                <div class='modal__close' data-close>x</div>\r\n                <div class='modal__title'>${message}</div>\r\n            </div>\r\n            `\r\n        document.querySelector('.modal').append(thanksModal)\r\n\r\n        setTimeout(() => {\r\n            thanksModal.remove()\r\n            prevModalDialog.classList.remove('hide')\r\n            closeModal()\r\n        }, 4000)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\r\n\n\n//# sourceURL=webpack://food/./js/modules/forms.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction modal() {\r\n    const btnsContactUs = document.querySelectorAll('[data-modal]'),\r\n          modalContactUs = document.querySelector('.modal')\r\n    \r\n    const openModal = () => {\r\n        modalContactUs.classList.add('show')\r\n        document.body.style.overflow = 'hidden'\r\n        clearTimeout(modalTimerId)\r\n    }\r\n\r\n    const closeModal = () => {\r\n        modalContactUs.classList.remove('show')\r\n        document.body.style.overflow = ''\r\n    }\r\n\r\n    btnsContactUs.forEach(btn => {\r\n        btn.addEventListener('click', openModal)\r\n    })\r\n\r\n    modalContactUs.addEventListener('click', e => {\r\n        if (modalContactUs == e.target || e.target.getAttribute('data-close') == '') {\r\n            closeModal()\r\n        }\r\n    })\r\n\r\n    document.addEventListener('keydown', e => {\r\n        if (e.code === 'Escape' && modalContactUs.classList.contains('show')) {\r\n            closeModal()\r\n        }\r\n    })\r\n\r\n    const modalTimerId = setTimeout(openModal, 55000)\r\n\r\n    // function showModalByScroll() {\r\n    //     if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {\r\n    //         openModal()\r\n    //         window.removeEventListener('scroll', showModalByScroll)\r\n    //     }\r\n    // }\r\n\r\n    // window.addEventListener('scroll', showModalByScroll)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack://food/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider() {\r\n\r\n    const prev = document.querySelector('.offer__slider-prev'),\r\n          next = document.querySelector('.offer__slider-next'),\r\n          currentSlide = document.querySelector('#current'),\r\n          totalSlides = document.querySelector('#total'),\r\n          slides = document.querySelectorAll('.offer__slide'),\r\n          slidesWrapper = document.querySelector('.offer__slider-wrapper'),\r\n          slidesField = document.querySelector('.offer__slider-inner'),\r\n          width = window.getComputedStyle(slidesWrapper).width,\r\n          slider = document.querySelector('.offer__slider')\r\n\r\n\r\n    let indexSlide = 0\r\n    let offset = 0\r\n    const dots = []\r\n\r\n    const getOnlyNum = str => +str.replace(/\\D/g, '')\r\n\r\n    if (slides.length < 10) {\r\n        totalSlides.textContent = `0${slides.length}`\r\n    } else {\r\n        totalSlides.textContent = slides.length    \r\n    }   \r\n    \r\n    const counterCurrent = (index) => {\r\n        if (index < 10) {\r\n            currentSlide.textContent = `0${index + 1}`\r\n        }\r\n        else {\r\n            currentSlide.textContent = index + 1\r\n        }\r\n    }\r\n\r\n    counterCurrent(indexSlide)\r\n\r\n    slidesField.style.width = 100 * slides.length + '%'\r\n    slidesField.style.display = 'flex'\r\n    slidesField.style.transition = '0.5s all'\r\n\r\n    slides.forEach(el => {\r\n        el.style.width = width     \r\n    })\r\n\r\n    function setActiveDot(activeIndex) {\r\n        dots.forEach(dot => dot.style.opacity = '.5')\r\n        dots[activeIndex].style.opacity = 1\r\n    }\r\n\r\n    next.addEventListener('click', e => {\r\n        if (offset == getOnlyNum(width) * (slides.length - 1)) {\r\n            offset = 0\r\n        } else {\r\n            offset += getOnlyNum(width)\r\n        }\r\n\r\n        indexSlide++\r\n        if (indexSlide > slides.length - 1) {\r\n            indexSlide = 0\r\n        }\r\n        counterCurrent(indexSlide)\r\n        slidesField.style.transform = `translateX(-${offset}px)`\r\n\r\n        setActiveDot(indexSlide)\r\n    })\r\n\r\n    prev.addEventListener('click', e => {\r\n        if (offset == 0) {\r\n            offset = getOnlyNum(width) * (slides.length - 1)\r\n        } else {\r\n            offset -= getOnlyNum(width)\r\n        }\r\n        indexSlide--\r\n              if (indexSlide < 0) {\r\n            indexSlide = slides.length - 1\r\n        }\r\n        counterCurrent(indexSlide)\r\n        slidesField.style.transform = `translateX(-${offset}px)`\r\n        \r\n        setActiveDot(indexSlide)\r\n    })\r\n\r\n    function createDot() {\r\n        const dotWrapper = document.createElement('ol')\r\n        dotWrapper.classList.add('dot__wrapper')\r\n\r\n        slides.forEach((el, i) => {\r\n            const dot = document.createElement('li')\r\n            dot.setAttribute('data-slide-to', i)\r\n            dot.classList.add('dot')\r\n            dotWrapper.append(dot) \r\n\r\n            if (indexSlide === i) {\r\n                dot.style.opacity = '1'\r\n            }\r\n            dots.push(dot)\r\n        })\r\n\r\n        slider.append(dotWrapper)\r\n        \r\n\r\n    }\r\n\r\n    createDot()\r\n\r\n    dots.forEach(dot => {\r\n        dot.addEventListener('click', e => {\r\n            const slideTo = +e.target.getAttribute('data-slide-to')\r\n            indexSlide = slideTo\r\n            offset = getOnlyNum(width) * (slideTo)\r\n            slidesField.style.transform = `translateX(-${offset}px)`\r\n\r\n            counterCurrent(indexSlide)\r\n            setActiveDot(indexSlide)\r\n\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack://food/./js/modules/slider.js?");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n    const tabs = document.querySelectorAll('.tabheader__item'),\r\n          tabsContent = document.querySelectorAll('.tabcontent'),\r\n          tabsParent = document.querySelector('.tabheader__items')\r\n\r\n    const hideTabContent = () => {\r\n        tabsContent.forEach(item => {\r\n            item.classList.add('hide')\r\n            item.classList.remove('show')\r\n        })\r\n\r\n        tabs.forEach(item => {\r\n            item.classList.remove('tabheader__item_active')\r\n        })\r\n    }\r\n\r\n    const showTabContent = (i = 0) => {\r\n        tabsContent[i].classList.add('show', 'fade')\r\n        tabsContent[i].classList.remove('hide')\r\n        tabs[i].classList.add('tabheader__item_active')\r\n    }\r\n\r\n    hideTabContent()\r\n    showTabContent()\r\n\r\n    tabsParent.addEventListener('click', event => {\r\n        const target = event.target\r\n\r\n        if (target && target.classList.contains('tabheader__item')) {\r\n            tabs.forEach((item, i) => {\r\n                if (target == item) {\r\n                    hideTabContent()\r\n                    showTabContent(i)   \r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://food/./js/modules/tabs.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timer() {\r\n    const deadLine = '2024-10-20'\r\n\r\n    const getTimeRemaning = (endTime) => {\r\n        let days, hours, minutes, seconds\r\n\r\n        const total = Date.parse(endTime) - Date.parse(new Date())\r\n\r\n        if (total > 0) {\r\n              days = Math.floor(total / (1000 * 60 * 60 * 24))\r\n              hours = Math.floor((total / (1000 * 60 * 60)) % 24)\r\n              minutes = Math.floor((total / (1000 * 60)) % 60)\r\n              seconds = Math.floor((total / 1000) % 60)\r\n        } else {\r\n              days = 0\r\n              hours = 0\r\n              minutes = 0\r\n              seconds = 0\r\n        }\r\n\r\n        return {\r\n            total,\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds,\r\n        }\r\n    }\r\n\r\n    const setClock = (selector, endTime) => {\r\n        const timer = document.querySelector(selector),\r\n              days = timer.querySelector('#days'),\r\n              hours = timer.querySelector('#hours'),\r\n              minutes = timer.querySelector('#minutes'),\r\n              seconds = timer.querySelector('#seconds')\r\n\r\n        updateClock()\r\n\r\n        function addZero(num) {\r\n            if (num < 10) {\r\n                return `0${num}`\r\n            } else {\r\n                return num\r\n            }\r\n        }\r\n        \r\n        function updateClock() {\r\n            const total = getTimeRemaning(endTime)\r\n\r\n            days.innerText = addZero(total.days) \r\n            hours.innerText = addZero(total.hours) \r\n            minutes.innerText = addZero(total.minutes)\r\n            seconds.innerText = addZero(total.seconds)\r\n        }\r\n\r\n        const timeInterval = setInterval(updateClock, 1000)\r\n\r\n        if (total.total <= 0) {\r\n            clearInterval(timeInterval)\r\n        }\r\n    }\r\n\r\n    setClock('.timer', deadLine)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack://food/./js/modules/timer.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ \"./js/modules/tabs.js\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer.js */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider.js */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc.js */ \"./js/modules/calc.js\");\n/* harmony import */ var _modules_cards_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cards.js */ \"./js/modules/cards.js\");\n/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms.js */ \"./js/modules/forms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    ;(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    ;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    ;(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    ;(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n    ;(0,_modules_cards_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n    ;(0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n    console.log('Yes')\r\n   \r\n\r\n})\r\n\n\n//# sourceURL=webpack://food/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;