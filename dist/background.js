/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background/icons.js":
/*!*********************************!*\
  !*** ./src/background/icons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICON_DISABLED": () => (/* binding */ ICON_DISABLED),
/* harmony export */   "ICON_LIVE": () => (/* binding */ ICON_LIVE),
/* harmony export */   "ICON_READY": () => (/* binding */ ICON_READY)
/* harmony export */ });
var ICON_LIVE = {
  path: {
    24: 'assets/live/cloud_24.png',
    32: 'assets/live/cloud_32.png',
    48: 'assets/live/cloud_48.png'
  }
};
var ICON_READY = {
  path: {
    24: 'assets/ready/cloud_24.png',
    32: 'assets/ready/cloud_32.png',
    48: 'assets/ready/cloud_48.png'
  }
};
var ICON_DISABLED = {
  path: {
    24: 'assets/disabled/cloud_24.png',
    32: 'assets/disabled/cloud_32.png',
    48: 'assets/disabled/cloud_48.png'
  }
};

/***/ }),

/***/ "./src/messages/check_debug_present.js":
/*!*********************************************!*\
  !*** ./src/messages/check_debug_present.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var NAME = 'check_debug_present';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: NAME,
  send: function send() {
    return {
      name: NAME
    };
  },
  receive: function receive(request) {
    return request.name === NAME;
  }
});

/***/ }),

/***/ "./src/messages/debug_is_present.js":
/*!******************************************!*\
  !*** ./src/messages/debug_is_present.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var NAME = 'debug_is_present';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: NAME,
  send: function send(present) {
    return {
      name: NAME,
      is_present: present
    };
  },
  receive: function receive(request) {
    return request.name === NAME;
  },
  test: function test(request) {
    return request.is_present;
  }
});

/***/ }),

/***/ "./src/messages/index.js":
/*!*******************************!*\
  !*** ./src/messages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECK_DEBUG_PRESENT": () => (/* reexport safe */ _check_debug_present__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "DEBUG_IS_PRESENT": () => (/* reexport safe */ _debug_is_present__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _check_debug_present__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_debug_present */ "./src/messages/check_debug_present.js");
/* harmony import */ var _debug_is_present__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug_is_present */ "./src/messages/debug_is_present.js");



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/background/icons.js");
/* harmony import */ var messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! messages */ "./src/messages/index.js");

 // Handles when the active tab changes
//

chrome.tabs.onActivated.addListener(function (tab) {
  console.log("Tab In Focus. Sending ".concat(messages__WEBPACK_IMPORTED_MODULE_1__.CHECK_DEBUG_PRESENT.name, " message"));
  chrome.tabs.sendMessage(tab.tabId, messages__WEBPACK_IMPORTED_MODULE_1__.CHECK_DEBUG_PRESENT.send());
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (messages__WEBPACK_IMPORTED_MODULE_1__.DEBUG_IS_PRESENT.receive(request)) {
    console.log("".concat(messages__WEBPACK_IMPORTED_MODULE_1__.DEBUG_IS_PRESENT.name, " message received"));
    var present = messages__WEBPACK_IMPORTED_MODULE_1__.DEBUG_IS_PRESENT.test(request);
    console.log("".concat(messages__WEBPACK_IMPORTED_MODULE_1__.DEBUG_IS_PRESENT.name, " is ").concat(present));
    present ? setIcon(_icons__WEBPACK_IMPORTED_MODULE_0__.ICON_READY) : setIcon(_icons__WEBPACK_IMPORTED_MODULE_0__.ICON_DISABLED);
  }
});

