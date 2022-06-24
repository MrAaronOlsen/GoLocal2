/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTabCompatible": () => (/* reexport safe */ _isTabCompatible__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "toggleDebugRefOff": () => (/* reexport safe */ _toggleDebugRefOff__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "toggleDebugRefOn": () => (/* reexport safe */ _toggleDebugRefOn__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _isTabCompatible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isTabCompatible */ "./src/scripts/isTabCompatible.js");
/* harmony import */ var _toggleDebugRefOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleDebugRefOn */ "./src/scripts/toggleDebugRefOn.js");
/* harmony import */ var _toggleDebugRefOff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleDebugRefOff */ "./src/scripts/toggleDebugRefOff.js");




/***/ }),

/***/ "./src/scripts/isTabCompatible.js":
/*!****************************************!*\
  !*** ./src/scripts/isTabCompatible.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTabCompatible)
/* harmony export */ });
function isTabCompatible(tabId, callback) {
  chrome.scripting.executeScript({
    target: {
      tabId: tabId
    },
    world: 'MAIN',
    func: function func() {
      return window.hasOwnProperty('nwtServerDebugRef');
    }
  }).then(function (frames) {
    var result = frames && frames[0].result;
    callback(result);
  }, function (error) {
    // Swollow the error. This is likely due to the page rejecting injected code,
    // which means we cant do anything no matter what
    callback(false);
  });
}

/***/ }),

/***/ "./src/scripts/toggleDebugRefOff.js":
/*!******************************************!*\
  !*** ./src/scripts/toggleDebugRefOff.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleDebugRefOff)
/* harmony export */ });
function toggleDebugRefOff(tabId, callback) {
  chrome.scripting.executeScript({
    target: {
      tabId: tabId
    },
    world: 'MAIN',
    func: function func() {
      window.nwtServerDebugRef.off();
    }
  }).then(function (frames) {
    callback();
  }, function (error) {
    // Swollow the error. This is likely due to the page rejecting injected code,
    // which means we cant do anything no matter what
    callback();
  });
}

function toggleOff() {}

/***/ }),

/***/ "./src/scripts/toggleDebugRefOn.js":
/*!*****************************************!*\
  !*** ./src/scripts/toggleDebugRefOn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleDebugRefOn)
/* harmony export */ });
function toggleDebugRefOn(tabId, url, callback) {
  chrome.scripting.executeScript({
    target: {
      tabId: tabId
    },
    world: 'MAIN',
    func: function func(port, url) {
      if (window.hasOwnProperty('nwtServerDebugRef')) {
        window.nwtServerDebugRef.on(port, url);
        return true;
      }

      return false;
    },
    args: [url.port, url.url]
  }).then(function (frames) {
    callback(frames && frames[0].result);
  }, function (error) {
    callback(false);
  });
}

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
/* harmony import */ var scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts */ "./src/scripts/index.js");
 // Event fired when a tab is opened
//

chrome.tabs.onCreated.addListener(function (tab) {
  console.log("[Event] Tab Created: ".concat(tab.id));
  handleEvent(tab.id);
}); // Event fired when tab focus changes
//

chrome.tabs.onActivated.addListener(function (tab) {
  console.log("[Event] Tab Activated: ".concat(tab.tabId));
  handleEvent(tab.tabId);
}); // Event fired when page changes
//

chrome.tabs.onUpdated.addListener(function (id, change, tab) {
  if (change.status === 'complete') {
    console.log("[Event] Tab Updated: ".concat(id));
    console.log(change);
    handleEvent(id);
  }
});

function handleEvent(tabId) {
  (0,scripts__WEBPACK_IMPORTED_MODULE_0__.isTabCompatible)(tabId, function (status) {
    status ? setIcon('#49f') : setIcon('#666');
  });
} // Listener for all runtime messages
//


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {}); // Set the Extension Icon
//

