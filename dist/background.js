/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/any-base/index.js":
/*!****************************************!*\
  !*** ./node_modules/any-base/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Converter = __webpack_require__(/*! ./src/converter */ "./node_modules/any-base/src/converter.js");

/**
 * Function get source and destination alphabet and return convert function
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 *
 * @returns {function(number|Array)}
 */
function anyBase(srcAlphabet, dstAlphabet) {
    var converter = new Converter(srcAlphabet, dstAlphabet);
    /**
     * Convert function
     *
     * @param {string|Array} number
     *
     * @return {string|Array} number
     */
    return function (number) {
        return converter.convert(number);
    }
};

anyBase.BIN = '01';
anyBase.OCT = '01234567';
anyBase.DEC = '0123456789';
anyBase.HEX = '0123456789abcdef';

module.exports = anyBase;

/***/ }),

/***/ "./node_modules/any-base/src/converter.js":
/*!************************************************!*\
  !*** ./node_modules/any-base/src/converter.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


/**
 * Converter
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 * @constructor
 */
function Converter(srcAlphabet, dstAlphabet) {
    if (!srcAlphabet || !dstAlphabet || !srcAlphabet.length || !dstAlphabet.length) {
        throw new Error('Bad alphabet');
    }
    this.srcAlphabet = srcAlphabet;
    this.dstAlphabet = dstAlphabet;
}

/**
 * Convert number from source alphabet to destination alphabet
 *
 * @param {string|Array} number - number represented as a string or array of points
 *
 * @returns {string|Array}
 */
Converter.prototype.convert = function(number) {
    var i, divide, newlen,
    numberMap = {},
    fromBase = this.srcAlphabet.length,
    toBase = this.dstAlphabet.length,
    length = number.length,
    result = typeof number === 'string' ? '' : [];

    if (!this.isValid(number)) {
        throw new Error('Number "' + number + '" contains of non-alphabetic digits (' + this.srcAlphabet + ')');
    }

    if (this.srcAlphabet === this.dstAlphabet) {
        return number;
    }

    for (i = 0; i < length; i++) {
        numberMap[i] = this.srcAlphabet.indexOf(number[i]);
    }
    do {
        divide = 0;
        newlen = 0;
        for (i = 0; i < length; i++) {
            divide = divide * fromBase + numberMap[i];
            if (divide >= toBase) {
                numberMap[newlen++] = parseInt(divide / toBase, 10);
                divide = divide % toBase;
            } else if (newlen > 0) {
                numberMap[newlen++] = 0;
            }
        }
        length = newlen;
        result = this.dstAlphabet.slice(divide, divide + 1).concat(result);
    } while (newlen !== 0);

    return result;
};

/**
 * Valid number with source alphabet
 *
 * @param {number} number
 *
 * @returns {boolean}
 */
Converter.prototype.isValid = function(number) {
    var i = 0;
    for (; i < number.length; ++i) {
        if (this.srcAlphabet.indexOf(number[i]) === -1) {
            return false;
        }
    }
    return true;
};

module.exports = Converter;

/***/ }),

/***/ "./src/models/DebugStateModel.js":
/*!***************************************!*\
  !*** ./src/models/DebugStateModel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugStateModel)
/* harmony export */ });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/models/Model.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var URL_ID = 'url_id';

var DebugStateModel = /*#__PURE__*/function (_Model) {
  _inherits(DebugStateModel, _Model);

  var _super = _createSuper(DebugStateModel);

  function DebugStateModel(payload) {
    _classCallCheck(this, DebugStateModel);

    return _super.call(this, payload);
  }

  _createClass(DebugStateModel, [{
    key: "setUrlId",
    value: function setUrlId(id) {
      this.set(URL_ID, id);
      return this;
    }
  }, {
    key: "getUrlId",
    value: function getUrlId() {
      return this.get(URL_ID);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new DebugStateModel(this.toJson());
    }
  }]);

  return DebugStateModel;
}(_Model__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/models/Model.js":
/*!*****************************!*\
  !*** ./src/models/Model.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var short_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! short-uuid */ "./node_modules/short-uuid/index.js");
/* harmony import */ var short_uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(short_uuid__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }


var ID = 'id';

var _payload = /*#__PURE__*/new WeakMap();

var Model = /*#__PURE__*/function () {
  function Model(payload) {
    _classCallCheck(this, Model);

    _classPrivateFieldInitSpec(this, _payload, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _payload, payload ? _objectSpread({}, payload) : {});
  }

  _createClass(Model, [{
    key: "getId",
    value: function getId() {
      return this.get(ID);
    }
  }, {
    key: "generateId",
    value: function generateId() {
      this.set(ID, short_uuid__WEBPACK_IMPORTED_MODULE_0___default().generate());
    }
  }, {
    key: "get",
    value: function get(field) {
      return _classPrivateFieldGet(this, _payload)[field];
    }
  }, {
    key: "set",
    value: function set(field, value) {
      _classPrivateFieldGet(this, _payload)[field] = value;
    }
  }, {
    key: "toJson",
    value: function toJson() {
      return _classPrivateFieldGet(this, _payload);
    }
  }]);

  return Model;
}();



/***/ }),

/***/ "./src/models/UrlModel.js":
/*!********************************!*\
  !*** ./src/models/UrlModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UrlModel)
/* harmony export */ });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/models/Model.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var NAME = 'name';
var URL = 'url';
var PORT = 'port';

var UrlModel = /*#__PURE__*/function (_Model) {
  _inherits(UrlModel, _Model);

  var _super = _createSuper(UrlModel);

  function UrlModel(payload) {
    _classCallCheck(this, UrlModel);

    return _super.call(this, payload);
  }

  _createClass(UrlModel, [{
    key: "setName",
    value: function setName(name) {
      this.set(NAME, name);
      return this;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.get(NAME);
    }
  }, {
    key: "setUrl",
    value: function setUrl(url) {
      this.set(URL, url);
      return this;
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.get(URL);
    }
  }, {
    key: "setPort",
    value: function setPort(port) {
      this.set(PORT, port);
      return this;
    }
  }, {
    key: "getPort",
    value: function getPort() {
      return this.get(PORT);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new UrlModel(this.toJson());
    }
  }, {
    key: "validate",
    value: function validate() {
      return this.getName() && this.getUrl() && this.getPort();
    }
  }], [{
    key: "withId",
    value: function withId() {
      var newUrl = new UrlModel();
      newUrl.generateId();
      return newUrl;
    }
  }]);

  return UrlModel;
}(_Model__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DebugStateModel": () => (/* reexport safe */ _DebugStateModel__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "UrlModel": () => (/* reexport safe */ _UrlModel__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _UrlModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrlModel */ "./src/models/UrlModel.js");
/* harmony import */ var _DebugStateModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebugStateModel */ "./src/models/DebugStateModel.js");



/***/ }),

/***/ "./src/scripts/SetIcon.js":
/*!********************************!*\
  !*** ./src/scripts/SetIcon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetIcon": () => (/* reexport safe */ _SetIcon__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "testDebugState": () => (/* reexport safe */ _testDebugState__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "toggleDebugRefOff": () => (/* reexport safe */ _toggleDebugRefOff__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "toggleDebugRefOn": () => (/* reexport safe */ _toggleDebugRefOn__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _testDebugState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testDebugState */ "./src/scripts/testDebugState.js");
/* harmony import */ var _toggleDebugRefOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleDebugRefOn */ "./src/scripts/toggleDebugRefOn.js");
/* harmony import */ var _toggleDebugRefOff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleDebugRefOff */ "./src/scripts/toggleDebugRefOff.js");
/* harmony import */ var _SetIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetIcon */ "./src/scripts/SetIcon.js");





/***/ }),

/***/ "./src/scripts/testDebugState.js":
/*!***************************************!*\
  !*** ./src/scripts/testDebugState.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ testDebugState)
/* harmony export */ });
/* harmony import */ var storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! storage */ "./src/utils/storage/index.js");