function setIcon(path) {
  chrome.action.setIcon(path);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFQLENBQWNELE9BQWQsQ0FBc0IzQixJQUF0QjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL2JhY2tncm91bmQvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9tZXNzYWdlcy9jaGVja19kZWJ1Z19wcmVzZW50LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbWVzc2FnZXMvZGVidWdfaXNfcHJlc2VudC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21lc3NhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSUNPTl9MSVZFID0ge1xuICBwYXRoOiB7XG4gICAgMjQ6ICdhc3NldHMvbGl2ZS9jbG91ZF8yNC5wbmcnLFxuICAgIDMyOiAnYXNzZXRzL2xpdmUvY2xvdWRfMzIucG5nJyxcbiAgICA0ODogJ2Fzc2V0cy9saXZlL2Nsb3VkXzQ4LnBuZycsXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBJQ09OX1JFQURZID0ge1xuICBwYXRoOiB7XG4gICAgMjQ6ICdhc3NldHMvcmVhZHkvY2xvdWRfMjQucG5nJyxcbiAgICAzMjogJ2Fzc2V0cy9yZWFkeS9jbG91ZF8zMi5wbmcnLFxuICAgIDQ4OiAnYXNzZXRzL3JlYWR5L2Nsb3VkXzQ4LnBuZycsXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBJQ09OX0RJU0FCTEVEID0ge1xuICBwYXRoOiB7XG4gICAgMjQ6ICdhc3NldHMvZGlzYWJsZWQvY2xvdWRfMjQucG5nJyxcbiAgICAzMjogJ2Fzc2V0cy9kaXNhYmxlZC9jbG91ZF8zMi5wbmcnLFxuICAgIDQ4OiAnYXNzZXRzL2Rpc2FibGVkL2Nsb3VkXzQ4LnBuZycsXG4gIH0sXG59XG4iLCJjb25zdCBOQU1FID0gJ2NoZWNrX2RlYnVnX3ByZXNlbnQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogTkFNRSxcbiAgc2VuZDogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBOQU1FLFxuICAgIH1cbiAgfSxcbiAgcmVjZWl2ZTogKHJlcXVlc3QpID0+IHJlcXVlc3QubmFtZSA9PT0gTkFNRSxcbn1cbiIsImNvbnN0IE5BTUUgPSAnZGVidWdfaXNfcHJlc2VudCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBOQU1FLFxuICBzZW5kOiAocHJlc2VudCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBOQU1FLFxuICAgICAgaXNfcHJlc2VudDogcHJlc2VudCxcbiAgICB9XG4gIH0sXG4gIHJlY2VpdmU6IChyZXF1ZXN0KSA9PiByZXF1ZXN0Lm5hbWUgPT09IE5BTUUsXG4gIHRlc3Q6IChyZXF1ZXN0KSA9PiByZXF1ZXN0LmlzX3ByZXNlbnQsXG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENIRUNLX0RFQlVHX1BSRVNFTlQgfSBmcm9tICcuL2NoZWNrX2RlYnVnX3ByZXNlbnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIERFQlVHX0lTX1BSRVNFTlQgfSBmcm9tICcuL2RlYnVnX2lzX3ByZXNlbnQnXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IElDT05fUkVBRFksIElDT05fTElWRSwgSUNPTl9ESVNBQkxFRCB9IGZyb20gJy4vaWNvbnMnXG5pbXBvcnQgeyBDSEVDS19ERUJVR19QUkVTRU5ULCBERUJVR19JU19QUkVTRU5UIH0gZnJvbSAnbWVzc2FnZXMnXG5cbi8vIEhhbmRsZXMgd2hlbiB0aGUgYWN0aXZlIHRhYiBjaGFuZ2VzXG4vL1xuY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBjb25zb2xlLmxvZyhgVGFiIEluIEZvY3VzLiBTZW5kaW5nICR7Q0hFQ0tfREVCVUdfUFJFU0VOVC5uYW1lfSBtZXNzYWdlYClcbiAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLnRhYklkLCBDSEVDS19ERUJVR19QUkVTRU5ULnNlbmQoKSlcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgaWYgKERFQlVHX0lTX1BSRVNFTlQucmVjZWl2ZShyZXF1ZXN0KSkge1xuICAgIGNvbnNvbGUubG9nKGAke0RFQlVHX0lTX1BSRVNFTlQubmFtZX0gbWVzc2FnZSByZWNlaXZlZGApXG5cbiAgICBsZXQgcHJlc2VudCA9IERFQlVHX0lTX1BSRVNFTlQudGVzdChyZXF1ZXN0KVxuXG4gICAgY29uc29sZS5sb2coYCR7REVCVUdfSVNfUFJFU0VOVC5uYW1lfSBpcyAke3ByZXNlbnR9YClcblxuICAgIHByZXNlbnQgPyBzZXRJY29uKElDT05fUkVBRFkpIDogc2V0SWNvbihJQ09OX0RJU0FCTEVEKVxuICB9XG59KVxuXG5mdW5jdGlvbiBzZXRJY29uKHBhdGgpIHtcbiAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHBhdGgpXG59XG4iXSwibmFtZXMiOlsiSUNPTl9MSVZFIiwicGF0aCIsIklDT05fUkVBRFkiLCJJQ09OX0RJU0FCTEVEIiwiTkFNRSIsIm5hbWUiLCJzZW5kIiwicmVjZWl2ZSIsInJlcXVlc3QiLCJwcmVzZW50IiwiaXNfcHJlc2VudCIsInRlc3QiLCJkZWZhdWx0IiwiQ0hFQ0tfREVCVUdfUFJFU0VOVCIsIkRFQlVHX0lTX1BSRVNFTlQiLCJjaHJvbWUiLCJ0YWJzIiwib25BY3RpdmF0ZWQiLCJhZGRMaXN0ZW5lciIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kTWVzc2FnZSIsInRhYklkIiwicnVudGltZSIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInNldEljb24iLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9