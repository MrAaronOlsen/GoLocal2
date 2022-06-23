/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
var scripts = __webpack_require__(/*! ./node_script_paths */ "./src/scripts/node_script_paths.js");

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
/* harmony export */   "IsPageCompatable": () => (/* reexport safe */ _ispagecompatible_IsPageCompatable__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ScriptPaths": () => (/* reexport safe */ _ScriptPaths__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ScriptPaths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScriptPaths */ "./src/scripts/ScriptPaths.js");
/* harmony import */ var _ispagecompatible_IsPageCompatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ispagecompatible/IsPageCompatable */ "./src/scripts/ispagecompatible/IsPageCompatable.js");



/***/ }),

/***/ "./src/scripts/ispagecompatible/IsPageCompatable.js":
/*!**********************************************************!*\
  !*** ./src/scripts/ispagecompatible/IsPageCompatable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECK_PAGE_MESSAGE": () => (/* binding */ CHECK_PAGE_MESSAGE),
/* harmony export */   "REPORT_PAGE_STATUS_RUNTIME": () => (/* binding */ REPORT_PAGE_STATUS_RUNTIME),
/* harmony export */   "REPORT_PAGE_STATUS_WINDOW": () => (/* binding */ REPORT_PAGE_STATUS_WINDOW),
/* harmony export */   "default": () => (/* binding */ IsPageCompatable)
/* harmony export */ });
/* harmony import */ var scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts */ "./src/scripts/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var CHECK_PAGE_MESSAGE = 'check_debug_is_present';
var REPORT_PAGE_STATUS_WINDOW = 'report_page_status_window';
var REPORT_PAGE_STATUS_RUNTIME = 'report_page_status_runtime';

var IsPageCompatable = /*#__PURE__*/function () {
  function IsPageCompatable() {
    _classCallCheck(this, IsPageCompatable);
  }

  _createClass(IsPageCompatable, null, [{
    key: "handleRuntimeMessage",
    value: function handleRuntimeMessage(message, callback) {
      if (!message) {
        return;
      }

      if (message.name === CHECK_PAGE_MESSAGE) {
        IsPageCompatable.loadCheckStatusScript();
      }

      if (message.name === REPORT_PAGE_STATUS_WINDOW) {
        var status = message.status || false;
        IsPageCompatable.sendReportPageStatusMessage_Runtime(status);
      }

      if (message.name === REPORT_PAGE_STATUS_RUNTIME) {
        var _status = message.status || false;

        callback && callback(_status);
      }
    }
  }, {
    key: "loadCheckStatusScript",
    value: function loadCheckStatusScript() {
      var script = document.createElement('script');
      script.src = chrome.runtime.getURL(scripts__WEBPACK_IMPORTED_MODULE_0__.ScriptPaths.REPORT_PAGE_STATUS_SCRIPT_URL.runtime);

      script.onload = function () {
        this.remove();
      };

      var element = document.head || document.documentElement;
      element && element.appendChild(script);
    } //
    // Message Broadcasts
    //
    // Sends message to the content script of the passed in tab to check if the loaded page is compatible with extension
    //

  }, {
    key: "sendCheckPageStatusMessage",
    value: function sendCheckPageStatusMessage(tabId, callback) {
      post("Sending Status Request To Tab. Tab: ".concat(tabId));
      chrome.tabs.sendMessage(tabId, {
        name: CHECK_PAGE_MESSAGE
      });
      callback();
    } // Sends a runtime message reporting the status passed in
    //

  }, {
    key: "sendReportPageStatusMessage_Runtime",
    value: function sendReportPageStatusMessage_Runtime(status) {
      post("Sending Status Report To Runtime. Status: ".concat(status));
      chrome.runtime.sendMessage({
        name: REPORT_PAGE_STATUS_RUNTIME,
        status: status
      });
    } // Sends a window message reporting the status passed in
    //

  }, {
    key: "sendReportPageStatusMessage_Window",
    value: function sendReportPageStatusMessage_Window(status) {
      post("Sending Status Report To Window. Status: ".concat(status));
      window.postMessage({
        name: REPORT_PAGE_STATUS_WINDOW,
        status: status
      }, '*');
    }
  }]);

  return IsPageCompatable;
}();



function post(message) {
  console.log('[PAGE STATUS] ' + message);
}

/***/ }),

/***/ "./src/scripts/node_script_paths.js":
/*!******************************************!*\
  !*** ./src/scripts/node_script_paths.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

var REPORT_PAGE_STATUS_SCRIPT = 'reportPageStatusScript.js';
exports.REPORT_PAGE_STATUS_SCRIPT_URL = {
  runtime: './scripts/' + REPORT_PAGE_STATUS_SCRIPT,
  entry: {
    "import": './src/scripts/ispagecompatible/' + REPORT_PAGE_STATUS_SCRIPT,
    filename: './scripts/' + REPORT_PAGE_STATUS_SCRIPT
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
/*!****************************************************************!*\
  !*** ./src/scripts/ispagecompatible/reportPageStatusScript.js ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IsPageCompatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsPageCompatable */ "./src/scripts/ispagecompatible/IsPageCompatable.js");

