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
      if (window.hasOwnProperty('nwtServerDebugRef')) {
        console.log("[Go Local] Turning off debug mode");
        window.nwtServerDebugRef.off();
        return true;
      }

      return false;
    }
  }).then(function (frames) {
    callback(frames && frames[0].result);
  }, function (error) {
    console.log('[Go Local] Debug Off Error');
    console.log(error); // Swollow the error. This is likely due to the page rejecting injected code,
    // which means we cant do anything

    callback(false);
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
      if (window.hasOwnProperty('nwtServerDebugRef')) {
        console.log("[Go Local] Setting Debug Mode. Url: ".concat(url, ", Port: ").concat(port));
        window.nwtServerDebugRef.on(port, url);
        return true;
      }

      return false;
    },
    args: [port, url]
  }).then(function (frames) {
    callback(frames && frames[0].result);
  }, function (error) {
    console.log('[Go Local] Debug On Error');
    console.log(error); // Swollow the error. This is likely due to the page rejecting injected code,
    // which means we cant do anything

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkMsS0FBeEIsRUFBK0I7RUFDN0JRLHdEQUFlLENBQUNSLEtBQUQsRUFBUSxVQUFDMkMsTUFBRCxFQUFZO0lBQ2pDQSxNQUFNLEdBQUc1QyxxREFBQSxDQUFpQkMsS0FBakIsQ0FBSCxHQUE2QkQsd0RBQUEsQ0FBb0JDLEtBQXBCLENBQW5DO0VBQ0QsQ0FGYyxDQUFmO0FBR0QsRUFFRDtBQUNBOzs7QUFDQUcsTUFBTSxDQUFDMkMsT0FBUCxDQUFlQyxTQUFmLENBQXlCWCxXQUF6QixDQUFxQyxVQUFDWSxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLFlBQWxCLEVBQW1DLENBQUUsQ0FBMUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9TZXRJY29uLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvaXNUYWJDb21wYXRpYmxlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy90b2dnbGVEZWJ1Z1JlZk9mZi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvdG9nZ2xlRGVidWdSZWZPbi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aHMgPSB7XG4gIExJVkU6IHtcbiAgICAzMjogJ2Fzc2V0cy9saXZlL2Nsb3VkXzMyLnBuZycsXG4gIH0sXG4gIFJFQURZOiB7XG4gICAgMzI6ICdhc3NldHMvcmVhZHkvY2xvdWRfMzIucG5nJyxcbiAgfSxcbiAgRElTQUJMRUQ6IHtcbiAgICAzMjogJ2Fzc2V0cy9kaXNhYmxlZC9jbG91ZF8zMi5wbmcnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXRJY29uIHtcbiAgc3RhdGljIHNldFJlYWR5KHRhYklkLCBjYWxsYmFjaykge1xuICAgIHRoaXMuI3NldEljb24odGFiSWQsICdSRUFEWScsIGNhbGxiYWNrKVxuICB9XG5cbiAgc3RhdGljIHNldExpdmUodGFiSWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy4jc2V0SWNvbih0YWJJZCwgJ0xJVkUnLCBjYWxsYmFjaylcbiAgfVxuXG4gIHN0YXRpYyBzZXREaXNhYmxlZCh0YWJJZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLiNzZXRJY29uKHRhYklkLCAnRElTQUJMRUQnLCBjYWxsYmFjaylcbiAgfVxuXG4gIHN0YXRpYyAjc2V0SWNvbih0YWJJZCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9ICgpID0+IHt9XG4gICAgfVxuXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKFxuICAgICAge1xuICAgICAgICBwYXRoOiBwYXRoc1t0eXBlXSxcbiAgICAgICAgdGFiSWQ6IHRhYklkLFxuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrLFxuICAgIClcbiAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1RhYkNvbXBhdGlibGUgfSBmcm9tICcuL2lzVGFiQ29tcGF0aWJsZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9nZ2xlRGVidWdSZWZPbiB9IGZyb20gJy4vdG9nZ2xlRGVidWdSZWZPbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9nZ2xlRGVidWdSZWZPZmYgfSBmcm9tICcuL3RvZ2dsZURlYnVnUmVmT2ZmJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXRJY29uIH0gZnJvbSAnLi9TZXRJY29uJ1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJDb21wYXRpYmxlKHRhYklkLCBjYWxsYmFjaykge1xuICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgd29ybGQ6ICdNQUlOJyxcbiAgICAgIGZ1bmM6ICgpID0+IHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnbnd0U2VydmVyRGVidWdSZWYnKSxcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgKGZyYW1lcykgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZnJhbWVzICYmIGZyYW1lc1swXS5yZXN1bHRcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAvLyBTd29sbG93IHRoZSBlcnJvci4gVGhpcyBpcyBsaWtlbHkgZHVlIHRvIHRoZSBwYWdlIHJlamVjdGluZyBpbmplY3RlZCBjb2RlLFxuICAgICAgICAvLyB3aGljaCBtZWFucyB3ZSBjYW50IGRvIGFueXRoaW5nIG5vIG1hdHRlciB3aGF0XG4gICAgICAgIGNhbGxiYWNrKGZhbHNlKVxuICAgICAgfSxcbiAgICApXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVEZWJ1Z1JlZk9mZih0YWJJZCwgY2FsbGJhY2spIHtcbiAgY2hyb21lLnNjcmlwdGluZ1xuICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkoJ253dFNlcnZlckRlYnVnUmVmJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgW0dvIExvY2FsXSBUdXJuaW5nIG9mZiBkZWJ1ZyBtb2RlYClcblxuICAgICAgICAgIHdpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vZmYoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIChmcmFtZXMpID0+IHtcbiAgICAgICAgY2FsbGJhY2soZnJhbWVzICYmIGZyYW1lc1swXS5yZXN1bHQpXG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbR28gTG9jYWxdIERlYnVnIE9mZiBFcnJvcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuXG4gICAgICAgIC8vIFN3b2xsb3cgdGhlIGVycm9yLiBUaGlzIGlzIGxpa2VseSBkdWUgdG8gdGhlIHBhZ2UgcmVqZWN0aW5nIGluamVjdGVkIGNvZGUsXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIGNhbnQgZG8gYW55dGhpbmdcbiAgICAgICAgY2FsbGJhY2soZmFsc2UpXG4gICAgICB9LFxuICAgIClcbn1cblxuZnVuY3Rpb24gdG9nZ2xlT2ZmKCkge31cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZURlYnVnUmVmT24odGFiSWQsIHVybE1vZGVsLCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxNb2RlbC5nZXRVcmwoKVxuICBjb25zdCBwb3J0ID0gdXJsTW9kZWwuZ2V0UG9ydCgpXG5cbiAgY2hyb21lLnNjcmlwdGluZ1xuICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICBmdW5jOiAocG9ydCwgdXJsKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkoJ253dFNlcnZlckRlYnVnUmVmJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBbR28gTG9jYWxdIFNldHRpbmcgRGVidWcgTW9kZS4gVXJsOiAke3VybH0sIFBvcnQ6ICR7cG9ydH1gLFxuICAgICAgICAgIClcblxuICAgICAgICAgIHdpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vbihwb3J0LCB1cmwpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGFyZ3M6IFtwb3J0LCB1cmxdLFxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICAoZnJhbWVzKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKGZyYW1lcyAmJiBmcmFtZXNbMF0ucmVzdWx0KVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW0dvIExvY2FsXSBEZWJ1ZyBPbiBFcnJvcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuXG4gICAgICAgIC8vIFN3b2xsb3cgdGhlIGVycm9yLiBUaGlzIGlzIGxpa2VseSBkdWUgdG8gdGhlIHBhZ2UgcmVqZWN0aW5nIGluamVjdGVkIGNvZGUsXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIGNhbnQgZG8gYW55dGhpbmdcbiAgICAgICAgY2FsbGJhY2soZmFsc2UpXG4gICAgICB9LFxuICAgIClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXNUYWJDb21wYXRpYmxlLCBTZXRJY29uIH0gZnJvbSAnc2NyaXB0cydcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiBhIHRhYiBpcyBvcGVuZWRcbi8vXG5jaHJvbWUudGFicy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBjb25zb2xlLmxvZyhgW0V2ZW50XSBUYWIgQ3JlYXRlZDogJHt0YWIuaWR9YClcbiAgaGFuZGxlVGFiRXZlbnQodGFiLmlkKVxufSlcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiB0YWIgZm9jdXMgY2hhbmdlc1xuLy9cbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY29uc29sZS5sb2coYFtFdmVudF0gVGFiIEFjdGl2YXRlZDogJHt0YWIudGFiSWR9YClcbiAgaGFuZGxlVGFiRXZlbnQodGFiLnRhYklkKVxufSlcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiBwYWdlIGNoYW5nZXNcbi8vXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKGlkLCBjaGFuZ2UsIHRhYikgPT4ge1xuICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGNvbnNvbGUubG9nKGBbRXZlbnRdIFRhYiBVcGRhdGVkOiAke2lkfWApXG4gICAgY29uc29sZS5sb2coY2hhbmdlKVxuICAgIGhhbmRsZVRhYkV2ZW50KGlkKVxuICB9XG59KVxuXG5mdW5jdGlvbiBoYW5kbGVUYWJFdmVudCh0YWJJZCkge1xuICBpc1RhYkNvbXBhdGlibGUodGFiSWQsIChzdGF0dXMpID0+IHtcbiAgICBzdGF0dXMgPyBTZXRJY29uLnNldFJlYWR5KHRhYklkKSA6IFNldEljb24uc2V0RGlzYWJsZWQodGFiSWQpXG4gIH0pXG59XG5cbi8vIExpc3RlbmVyIGZvciBhbGwgcnVudGltZSBtZXNzYWdlc1xuLy9cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHt9KVxuIl0sIm5hbWVzIjpbInBhdGhzIiwiTElWRSIsIlJFQURZIiwiRElTQUJMRUQiLCJTZXRJY29uIiwidGFiSWQiLCJjYWxsYmFjayIsInR5cGUiLCJjaHJvbWUiLCJhY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImRlZmF1bHQiLCJpc1RhYkNvbXBhdGlibGUiLCJ0b2dnbGVEZWJ1Z1JlZk9uIiwidG9nZ2xlRGVidWdSZWZPZmYiLCJzY3JpcHRpbmciLCJleGVjdXRlU2NyaXB0IiwidGFyZ2V0Iiwid29ybGQiLCJmdW5jIiwid2luZG93IiwiaGFzT3duUHJvcGVydHkiLCJ0aGVuIiwiZnJhbWVzIiwicmVzdWx0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibnd0U2VydmVyRGVidWdSZWYiLCJvZmYiLCJ0b2dnbGVPZmYiLCJ1cmxNb2RlbCIsInVybCIsImdldFVybCIsInBvcnQiLCJnZXRQb3J0Iiwib24iLCJhcmdzIiwidGFicyIsIm9uQ3JlYXRlZCIsImFkZExpc3RlbmVyIiwidGFiIiwiaWQiLCJoYW5kbGVUYWJFdmVudCIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwiY2hhbmdlIiwic3RhdHVzIiwic2V0UmVhZHkiLCJzZXREaXNhYmxlZCIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==