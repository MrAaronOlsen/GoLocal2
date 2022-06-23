/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/messages/CheckDebugIsPresentMessage.js":
/*!****************************************************!*\
  !*** ./src/messages/CheckDebugIsPresentMessage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckDebugIsPresentMessage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var NAME = 'check_debug_is_present';

var CheckDebugIsPresentMessage = /*#__PURE__*/function () {
  function CheckDebugIsPresentMessage() {
    _classCallCheck(this, CheckDebugIsPresentMessage);
  }

  _createClass(CheckDebugIsPresentMessage, null, [{
    key: "accepts",
    value: function accepts(message) {
      console.log('CheckDebugIsPresentMessage checking acceptance of message');
      console.log(message);
      return message && message.name === NAME;
    }
  }, {
    key: "sendMessageToTab",
    value: function sendMessageToTab(tabId) {
      console.log("Sending ".concat(NAME, " message to tab ").concat(tabId));
      chrome.tabs.sendMessage(tabId, {
        name: NAME
      });
    }
  }]);

  return CheckDebugIsPresentMessage;
}();



/***/ }),

/***/ "./src/messages/DebugStatusMessage.js":
/*!********************************************!*\
  !*** ./src/messages/DebugStatusMessage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugStatusMessage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var NAME = 'debug_status';

var DebugStatusMessage = /*#__PURE__*/function () {
  function DebugStatusMessage() {
    _classCallCheck(this, DebugStatusMessage);
  }

  _createClass(DebugStatusMessage, null, [{
    key: "accepts",
    value: function accepts(message) {
      console.log('DebugStatusMessage checking message');
      console.log(message);
      return message && message.name === NAME;
    }
  }, {
    key: "sendToBackground",
    value: function sendToBackground(status) {
      chrome.runtime.sendMessage({
        name: NAME,
        status: status
      });
    }
  }, {
    key: "sendToWindow",
    value: function sendToWindow(status) {
      window.postMessage({
        name: 'debug_status',
        status: status
      }, '*');
    }
  }]);

  return DebugStatusMessage;
}();



/***/ }),

/***/ "./src/messages/index.js":
/*!*******************************!*\
  !*** ./src/messages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckDebugIsPresentMessage": () => (/* reexport safe */ _CheckDebugIsPresentMessage__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "DebugStatusMessage": () => (/* reexport safe */ _DebugStatusMessage__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _CheckDebugIsPresentMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckDebugIsPresentMessage */ "./src/messages/CheckDebugIsPresentMessage.js");
/* harmony import */ var _DebugStatusMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebugStatusMessage */ "./src/messages/DebugStatusMessage.js");



/***/ }),

/***/ "./src/scripts/ScriptPaths.js":
/*!************************************!*\
  !*** ./src/scripts/ScriptPaths.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var scripts = __webpack_require__(/*! ./script_paths */ "./src/scripts/script_paths.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scripts);

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptPaths": () => (/* reexport safe */ _ScriptPaths__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ScriptPaths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScriptPaths */ "./src/scripts/ScriptPaths.js");


/***/ }),