var debugStateStorage = new storage__WEBPACK_IMPORTED_MODULE_0__.DebugStateStorage();
function testDebugState(tabId, callback) {
  debugStateStorage.getState(tabId, function (state) {
    if (state && state.getUrlId()) {
      callback('LIVE');
    } else {
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
        callback(result ? 'READY' : 'DISABLED');
      }, function (error) {
        // Swollow the error. This is likely due to the page rejecting injected code,
        // which means we cant do anything no matter what
        callback('DISABLED');
      });
    }
  });
}

/***/ }),

/***/ "./src/scripts/toggleDebugRefOff.js":
/*!******************************************!*\
  !*** ./src/scripts/toggleDebugRefOff.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ }),

/***/ "./src/utils/storage/ChromeStorage.js":
/*!********************************************!*\
  !*** ./src/utils/storage/ChromeStorage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChromeStorage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var NAMESPACE = 'GOLOCAL_2_STORAGE';

var _type = /*#__PURE__*/new WeakMap();

var ChromeStorage = /*#__PURE__*/function () {
  function ChromeStorage(type) {
    _classCallCheck(this, ChromeStorage);

    _classPrivateFieldInitSpec(this, _type, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _type, type);
  }

  _createClass(ChromeStorage, [{
    key: "setContainer",
    value: function setContainer(id, container, callback) {
      var _this = this;

      this.getStorage(function (storage) {
        storage[id] = container;

        _this.setStorage(storage, function () {
          _this.getContainer(id, callback);
        });
      });
    }
  }, {
    key: "getContainer",
    value: function getContainer(id, callback) {
      this.getStorage(function (storage) {
        var container = storage[id];
        callback(container);
      });
    } // Storage
    //

  }, {
    key: "getStorage",
    value: function getStorage(callback) {
      var _this2 = this;

      chrome.storage[_classPrivateFieldGet(this, _type)].get(NAMESPACE, function (store) {
        var storage = store[NAMESPACE];

        if (!storage) {
          _this2.setStorage({}, function () {
            _this2.getStorage(callback);
          });
        } else {
          callback && callback(storage);
        }
      });
    }
  }, {
    key: "setStorage",
    value: function setStorage(storage, callback) {
      var store = {};
      store[NAMESPACE] = storage;

      chrome.storage[_classPrivateFieldGet(this, _type)].set(store, callback);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this3 = this;

      chrome.storage[_classPrivateFieldGet(this, _type)].clear(function () {
        _this3.getStorage();
      });
    }
  }], [{
    key: "sync",
    value: function sync() {
      return new ChromeStorage('sync');
    }
  }, {
    key: "session",
    value: function session() {
      return new ChromeStorage('session');
    }
  }]);

  return ChromeStorage;
}();



/***/ }),

/***/ "./src/utils/storage/Container.js":
/*!****************************************!*\
  !*** ./src/utils/storage/Container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _payload = /*#__PURE__*/new WeakMap();

var Container = /*#__PURE__*/function () {
  function Container(payload) {
    _classCallCheck(this, Container);

    _classPrivateFieldInitSpec(this, _payload, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _payload, payload || {});
  }

  _createClass(Container, [{
    key: "set",
    value: function set(name, object) {
      _classPrivateFieldGet(this, _payload)[name] = object;
    }
  }, {
    key: "get",
    value: function get(name) {
      return _classPrivateFieldGet(this, _payload)[name];
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return Object.values(_classPrivateFieldGet(this, _payload));
    }
  }, {
    key: "toJson",
    value: function toJson() {
      return _classPrivateFieldGet(this, _payload);
    }
  }]);

  return Container;
}();



/***/ }),

/***/ "./src/utils/storage/DebugStateStorage.js":
/*!************************************************!*\
  !*** ./src/utils/storage/DebugStateStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugStateStorage)
/* harmony export */ });
/* harmony import */ var _ChromeStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeStorage */ "./src/utils/storage/ChromeStorage.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/utils/storage/Storage.js");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models */ "./src/models/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ID = 'DEBUG_STATE_STORAGE';

var DebugStateStorage = /*#__PURE__*/function (_Storage) {
  _inherits(DebugStateStorage, _Storage);

  var _super = _createSuper(DebugStateStorage);

  function DebugStateStorage() {
    _classCallCheck(this, DebugStateStorage);

    return _super.call(this, _ChromeStorage__WEBPACK_IMPORTED_MODULE_0__["default"].session(), ID);
  }

  _createClass(DebugStateStorage, [{
    key: "setState",
    value: function setState(tabId, state, callback) {
      var _this = this;

      if (!(state instanceof models__WEBPACK_IMPORTED_MODULE_2__.DebugStateModel)) {
        throw 'State must be of type DebugStateModel';
      }

      this.getContainer(function (container) {
        container.set(tabId, state.toJson());

        _this.setContainer(container, function (persisted) {
          callback && callback(new models__WEBPACK_IMPORTED_MODULE_2__.DebugStateModel(persisted.get(tabId)));
        });
      });
    }
  }, {
    key: "getState",
    value: function getState(tabId, callback) {
      this.getContainer(function (container) {
        var state = container.get(tabId);
        callback(state ? new models__WEBPACK_IMPORTED_MODULE_2__.DebugStateModel(state) : null);
      });
    }
  }, {
    key: "getAll",
    value: function getAll(callback) {
      this.getContainer(function (container) {
        callback(container.getAll().map(function (json) {
          return new models__WEBPACK_IMPORTED_MODULE_2__.DebugStateModel(json);
        }));
      });
    }
  }, {
    key: "removeState",
    value: function removeState(tabId, callback) {
      getContainer(function (container) {
        delete container[tabId];
        callback();
      });
    }
  }]);

  return DebugStateStorage;
}(_Storage__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/utils/storage/Storage.js":
/*!**************************************!*\
  !*** ./src/utils/storage/Storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/utils/storage/Container.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _storage = /*#__PURE__*/new WeakMap();

var _id = /*#__PURE__*/new WeakMap();

var Storage = /*#__PURE__*/function () {
  function Storage(storage, id) {
    _classCallCheck(this, Storage);

    _classPrivateFieldInitSpec(this, _storage, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _id, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _storage, storage);

    _classPrivateFieldSet(this, _id, id);
  }

  _createClass(Storage, [{
    key: "getContainer",
    value: function getContainer(callback) {
      _classPrivateFieldGet(this, _storage).getContainer(_classPrivateFieldGet(this, _id), function (container) {
        callback(new _Container__WEBPACK_IMPORTED_MODULE_0__["default"](container));
      });
    }
  }, {
    key: "setContainer",
    value: function setContainer(container, callback) {
      _classPrivateFieldGet(this, _storage).setContainer(_classPrivateFieldGet(this, _id), container.toJson(), function (container) {
        return callback(new _Container__WEBPACK_IMPORTED_MODULE_0__["default"](container));
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldGet(this, _storage).clear();
    }
  }]);

  return Storage;
}();



/***/ }),

/***/ "./src/utils/storage/UrlStorage.js":
/*!*****************************************!*\
  !*** ./src/utils/storage/UrlStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UrlStorage)
/* harmony export */ });
/* harmony import */ var _ChromeStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeStorage */ "./src/utils/storage/ChromeStorage.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/utils/storage/Storage.js");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models */ "./src/models/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ID = 'URL_STORAGE';

var UrlStorage = /*#__PURE__*/function (_Storage) {
  _inherits(UrlStorage, _Storage);

  var _super = _createSuper(UrlStorage);

  function UrlStorage() {
    _classCallCheck(this, UrlStorage);

    return _super.call(this, _ChromeStorage__WEBPACK_IMPORTED_MODULE_0__["default"].sync(), ID);
  }

  _createClass(UrlStorage, [{
    key: "setUrl",
    value: function setUrl(url, callback) {
      var _this = this;

      if (!(url instanceof models__WEBPACK_IMPORTED_MODULE_2__.UrlModel)) {
        throw 'Url must be URL Model';
      }

      this.getContainer(function (container) {
        container.set(url.getId(), url.toJson());

        _this.setContainer(container, function (persisted) {
          callback && callback(persisted);
        });
      });
    }
  }, {
    key: "getUrl",
    value: function getUrl(id, callback) {
      this.getContainer(function (container) {
        callback(new UrlModle(container.get(id)));
      });
    }
  }, {
    key: "getAll",
    value: function getAll(callback) {
      this.getContainer(function (container) {
        callback(container.getAll().map(function (json) {
          return new models__WEBPACK_IMPORTED_MODULE_2__.UrlModel(json);
        }));
      });
    }
  }]);

  return UrlStorage;
}(_Storage__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/utils/storage/index.js":
/*!************************************!*\
  !*** ./src/utils/storage/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DebugStateStorage": () => (/* reexport safe */ _DebugStateStorage__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "UrlStorage": () => (/* reexport safe */ _UrlStorage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _UrlStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrlStorage */ "./src/utils/storage/UrlStorage.js");
/* harmony import */ var _DebugStateStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebugStateStorage */ "./src/utils/storage/DebugStateStorage.js");