setTimeout(function () {
  var status = window.hasOwnProperty('nwtServerDebugRef');
  _IsPageCompatable__WEBPACK_IMPORTED_MODULE_0__["default"].sendReportPageStatusMessage_Window(status);
}, 100);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtJQUNMLFVBQVEsb0NBQW9DRix5QkFEdkM7SUFFTEcsUUFBUSxFQUFFLGVBQWVIO0VBRnBCO0FBRitCLENBQXhDOzs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUFJLFVBQVUsQ0FBQyxZQUFZO0VBQ3JCLElBQUk1QixNQUFNLEdBQUdvQixNQUFNLENBQUNTLGNBQVAsQ0FBc0IsbUJBQXRCLENBQWI7RUFDQXJDLDRGQUFBLENBQW9EUSxNQUFwRDtBQUNELENBSFMsRUFHUCxHQUhPLENBQVYsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9TY3JpcHRQYXRocy5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9zY3JpcHRzL2lzcGFnZWNvbXBhdGlibGUvSXNQYWdlQ29tcGF0YWJsZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvbm9kZV9zY3JpcHRfcGF0aHMuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9pc3BhZ2Vjb21wYXRpYmxlL3JlcG9ydFBhZ2VTdGF0dXNTY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2NyaXB0cyA9IHJlcXVpcmUoJy4vbm9kZV9zY3JpcHRfcGF0aHMnKVxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0c1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JpcHRQYXRocyB9IGZyb20gJy4vU2NyaXB0UGF0aHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIElzUGFnZUNvbXBhdGFibGUgfSBmcm9tICcuL2lzcGFnZWNvbXBhdGlibGUvSXNQYWdlQ29tcGF0YWJsZSdcbiIsImltcG9ydCB7IFNjcmlwdFBhdGhzIH0gZnJvbSAnc2NyaXB0cydcblxuZXhwb3J0IGNvbnN0IENIRUNLX1BBR0VfTUVTU0FHRSA9ICdjaGVja19kZWJ1Z19pc19wcmVzZW50J1xuZXhwb3J0IGNvbnN0IFJFUE9SVF9QQUdFX1NUQVRVU19XSU5ET1cgPSAncmVwb3J0X3BhZ2Vfc3RhdHVzX3dpbmRvdydcbmV4cG9ydCBjb25zdCBSRVBPUlRfUEFHRV9TVEFUVVNfUlVOVElNRSA9ICdyZXBvcnRfcGFnZV9zdGF0dXNfcnVudGltZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXNQYWdlQ29tcGF0YWJsZSB7XG4gIHN0YXRpYyBoYW5kbGVSdW50aW1lTWVzc2FnZShtZXNzYWdlLCBjYWxsYmFjaykge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gQ0hFQ0tfUEFHRV9NRVNTQUdFKSB7XG4gICAgICBJc1BhZ2VDb21wYXRhYmxlLmxvYWRDaGVja1N0YXR1c1NjcmlwdCgpXG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gUkVQT1JUX1BBR0VfU1RBVFVTX1dJTkRPVykge1xuICAgICAgbGV0IHN0YXR1cyA9IG1lc3NhZ2Uuc3RhdHVzIHx8IGZhbHNlXG4gICAgICBJc1BhZ2VDb21wYXRhYmxlLnNlbmRSZXBvcnRQYWdlU3RhdHVzTWVzc2FnZV9SdW50aW1lKHN0YXR1cylcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5uYW1lID09PSBSRVBPUlRfUEFHRV9TVEFUVVNfUlVOVElNRSkge1xuICAgICAgbGV0IHN0YXR1cyA9IG1lc3NhZ2Uuc3RhdHVzIHx8IGZhbHNlXG5cbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHN0YXR1cylcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbG9hZENoZWNrU3RhdHVzU2NyaXB0KCkge1xuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIHNjcmlwdC5zcmMgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoXG4gICAgICBTY3JpcHRQYXRocy5SRVBPUlRfUEFHRV9TVEFUVVNfU0NSSVBUX1VSTC5ydW50aW1lLFxuICAgIClcblxuICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgIGVsZW1lbnQgJiYgZWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH1cblxuICAvL1xuICAvLyBNZXNzYWdlIEJyb2FkY2FzdHNcbiAgLy9cblxuICAvLyBTZW5kcyBtZXNzYWdlIHRvIHRoZSBjb250ZW50IHNjcmlwdCBvZiB0aGUgcGFzc2VkIGluIHRhYiB0byBjaGVjayBpZiB0aGUgbG9hZGVkIHBhZ2UgaXMgY29tcGF0aWJsZSB3aXRoIGV4dGVuc2lvblxuICAvL1xuICBzdGF0aWMgc2VuZENoZWNrUGFnZVN0YXR1c01lc3NhZ2UodGFiSWQsIGNhbGxiYWNrKSB7XG4gICAgcG9zdChgU2VuZGluZyBTdGF0dXMgUmVxdWVzdCBUbyBUYWIuIFRhYjogJHt0YWJJZH1gKVxuXG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIG5hbWU6IENIRUNLX1BBR0VfTUVTU0FHRSxcbiAgICB9KVxuXG4gICAgY2FsbGJhY2soKVxuICB9XG5cbiAgLy8gU2VuZHMgYSBydW50aW1lIG1lc3NhZ2UgcmVwb3J0aW5nIHRoZSBzdGF0dXMgcGFzc2VkIGluXG4gIC8vXG4gIHN0YXRpYyBzZW5kUmVwb3J0UGFnZVN0YXR1c01lc3NhZ2VfUnVudGltZShzdGF0dXMpIHtcbiAgICBwb3N0KGBTZW5kaW5nIFN0YXR1cyBSZXBvcnQgVG8gUnVudGltZS4gU3RhdHVzOiAke3N0YXR1c31gKVxuXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbmFtZTogUkVQT1JUX1BBR0VfU1RBVFVTX1JVTlRJTUUsXG4gICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICB9KVxuICB9XG5cbiAgLy8gU2VuZHMgYSB3aW5kb3cgbWVzc2FnZSByZXBvcnRpbmcgdGhlIHN0YXR1cyBwYXNzZWQgaW5cbiAgLy9cbiAgc3RhdGljIHNlbmRSZXBvcnRQYWdlU3RhdHVzTWVzc2FnZV9XaW5kb3coc3RhdHVzKSB7XG4gICAgcG9zdChgU2VuZGluZyBTdGF0dXMgUmVwb3J0IFRvIFdpbmRvdy4gU3RhdHVzOiAke3N0YXR1c31gKVxuXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAge1xuICAgICAgICBuYW1lOiBSRVBPUlRfUEFHRV9TVEFUVVNfV0lORE9XLFxuICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgIH0sXG4gICAgICAnKicsXG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3QobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZygnW1BBR0UgU1RBVFVTXSAnICsgbWVzc2FnZSlcbn1cbiIsImNvbnN0IFJFUE9SVF9QQUdFX1NUQVRVU19TQ1JJUFQgPSAncmVwb3J0UGFnZVN0YXR1c1NjcmlwdC5qcydcblxuZXhwb3J0cy5SRVBPUlRfUEFHRV9TVEFUVVNfU0NSSVBUX1VSTCA9IHtcbiAgcnVudGltZTogJy4vc2NyaXB0cy8nICsgUkVQT1JUX1BBR0VfU1RBVFVTX1NDUklQVCxcbiAgZW50cnk6IHtcbiAgICBpbXBvcnQ6ICcuL3NyYy9zY3JpcHRzL2lzcGFnZWNvbXBhdGlibGUvJyArIFJFUE9SVF9QQUdFX1NUQVRVU19TQ1JJUFQsXG4gICAgZmlsZW5hbWU6ICcuL3NjcmlwdHMvJyArIFJFUE9SVF9QQUdFX1NUQVRVU19TQ1JJUFQsXG4gIH0sXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBJc1BhZ2VDb21wYXRhYmxlIGZyb20gJy4vSXNQYWdlQ29tcGF0YWJsZSdcblxuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gIGxldCBzdGF0dXMgPSB3aW5kb3cuaGFzT3duUHJvcGVydHkoJ253dFNlcnZlckRlYnVnUmVmJylcbiAgSXNQYWdlQ29tcGF0YWJsZS5zZW5kUmVwb3J0UGFnZVN0YXR1c01lc3NhZ2VfV2luZG93KHN0YXR1cylcbn0sIDEwMClcbiJdLCJuYW1lcyI6WyJzY3JpcHRzIiwicmVxdWlyZSIsImRlZmF1bHQiLCJTY3JpcHRQYXRocyIsIklzUGFnZUNvbXBhdGFibGUiLCJDSEVDS19QQUdFX01FU1NBR0UiLCJSRVBPUlRfUEFHRV9TVEFUVVNfV0lORE9XIiwiUkVQT1JUX1BBR0VfU1RBVFVTX1JVTlRJTUUiLCJtZXNzYWdlIiwiY2FsbGJhY2siLCJuYW1lIiwibG9hZENoZWNrU3RhdHVzU2NyaXB0Iiwic3RhdHVzIiwic2VuZFJlcG9ydFBhZ2VTdGF0dXNNZXNzYWdlX1J1bnRpbWUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJjaHJvbWUiLCJydW50aW1lIiwiZ2V0VVJMIiwiUkVQT1JUX1BBR0VfU1RBVFVTX1NDUklQVF9VUkwiLCJvbmxvYWQiLCJyZW1vdmUiLCJlbGVtZW50IiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwidGFiSWQiLCJwb3N0IiwidGFicyIsInNlbmRNZXNzYWdlIiwid2luZG93IiwicG9zdE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiUkVQT1JUX1BBR0VfU1RBVFVTX1NDUklQVCIsImV4cG9ydHMiLCJlbnRyeSIsImZpbGVuYW1lIiwic2V0VGltZW91dCIsImhhc093blByb3BlcnR5Iiwic2VuZFJlcG9ydFBhZ2VTdGF0dXNNZXNzYWdlX1dpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=