/***/ "./src/scripts/script_paths.js":
/*!*************************************!*\
  !*** ./src/scripts/script_paths.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.CHECK_DEBUG_IS_PRESENT_SCRIPT_PATH = {
  runtime: './scripts/check_debug_is_present_script.js',
  entry: {
    "import": './src/scripts/check_debug_is_present_script.js',
    filename: './scripts/check_debug_is_present_script.js'
  }
};

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
// Listener for "Check Debug Present" message, sent from background
//

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (messages__WEBPACK_IMPORTED_MODULE_1__.CheckDebugIsPresentMessage.accepts(message)) {
    checkDebugIsPresent();
  }
}); // Checks if current content is debug compatible
//

function checkDebugIsPresent() {
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL(scripts__WEBPACK_IMPORTED_MODULE_0__.ScriptPaths.CHECK_DEBUG_IS_PRESENT_SCRIPT_PATH.runtime);

  script.onload = function () {
    this.remove();
  };

  var element = document.head || document.documentElement;
  element && element.appendChild(script);
} // Register an event listener for this content window to handle any Debug Is Present messages
//


window.addEventListener('message', handleWindowMessageEvent, false);

function handleWindowMessageEvent(message) {
  var request = message.data || {};
  console.log('Handling message');
  console.log(request);

  if (messages__WEBPACK_IMPORTED_MODULE_1__.DebugStatusMessage.accepts(request)) {
    var status = request.status;
    messages__WEBPACK_IMPORTED_MODULE_1__.DebugStatusMessage.sendToBackground(status);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ssT0FBUCxDQUFlcUIsTUFBZixDQUNYZiwyRkFEVyxDQUFiOztFQUlBVyxNQUFNLENBQUNLLE1BQVAsR0FBZ0IsWUFBWTtJQUMxQixLQUFLQyxNQUFMO0VBQ0QsQ0FGRDs7RUFJQSxJQUFJQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ08sSUFBVCxJQUFpQlAsUUFBUSxDQUFDUSxlQUF4QztFQUNBRixPQUFPLElBQUlBLE9BQU8sQ0FBQ0csV0FBUixDQUFvQlYsTUFBcEIsQ0FBWDtBQUNELEVBRUQ7QUFDQTs7O0FBQ0FoQixNQUFNLENBQUMyQixnQkFBUCxDQUF3QixTQUF4QixFQUFtQ0Msd0JBQW5DLEVBQTZELEtBQTdEOztBQUVBLFNBQVNBLHdCQUFULENBQWtDdkMsT0FBbEMsRUFBMkM7RUFDekMsSUFBSXdDLE9BQU8sR0FBR3hDLE9BQU8sQ0FBQ3lDLElBQVIsSUFBZ0IsRUFBOUI7RUFFQXhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0VBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZc0MsT0FBWjs7RUFFQSxJQUFJaEMsZ0VBQUEsQ0FBMkJnQyxPQUEzQixDQUFKLEVBQXlDO0lBQ3ZDLElBQUkvQixNQUFNLEdBQUcrQixPQUFPLENBQUMvQixNQUFyQjtJQUVBRCx5RUFBQSxDQUFvQ0MsTUFBcEM7RUFDRDtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21lc3NhZ2VzL0NoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbWVzc2FnZXMvRGVidWdTdGF0dXNNZXNzYWdlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbWVzc2FnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9zY3JpcHRzL1NjcmlwdFBhdGhzLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvc2NyaXB0X3BhdGhzLmpzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL2NvbnRlbnQvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOQU1FID0gJ2NoZWNrX2RlYnVnX2lzX3ByZXNlbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlIHtcbiAgc3RhdGljIGFjY2VwdHMobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKCdDaGVja0RlYnVnSXNQcmVzZW50TWVzc2FnZSBjaGVja2luZyBhY2NlcHRhbmNlIG9mIG1lc3NhZ2UnKVxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG5cbiAgICByZXR1cm4gbWVzc2FnZSAmJiBtZXNzYWdlLm5hbWUgPT09IE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZVRvVGFiKHRhYklkKSB7XG4gICAgY29uc29sZS5sb2coYFNlbmRpbmcgJHtOQU1FfSBtZXNzYWdlIHRvIHRhYiAke3RhYklkfWApXG5cbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgbmFtZTogTkFNRSxcbiAgICB9KVxuICB9XG59XG4iLCJjb25zdCBOQU1FID0gJ2RlYnVnX3N0YXR1cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdTdGF0dXNNZXNzYWdlIHtcbiAgc3RhdGljIGFjY2VwdHMobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKCdEZWJ1Z1N0YXR1c01lc3NhZ2UgY2hlY2tpbmcgbWVzc2FnZScpXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcblxuICAgIHJldHVybiBtZXNzYWdlICYmIG1lc3NhZ2UubmFtZSA9PT0gTkFNRVxuICB9XG5cbiAgc3RhdGljIHNlbmRUb0JhY2tncm91bmQoc3RhdHVzKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbmFtZTogTkFNRSxcbiAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2VuZFRvV2luZG93KHN0YXR1cykge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2RlYnVnX3N0YXR1cycsXG4gICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgfSxcbiAgICAgICcqJyxcbiAgICApXG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tEZWJ1Z0lzUHJlc2VudE1lc3NhZ2UgfSBmcm9tICcuL0NoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWJ1Z1N0YXR1c01lc3NhZ2UgfSBmcm9tICcuL0RlYnVnU3RhdHVzTWVzc2FnZSdcbiIsImNvbnN0IHNjcmlwdHMgPSByZXF1aXJlKCcuL3NjcmlwdF9wYXRocycpXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdHNcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2NyaXB0UGF0aHMgfSBmcm9tICcuL1NjcmlwdFBhdGhzJ1xuIiwiZXhwb3J0cy5DSEVDS19ERUJVR19JU19QUkVTRU5UX1NDUklQVF9QQVRIID0ge1xuICBydW50aW1lOiAnLi9zY3JpcHRzL2NoZWNrX2RlYnVnX2lzX3ByZXNlbnRfc2NyaXB0LmpzJyxcbiAgZW50cnk6IHtcbiAgICBpbXBvcnQ6ICcuL3NyYy9zY3JpcHRzL2NoZWNrX2RlYnVnX2lzX3ByZXNlbnRfc2NyaXB0LmpzJyxcbiAgICBmaWxlbmFtZTogJy4vc2NyaXB0cy9jaGVja19kZWJ1Z19pc19wcmVzZW50X3NjcmlwdC5qcycsXG4gIH0sXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFNjcmlwdFBhdGhzIH0gZnJvbSAnc2NyaXB0cydcbmltcG9ydCB7IENoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlLCBEZWJ1Z1N0YXR1c01lc3NhZ2UgfSBmcm9tICdtZXNzYWdlcydcblxuLy8gY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuLy8gICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jylcbi8vICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuXG4vLyAgIGxldCBjb2RlXG4vLyAgIGxldCBnb19sb2NhbCA9IG1lc3NhZ2UuZ29fbG9jYWxcblxuLy8gICBpZiAoZ29fbG9jYWwgPT09IGZhbHNlKSB7XG4vLyAgICAgY29kZSA9ICd3aW5kb3cubnd0U2VydmVyRGVidWdSZWYub2ZmKCk7J1xuLy8gICAgIGNvbnNvbGUubG9nKCdbR08gTE9DQUxdOiBTd2l0Y2hpbmcgb2ZmIGRlYnVnIG1vZGUnKVxuLy8gICB9IGVsc2UgaWYgKGdvX2xvY2FsID09PSB0cnVlKSB7XG4vLyAgICAgbGV0IHBvcnQgPSBtZXNzYWdlLnBvcnRcbi8vICAgICBsZXQgdXJsID0gbWVzc2FnZS51cmxcblxuLy8gICAgIGNvZGUgPSBgd2luZG93Lm53dFNlcnZlckRlYnVnUmVmLm9uKCcke3BvcnR9JywgJyR7dXJsfScpO2Bcbi8vICAgICBjb25zb2xlLmxvZyhgW0dPIExJVkVdIFN3aXRjaGluZyBvbiBkZWJ1ZyBtb2RlLiBQb3J0PSR7cG9ydH0sIFVSTD0ke3VybH1gKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVyblxuLy8gICB9XG5cbi8vICAgc2NyaXB0XG4vLyAgICAgLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvZGUpKShcbi8vICAgICAgIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuLy8gICAgIClcbi8vICAgICAuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuLy8gICBzY3JpcHQucmVtb3ZlKClcbi8vIH0pXG5cbi8vIExpc3RlbmVyIGZvciBcIkNoZWNrIERlYnVnIFByZXNlbnRcIiBtZXNzYWdlLCBzZW50IGZyb20gYmFja2dyb3VuZFxuLy9cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgaWYgKENoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlLmFjY2VwdHMobWVzc2FnZSkpIHtcbiAgICBjaGVja0RlYnVnSXNQcmVzZW50KClcbiAgfVxufSlcblxuLy8gQ2hlY2tzIGlmIGN1cnJlbnQgY29udGVudCBpcyBkZWJ1ZyBjb21wYXRpYmxlXG4vL1xuZnVuY3Rpb24gY2hlY2tEZWJ1Z0lzUHJlc2VudCgpIHtcbiAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIHNjcmlwdC5zcmMgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoXG4gICAgU2NyaXB0UGF0aHMuQ0hFQ0tfREVCVUdfSVNfUFJFU0VOVF9TQ1JJUFRfUEFUSC5ydW50aW1lLFxuICApXG5cbiAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlbW92ZSgpXG4gIH1cblxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gIGVsZW1lbnQgJiYgZWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpXG59XG5cbi8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGlzIGNvbnRlbnQgd2luZG93IHRvIGhhbmRsZSBhbnkgRGVidWcgSXMgUHJlc2VudCBtZXNzYWdlc1xuLy9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlV2luZG93TWVzc2FnZUV2ZW50LCBmYWxzZSlcblxuZnVuY3Rpb24gaGFuZGxlV2luZG93TWVzc2FnZUV2ZW50KG1lc3NhZ2UpIHtcbiAgbGV0IHJlcXVlc3QgPSBtZXNzYWdlLmRhdGEgfHwge31cblxuICBjb25zb2xlLmxvZygnSGFuZGxpbmcgbWVzc2FnZScpXG4gIGNvbnNvbGUubG9nKHJlcXVlc3QpXG5cbiAgaWYgKERlYnVnU3RhdHVzTWVzc2FnZS5hY2NlcHRzKHJlcXVlc3QpKSB7XG4gICAgbGV0IHN0YXR1cyA9IHJlcXVlc3Quc3RhdHVzXG5cbiAgICBEZWJ1Z1N0YXR1c01lc3NhZ2Uuc2VuZFRvQmFja2dyb3VuZChzdGF0dXMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOQU1FIiwiQ2hlY2tEZWJ1Z0lzUHJlc2VudE1lc3NhZ2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJ0YWJJZCIsImNocm9tZSIsInRhYnMiLCJzZW5kTWVzc2FnZSIsIkRlYnVnU3RhdHVzTWVzc2FnZSIsInN0YXR1cyIsInJ1bnRpbWUiLCJ3aW5kb3ciLCJwb3N0TWVzc2FnZSIsImRlZmF1bHQiLCJzY3JpcHRzIiwicmVxdWlyZSIsIlNjcmlwdFBhdGhzIiwiZXhwb3J0cyIsIkNIRUNLX0RFQlVHX0lTX1BSRVNFTlRfU0NSSVBUX1BBVEgiLCJlbnRyeSIsImZpbGVuYW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJhY2NlcHRzIiwiY2hlY2tEZWJ1Z0lzUHJlc2VudCIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImdldFVSTCIsIm9ubG9hZCIsInJlbW92ZSIsImVsZW1lbnQiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlV2luZG93TWVzc2FnZUV2ZW50IiwicmVxdWVzdCIsImRhdGEiLCJzZW5kVG9CYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==