/***/ }),

/***/ "./node_modules/short-uuid/index.js":
/*!******************************************!*\
  !*** ./node_modules/short-uuid/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Created by Samuel on 6/4/2016.
 * Simple wrapper functions to produce shorter UUIDs for cookies, maybe everything?
 */

const { v4: uuidv4 } = __webpack_require__(/*! uuid */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/index.js");
const anyBase = __webpack_require__(/*! any-base */ "./node_modules/any-base/index.js");

const flickrBase58 = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
const cookieBase90 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~";

const baseOptions = {
  consistentLength: true,
};

// A default generator, instantiated only if used.
let toFlickr;

/**
 * Takes a UUID, strips the dashes, and translates.
 * @param {string} longId
 * @param {function(string)} translator
 * @param {Object} [paddingParams]
 * @returns {string}
 */
const shortenUUID = (longId, translator, paddingParams) => {
  const translated = translator(longId.toLowerCase().replace(/-/g, ''));

  if (!paddingParams || !paddingParams.consistentLength) return translated;

  return translated.padStart(
    paddingParams.shortIdLength,
    paddingParams.paddingChar,
  );
};

/**
 * Translate back to hex and turn back into UUID format, with dashes
 * @param {string} shortId
 * @param {function(string)} translator
 * @returns {string}
 */
const enlargeUUID = (shortId, translator) => {
  const uu1 = translator(shortId).padStart(32, '0');

  // Join the zero padding and the UUID and then slice it up with match
  const m = uu1.match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);

  // Accumulate the matches and join them.
  return [m[1], m[2], m[3], m[4], m[5]].join('-');
};

// Calculate length for the shortened ID
const getShortIdLength = (alphabetLength) => (
  Math.ceil(Math.log(2 ** 128) / Math.log(alphabetLength)));

module.exports = (() => {
  /**
   * @param {string} toAlphabet - Defaults to flickrBase58 if not provided
   * @param {Object} [options]
   *
   * @returns {{new: (function()),
   *  uuid: (function()),
   *  fromUUID: (function(string)),
   *  toUUID: (function(string)),
   *  alphabet: (string)}}
   */
  const makeConvertor = (toAlphabet, options) => {
    // Default to Flickr 58
    const useAlphabet = toAlphabet || flickrBase58;

    // Default to baseOptions
    const selectedOptions = { ...baseOptions, ...options };

    // Check alphabet for duplicate entries
    if ([...new Set(Array.from(useAlphabet))].length !== useAlphabet.length) {
      throw new Error('The provided Alphabet has duplicate characters resulting in unreliable results');
    }

    const shortIdLength = getShortIdLength(useAlphabet.length);

    // Padding Params
    const paddingParams = {
      shortIdLength,
      consistentLength: selectedOptions.consistentLength,
      paddingChar: useAlphabet[0],
    };

    // UUIDs are in hex, so we translate to and from.
    const fromHex = anyBase(anyBase.HEX, useAlphabet);
    const toHex = anyBase(useAlphabet, anyBase.HEX);
    const generate = () => shortenUUID(uuidv4(), fromHex, paddingParams);

    const translator = {
      new: generate,
      generate,
      uuid: uuidv4,
      fromUUID: (uuid) => shortenUUID(uuid, fromHex, paddingParams),
      toUUID: (shortUuid) => enlargeUUID(shortUuid, toHex),
      alphabet: useAlphabet,
      maxLength: shortIdLength,
    };

    Object.freeze(translator);

    return translator;
  };

  // Expose the constants for other purposes.
  makeConvertor.constants = {
    flickrBase58,
    cookieBase90,
  };

  // Expose the generic v4 UUID generator for convenience
  makeConvertor.uuid = uuidv4;

  // Provide a generic generator
  makeConvertor.generate = () => {
    if (!toFlickr) {
      // Generate on first use;
      toFlickr = makeConvertor(flickrBase58).generate;
    }
    return toFlickr();
  };

  return makeConvertor;
})();


/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NIL": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "parse": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "stringify": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "v1": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "v3": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "v4": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "v5": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "validate": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "version": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v3.js");
/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v5.js");
/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/nil.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/version.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/validate.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/parse.js");










/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/md5.js");


var v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DNS": () => (/* binding */ DNS),
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/short-uuid/node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts */ "./src/scripts/index.js");
 // Event fired when a tab is opened
//

chrome.tabs.onCreated.addListener(function (tab) {
  handleTabEvent(tab.id);
}); // Event fired when tab focus changes
//

chrome.tabs.onActivated.addListener(function (tab) {
  handleTabEvent(tab.tabId);
}); // Event fired when page changes
//

chrome.tabs.onUpdated.addListener(function (id, change, tab) {
  if (change.status === 'complete') {
    handleTabEvent(id);
  }
});