function setIcon(color) {
  chrome.action.setBadgeText({
    text: ' '
  });
  chrome.action.setBadgeBackgroundColor({
    color: color
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7O0FBQ0EsU0FBU0wsT0FBVCxDQUFpQk0sS0FBakIsRUFBd0I7RUFDdEJyQyxNQUFNLENBQUNzQyxNQUFQLENBQWNDLFlBQWQsQ0FBMkI7SUFBRUMsSUFBSSxFQUFFO0VBQVIsQ0FBM0I7RUFDQXhDLE1BQU0sQ0FBQ3NDLE1BQVAsQ0FBY0csdUJBQWQsQ0FBc0M7SUFBRUosS0FBSyxFQUFFQTtFQUFULENBQXRDO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvaXNUYWJDb21wYXRpYmxlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy90b2dnbGVEZWJ1Z1JlZk9mZi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvdG9nZ2xlRGVidWdSZWZPbi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1RhYkNvbXBhdGlibGUgfSBmcm9tICcuL2lzVGFiQ29tcGF0aWJsZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9nZ2xlRGVidWdSZWZPbiB9IGZyb20gJy4vdG9nZ2xlRGVidWdSZWZPbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9nZ2xlRGVidWdSZWZPZmYgfSBmcm9tICcuL3RvZ2dsZURlYnVnUmVmT2ZmJ1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJDb21wYXRpYmxlKHRhYklkLCBjYWxsYmFjaykge1xuICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgd29ybGQ6ICdNQUlOJyxcbiAgICAgIGZ1bmM6ICgpID0+IHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnbnd0U2VydmVyRGVidWdSZWYnKSxcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgKGZyYW1lcykgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZnJhbWVzICYmIGZyYW1lc1swXS5yZXN1bHRcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAvLyBTd29sbG93IHRoZSBlcnJvci4gVGhpcyBpcyBsaWtlbHkgZHVlIHRvIHRoZSBwYWdlIHJlamVjdGluZyBpbmplY3RlZCBjb2RlLFxuICAgICAgICAvLyB3aGljaCBtZWFucyB3ZSBjYW50IGRvIGFueXRoaW5nIG5vIG1hdHRlciB3aGF0XG4gICAgICAgIGNhbGxiYWNrKGZhbHNlKVxuICAgICAgfSxcbiAgICApXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVEZWJ1Z1JlZk9mZih0YWJJZCwgY2FsbGJhY2spIHtcbiAgY2hyb21lLnNjcmlwdGluZ1xuICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vZmYoKVxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgKGZyYW1lcykgPT4ge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIFN3b2xsb3cgdGhlIGVycm9yLiBUaGlzIGlzIGxpa2VseSBkdWUgdG8gdGhlIHBhZ2UgcmVqZWN0aW5nIGluamVjdGVkIGNvZGUsXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIGNhbnQgZG8gYW55dGhpbmcgbm8gbWF0dGVyIHdoYXRcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfSxcbiAgICApXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU9mZigpIHt9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVEZWJ1Z1JlZk9uKHRhYklkLCB1cmwsIGNhbGxiYWNrKSB7XG4gIGNocm9tZS5zY3JpcHRpbmdcbiAgICAuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYklkIH0sXG4gICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgZnVuYzogKHBvcnQsIHVybCkgPT4ge1xuICAgICAgICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KCdud3RTZXJ2ZXJEZWJ1Z1JlZicpKSB7XG4gICAgICAgICAgd2luZG93Lm53dFNlcnZlckRlYnVnUmVmLm9uKHBvcnQsIHVybClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgYXJnczogW3VybC5wb3J0LCB1cmwudXJsXSxcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgKGZyYW1lcykgPT4ge1xuICAgICAgICBjYWxsYmFjayhmcmFtZXMgJiYgZnJhbWVzWzBdLnJlc3VsdClcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY2FsbGJhY2soZmFsc2UpXG4gICAgICB9LFxuICAgIClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXNUYWJDb21wYXRpYmxlIH0gZnJvbSAnc2NyaXB0cydcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiBhIHRhYiBpcyBvcGVuZWRcbi8vXG5jaHJvbWUudGFicy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBjb25zb2xlLmxvZyhgW0V2ZW50XSBUYWIgQ3JlYXRlZDogJHt0YWIuaWR9YClcbiAgaGFuZGxlRXZlbnQodGFiLmlkKVxufSlcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiB0YWIgZm9jdXMgY2hhbmdlc1xuLy9cbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY29uc29sZS5sb2coYFtFdmVudF0gVGFiIEFjdGl2YXRlZDogJHt0YWIudGFiSWR9YClcbiAgaGFuZGxlRXZlbnQodGFiLnRhYklkKVxufSlcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiBwYWdlIGNoYW5nZXNcbi8vXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKGlkLCBjaGFuZ2UsIHRhYikgPT4ge1xuICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGNvbnNvbGUubG9nKGBbRXZlbnRdIFRhYiBVcGRhdGVkOiAke2lkfWApXG4gICAgY29uc29sZS5sb2coY2hhbmdlKVxuICAgIGhhbmRsZUV2ZW50KGlkKVxuICB9XG59KVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudCh0YWJJZCkge1xuICBpc1RhYkNvbXBhdGlibGUodGFiSWQsIChzdGF0dXMpID0+IHtcbiAgICBzdGF0dXMgPyBzZXRJY29uKCcjNDlmJykgOiBzZXRJY29uKCcjNjY2JylcbiAgfSlcbn1cblxuLy8gTGlzdGVuZXIgZm9yIGFsbCBydW50aW1lIG1lc3NhZ2VzXG4vL1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge30pXG5cbi8vIFNldCB0aGUgRXh0ZW5zaW9uIEljb25cbi8vXG5mdW5jdGlvbiBzZXRJY29uKGNvbG9yKSB7XG4gIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogJyAnIH0pXG4gIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogY29sb3IgfSlcbn1cbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiaXNUYWJDb21wYXRpYmxlIiwidG9nZ2xlRGVidWdSZWZPbiIsInRvZ2dsZURlYnVnUmVmT2ZmIiwidGFiSWQiLCJjYWxsYmFjayIsImNocm9tZSIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJ0YXJnZXQiLCJ3b3JsZCIsImZ1bmMiLCJ3aW5kb3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRoZW4iLCJmcmFtZXMiLCJyZXN1bHQiLCJlcnJvciIsIm53dFNlcnZlckRlYnVnUmVmIiwib2ZmIiwidG9nZ2xlT2ZmIiwidXJsIiwicG9ydCIsIm9uIiwiYXJncyIsInRhYnMiLCJvbkNyZWF0ZWQiLCJhZGRMaXN0ZW5lciIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImhhbmRsZUV2ZW50Iiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJjaGFuZ2UiLCJzdGF0dXMiLCJzZXRJY29uIiwicnVudGltZSIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJjb2xvciIsImFjdGlvbiIsInNldEJhZGdlVGV4dCIsInRleHQiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=