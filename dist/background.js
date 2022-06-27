/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/SetIcon.js":
/*!********************************!*\
  !*** ./src/scripts/SetIcon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetIcon)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

var paths = {
  LIVE: {
    32: 'assets/live/cloud_32.png'
  },
  READY: {
    32: 'assets/ready/cloud_32.png'
  },
  DISABLED: {
    32: 'assets/disabled/cloud_32.png'
  }
};

var SetIcon = /*#__PURE__*/function () {
  function SetIcon() {
    _classCallCheck(this, SetIcon);
  }

  _createClass(SetIcon, null, [{
    key: "setReady",
    value: function setReady(tabId, callback) {
      _classStaticPrivateMethodGet(this, SetIcon, _setIcon).call(this, tabId, 'READY', callback);
    }
  }, {
    key: "setLive",
    value: function setLive(tabId, callback) {
      _classStaticPrivateMethodGet(this, SetIcon, _setIcon).call(this, tabId, 'LIVE', callback);
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(tabId, callback) {
      _classStaticPrivateMethodGet(this, SetIcon, _setIcon).call(this, tabId, 'DISABLED', callback);
    }
  }]);

  return SetIcon;
}();

function _setIcon(tabId, type, callback) {
  if (!callback) {
    callback = function callback() {};
  }

  chrome.action.setIcon({
    path: paths[type],
    tabId: tabId
  }, callback);
}



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetIcon": () => (/* reexport safe */ _SetIcon__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "isTabCompatible": () => (/* reexport safe */ _isTabCompatible__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "toggleDebugRefOff": () => (/* reexport safe */ _toggleDebugRefOff__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "toggleDebugRefOn": () => (/* reexport safe */ _toggleDebugRefOn__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _isTabCompatible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isTabCompatible */ "./src/scripts/isTabCompatible.js");
/* harmony import */ var _toggleDebugRefOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleDebugRefOn */ "./src/scripts/toggleDebugRefOn.js");
/* harmony import */ var _toggleDebugRefOff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleDebugRefOff */ "./src/scripts/toggleDebugRefOff.js");
/* harmony import */ var _SetIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetIcon */ "./src/scripts/SetIcon.js");





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
    // which means we cant do anything
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
function toggleDebugRefOn(tabId, urlModel, callback) {
  var url = urlModel.getUrl();
  var port = urlModel.getPort();
  chrome.scripting.executeScript({
    target: {
      tabId: tabId
    },
    world: 'MAIN',
    func: function func(port, url) {
      console.log("Setting Debug Mode. Url: ".concat(url, ", Port: ").concat(port));
      console.log(window);

      if (window.hasOwnProperty('nwtServerDebugRef')) {
        window.nwtServerDebugRef.on(port, url);
        return true;
      }

      return false;
    },
    args: [port, url]
  }).then(function (frames) {
    callback(frames && frames[0].result);
  }, function (error) {
    console.log(error);
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
  handleTabEvent(tab.id);
}); // Event fired when tab focus changes
//

chrome.tabs.onActivated.addListener(function (tab) {
  console.log("[Event] Tab Activated: ".concat(tab.tabId));
  handleTabEvent(tab.tabId);
}); // Event fired when page changes
//

chrome.tabs.onUpdated.addListener(function (id, change, tab) {
  if (change.status === 'complete') {
    console.log("[Event] Tab Updated: ".concat(id));
    console.log(change);
    handleTabEvent(id);
  }
});

function handleTabEvent(tabId) {
  (0,scripts__WEBPACK_IMPORTED_MODULE_0__.isTabCompatible)(tabId, function (status) {
    status ? scripts__WEBPACK_IMPORTED_MODULE_0__.SetIcon.setReady(tabId) : scripts__WEBPACK_IMPORTED_MODULE_0__.SetIcon.setDisabled(tabId);
  });
} // Listener for all runtime messages
//


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9TZXRJY29uLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvaXNUYWJDb21wYXRpYmxlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy90b2dnbGVEZWJ1Z1JlZk9mZi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvdG9nZ2xlRGVidWdSZWZPbi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aHMgPSB7XG4gIExJVkU6IHtcbiAgICAzMjogJ2Fzc2V0cy9saXZlL2Nsb3VkXzMyLnBuZycsXG4gIH0sXG4gIFJFQURZOiB7XG4gICAgMzI6ICdhc3NldHMvcmVhZHkvY2xvdWRfMzIucG5nJyxcbiAgfSxcbiAgRElTQUJMRUQ6IHtcbiAgICAzMjogJ2Fzc2V0cy9kaXNhYmxlZC9jbG91ZF8zMi5wbmcnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXRJY29uIHtcbiAgc3RhdGljIHNldFJlYWR5KHRhYklkLCBjYWxsYmFjaykge1xuICAgIHRoaXMuI3NldEljb24odGFiSWQsICdSRUFEWScsIGNhbGxiYWNrKVxuICB9XG5cbiAgc3RhdGljIHNldExpdmUodGFiSWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy4jc2V0SWNvbih0YWJJZCwgJ0xJVkUnLCBjYWxsYmFjaylcbiAgfVxuXG4gIHN0YXRpYyBzZXREaXNhYmxlZCh0YWJJZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLiNzZXRJY29uKHRhYklkLCAnRElTQUJMRUQnLCBjYWxsYmFjaylcbiAgfVxuXG4gIHN0YXRpYyAjc2V0SWNvbih0YWJJZCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9ICgpID0+IHt9XG4gICAgfVxuXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKFxuICAgICAge1xuICAgICAgICBwYXRoOiBwYXRoc1t0eXBlXSxcbiAgICAgICAgdGFiSWQ6IHRhYklkLFxuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrLFxuICAgIClcbiAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1RhYkNvbXBhdGlibGUgfSBmcm9tICcuL2lzVGFiQ29tcGF0aWJsZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9nZ2xlRGVidWdSZWZPbiB9IGZyb20gJy4vdG9nZ2xlRGVidWdSZWZPbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9nZ2xlRGVidWdSZWZPZmYgfSBmcm9tICcuL3RvZ2dsZURlYnVnUmVmT2ZmJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXRJY29uIH0gZnJvbSAnLi9TZXRJY29uJ1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJDb21wYXRpYmxlKHRhYklkLCBjYWxsYmFjaykge1xuICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgd29ybGQ6ICdNQUlOJyxcbiAgICAgIGZ1bmM6ICgpID0+IHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnbnd0U2VydmVyRGVidWdSZWYnKSxcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgKGZyYW1lcykgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZnJhbWVzICYmIGZyYW1lc1swXS5yZXN1bHRcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAvLyBTd29sbG93IHRoZSBlcnJvci4gVGhpcyBpcyBsaWtlbHkgZHVlIHRvIHRoZSBwYWdlIHJlamVjdGluZyBpbmplY3RlZCBjb2RlLFxuICAgICAgICAvLyB3aGljaCBtZWFucyB3ZSBjYW50IGRvIGFueXRoaW5nIG5vIG1hdHRlciB3aGF0XG4gICAgICAgIGNhbGxiYWNrKGZhbHNlKVxuICAgICAgfSxcbiAgICApXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVEZWJ1Z1JlZk9mZih0YWJJZCwgY2FsbGJhY2spIHtcbiAgY2hyb21lLnNjcmlwdGluZ1xuICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vZmYoKVxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgKGZyYW1lcykgPT4ge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIFN3b2xsb3cgdGhlIGVycm9yLiBUaGlzIGlzIGxpa2VseSBkdWUgdG8gdGhlIHBhZ2UgcmVqZWN0aW5nIGluamVjdGVkIGNvZGUsXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIGNhbnQgZG8gYW55dGhpbmdcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfSxcbiAgICApXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU9mZigpIHt9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVEZWJ1Z1JlZk9uKHRhYklkLCB1cmxNb2RlbCwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsTW9kZWwuZ2V0VXJsKClcbiAgY29uc3QgcG9ydCA9IHVybE1vZGVsLmdldFBvcnQoKVxuXG4gIGNocm9tZS5zY3JpcHRpbmdcbiAgICAuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYklkIH0sXG4gICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgZnVuYzogKHBvcnQsIHVybCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgU2V0dGluZyBEZWJ1ZyBNb2RlLiBVcmw6ICR7dXJsfSwgUG9ydDogJHtwb3J0fWApXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdylcblxuICAgICAgICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KCdud3RTZXJ2ZXJEZWJ1Z1JlZicpKSB7XG4gICAgICAgICAgd2luZG93Lm53dFNlcnZlckRlYnVnUmVmLm9uKHBvcnQsIHVybClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgYXJnczogW3BvcnQsIHVybF0sXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIChmcmFtZXMpID0+IHtcbiAgICAgICAgY2FsbGJhY2soZnJhbWVzICYmIGZyYW1lc1swXS5yZXN1bHQpXG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBjYWxsYmFjayhmYWxzZSlcbiAgICAgIH0sXG4gICAgKVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpc1RhYkNvbXBhdGlibGUsIFNldEljb24gfSBmcm9tICdzY3JpcHRzJ1xuXG4vLyBFdmVudCBmaXJlZCB3aGVuIGEgdGFiIGlzIG9wZW5lZFxuLy9cbmNocm9tZS50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBbRXZlbnRdIFRhYiBDcmVhdGVkOiAke3RhYi5pZH1gKVxuICBoYW5kbGVUYWJFdmVudCh0YWIuaWQpXG59KVxuXG4vLyBFdmVudCBmaXJlZCB3aGVuIHRhYiBmb2N1cyBjaGFuZ2VzXG4vL1xuY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBjb25zb2xlLmxvZyhgW0V2ZW50XSBUYWIgQWN0aXZhdGVkOiAke3RhYi50YWJJZH1gKVxuICBoYW5kbGVUYWJFdmVudCh0YWIudGFiSWQpXG59KVxuXG4vLyBFdmVudCBmaXJlZCB3aGVuIHBhZ2UgY2hhbmdlc1xuLy9cbmNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigoaWQsIGNoYW5nZSwgdGFiKSA9PiB7XG4gIGlmIChjaGFuZ2Uuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgY29uc29sZS5sb2coYFtFdmVudF0gVGFiIFVwZGF0ZWQ6ICR7aWR9YClcbiAgICBjb25zb2xlLmxvZyhjaGFuZ2UpXG4gICAgaGFuZGxlVGFiRXZlbnQoaWQpXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZVRhYkV2ZW50KHRhYklkKSB7XG4gIGlzVGFiQ29tcGF0aWJsZSh0YWJJZCwgKHN0YXR1cykgPT4ge1xuICAgIHN0YXR1cyA/IFNldEljb24uc2V0UmVhZHkodGFiSWQpIDogU2V0SWNvbi5zZXREaXNhYmxlZCh0YWJJZClcbiAgfSlcbn1cblxuLy8gTGlzdGVuZXIgZm9yIGFsbCBydW50aW1lIG1lc3NhZ2VzXG4vL1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge30pXG4iXSwibmFtZXMiOlsicGF0aHMiLCJMSVZFIiwiUkVBRFkiLCJESVNBQkxFRCIsIlNldEljb24iLCJ0YWJJZCIsImNhbGxiYWNrIiwidHlwZSIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZGVmYXVsdCIsImlzVGFiQ29tcGF0aWJsZSIsInRvZ2dsZURlYnVnUmVmT24iLCJ0b2dnbGVEZWJ1Z1JlZk9mZiIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJ0YXJnZXQiLCJ3b3JsZCIsImZ1bmMiLCJ3aW5kb3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRoZW4iLCJmcmFtZXMiLCJyZXN1bHQiLCJlcnJvciIsIm53dFNlcnZlckRlYnVnUmVmIiwib2ZmIiwidG9nZ2xlT2ZmIiwidXJsTW9kZWwiLCJ1cmwiLCJnZXRVcmwiLCJwb3J0IiwiZ2V0UG9ydCIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImFyZ3MiLCJ0YWJzIiwib25DcmVhdGVkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJpZCIsImhhbmRsZVRhYkV2ZW50Iiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJjaGFuZ2UiLCJzdGF0dXMiLCJzZXRSZWFkeSIsInNldERpc2FibGVkIiwicnVudGltZSIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9