function handleTabEvent(tabId) {
  (0,scripts__WEBPACK_IMPORTED_MODULE_0__.testDebugState)(tabId, function (state) {
    switch (state) {
      case 'READY':
        scripts__WEBPACK_IMPORTED_MODULE_0__.SetIcon.setReady(tabId);
        break;

      case 'LIVE':
        scripts__WEBPACK_IMPORTED_MODULE_0__.SetIcon.setLive(tabId);
        break;

      default:
        scripts__WEBPACK_IMPORTED_MODULE_0__.SetIcon.setDisabled(tabId);
    }
  });
} // Listener for all runtime messages
//


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDdE5sQixpRUFB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LFNBQWYsQ0FBeUJYLFdBQXpCLENBQXFDLFVBQUNZLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsWUFBbEIsRUFBbUMsQ0FBRSxDQUExRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9hbnktYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL2FueS1iYXNlL3NyYy9jb252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9tb2RlbHMvRGVidWdTdGF0ZU1vZGVsLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbW9kZWxzL01vZGVsLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbW9kZWxzL1VybE1vZGVsLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9TZXRJY29uLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvdGVzdERlYnVnU3RhdGUuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9zY3JpcHRzL3RvZ2dsZURlYnVnUmVmT2ZmLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy90b2dnbGVEZWJ1Z1JlZk9uLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvdXRpbHMvc3RvcmFnZS9DaHJvbWVTdG9yYWdlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvdXRpbHMvc3RvcmFnZS9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy91dGlscy9zdG9yYWdlL0RlYnVnU3RhdGVTdG9yYWdlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvdXRpbHMvc3RvcmFnZS9TdG9yYWdlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvdXRpbHMvc3RvcmFnZS9VcmxTdG9yYWdlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvdXRpbHMvc3RvcmFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9wYXJzZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbnZlcnRlciA9IHJlcXVpcmUoJy4vc3JjL2NvbnZlcnRlcicpO1xuXG4vKipcbiAqIEZ1bmN0aW9uIGdldCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGFscGhhYmV0IGFuZCByZXR1cm4gY29udmVydCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBzcmNBbHBoYWJldFxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGRzdEFscGhhYmV0XG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9uKG51bWJlcnxBcnJheSl9XG4gKi9cbmZ1bmN0aW9uIGFueUJhc2Uoc3JjQWxwaGFiZXQsIGRzdEFscGhhYmV0KSB7XG4gICAgdmFyIGNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoc3JjQWxwaGFiZXQsIGRzdEFscGhhYmV0KTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gbnVtYmVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8QXJyYXl9IG51bWJlclxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0ZXIuY29udmVydChudW1iZXIpO1xuICAgIH1cbn07XG5cbmFueUJhc2UuQklOID0gJzAxJztcbmFueUJhc2UuT0NUID0gJzAxMjM0NTY3JztcbmFueUJhc2UuREVDID0gJzAxMjM0NTY3ODknO1xuYW55QmFzZS5IRVggPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbm1vZHVsZS5leHBvcnRzID0gYW55QmFzZTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29udmVydGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHNyY0FscGhhYmV0XG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gZHN0QWxwaGFiZXRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDb252ZXJ0ZXIoc3JjQWxwaGFiZXQsIGRzdEFscGhhYmV0KSB7XG4gICAgaWYgKCFzcmNBbHBoYWJldCB8fCAhZHN0QWxwaGFiZXQgfHwgIXNyY0FscGhhYmV0Lmxlbmd0aCB8fCAhZHN0QWxwaGFiZXQubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIGFscGhhYmV0Jyk7XG4gICAgfVxuICAgIHRoaXMuc3JjQWxwaGFiZXQgPSBzcmNBbHBoYWJldDtcbiAgICB0aGlzLmRzdEFscGhhYmV0ID0gZHN0QWxwaGFiZXQ7XG59XG5cbi8qKlxuICogQ29udmVydCBudW1iZXIgZnJvbSBzb3VyY2UgYWxwaGFiZXQgdG8gZGVzdGluYXRpb24gYWxwaGFiZXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gbnVtYmVyIC0gbnVtYmVyIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nIG9yIGFycmF5IG9mIHBvaW50c1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd8QXJyYXl9XG4gKi9cbkNvbnZlcnRlci5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uKG51bWJlcikge1xuICAgIHZhciBpLCBkaXZpZGUsIG5ld2xlbixcbiAgICBudW1iZXJNYXAgPSB7fSxcbiAgICBmcm9tQmFzZSA9IHRoaXMuc3JjQWxwaGFiZXQubGVuZ3RoLFxuICAgIHRvQmFzZSA9IHRoaXMuZHN0QWxwaGFiZXQubGVuZ3RoLFxuICAgIGxlbmd0aCA9IG51bWJlci5sZW5ndGgsXG4gICAgcmVzdWx0ID0gdHlwZW9mIG51bWJlciA9PT0gJ3N0cmluZycgPyAnJyA6IFtdO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQobnVtYmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ051bWJlciBcIicgKyBudW1iZXIgKyAnXCIgY29udGFpbnMgb2Ygbm9uLWFscGhhYmV0aWMgZGlnaXRzICgnICsgdGhpcy5zcmNBbHBoYWJldCArICcpJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3JjQWxwaGFiZXQgPT09IHRoaXMuZHN0QWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbnVtYmVyTWFwW2ldID0gdGhpcy5zcmNBbHBoYWJldC5pbmRleE9mKG51bWJlcltpXSk7XG4gICAgfVxuICAgIGRvIHtcbiAgICAgICAgZGl2aWRlID0gMDtcbiAgICAgICAgbmV3bGVuID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkaXZpZGUgPSBkaXZpZGUgKiBmcm9tQmFzZSArIG51bWJlck1hcFtpXTtcbiAgICAgICAgICAgIGlmIChkaXZpZGUgPj0gdG9CYXNlKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyTWFwW25ld2xlbisrXSA9IHBhcnNlSW50KGRpdmlkZSAvIHRvQmFzZSwgMTApO1xuICAgICAgICAgICAgICAgIGRpdmlkZSA9IGRpdmlkZSAlIHRvQmFzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3bGVuID4gMCkge1xuICAgICAgICAgICAgICAgIG51bWJlck1hcFtuZXdsZW4rK10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCA9IG5ld2xlbjtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5kc3RBbHBoYWJldC5zbGljZShkaXZpZGUsIGRpdmlkZSArIDEpLmNvbmNhdChyZXN1bHQpO1xuICAgIH0gd2hpbGUgKG5ld2xlbiAhPT0gMCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZCBudW1iZXIgd2l0aCBzb3VyY2UgYWxwaGFiZXRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkNvbnZlcnRlci5wcm90b3R5cGUuaXNWYWxpZCA9IGZ1bmN0aW9uKG51bWJlcikge1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgaSA8IG51bWJlci5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodGhpcy5zcmNBbHBoYWJldC5pbmRleE9mKG51bWJlcltpXSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnZlcnRlcjsiLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCdcblxuY29uc3QgVVJMX0lEID0gJ3VybF9pZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdTdGF0ZU1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkKSB7XG4gICAgc3VwZXIocGF5bG9hZClcbiAgfVxuXG4gIHNldFVybElkKGlkKSB7XG4gICAgdGhpcy5zZXQoVVJMX0lELCBpZClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0VXJsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFVSTF9JRClcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgRGVidWdTdGF0ZU1vZGVsKHRoaXMudG9Kc29uKCkpXG4gIH1cbn1cbiIsImltcG9ydCBzaG9ydFVVSUQgZnJvbSAnc2hvcnQtdXVpZCdcblxuY29uc3QgSUQgPSAnaWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgI3BheWxvYWRcblxuICBjb25zdHJ1Y3RvcihwYXlsb2FkKSB7XG4gICAgdGhpcy4jcGF5bG9hZCA9IHBheWxvYWQgPyB7IC4uLnBheWxvYWQgfSA6IHt9XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoSUQpXG4gIH1cblxuICBnZW5lcmF0ZUlkKCkge1xuICAgIHRoaXMuc2V0KElELCBzaG9ydFVVSUQuZ2VuZXJhdGUoKSlcbiAgfVxuXG4gIGdldChmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLiNwYXlsb2FkW2ZpZWxkXVxuICB9XG5cbiAgc2V0KGZpZWxkLCB2YWx1ZSkge1xuICAgIHRoaXMuI3BheWxvYWRbZmllbGRdID0gdmFsdWVcbiAgfVxuXG4gIHRvSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jcGF5bG9hZFxuICB9XG59XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCdcblxuY29uc3QgTkFNRSA9ICduYW1lJ1xuY29uc3QgVVJMID0gJ3VybCdcbmNvbnN0IFBPUlQgPSAncG9ydCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHBheWxvYWQpIHtcbiAgICBzdXBlcihwYXlsb2FkKVxuICB9XG5cbiAgc3RhdGljIHdpdGhJZCgpIHtcbiAgICBsZXQgbmV3VXJsID0gbmV3IFVybE1vZGVsKClcbiAgICBuZXdVcmwuZ2VuZXJhdGVJZCgpXG5cbiAgICByZXR1cm4gbmV3VXJsXG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLnNldChOQU1FLCBuYW1lKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldChOQU1FKVxuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMuc2V0KFVSTCwgdXJsKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXRVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFVSTClcbiAgfVxuXG4gIHNldFBvcnQocG9ydCkge1xuICAgIHRoaXMuc2V0KFBPUlQsIHBvcnQpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldFBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFBPUlQpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFVybE1vZGVsKHRoaXMudG9Kc29uKCkpXG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROYW1lKCkgJiYgdGhpcy5nZXRVcmwoKSAmJiB0aGlzLmdldFBvcnQoKVxuICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFVybE1vZGVsIH0gZnJvbSAnLi9VcmxNb2RlbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVidWdTdGF0ZU1vZGVsIH0gZnJvbSAnLi9EZWJ1Z1N0YXRlTW9kZWwnXG4iLCJjb25zdCBwYXRocyA9IHtcbiAgTElWRToge1xuICAgIDMyOiAnYXNzZXRzL2xpdmUvY2xvdWRfMzIucG5nJyxcbiAgfSxcbiAgUkVBRFk6IHtcbiAgICAzMjogJ2Fzc2V0cy9yZWFkeS9jbG91ZF8zMi5wbmcnLFxuICB9LFxuICBESVNBQkxFRDoge1xuICAgIDMyOiAnYXNzZXRzL2Rpc2FibGVkL2Nsb3VkXzMyLnBuZycsXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldEljb24ge1xuICBzdGF0aWMgc2V0UmVhZHkodGFiSWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy4jc2V0SWNvbih0YWJJZCwgJ1JFQURZJywgY2FsbGJhY2spXG4gIH1cblxuICBzdGF0aWMgc2V0TGl2ZSh0YWJJZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLiNzZXRJY29uKHRhYklkLCAnTElWRScsIGNhbGxiYWNrKVxuICB9XG5cbiAgc3RhdGljIHNldERpc2FibGVkKHRhYklkLCBjYWxsYmFjaykge1xuICAgIHRoaXMuI3NldEljb24odGFiSWQsICdESVNBQkxFRCcsIGNhbGxiYWNrKVxuICB9XG5cbiAgc3RhdGljICNzZXRJY29uKHRhYklkLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gKCkgPT4ge31cbiAgICB9XG5cbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oXG4gICAgICB7XG4gICAgICAgIHBhdGg6IHBhdGhzW3R5cGVdLFxuICAgICAgICB0YWJJZDogdGFiSWQsXG4gICAgICB9LFxuICAgICAgY2FsbGJhY2ssXG4gICAgKVxuICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRlc3REZWJ1Z1N0YXRlIH0gZnJvbSAnLi90ZXN0RGVidWdTdGF0ZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9nZ2xlRGVidWdSZWZPbiB9IGZyb20gJy4vdG9nZ2xlRGVidWdSZWZPbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9nZ2xlRGVidWdSZWZPZmYgfSBmcm9tICcuL3RvZ2dsZURlYnVnUmVmT2ZmJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXRJY29uIH0gZnJvbSAnLi9TZXRJY29uJ1xuIiwiaW1wb3J0IHsgRGVidWdTdGF0ZVN0b3JhZ2UgfSBmcm9tICdzdG9yYWdlJ1xuY29uc3QgZGVidWdTdGF0ZVN0b3JhZ2UgPSBuZXcgRGVidWdTdGF0ZVN0b3JhZ2UoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0RGVidWdTdGF0ZSh0YWJJZCwgY2FsbGJhY2spIHtcbiAgZGVidWdTdGF0ZVN0b3JhZ2UuZ2V0U3RhdGUodGFiSWQsIChzdGF0ZSkgPT4ge1xuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5nZXRVcmxJZCgpKSB7XG4gICAgICBjYWxsYmFjaygnTElWRScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNocm9tZS5zY3JpcHRpbmdcbiAgICAgICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgICAgICB3b3JsZDogJ01BSU4nLFxuICAgICAgICAgIGZ1bmM6ICgpID0+IHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnbnd0U2VydmVyRGVidWdSZWYnKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGZyYW1lcykgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZyYW1lcyAmJiBmcmFtZXNbMF0ucmVzdWx0XG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQgPyAnUkVBRFknIDogJ0RJU0FCTEVEJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgLy8gU3dvbGxvdyB0aGUgZXJyb3IuIFRoaXMgaXMgbGlrZWx5IGR1ZSB0byB0aGUgcGFnZSByZWplY3RpbmcgaW5qZWN0ZWQgY29kZSxcbiAgICAgICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIGNhbnQgZG8gYW55dGhpbmcgbm8gbWF0dGVyIHdoYXRcbiAgICAgICAgICAgIGNhbGxiYWNrKCdESVNBQkxFRCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgKVxuICAgIH1cbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZURlYnVnUmVmT2ZmKHRhYklkLCBjYWxsYmFjaykge1xuICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgd29ybGQ6ICdNQUlOJyxcbiAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnbnd0U2VydmVyRGVidWdSZWYnKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBbR28gTG9jYWxdIFR1cm5pbmcgb2ZmIGRlYnVnIG1vZGVgKVxuXG4gICAgICAgICAgd2luZG93Lm53dFNlcnZlckRlYnVnUmVmLm9mZigpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgKGZyYW1lcykgPT4ge1xuICAgICAgICBjYWxsYmFjayhmcmFtZXMgJiYgZnJhbWVzWzBdLnJlc3VsdClcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tHbyBMb2NhbF0gRGVidWcgT2ZmIEVycm9yJylcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG5cbiAgICAgICAgLy8gU3dvbGxvdyB0aGUgZXJyb3IuIFRoaXMgaXMgbGlrZWx5IGR1ZSB0byB0aGUgcGFnZSByZWplY3RpbmcgaW5qZWN0ZWQgY29kZSxcbiAgICAgICAgLy8gd2hpY2ggbWVhbnMgd2UgY2FudCBkbyBhbnl0aGluZ1xuICAgICAgICBjYWxsYmFjayhmYWxzZSlcbiAgICAgIH0sXG4gICAgKVxufVxuXG5mdW5jdGlvbiB0b2dnbGVPZmYoKSB7fVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlRGVidWdSZWZPbih0YWJJZCwgdXJsTW9kZWwsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybE1vZGVsLmdldFVybCgpXG4gIGNvbnN0IHBvcnQgPSB1cmxNb2RlbC5nZXRQb3J0KClcblxuICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgd29ybGQ6ICdNQUlOJyxcbiAgICAgIGZ1bmM6IChwb3J0LCB1cmwpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnbnd0U2VydmVyRGVidWdSZWYnKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYFtHbyBMb2NhbF0gU2V0dGluZyBEZWJ1ZyBNb2RlLiBVcmw6ICR7dXJsfSwgUG9ydDogJHtwb3J0fWAsXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgd2luZG93Lm53dFNlcnZlckRlYnVnUmVmLm9uKHBvcnQsIHVybClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgYXJnczogW3BvcnQsIHVybF0sXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIChmcmFtZXMpID0+IHtcbiAgICAgICAgY2FsbGJhY2soZnJhbWVzICYmIGZyYW1lc1swXS5yZXN1bHQpXG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbR28gTG9jYWxdIERlYnVnIE9uIEVycm9yJylcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG5cbiAgICAgICAgLy8gU3dvbGxvdyB0aGUgZXJyb3IuIFRoaXMgaXMgbGlrZWx5IGR1ZSB0byB0aGUgcGFnZSByZWplY3RpbmcgaW5qZWN0ZWQgY29kZSxcbiAgICAgICAgLy8gd2hpY2ggbWVhbnMgd2UgY2FudCBkbyBhbnl0aGluZ1xuICAgICAgICBjYWxsYmFjayhmYWxzZSlcbiAgICAgIH0sXG4gICAgKVxufVxuIiwiY29uc3QgTkFNRVNQQUNFID0gJ0dPTE9DQUxfMl9TVE9SQUdFJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaHJvbWVTdG9yYWdlIHtcbiAgI3R5cGVcblxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy4jdHlwZSA9IHR5cGVcbiAgfVxuXG4gIHN0YXRpYyBzeW5jKCkge1xuICAgIHJldHVybiBuZXcgQ2hyb21lU3RvcmFnZSgnc3luYycpXG4gIH1cblxuICBzdGF0aWMgc2Vzc2lvbigpIHtcbiAgICByZXR1cm4gbmV3IENocm9tZVN0b3JhZ2UoJ3Nlc3Npb24nKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyKGlkLCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5nZXRTdG9yYWdlKChzdG9yYWdlKSA9PiB7XG4gICAgICBzdG9yYWdlW2lkXSA9IGNvbnRhaW5lclxuXG4gICAgICB0aGlzLnNldFN0b3JhZ2Uoc3RvcmFnZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmdldENvbnRhaW5lcihpZCwgY2FsbGJhY2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRDb250YWluZXIoaWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5nZXRTdG9yYWdlKChzdG9yYWdlKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gc3RvcmFnZVtpZF1cbiAgICAgIGNhbGxiYWNrKGNvbnRhaW5lcilcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RvcmFnZVxuICAvL1xuXG4gIGdldFN0b3JhZ2UoY2FsbGJhY2spIHtcbiAgICBjaHJvbWUuc3RvcmFnZVt0aGlzLiN0eXBlXS5nZXQoTkFNRVNQQUNFLCAoc3RvcmUpID0+IHtcbiAgICAgIGxldCBzdG9yYWdlID0gc3RvcmVbTkFNRVNQQUNFXVxuXG4gICAgICBpZiAoIXN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHt9LCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRTdG9yYWdlKGNhbGxiYWNrKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soc3RvcmFnZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0U3RvcmFnZShzdG9yYWdlLCBjYWxsYmFjaykge1xuICAgIGxldCBzdG9yZSA9IHt9XG4gICAgc3RvcmVbTkFNRVNQQUNFXSA9IHN0b3JhZ2VcblxuICAgIGNocm9tZS5zdG9yYWdlW3RoaXMuI3R5cGVdLnNldChzdG9yZSwgY2FsbGJhY2spXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjaHJvbWUuc3RvcmFnZVt0aGlzLiN0eXBlXS5jbGVhcigoKSA9PiB7XG4gICAgICB0aGlzLmdldFN0b3JhZ2UoKVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciB7XG4gICNwYXlsb2FkXG5cbiAgY29uc3RydWN0b3IocGF5bG9hZCkge1xuICAgIHRoaXMuI3BheWxvYWQgPSBwYXlsb2FkIHx8IHt9XG4gIH1cblxuICBzZXQobmFtZSwgb2JqZWN0KSB7XG4gICAgdGhpcy4jcGF5bG9hZFtuYW1lXSA9IG9iamVjdFxuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy4jcGF5bG9hZFtuYW1lXVxuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuI3BheWxvYWQpXG4gIH1cblxuICB0b0pzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BheWxvYWRcbiAgfVxufVxuIiwiaW1wb3J0IENocm9tZVN0b3JhZ2UgZnJvbSAnLi9DaHJvbWVTdG9yYWdlJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJ1xuXG5pbXBvcnQgeyBEZWJ1Z1N0YXRlTW9kZWwgfSBmcm9tICdtb2RlbHMnXG5cbmNvbnN0IElEID0gJ0RFQlVHX1NUQVRFX1NUT1JBR0UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnU3RhdGVTdG9yYWdlIGV4dGVuZHMgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENocm9tZVN0b3JhZ2Uuc2Vzc2lvbigpLCBJRClcbiAgfVxuXG4gIHNldFN0YXRlKHRhYklkLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIShzdGF0ZSBpbnN0YW5jZW9mIERlYnVnU3RhdGVNb2RlbCkpIHtcbiAgICAgIHRocm93ICdTdGF0ZSBtdXN0IGJlIG9mIHR5cGUgRGVidWdTdGF0ZU1vZGVsJ1xuICAgIH1cblxuICAgIHRoaXMuZ2V0Q29udGFpbmVyKChjb250YWluZXIpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXQodGFiSWQsIHN0YXRlLnRvSnNvbigpKVxuXG4gICAgICB0aGlzLnNldENvbnRhaW5lcihjb250YWluZXIsIChwZXJzaXN0ZWQpID0+IHtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobmV3IERlYnVnU3RhdGVNb2RlbChwZXJzaXN0ZWQuZ2V0KHRhYklkKSkpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRTdGF0ZSh0YWJJZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmdldENvbnRhaW5lcigoY29udGFpbmVyKSA9PiB7XG4gICAgICBsZXQgc3RhdGUgPSBjb250YWluZXIuZ2V0KHRhYklkKVxuICAgICAgY2FsbGJhY2soc3RhdGUgPyBuZXcgRGVidWdTdGF0ZU1vZGVsKHN0YXRlKSA6IG51bGwpXG4gICAgfSlcbiAgfVxuXG4gIGdldEFsbChjYWxsYmFjaykge1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyKChjb250YWluZXIpID0+IHtcbiAgICAgIGNhbGxiYWNrKGNvbnRhaW5lci5nZXRBbGwoKS5tYXAoKGpzb24pID0+IG5ldyBEZWJ1Z1N0YXRlTW9kZWwoanNvbikpKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVTdGF0ZSh0YWJJZCwgY2FsbGJhY2spIHtcbiAgICBnZXRDb250YWluZXIoKGNvbnRhaW5lcikgPT4ge1xuICAgICAgZGVsZXRlIGNvbnRhaW5lclt0YWJJZF1cbiAgICAgIGNhbGxiYWNrKClcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgI3N0b3JhZ2VcbiAgI2lkXG5cbiAgY29uc3RydWN0b3Ioc3RvcmFnZSwgaWQpIHtcbiAgICB0aGlzLiNzdG9yYWdlID0gc3RvcmFnZVxuICAgIHRoaXMuI2lkID0gaWRcbiAgfVxuXG4gIGdldENvbnRhaW5lcihjYWxsYmFjaykge1xuICAgIHRoaXMuI3N0b3JhZ2UuZ2V0Q29udGFpbmVyKHRoaXMuI2lkLCAoY29udGFpbmVyKSA9PiB7XG4gICAgICBjYWxsYmFjayhuZXcgQ29udGFpbmVyKGNvbnRhaW5lcikpXG4gICAgfSlcbiAgfVxuXG4gIHNldENvbnRhaW5lcihjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy4jc3RvcmFnZS5zZXRDb250YWluZXIodGhpcy4jaWQsIGNvbnRhaW5lci50b0pzb24oKSwgKGNvbnRhaW5lcikgPT5cbiAgICAgIGNhbGxiYWNrKG5ldyBDb250YWluZXIoY29udGFpbmVyKSksXG4gICAgKVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy4jc3RvcmFnZS5jbGVhcigpXG4gIH1cbn1cbiIsImltcG9ydCBDaHJvbWVTdG9yYWdlIGZyb20gJy4vQ2hyb21lU3RvcmFnZSdcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSdcblxuaW1wb3J0IHsgVXJsTW9kZWwgfSBmcm9tICdtb2RlbHMnXG5cbmNvbnN0IElEID0gJ1VSTF9TVE9SQUdFJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmxTdG9yYWdlIGV4dGVuZHMgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENocm9tZVN0b3JhZ2Uuc3luYygpLCBJRClcbiAgfVxuXG4gIHNldFVybCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCEodXJsIGluc3RhbmNlb2YgVXJsTW9kZWwpKSB7XG4gICAgICB0aHJvdyAnVXJsIG11c3QgYmUgVVJMIE1vZGVsJ1xuICAgIH1cblxuICAgIHRoaXMuZ2V0Q29udGFpbmVyKChjb250YWluZXIpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXQodXJsLmdldElkKCksIHVybC50b0pzb24oKSlcblxuICAgICAgdGhpcy5zZXRDb250YWluZXIoY29udGFpbmVyLCAocGVyc2lzdGVkKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHBlcnNpc3RlZClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldFVybChpZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmdldENvbnRhaW5lcigoY29udGFpbmVyKSA9PiB7XG4gICAgICBjYWxsYmFjayhuZXcgVXJsTW9kbGUoY29udGFpbmVyLmdldChpZCkpKVxuICAgIH0pXG4gIH1cblxuICBnZXRBbGwoY2FsbGJhY2spIHtcbiAgICB0aGlzLmdldENvbnRhaW5lcigoY29udGFpbmVyKSA9PiB7XG4gICAgICBjYWxsYmFjayhjb250YWluZXIuZ2V0QWxsKCkubWFwKChqc29uKSA9PiBuZXcgVXJsTW9kZWwoanNvbikpKVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVXJsU3RvcmFnZSB9IGZyb20gJy4vVXJsU3RvcmFnZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVidWdTdGF0ZVN0b3JhZ2UgfSBmcm9tICcuL0RlYnVnU3RhdGVTdG9yYWdlJ1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFNhbXVlbCBvbiA2LzQvMjAxNi5cbiAqIFNpbXBsZSB3cmFwcGVyIGZ1bmN0aW9ucyB0byBwcm9kdWNlIHNob3J0ZXIgVVVJRHMgZm9yIGNvb2tpZXMsIG1heWJlIGV2ZXJ5dGhpbmc/XG4gKi9cblxuY29uc3QgeyB2NDogdXVpZHY0IH0gPSByZXF1aXJlKCd1dWlkJyk7XG5jb25zdCBhbnlCYXNlID0gcmVxdWlyZSgnYW55LWJhc2UnKTtcblxuY29uc3QgZmxpY2tyQmFzZTU4ID0gJzEyMzQ1Njc4OWFiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXpBQkNERUZHSEpLTE1OUFFSU1RVVldYWVonO1xuY29uc3QgY29va2llQmFzZTkwID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiEjJCUmJygpKistLi86PD0+P0BbXV5fYHt8fX5cIjtcblxuY29uc3QgYmFzZU9wdGlvbnMgPSB7XG4gIGNvbnNpc3RlbnRMZW5ndGg6IHRydWUsXG59O1xuXG4vLyBBIGRlZmF1bHQgZ2VuZXJhdG9yLCBpbnN0YW50aWF0ZWQgb25seSBpZiB1c2VkLlxubGV0IHRvRmxpY2tyO1xuXG4vKipcbiAqIFRha2VzIGEgVVVJRCwgc3RyaXBzIHRoZSBkYXNoZXMsIGFuZCB0cmFuc2xhdGVzLlxuICogQHBhcmFtIHtzdHJpbmd9IGxvbmdJZFxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpfSB0cmFuc2xhdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhZGRpbmdQYXJhbXNdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBzaG9ydGVuVVVJRCA9IChsb25nSWQsIHRyYW5zbGF0b3IsIHBhZGRpbmdQYXJhbXMpID0+IHtcbiAgY29uc3QgdHJhbnNsYXRlZCA9IHRyYW5zbGF0b3IobG9uZ0lkLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLS9nLCAnJykpO1xuXG4gIGlmICghcGFkZGluZ1BhcmFtcyB8fCAhcGFkZGluZ1BhcmFtcy5jb25zaXN0ZW50TGVuZ3RoKSByZXR1cm4gdHJhbnNsYXRlZDtcblxuICByZXR1cm4gdHJhbnNsYXRlZC5wYWRTdGFydChcbiAgICBwYWRkaW5nUGFyYW1zLnNob3J0SWRMZW5ndGgsXG4gICAgcGFkZGluZ1BhcmFtcy5wYWRkaW5nQ2hhcixcbiAgKTtcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlIGJhY2sgdG8gaGV4IGFuZCB0dXJuIGJhY2sgaW50byBVVUlEIGZvcm1hdCwgd2l0aCBkYXNoZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaG9ydElkXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyl9IHRyYW5zbGF0b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGVubGFyZ2VVVUlEID0gKHNob3J0SWQsIHRyYW5zbGF0b3IpID0+IHtcbiAgY29uc3QgdXUxID0gdHJhbnNsYXRvcihzaG9ydElkKS5wYWRTdGFydCgzMiwgJzAnKTtcblxuICAvLyBKb2luIHRoZSB6ZXJvIHBhZGRpbmcgYW5kIHRoZSBVVUlEIGFuZCB0aGVuIHNsaWNlIGl0IHVwIHdpdGggbWF0Y2hcbiAgY29uc3QgbSA9IHV1MS5tYXRjaCgvKFxcd3s4fSkoXFx3ezR9KShcXHd7NH0pKFxcd3s0fSkoXFx3ezEyfSkvKTtcblxuICAvLyBBY2N1bXVsYXRlIHRoZSBtYXRjaGVzIGFuZCBqb2luIHRoZW0uXG4gIHJldHVybiBbbVsxXSwgbVsyXSwgbVszXSwgbVs0XSwgbVs1XV0uam9pbignLScpO1xufTtcblxuLy8gQ2FsY3VsYXRlIGxlbmd0aCBmb3IgdGhlIHNob3J0ZW5lZCBJRFxuY29uc3QgZ2V0U2hvcnRJZExlbmd0aCA9IChhbHBoYWJldExlbmd0aCkgPT4gKFxuICBNYXRoLmNlaWwoTWF0aC5sb2coMiAqKiAxMjgpIC8gTWF0aC5sb2coYWxwaGFiZXRMZW5ndGgpKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gKCgpID0+IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b0FscGhhYmV0IC0gRGVmYXVsdHMgdG8gZmxpY2tyQmFzZTU4IGlmIG5vdCBwcm92aWRlZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqXG4gICAqIEByZXR1cm5zIHt7bmV3OiAoZnVuY3Rpb24oKSksXG4gICAqICB1dWlkOiAoZnVuY3Rpb24oKSksXG4gICAqICBmcm9tVVVJRDogKGZ1bmN0aW9uKHN0cmluZykpLFxuICAgKiAgdG9VVUlEOiAoZnVuY3Rpb24oc3RyaW5nKSksXG4gICAqICBhbHBoYWJldDogKHN0cmluZyl9fVxuICAgKi9cbiAgY29uc3QgbWFrZUNvbnZlcnRvciA9ICh0b0FscGhhYmV0LCBvcHRpb25zKSA9PiB7XG4gICAgLy8gRGVmYXVsdCB0byBGbGlja3IgNThcbiAgICBjb25zdCB1c2VBbHBoYWJldCA9IHRvQWxwaGFiZXQgfHwgZmxpY2tyQmFzZTU4O1xuXG4gICAgLy8gRGVmYXVsdCB0byBiYXNlT3B0aW9uc1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHsgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcblxuICAgIC8vIENoZWNrIGFscGhhYmV0IGZvciBkdXBsaWNhdGUgZW50cmllc1xuICAgIGlmIChbLi4ubmV3IFNldChBcnJheS5mcm9tKHVzZUFscGhhYmV0KSldLmxlbmd0aCAhPT0gdXNlQWxwaGFiZXQubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwcm92aWRlZCBBbHBoYWJldCBoYXMgZHVwbGljYXRlIGNoYXJhY3RlcnMgcmVzdWx0aW5nIGluIHVucmVsaWFibGUgcmVzdWx0cycpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3J0SWRMZW5ndGggPSBnZXRTaG9ydElkTGVuZ3RoKHVzZUFscGhhYmV0Lmxlbmd0aCk7XG5cbiAgICAvLyBQYWRkaW5nIFBhcmFtc1xuICAgIGNvbnN0IHBhZGRpbmdQYXJhbXMgPSB7XG4gICAgICBzaG9ydElkTGVuZ3RoLFxuICAgICAgY29uc2lzdGVudExlbmd0aDogc2VsZWN0ZWRPcHRpb25zLmNvbnNpc3RlbnRMZW5ndGgsXG4gICAgICBwYWRkaW5nQ2hhcjogdXNlQWxwaGFiZXRbMF0sXG4gICAgfTtcblxuICAgIC8vIFVVSURzIGFyZSBpbiBoZXgsIHNvIHdlIHRyYW5zbGF0ZSB0byBhbmQgZnJvbS5cbiAgICBjb25zdCBmcm9tSGV4ID0gYW55QmFzZShhbnlCYXNlLkhFWCwgdXNlQWxwaGFiZXQpO1xuICAgIGNvbnN0IHRvSGV4ID0gYW55QmFzZSh1c2VBbHBoYWJldCwgYW55QmFzZS5IRVgpO1xuICAgIGNvbnN0IGdlbmVyYXRlID0gKCkgPT4gc2hvcnRlblVVSUQodXVpZHY0KCksIGZyb21IZXgsIHBhZGRpbmdQYXJhbXMpO1xuXG4gICAgY29uc3QgdHJhbnNsYXRvciA9IHtcbiAgICAgIG5ldzogZ2VuZXJhdGUsXG4gICAgICBnZW5lcmF0ZSxcbiAgICAgIHV1aWQ6IHV1aWR2NCxcbiAgICAgIGZyb21VVUlEOiAodXVpZCkgPT4gc2hvcnRlblVVSUQodXVpZCwgZnJvbUhleCwgcGFkZGluZ1BhcmFtcyksXG4gICAgICB0b1VVSUQ6IChzaG9ydFV1aWQpID0+IGVubGFyZ2VVVUlEKHNob3J0VXVpZCwgdG9IZXgpLFxuICAgICAgYWxwaGFiZXQ6IHVzZUFscGhhYmV0LFxuICAgICAgbWF4TGVuZ3RoOiBzaG9ydElkTGVuZ3RoLFxuICAgIH07XG5cbiAgICBPYmplY3QuZnJlZXplKHRyYW5zbGF0b3IpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0b3I7XG4gIH07XG5cbiAgLy8gRXhwb3NlIHRoZSBjb25zdGFudHMgZm9yIG90aGVyIHB1cnBvc2VzLlxuICBtYWtlQ29udmVydG9yLmNvbnN0YW50cyA9IHtcbiAgICBmbGlja3JCYXNlNTgsXG4gICAgY29va2llQmFzZTkwLFxuICB9O1xuXG4gIC8vIEV4cG9zZSB0aGUgZ2VuZXJpYyB2NCBVVUlEIGdlbmVyYXRvciBmb3IgY29udmVuaWVuY2VcbiAgbWFrZUNvbnZlcnRvci51dWlkID0gdXVpZHY0O1xuXG4gIC8vIFByb3ZpZGUgYSBnZW5lcmljIGdlbmVyYXRvclxuICBtYWtlQ29udmVydG9yLmdlbmVyYXRlID0gKCkgPT4ge1xuICAgIGlmICghdG9GbGlja3IpIHtcbiAgICAgIC8vIEdlbmVyYXRlIG9uIGZpcnN0IHVzZTtcbiAgICAgIHRvRmxpY2tyID0gbWFrZUNvbnZlcnRvcihmbGlja3JCYXNlNTgpLmdlbmVyYXRlO1xuICAgIH1cbiAgICByZXR1cm4gdG9GbGlja3IoKTtcbiAgfTtcblxuICByZXR1cm4gbWFrZUNvbnZlcnRvcjtcbn0pKCk7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHYxIH0gZnJvbSAnLi92MS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHYzIH0gZnJvbSAnLi92My5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY0IH0gZnJvbSAnLi92NC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY1IH0gZnJvbSAnLi92NS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5JTCB9IGZyb20gJy4vbmlsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZhbGlkYXRlIH0gZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2UgfSBmcm9tICcuL3BhcnNlLmpzJzsiLCIvKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICB2YXIgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgdmFyIGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICB2YXIgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgdmFyIGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gIHZhciBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICB2YXIgb2xkYSA9IGE7XG4gICAgdmFyIG9sZGIgPSBiO1xuICAgIHZhciBvbGRjID0gYztcbiAgICB2YXIgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIHZhciBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgdmFyIGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZDU7IiwiZXhwb3J0IGRlZmF1bHQgJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCIvLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIHZhciBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICB2YXIgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgdmFyIGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgdmFyIE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgdmFyIE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IE47ICsrX2kpIHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbX2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1bX2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBOOyArK19pMikge1xuICAgIHZhciBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1bX2kyXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfdCA9IDE2OyBfdCA8IDgwOyArK190KSB7XG4gICAgICBXW190XSA9IFJPVEwoV1tfdCAtIDNdIF4gV1tfdCAtIDhdIF4gV1tfdCAtIDE0XSBeIFdbX3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG5cbiAgICBmb3IgKHZhciBfdDIgPSAwOyBfdDIgPCA4MDsgKytfdDIpIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihfdDIgLyAyMCk7XG4gICAgICB2YXIgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW190Ml0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhMTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnOyAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xuXG52YXIgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBuZXcgQXJyYXkoMTYpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIHZhciBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICB2YXIgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBzdHJpbmdpZnkoYik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHYxOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNS5qcyc7XG52YXIgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2UuanMnO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IHZhciBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCB2YXIgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmIChuYW1lc3BhY2UubGVuZ3RoICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5KGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBzaGExIGZyb20gJy4vc2hhMS5qcyc7XG52YXIgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnN1YnN0cigxNCwgMSksIDE2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmVyc2lvbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdGVzdERlYnVnU3RhdGUsIFNldEljb24gfSBmcm9tICdzY3JpcHRzJ1xuXG4vLyBFdmVudCBmaXJlZCB3aGVuIGEgdGFiIGlzIG9wZW5lZFxuLy9cbmNocm9tZS50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gIGhhbmRsZVRhYkV2ZW50KHRhYi5pZClcbn0pXG5cbi8vIEV2ZW50IGZpcmVkIHdoZW4gdGFiIGZvY3VzIGNoYW5nZXNcbi8vXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gIGhhbmRsZVRhYkV2ZW50KHRhYi50YWJJZClcbn0pXG5cbi8vIEV2ZW50IGZpcmVkIHdoZW4gcGFnZSBjaGFuZ2VzXG4vL1xuY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKChpZCwgY2hhbmdlLCB0YWIpID0+IHtcbiAgaWYgKGNoYW5nZS5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcbiAgICBoYW5kbGVUYWJFdmVudChpZClcbiAgfVxufSlcblxuZnVuY3Rpb24gaGFuZGxlVGFiRXZlbnQodGFiSWQpIHtcbiAgdGVzdERlYnVnU3RhdGUodGFiSWQsIChzdGF0ZSkgPT4ge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgJ1JFQURZJzpcbiAgICAgICAgU2V0SWNvbi5zZXRSZWFkeSh0YWJJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0xJVkUnOlxuICAgICAgICBTZXRJY29uLnNldExpdmUodGFiSWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBTZXRJY29uLnNldERpc2FibGVkKHRhYklkKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gTGlzdGVuZXIgZm9yIGFsbCBydW50aW1lIG1lc3NhZ2VzXG4vL1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge30pXG4iXSwibmFtZXMiOlsiTW9kZWwiLCJVUkxfSUQiLCJEZWJ1Z1N0YXRlTW9kZWwiLCJwYXlsb2FkIiwiaWQiLCJzZXQiLCJnZXQiLCJ0b0pzb24iLCJzaG9ydFVVSUQiLCJJRCIsImdlbmVyYXRlIiwiZmllbGQiLCJ2YWx1ZSIsIk5BTUUiLCJVUkwiLCJQT1JUIiwiVXJsTW9kZWwiLCJuYW1lIiwidXJsIiwicG9ydCIsImdldE5hbWUiLCJnZXRVcmwiLCJnZXRQb3J0IiwibmV3VXJsIiwiZ2VuZXJhdGVJZCIsImRlZmF1bHQiLCJwYXRocyIsIkxJVkUiLCJSRUFEWSIsIkRJU0FCTEVEIiwiU2V0SWNvbiIsInRhYklkIiwiY2FsbGJhY2siLCJ0eXBlIiwiY2hyb21lIiwiYWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJ0ZXN0RGVidWdTdGF0ZSIsInRvZ2dsZURlYnVnUmVmT24iLCJ0b2dnbGVEZWJ1Z1JlZk9mZiIsIkRlYnVnU3RhdGVTdG9yYWdlIiwiZGVidWdTdGF0ZVN0b3JhZ2UiLCJnZXRTdGF0ZSIsInN0YXRlIiwiZ2V0VXJsSWQiLCJzY3JpcHRpbmciLCJleGVjdXRlU2NyaXB0IiwidGFyZ2V0Iiwid29ybGQiLCJmdW5jIiwid2luZG93IiwiaGFzT3duUHJvcGVydHkiLCJ0aGVuIiwiZnJhbWVzIiwicmVzdWx0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibnd0U2VydmVyRGVidWdSZWYiLCJvZmYiLCJ0b2dnbGVPZmYiLCJ1cmxNb2RlbCIsIm9uIiwiYXJncyIsIk5BTUVTUEFDRSIsIkNocm9tZVN0b3JhZ2UiLCJjb250YWluZXIiLCJnZXRTdG9yYWdlIiwic3RvcmFnZSIsInNldFN0b3JhZ2UiLCJnZXRDb250YWluZXIiLCJzdG9yZSIsImNsZWFyIiwiQ29udGFpbmVyIiwib2JqZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwiU3RvcmFnZSIsInNlc3Npb24iLCJzZXRDb250YWluZXIiLCJwZXJzaXN0ZWQiLCJnZXRBbGwiLCJtYXAiLCJqc29uIiwiVXJsU3RvcmFnZSIsInN5bmMiLCJnZXRJZCIsIlVybE1vZGxlIiwidGFicyIsIm9uQ3JlYXRlZCIsImFkZExpc3RlbmVyIiwidGFiIiwiaGFuZGxlVGFiRXZlbnQiLCJvbkFjdGl2YXRlZCIsIm9uVXBkYXRlZCIsImNoYW5nZSIsInN0YXR1cyIsInNldFJlYWR5Iiwic2V0TGl2ZSIsInNldERpc2FibGVkIiwicnVudGltZSIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9