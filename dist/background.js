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

/***/ "./src/messages/CheckDebugIsPresentMessage.js":
/*!****************************************************!*\
  !*** ./src/messages/CheckDebugIsPresentMessage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckDebugIsPresentMessage": () => (/* reexport safe */ _CheckDebugIsPresentMessage__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "DebugStatusMessage": () => (/* reexport safe */ _DebugStatusMessage__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _CheckDebugIsPresentMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckDebugIsPresentMessage */ "./src/messages/CheckDebugIsPresentMessage.js");
/* harmony import */ var _DebugStatusMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebugStatusMessage */ "./src/messages/DebugStatusMessage.js");



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

 // Event fired when a tab is opened
//

chrome.tabs.onCreated.addListener(function (tab) {
  console.log('[Event] Tab Created');
  checkDebugIsPresent(tab.id);
}); // Event fired when tab focus changes
//

chrome.tabs.onActivated.addListener(function (tab) {
  console.log('[Event] Tab Activated');
  checkDebugIsPresent(tab.tabId);
}); // Event fired when url changes
//

chrome.tabs.onUpdated.addListener(function (id, change, tab) {
  console.log('[Event] Tab Updated');
  checkDebugIsPresent(id);
}); // Initializes a chain of messages to discover if the tab (tabId) is valid for debug
//
// - Check Debug Present: background -> content
// - Debug is Present: window script -> content
// - Debug is Present: content -> background
//

function checkDebugIsPresent(tabId) {
  setIcon(_icons__WEBPACK_IMPORTED_MODULE_0__.ICON_DISABLED);
  messages__WEBPACK_IMPORTED_MODULE_1__.CheckDebugIsPresentMessage.sendMessageToTab(tabId);
} // Listener for "Debug Is Present" message sent from the content script
//


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (messages__WEBPACK_IMPORTED_MODULE_1__.DebugStatusMessage.accepts(request)) {
    var status = request.status;
    status ? setIcon(_icons__WEBPACK_IMPORTED_MODULE_0__.ICON_READY) : setIcon(_icons__WEBPACK_IMPORTED_MODULE_0__.ICON_DISABLED);
  }
}); // Set the Extension Icon
//

