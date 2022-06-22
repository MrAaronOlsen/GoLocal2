/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECK_DEBUG_PRESENT_SCRIPT": () => (/* reexport safe */ _script_paths__WEBPACK_IMPORTED_MODULE_0__.CHECK_DEBUG_PRESENT_SCRIPT)
/* harmony export */ });
/* harmony import */ var _script_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script_paths */ "./src/scripts/script_paths.js");


/***/ }),

/***/ "./src/scripts/script_paths.js":
/*!*************************************!*\
  !*** ./src/scripts/script_paths.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECK_DEBUG_PRESENT_SCRIPT": () => (/* binding */ CHECK_DEBUG_PRESENT_SCRIPT)
/* harmony export */ });
var CHECK_DEBUG_PRESENT_SCRIPT = './scripts/check_debug_present.js';

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
/*!********************************!*\
  !*** ./src/content/content.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts */ "./src/scripts/index.js");
/* harmony import */ var messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! messages */ "./src/messages/index.js");

 // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   let script = document.createElement('script')
//   script.type = 'text/javascript'
//   let code
//   let go_local = message.go_local
//   if (go_local === false) {
//     code = 'window.nwtServerDebugRef.off();'
//     console.log('[GO LOCAL]: Switching off debug mode')
//   } else if (go_local === true) {
//     let port = message.port
//     let url = message.url
//     code = `window.nwtServerDebugRef.on('${port}', '${url}');`
//     console.log(`[GO LIVE] Switching on debug mode. Port=${port}, URL=${url}`)
//   } else {
//     return
//   }
//   script
//     .appendChild(document.createTextNode(code))(
//       document.head || document.documentElement,
//     )
//     .appendChild(script)
//   script.remove()
// })

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (!messages__WEBPACK_IMPORTED_MODULE_1__.CHECK_DEBUG_PRESENT.receive(message)) {
    return;
  }

  console.log("".concat(messages__WEBPACK_IMPORTED_MODULE_1__.CHECK_DEBUG_PRESENT.name, " message received in content"));
  window.addEventListener('message', function (event) {
    console.log("".concat(messages__WEBPACK_IMPORTED_MODULE_1__.DEBUG_IS_PRESENT.name, " message received in content"));
    var request = event.data || {};

    if (messages__WEBPACK_IMPORTED_MODULE_1__.DEBUG_IS_PRESENT.receive(request)) {
      console.log("Content sending message ".concat(messages__WEBPACK_IMPORTED_MODULE_1__.DEBUG_IS_PRESENT.name));
      chrome.runtime.sendMessage(messages__WEBPACK_IMPORTED_MODULE_1__.DEBUG_IS_PRESENT.send(request));
    }
  }, false);
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL(scripts__WEBPACK_IMPORTED_MODULE_0__.CHECK_DEBUG_PRESENT_SCRIPT);

  script.onload = function () {
    this.remove();
  };

  var element = document.head || document.documentElement;
  element && element.appendChild(script);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBRyxxQkFBYjtBQUVBLGlFQUFlO0VBQ2JDLElBQUksRUFBRUQsSUFETztFQUViRSxJQUFJLEVBQUUsZ0JBQU07SUFDVixPQUFPO01BQ0xELElBQUksRUFBRUQ7SUFERCxDQUFQO0VBR0QsQ0FOWTtFQU9iRyxPQUFPLEVBQUUsaUJBQUNDLE9BQUQ7SUFBQSxPQUFhQSxPQUFPLENBQUNILElBQVIsS0FBaUJELElBQTlCO0VBQUE7QUFQSSxDQUFmOzs7Ozs7Ozs7Ozs7OztBQ0ZBLElBQU1BLElBQUksR0FBRyxrQkFBYjtBQUVBLGlFQUFlO0VBQ2JDLElBQUksRUFBRUQsSUFETztFQUViRSxJQUFJLEVBQUUsY0FBQ0csT0FBRCxFQUFhO0lBQ2pCLE9BQU87TUFDTEosSUFBSSxFQUFFRCxJQUREO01BRUxNLFVBQVUsRUFBRUQ7SUFGUCxDQUFQO0VBSUQsQ0FQWTtFQVFiRixPQUFPLEVBQUUsaUJBQUNDLE9BQUQ7SUFBQSxPQUFhQSxPQUFPLENBQUNILElBQVIsS0FBaUJELElBQTlCO0VBQUEsQ0FSSTtFQVNiTyxJQUFJLEVBQUUsY0FBQ0gsT0FBRDtJQUFBLE9BQWFBLE9BQU8sQ0FBQ0UsVUFBckI7RUFBQTtBQVRPLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRUFPLElBQU1LLDBCQUEwQixHQUFHLGtDQUFuQzs7Ozs7O1VDQVA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtDQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCQyxXQUF6QixDQUFxQyxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLFlBQWxCLEVBQW1DO0VBQ3RFLElBQUksQ0FBQ1QsaUVBQUEsQ0FBNEJPLE9BQTVCLENBQUwsRUFBMkM7SUFDekM7RUFDRDs7RUFFREcsT0FBTyxDQUFDQyxHQUFSLFdBQWVYLDhEQUFmO0VBRUFZLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FDRSxTQURGLEVBRUUsVUFBQ0MsS0FBRCxFQUFXO0lBQ1RKLE9BQU8sQ0FBQ0MsR0FBUixXQUFlViwyREFBZjtJQUVBLElBQUlOLE9BQU8sR0FBR21CLEtBQUssQ0FBQ0MsSUFBTixJQUFjLEVBQTVCOztJQUVBLElBQUlkLDhEQUFBLENBQXlCTixPQUF6QixDQUFKLEVBQXVDO01BQ3JDZSxPQUFPLENBQUNDLEdBQVIsbUNBQXVDViwyREFBdkM7TUFDQUUsTUFBTSxDQUFDQyxPQUFQLENBQWVZLFdBQWYsQ0FBMkJmLDJEQUFBLENBQXNCTixPQUF0QixDQUEzQjtJQUNEO0VBQ0YsQ0FYSCxFQVlFLEtBWkY7RUFlQSxJQUFJc0IsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtFQUNBRixNQUFNLENBQUNHLEdBQVAsR0FBYWpCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlaUIsTUFBZixDQUFzQm5CLCtEQUF0QixDQUFiOztFQUVBZSxNQUFNLENBQUNLLE1BQVAsR0FBZ0IsWUFBWTtJQUMxQixLQUFLQyxNQUFMO0VBQ0QsQ0FGRDs7RUFJQSxJQUFJQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ08sSUFBVCxJQUFpQlAsUUFBUSxDQUFDUSxlQUF4QztFQUNBRixPQUFPLElBQUlBLE9BQU8sQ0FBQ0csV0FBUixDQUFvQlYsTUFBcEIsQ0FBWDtBQUNELENBL0JELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21lc3NhZ2VzL2NoZWNrX2RlYnVnX3ByZXNlbnQuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9tZXNzYWdlcy9kZWJ1Z19pc19wcmVzZW50LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbWVzc2FnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9zY3JpcHRfcGF0aHMuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvY29udGVudC9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5BTUUgPSAnY2hlY2tfZGVidWdfcHJlc2VudCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBOQU1FLFxuICBzZW5kOiAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IE5BTUUsXG4gICAgfVxuICB9LFxuICByZWNlaXZlOiAocmVxdWVzdCkgPT4gcmVxdWVzdC5uYW1lID09PSBOQU1FLFxufVxuIiwiY29uc3QgTkFNRSA9ICdkZWJ1Z19pc19wcmVzZW50J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IE5BTUUsXG4gIHNlbmQ6IChwcmVzZW50KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IE5BTUUsXG4gICAgICBpc19wcmVzZW50OiBwcmVzZW50LFxuICAgIH1cbiAgfSxcbiAgcmVjZWl2ZTogKHJlcXVlc3QpID0+IHJlcXVlc3QubmFtZSA9PT0gTkFNRSxcbiAgdGVzdDogKHJlcXVlc3QpID0+IHJlcXVlc3QuaXNfcHJlc2VudCxcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ0hFQ0tfREVCVUdfUFJFU0VOVCB9IGZyb20gJy4vY2hlY2tfZGVidWdfcHJlc2VudCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgREVCVUdfSVNfUFJFU0VOVCB9IGZyb20gJy4vZGVidWdfaXNfcHJlc2VudCdcbiIsImV4cG9ydCAqIGZyb20gJy4vc2NyaXB0X3BhdGhzJ1xuIiwiZXhwb3J0IGNvbnN0IENIRUNLX0RFQlVHX1BSRVNFTlRfU0NSSVBUID0gJy4vc2NyaXB0cy9jaGVja19kZWJ1Z19wcmVzZW50LmpzJ1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDSEVDS19ERUJVR19QUkVTRU5UX1NDUklQVCB9IGZyb20gJ3NjcmlwdHMnXG5pbXBvcnQgeyBDSEVDS19ERUJVR19QUkVTRU5ULCBERUJVR19JU19QUkVTRU5UIH0gZnJvbSAnbWVzc2FnZXMnXG5cbi8vIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbi8vICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4vLyAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcblxuLy8gICBsZXQgY29kZVxuLy8gICBsZXQgZ29fbG9jYWwgPSBtZXNzYWdlLmdvX2xvY2FsXG5cbi8vICAgaWYgKGdvX2xvY2FsID09PSBmYWxzZSkge1xuLy8gICAgIGNvZGUgPSAnd2luZG93Lm53dFNlcnZlckRlYnVnUmVmLm9mZigpOydcbi8vICAgICBjb25zb2xlLmxvZygnW0dPIExPQ0FMXTogU3dpdGNoaW5nIG9mZiBkZWJ1ZyBtb2RlJylcbi8vICAgfSBlbHNlIGlmIChnb19sb2NhbCA9PT0gdHJ1ZSkge1xuLy8gICAgIGxldCBwb3J0ID0gbWVzc2FnZS5wb3J0XG4vLyAgICAgbGV0IHVybCA9IG1lc3NhZ2UudXJsXG5cbi8vICAgICBjb2RlID0gYHdpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vbignJHtwb3J0fScsICcke3VybH0nKTtgXG4vLyAgICAgY29uc29sZS5sb2coYFtHTyBMSVZFXSBTd2l0Y2hpbmcgb24gZGVidWcgbW9kZS4gUG9ydD0ke3BvcnR9LCBVUkw9JHt1cmx9YClcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm5cbi8vICAgfVxuXG4vLyAgIHNjcmlwdFxuLy8gICAgIC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2RlKSkoXG4vLyAgICAgICBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbi8vICAgICApXG4vLyAgICAgLmFwcGVuZENoaWxkKHNjcmlwdClcbi8vICAgc2NyaXB0LnJlbW92ZSgpXG4vLyB9KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIGlmICghQ0hFQ0tfREVCVUdfUFJFU0VOVC5yZWNlaXZlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zb2xlLmxvZyhgJHtDSEVDS19ERUJVR19QUkVTRU5ULm5hbWV9IG1lc3NhZ2UgcmVjZWl2ZWQgaW4gY29udGVudGApXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ21lc3NhZ2UnLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYCR7REVCVUdfSVNfUFJFU0VOVC5uYW1lfSBtZXNzYWdlIHJlY2VpdmVkIGluIGNvbnRlbnRgKVxuXG4gICAgICBsZXQgcmVxdWVzdCA9IGV2ZW50LmRhdGEgfHwge31cblxuICAgICAgaWYgKERFQlVHX0lTX1BSRVNFTlQucmVjZWl2ZShyZXF1ZXN0KSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29udGVudCBzZW5kaW5nIG1lc3NhZ2UgJHtERUJVR19JU19QUkVTRU5ULm5hbWV9YClcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoREVCVUdfSVNfUFJFU0VOVC5zZW5kKHJlcXVlc3QpKVxuICAgICAgfVxuICAgIH0sXG4gICAgZmFsc2UsXG4gIClcblxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgc2NyaXB0LnNyYyA9IGNocm9tZS5ydW50aW1lLmdldFVSTChDSEVDS19ERUJVR19QUkVTRU5UX1NDUklQVClcblxuICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVtb3ZlKClcbiAgfVxuXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgZWxlbWVudCAmJiBlbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdClcbn0pXG4iXSwibmFtZXMiOlsiTkFNRSIsIm5hbWUiLCJzZW5kIiwicmVjZWl2ZSIsInJlcXVlc3QiLCJwcmVzZW50IiwiaXNfcHJlc2VudCIsInRlc3QiLCJkZWZhdWx0IiwiQ0hFQ0tfREVCVUdfUFJFU0VOVCIsIkRFQlVHX0lTX1BSRVNFTlQiLCJDSEVDS19ERUJVR19QUkVTRU5UX1NDUklQVCIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsInNlbmRNZXNzYWdlIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZ2V0VVJMIiwib25sb2FkIiwicmVtb3ZlIiwiZWxlbWVudCIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=