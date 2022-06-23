/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!******************************************************!*\
  !*** ./src/scripts/check_debug_is_present_script.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! messages */ "./src/messages/index.js");

setTimeout(function () {
  var status = window.hasOwnProperty('nwtServerDebugRef');
  messages__WEBPACK_IMPORTED_MODULE_0__.DebugStatusMessage.sendToWindow(status);
}, 100);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2NoZWNrX2RlYnVnX2lzX3ByZXNlbnRfc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLHdCQUFiOztJQUVxQkM7Ozs7Ozs7V0FDbkIsaUJBQWVDLE9BQWYsRUFBd0I7TUFDdEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJEQUFaO01BQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO01BRUEsT0FBT0EsT0FBTyxJQUFJQSxPQUFPLENBQUNHLElBQVIsS0FBaUJMLElBQW5DO0lBQ0Q7OztXQUVELDBCQUF3Qk0sS0FBeEIsRUFBK0I7TUFDN0JILE9BQU8sQ0FBQ0MsR0FBUixtQkFBdUJKLElBQXZCLDZCQUE4Q00sS0FBOUM7TUFFQUMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLFdBQVosQ0FBd0JILEtBQXhCLEVBQStCO1FBQzdCRCxJQUFJLEVBQUVMO01BRHVCLENBQS9CO0lBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJILElBQU1BLElBQUksR0FBRyxjQUFiOztJQUVxQlU7Ozs7Ozs7V0FDbkIsaUJBQWVSLE9BQWYsRUFBd0I7TUFDdEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFaO01BQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO01BRUEsT0FBT0EsT0FBTyxJQUFJQSxPQUFPLENBQUNHLElBQVIsS0FBaUJMLElBQW5DO0lBQ0Q7OztXQUVELDBCQUF3QlcsTUFBeEIsRUFBZ0M7TUFDOUJKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlSCxXQUFmLENBQTJCO1FBQ3pCSixJQUFJLEVBQUVMLElBRG1CO1FBRXpCVyxNQUFNLEVBQUVBO01BRmlCLENBQTNCO0lBSUQ7OztXQUVELHNCQUFvQkEsTUFBcEIsRUFBNEI7TUFDMUJFLE1BQU0sQ0FBQ0MsV0FBUCxDQUNFO1FBQ0VULElBQUksRUFBRSxjQURSO1FBRUVNLE1BQU0sRUFBRUE7TUFGVixDQURGLEVBS0UsR0FMRjtJQU9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCSDs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBSyxVQUFVLENBQUMsWUFBWTtFQUNyQixJQUFJTCxNQUFNLEdBQUdFLE1BQU0sQ0FBQ0ksY0FBUCxDQUFzQixtQkFBdEIsQ0FBYjtFQUNBUCxxRUFBQSxDQUFnQ0MsTUFBaEM7QUFDRCxDQUhTLEVBR1AsR0FITyxDQUFWLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21lc3NhZ2VzL0NoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbWVzc2FnZXMvRGVidWdTdGF0dXNNZXNzYWdlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbWVzc2FnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9jaGVja19kZWJ1Z19pc19wcmVzZW50X3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOQU1FID0gJ2NoZWNrX2RlYnVnX2lzX3ByZXNlbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlIHtcbiAgc3RhdGljIGFjY2VwdHMobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKCdDaGVja0RlYnVnSXNQcmVzZW50TWVzc2FnZSBjaGVja2luZyBhY2NlcHRhbmNlIG9mIG1lc3NhZ2UnKVxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG5cbiAgICByZXR1cm4gbWVzc2FnZSAmJiBtZXNzYWdlLm5hbWUgPT09IE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZVRvVGFiKHRhYklkKSB7XG4gICAgY29uc29sZS5sb2coYFNlbmRpbmcgJHtOQU1FfSBtZXNzYWdlIHRvIHRhYiAke3RhYklkfWApXG5cbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgbmFtZTogTkFNRSxcbiAgICB9KVxuICB9XG59XG4iLCJjb25zdCBOQU1FID0gJ2RlYnVnX3N0YXR1cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdTdGF0dXNNZXNzYWdlIHtcbiAgc3RhdGljIGFjY2VwdHMobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKCdEZWJ1Z1N0YXR1c01lc3NhZ2UgY2hlY2tpbmcgbWVzc2FnZScpXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcblxuICAgIHJldHVybiBtZXNzYWdlICYmIG1lc3NhZ2UubmFtZSA9PT0gTkFNRVxuICB9XG5cbiAgc3RhdGljIHNlbmRUb0JhY2tncm91bmQoc3RhdHVzKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbmFtZTogTkFNRSxcbiAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgc2VuZFRvV2luZG93KHN0YXR1cykge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2RlYnVnX3N0YXR1cycsXG4gICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgfSxcbiAgICAgICcqJyxcbiAgICApXG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tEZWJ1Z0lzUHJlc2VudE1lc3NhZ2UgfSBmcm9tICcuL0NoZWNrRGVidWdJc1ByZXNlbnRNZXNzYWdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWJ1Z1N0YXR1c01lc3NhZ2UgfSBmcm9tICcuL0RlYnVnU3RhdHVzTWVzc2FnZSdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGVidWdTdGF0dXNNZXNzYWdlIH0gZnJvbSAnbWVzc2FnZXMnXG5cbnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICBsZXQgc3RhdHVzID0gd2luZG93Lmhhc093blByb3BlcnR5KCdud3RTZXJ2ZXJEZWJ1Z1JlZicpXG4gIERlYnVnU3RhdHVzTWVzc2FnZS5zZW5kVG9XaW5kb3coc3RhdHVzKVxufSwgMTAwKVxuIl0sIm5hbWVzIjpbIk5BTUUiLCJDaGVja0RlYnVnSXNQcmVzZW50TWVzc2FnZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInRhYklkIiwiY2hyb21lIiwidGFicyIsInNlbmRNZXNzYWdlIiwiRGVidWdTdGF0dXNNZXNzYWdlIiwic3RhdHVzIiwicnVudGltZSIsIndpbmRvdyIsInBvc3RNZXNzYWdlIiwiZGVmYXVsdCIsInNldFRpbWVvdXQiLCJoYXNPd25Qcm9wZXJ0eSIsInNlbmRUb1dpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=