function setIcon(path) {
  chrome.action.setIcon(path);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEQsR0FLQTtBQUNBOztBQUNBQyxNQUFNLENBQUNDLElBQVAsQ0FBWWMsU0FBWixDQUFzQkwsV0FBdEIsQ0FBa0MsVUFBQ0csRUFBRCxFQUFLRyxNQUFMLEVBQWFMLEdBQWIsRUFBcUI7RUFDckRmLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0VBQ0FlLG1CQUFtQixDQUFDQyxFQUFELENBQW5CO0FBQ0QsQ0FIRCxHQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTRCxtQkFBVCxDQUE2QmIsS0FBN0IsRUFBb0M7RUFDbENrQixPQUFPLENBQUN6QixpREFBRCxDQUFQO0VBQ0FFLGlGQUFBLENBQTRDSyxLQUE1QztBQUNELEVBRUQ7QUFDQTs7O0FBQ0FDLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlYyxTQUFmLENBQXlCVCxXQUF6QixDQUFxQyxVQUFDVSxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLFlBQWxCLEVBQW1DO0VBQ3RFLElBQUluQixnRUFBQSxDQUEyQmlCLE9BQTNCLENBQUosRUFBeUM7SUFDdkMsSUFBSWhCLE1BQU0sR0FBR2dCLE9BQU8sQ0FBQ2hCLE1BQXJCO0lBRUFBLE1BQU0sR0FBR2EsT0FBTyxDQUFDMUIsOENBQUQsQ0FBVixHQUF5QjBCLE9BQU8sQ0FBQ3pCLGlEQUFELENBQXRDO0VBQ0Q7QUFDRixDQU5ELEdBUUE7QUFDQTs7QUFDQSxTQUFTeUIsT0FBVCxDQUFpQjNCLElBQWpCLEVBQXVCO0VBQ3JCVSxNQUFNLENBQUN3QixNQUFQLENBQWNQLE9BQWQsQ0FBc0IzQixJQUF0QjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL2JhY2tncm91bmQvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9tZXNzYWdlcy9DaGVja0RlYnVnSXNQcmVzZW50TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21lc3NhZ2VzL0RlYnVnU3RhdHVzTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21lc3NhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSUNPTl9MSVZFID0ge1xuICBwYXRoOiB7XG4gICAgMjQ6ICdhc3NldHMvbGl2ZS9jbG91ZF8yNC5wbmcnLFxuICAgIDMyOiAnYXNzZXRzL2xpdmUvY2xvdWRfMzIucG5nJyxcbiAgICA0ODogJ2Fzc2V0cy9saXZlL2Nsb3VkXzQ4LnBuZycsXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBJQ09OX1JFQURZID0ge1xuICBwYXRoOiB7XG4gICAgMjQ6ICdhc3NldHMvcmVhZHkvY2xvdWRfMjQucG5nJyxcbiAgICAzMjogJ2Fzc2V0cy9yZWFkeS9jbG91ZF8zMi5wbmcnLFxuICAgIDQ4OiAnYXNzZXRzL3JlYWR5L2Nsb3VkXzQ4LnBuZycsXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBJQ09OX0RJU0FCTEVEID0ge1xuICBwYXRoOiB7XG4gICAgMjQ6ICdhc3NldHMvZGlzYWJsZWQvY2xvdWRfMjQucG5nJyxcbiAgICAzMjogJ2Fzc2V0cy9kaXNhYmxlZC9jbG91ZF8zMi5wbmcnLFxuICAgIDQ4OiAnYXNzZXRzL2Rpc2FibGVkL2Nsb3VkXzQ4LnBuZycsXG4gIH0sXG59XG4iLCJjb25zdCBOQU1FID0gJ2NoZWNrX2RlYnVnX2lzX3ByZXNlbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlIHtcbiAgc3RhdGljIGFjY2VwdHMobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKCdDaGVja0RlYnVnSXNQcmVzZW50TWVzc2FnZSBjaGVja2luZyBhY2NlcHRhbmNlIG9mIG1lc3NhZ2UnKVxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG5cbiAgICByZXR1cm4gbWVzc2FnZSAmJiBtZXNzYWdlLm5hbWUgPT09IE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZVRvVGFiKHRhYklkKSB7XG4gICAgY29uc29sZS5sb2coYFNlbmRpbmcgJHtOQU1FfSBtZXNzYWdlIHRvIHRhYiAke3RhYklkfWApXG5cbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgbmFtZTogTkFNRSxcbiAgICB9KVxuICB9XG59XG4iLCJjb25zdCBOQU1FID0gJ2RlYnVnX3N0YXR1cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdTdGF0dXNNZXNzYWdlIHtcbiAgc3RhdGljIGFjY2VwdHMobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKCdEZWJ1Z1N0YXR1c01lc3NhZ2UgY2hlY2tpbmcgbWVzc2FnZScpXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcblxuICAgIHJldHVybiBtZXNzYWdlICYmIG1lc3NhZ2UubmFtZSA9PT0gTkFNRVxuICB9XG5cbiAgc3RhdGljIHNlbmRUb0JhY2tncm91bmQoc3RhdHVzKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbmFtZTogTkFNRSxcbiAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2VuZFRvV2luZG93KHN0YXR1cykge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2RlYnVnX3N0YXR1cycsXG4gICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgfSxcbiAgICAgICcqJyxcbiAgICApXG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tEZWJ1Z0lzUHJlc2VudE1lc3NhZ2UgfSBmcm9tICcuL0NoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWJ1Z1N0YXR1c01lc3NhZ2UgfSBmcm9tICcuL0RlYnVnU3RhdHVzTWVzc2FnZSdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSUNPTl9SRUFEWSwgSUNPTl9MSVZFLCBJQ09OX0RJU0FCTEVEIH0gZnJvbSAnLi9pY29ucydcbmltcG9ydCB7IENoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlLCBEZWJ1Z1N0YXR1c01lc3NhZ2UgfSBmcm9tICdtZXNzYWdlcydcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiBhIHRhYiBpcyBvcGVuZWRcbi8vXG5jaHJvbWUudGFicy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBjb25zb2xlLmxvZygnW0V2ZW50XSBUYWIgQ3JlYXRlZCcpXG4gIGNoZWNrRGVidWdJc1ByZXNlbnQodGFiLmlkKVxufSlcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiB0YWIgZm9jdXMgY2hhbmdlc1xuLy9cbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY29uc29sZS5sb2coJ1tFdmVudF0gVGFiIEFjdGl2YXRlZCcpXG4gIGNoZWNrRGVidWdJc1ByZXNlbnQodGFiLnRhYklkKVxufSlcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiB1cmwgY2hhbmdlc1xuLy9cbmNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigoaWQsIGNoYW5nZSwgdGFiKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdbRXZlbnRdIFRhYiBVcGRhdGVkJylcbiAgY2hlY2tEZWJ1Z0lzUHJlc2VudChpZClcbn0pXG5cbi8vIEluaXRpYWxpemVzIGEgY2hhaW4gb2YgbWVzc2FnZXMgdG8gZGlzY292ZXIgaWYgdGhlIHRhYiAodGFiSWQpIGlzIHZhbGlkIGZvciBkZWJ1Z1xuLy9cbi8vIC0gQ2hlY2sgRGVidWcgUHJlc2VudDogYmFja2dyb3VuZCAtPiBjb250ZW50XG4vLyAtIERlYnVnIGlzIFByZXNlbnQ6IHdpbmRvdyBzY3JpcHQgLT4gY29udGVudFxuLy8gLSBEZWJ1ZyBpcyBQcmVzZW50OiBjb250ZW50IC0+IGJhY2tncm91bmRcbi8vXG5mdW5jdGlvbiBjaGVja0RlYnVnSXNQcmVzZW50KHRhYklkKSB7XG4gIHNldEljb24oSUNPTl9ESVNBQkxFRClcbiAgQ2hlY2tEZWJ1Z0lzUHJlc2VudE1lc3NhZ2Uuc2VuZE1lc3NhZ2VUb1RhYih0YWJJZClcbn1cblxuLy8gTGlzdGVuZXIgZm9yIFwiRGVidWcgSXMgUHJlc2VudFwiIG1lc3NhZ2Ugc2VudCBmcm9tIHRoZSBjb250ZW50IHNjcmlwdFxuLy9cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgaWYgKERlYnVnU3RhdHVzTWVzc2FnZS5hY2NlcHRzKHJlcXVlc3QpKSB7XG4gICAgbGV0IHN0YXR1cyA9IHJlcXVlc3Quc3RhdHVzXG5cbiAgICBzdGF0dXMgPyBzZXRJY29uKElDT05fUkVBRFkpIDogc2V0SWNvbihJQ09OX0RJU0FCTEVEKVxuICB9XG59KVxuXG4vLyBTZXQgdGhlIEV4dGVuc2lvbiBJY29uXG4vL1xuZnVuY3Rpb24gc2V0SWNvbihwYXRoKSB7XG4gIGNocm9tZS5hY3Rpb24uc2V0SWNvbihwYXRoKVxufVxuIl0sIm5hbWVzIjpbIklDT05fTElWRSIsInBhdGgiLCJJQ09OX1JFQURZIiwiSUNPTl9ESVNBQkxFRCIsIk5BTUUiLCJDaGVja0RlYnVnSXNQcmVzZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInRhYklkIiwiY2hyb21lIiwidGFicyIsInNlbmRNZXNzYWdlIiwiRGVidWdTdGF0dXNNZXNzYWdlIiwic3RhdHVzIiwicnVudGltZSIsIndpbmRvdyIsInBvc3RNZXNzYWdlIiwiZGVmYXVsdCIsIm9uQ3JlYXRlZCIsImFkZExpc3RlbmVyIiwidGFiIiwiY2hlY2tEZWJ1Z0lzUHJlc2VudCIsImlkIiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJjaGFuZ2UiLCJzZXRJY29uIiwic2VuZE1lc3NhZ2VUb1RhYiIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJhY2NlcHRzIiwiYWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==