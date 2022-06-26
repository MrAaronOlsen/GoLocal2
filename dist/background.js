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

  console.log('Setting Icon');
  console.log(paths[type]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUN5QyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJYLFdBQXpCLENBQXFDLFVBQUNZLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsWUFBbEIsRUFBbUMsQ0FBRSxDQUExRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9zY3JpcHRzL1NldEljb24uanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9pc1RhYkNvbXBhdGlibGUuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9zY3JpcHRzL3RvZ2dsZURlYnVnUmVmT2ZmLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy90b2dnbGVEZWJ1Z1JlZk9uLmpzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRocyA9IHtcbiAgTElWRToge1xuICAgIDMyOiAnYXNzZXRzL2xpdmUvY2xvdWRfMzIucG5nJyxcbiAgfSxcbiAgUkVBRFk6IHtcbiAgICAzMjogJ2Fzc2V0cy9yZWFkeS9jbG91ZF8zMi5wbmcnLFxuICB9LFxuICBESVNBQkxFRDoge1xuICAgIDMyOiAnYXNzZXRzL2Rpc2FibGVkL2Nsb3VkXzMyLnBuZycsXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldEljb24ge1xuICBzdGF0aWMgc2V0UmVhZHkodGFiSWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy4jc2V0SWNvbih0YWJJZCwgJ1JFQURZJywgY2FsbGJhY2spXG4gIH1cblxuICBzdGF0aWMgc2V0TGl2ZSh0YWJJZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLiNzZXRJY29uKHRhYklkLCAnTElWRScsIGNhbGxiYWNrKVxuICB9XG5cbiAgc3RhdGljIHNldERpc2FibGVkKHRhYklkLCBjYWxsYmFjaykge1xuICAgIHRoaXMuI3NldEljb24odGFiSWQsICdESVNBQkxFRCcsIGNhbGxiYWNrKVxuICB9XG5cbiAgc3RhdGljICNzZXRJY29uKHRhYklkLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gKCkgPT4ge31cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnU2V0dGluZyBJY29uJylcbiAgICBjb25zb2xlLmxvZyhwYXRoc1t0eXBlXSlcblxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbihcbiAgICAgIHtcbiAgICAgICAgcGF0aDogcGF0aHNbdHlwZV0sXG4gICAgICAgIHRhYklkOiB0YWJJZCxcbiAgICAgIH0sXG4gICAgICBjYWxsYmFjayxcbiAgICApXG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaXNUYWJDb21wYXRpYmxlIH0gZnJvbSAnLi9pc1RhYkNvbXBhdGlibGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvZ2dsZURlYnVnUmVmT24gfSBmcm9tICcuL3RvZ2dsZURlYnVnUmVmT24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvZ2dsZURlYnVnUmVmT2ZmIH0gZnJvbSAnLi90b2dnbGVEZWJ1Z1JlZk9mZidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2V0SWNvbiB9IGZyb20gJy4vU2V0SWNvbidcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFiQ29tcGF0aWJsZSh0YWJJZCwgY2FsbGJhY2spIHtcbiAgY2hyb21lLnNjcmlwdGluZ1xuICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICBmdW5jOiAoKSA9PiB3aW5kb3cuaGFzT3duUHJvcGVydHkoJ253dFNlcnZlckRlYnVnUmVmJyksXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIChmcmFtZXMpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZyYW1lcyAmJiBmcmFtZXNbMF0ucmVzdWx0XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdClcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gU3dvbGxvdyB0aGUgZXJyb3IuIFRoaXMgaXMgbGlrZWx5IGR1ZSB0byB0aGUgcGFnZSByZWplY3RpbmcgaW5qZWN0ZWQgY29kZSxcbiAgICAgICAgLy8gd2hpY2ggbWVhbnMgd2UgY2FudCBkbyBhbnl0aGluZyBubyBtYXR0ZXIgd2hhdFxuICAgICAgICBjYWxsYmFjayhmYWxzZSlcbiAgICAgIH0sXG4gICAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlRGVidWdSZWZPZmYodGFiSWQsIGNhbGxiYWNrKSB7XG4gIGNocm9tZS5zY3JpcHRpbmdcbiAgICAuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYklkIH0sXG4gICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICB3aW5kb3cubnd0U2VydmVyRGVidWdSZWYub2ZmKClcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIChmcmFtZXMpID0+IHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAvLyBTd29sbG93IHRoZSBlcnJvci4gVGhpcyBpcyBsaWtlbHkgZHVlIHRvIHRoZSBwYWdlIHJlamVjdGluZyBpbmplY3RlZCBjb2RlLFxuICAgICAgICAvLyB3aGljaCBtZWFucyB3ZSBjYW50IGRvIGFueXRoaW5nXG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH0sXG4gICAgKVxufVxuXG5mdW5jdGlvbiB0b2dnbGVPZmYoKSB7fVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlRGVidWdSZWZPbih0YWJJZCwgdXJsTW9kZWwsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybE1vZGVsLmdldFVybCgpXG4gIGNvbnN0IHBvcnQgPSB1cmxNb2RlbC5nZXRQb3J0KClcblxuICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgd29ybGQ6ICdNQUlOJyxcbiAgICAgIGZ1bmM6IChwb3J0LCB1cmwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFNldHRpbmcgRGVidWcgTW9kZS4gVXJsOiAke3VybH0sIFBvcnQ6ICR7cG9ydH1gKVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpXG5cbiAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnbnd0U2VydmVyRGVidWdSZWYnKSkge1xuICAgICAgICAgIHdpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vbihwb3J0LCB1cmwpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGFyZ3M6IFtwb3J0LCB1cmxdLFxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICAoZnJhbWVzKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKGZyYW1lcyAmJiBmcmFtZXNbMF0ucmVzdWx0KVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgY2FsbGJhY2soZmFsc2UpXG4gICAgICB9LFxuICAgIClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXNUYWJDb21wYXRpYmxlLCBTZXRJY29uIH0gZnJvbSAnc2NyaXB0cydcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiBhIHRhYiBpcyBvcGVuZWRcbi8vXG5jaHJvbWUudGFicy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBjb25zb2xlLmxvZyhgW0V2ZW50XSBUYWIgQ3JlYXRlZDogJHt0YWIuaWR9YClcbiAgaGFuZGxlVGFiRXZlbnQodGFiLmlkKVxufSlcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiB0YWIgZm9jdXMgY2hhbmdlc1xuLy9cbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY29uc29sZS5sb2coYFtFdmVudF0gVGFiIEFjdGl2YXRlZDogJHt0YWIudGFiSWR9YClcbiAgaGFuZGxlVGFiRXZlbnQodGFiLnRhYklkKVxufSlcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiBwYWdlIGNoYW5nZXNcbi8vXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKGlkLCBjaGFuZ2UsIHRhYikgPT4ge1xuICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xuICAgIGNvbnNvbGUubG9nKGBbRXZlbnRdIFRhYiBVcGRhdGVkOiAke2lkfWApXG4gICAgY29uc29sZS5sb2coY2hhbmdlKVxuICAgIGhhbmRsZVRhYkV2ZW50KGlkKVxuICB9XG59KVxuXG5mdW5jdGlvbiBoYW5kbGVUYWJFdmVudCh0YWJJZCkge1xuICBpc1RhYkNvbXBhdGlibGUodGFiSWQsIChzdGF0dXMpID0+IHtcbiAgICBzdGF0dXMgPyBTZXRJY29uLnNldFJlYWR5KHRhYklkKSA6IFNldEljb24uc2V0RGlzYWJsZWQodGFiSWQpXG4gIH0pXG59XG5cbi8vIExpc3RlbmVyIGZvciBhbGwgcnVudGltZSBtZXNzYWdlc1xuLy9cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHt9KVxuIl0sIm5hbWVzIjpbInBhdGhzIiwiTElWRSIsIlJFQURZIiwiRElTQUJMRUQiLCJTZXRJY29uIiwidGFiSWQiLCJjYWxsYmFjayIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiY2hyb21lIiwiYWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJkZWZhdWx0IiwiaXNUYWJDb21wYXRpYmxlIiwidG9nZ2xlRGVidWdSZWZPbiIsInRvZ2dsZURlYnVnUmVmT2ZmIiwic2NyaXB0aW5nIiwiZXhlY3V0ZVNjcmlwdCIsInRhcmdldCIsIndvcmxkIiwiZnVuYyIsIndpbmRvdyIsImhhc093blByb3BlcnR5IiwidGhlbiIsImZyYW1lcyIsInJlc3VsdCIsImVycm9yIiwibnd0U2VydmVyRGVidWdSZWYiLCJvZmYiLCJ0b2dnbGVPZmYiLCJ1cmxNb2RlbCIsInVybCIsImdldFVybCIsInBvcnQiLCJnZXRQb3J0Iiwib24iLCJhcmdzIiwidGFicyIsIm9uQ3JlYXRlZCIsImFkZExpc3RlbmVyIiwidGFiIiwiaWQiLCJoYW5kbGVUYWJFdmVudCIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwiY2hhbmdlIiwic3RhdHVzIiwic2V0UmVhZHkiLCJzZXREaXNhYmxlZCIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==