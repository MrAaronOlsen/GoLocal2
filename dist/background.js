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
    128: 'assets/live/cloud_128.png'
  },
  READY: {
    128: 'assets/ready/cloud_128.png'
  },
  DISABLED: {
    128: 'assets/disabled/cloud_128.png'
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
  isWindowCompatible(tabId).then(function (frames) {
    var compatible = frames && frames[0].result;

    if (compatible) {
      isWindowLive(tabId, function (isLive) {
        callback(isLive ? 'LIVE' : 'READY');
      });
    } else {
      callback('DISABLED');
    }
  }, function (error) {
    // Swollow the error. This is likely due to the page rejecting injected code,
    // which means we cant do anything no matter what
    callback('DISABLED');
  });
}

function isWindowCompatible(tabId) {
  return chrome.scripting.executeScript({
    target: {
      tabId: tabId
    },
    world: 'MAIN',
    func: function func() {
      return window.hasOwnProperty('nwtServerDebugRef');
    }
  });
}

function isWindowLive(tabId, callback) {
  debugStateStorage.getState(tabId, function (state) {
    callback(state && state.getUrlId());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3Qk8sdURBQWMsQ0FBQ1AsS0FBRCxFQUFRLFVBQUM0QixLQUFELEVBQVc7SUFDL0IsUUFBUUEsS0FBUjtNQUNFLEtBQUssT0FBTDtRQUNFN0IscURBQUEsQ0FBaUJDLEtBQWpCO1FBQ0E7O01BQ0YsS0FBSyxNQUFMO1FBQ0VELG9EQUFBLENBQWdCQyxLQUFoQjtRQUNBOztNQUNGO1FBQ0VELHdEQUFBLENBQW9CQyxLQUFwQjtJQVJKO0VBVUQsQ0FYYSxDQUFkO0FBWUQsRUFFRDtBQUNBOzs7QUFDQUcsTUFBTSxDQUFDdUUsT0FBUCxDQUFlQyxTQUFmLENBQXlCWCxXQUF6QixDQUFxQyxVQUFDWSxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLFlBQWxCLEVBQW1DLENBQUUsQ0FBMUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvYW55LWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9hbnktYmFzZS9zcmMvY29udmVydGVyLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvbW9kZWxzL0RlYnVnU3RhdGVNb2RlbC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21vZGVscy9Nb2RlbC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21vZGVscy9VcmxNb2RlbC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvU2V0SWNvbi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL3NyYy9zY3JpcHRzL3Rlc3REZWJ1Z1N0YXRlLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvc2NyaXB0cy90b2dnbGVEZWJ1Z1JlZk9mZi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3NjcmlwdHMvdG9nZ2xlRGVidWdSZWZPbi5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3V0aWxzL3N0b3JhZ2UvQ2hyb21lU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3V0aWxzL3N0b3JhZ2UvQ29udGFpbmVyLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvdXRpbHMvc3RvcmFnZS9EZWJ1Z1N0YXRlU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3V0aWxzL3N0b3JhZ2UvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3V0aWxzL3N0b3JhZ2UvVXJsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vc3JjL3V0aWxzL3N0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL2luZGV4LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uaWwuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vZ29sb2NhbC8uL25vZGVfbW9kdWxlcy9zaG9ydC11dWlkL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YxLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzIiwid2VicGFjazovL2dvbG9jYWwvLi9ub2RlX21vZHVsZXMvc2hvcnQtdXVpZC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9nb2xvY2FsLy4vbm9kZV9tb2R1bGVzL3Nob3J0LXV1aWQvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL2dvbG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2xvY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sb2NhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbG9jYWwvLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBDb252ZXJ0ZXIgPSByZXF1aXJlKCcuL3NyYy9jb252ZXJ0ZXInKTtcblxuLyoqXG4gKiBGdW5jdGlvbiBnZXQgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBhbHBoYWJldCBhbmQgcmV0dXJuIGNvbnZlcnQgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gc3JjQWxwaGFiZXRcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBkc3RBbHBoYWJldFxuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbihudW1iZXJ8QXJyYXkpfVxuICovXG5mdW5jdGlvbiBhbnlCYXNlKHNyY0FscGhhYmV0LCBkc3RBbHBoYWJldCkge1xuICAgIHZhciBjb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKHNyY0FscGhhYmV0LCBkc3RBbHBoYWJldCk7XG4gICAgLyoqXG4gICAgICogQ29udmVydCBmdW5jdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IG51bWJlclxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfEFycmF5fSBudW1iZXJcbiAgICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICByZXR1cm4gY29udmVydGVyLmNvbnZlcnQobnVtYmVyKTtcbiAgICB9XG59O1xuXG5hbnlCYXNlLkJJTiA9ICcwMSc7XG5hbnlCYXNlLk9DVCA9ICcwMTIzNDU2Nyc7XG5hbnlCYXNlLkRFQyA9ICcwMTIzNDU2Nzg5JztcbmFueUJhc2UuSEVYID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFueUJhc2U7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvbnZlcnRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBzcmNBbHBoYWJldFxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IGRzdEFscGhhYmV0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ29udmVydGVyKHNyY0FscGhhYmV0LCBkc3RBbHBoYWJldCkge1xuICAgIGlmICghc3JjQWxwaGFiZXQgfHwgIWRzdEFscGhhYmV0IHx8ICFzcmNBbHBoYWJldC5sZW5ndGggfHwgIWRzdEFscGhhYmV0Lmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBhbHBoYWJldCcpO1xuICAgIH1cbiAgICB0aGlzLnNyY0FscGhhYmV0ID0gc3JjQWxwaGFiZXQ7XG4gICAgdGhpcy5kc3RBbHBoYWJldCA9IGRzdEFscGhhYmV0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgbnVtYmVyIGZyb20gc291cmNlIGFscGhhYmV0IHRvIGRlc3RpbmF0aW9uIGFscGhhYmV0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IG51bWJlciAtIG51bWJlciByZXByZXNlbnRlZCBhcyBhIHN0cmluZyBvciBhcnJheSBvZiBwb2ludHNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfEFycmF5fVxuICovXG5Db252ZXJ0ZXIucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbihudW1iZXIpIHtcbiAgICB2YXIgaSwgZGl2aWRlLCBuZXdsZW4sXG4gICAgbnVtYmVyTWFwID0ge30sXG4gICAgZnJvbUJhc2UgPSB0aGlzLnNyY0FscGhhYmV0Lmxlbmd0aCxcbiAgICB0b0Jhc2UgPSB0aGlzLmRzdEFscGhhYmV0Lmxlbmd0aCxcbiAgICBsZW5ndGggPSBudW1iZXIubGVuZ3RoLFxuICAgIHJlc3VsdCA9IHR5cGVvZiBudW1iZXIgPT09ICdzdHJpbmcnID8gJycgOiBbXTtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKG51bWJlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdW1iZXIgXCInICsgbnVtYmVyICsgJ1wiIGNvbnRhaW5zIG9mIG5vbi1hbHBoYWJldGljIGRpZ2l0cyAoJyArIHRoaXMuc3JjQWxwaGFiZXQgKyAnKScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNyY0FscGhhYmV0ID09PSB0aGlzLmRzdEFscGhhYmV0KSB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG51bWJlck1hcFtpXSA9IHRoaXMuc3JjQWxwaGFiZXQuaW5kZXhPZihudW1iZXJbaV0pO1xuICAgIH1cbiAgICBkbyB7XG4gICAgICAgIGRpdmlkZSA9IDA7XG4gICAgICAgIG5ld2xlbiA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGl2aWRlID0gZGl2aWRlICogZnJvbUJhc2UgKyBudW1iZXJNYXBbaV07XG4gICAgICAgICAgICBpZiAoZGl2aWRlID49IHRvQmFzZSkge1xuICAgICAgICAgICAgICAgIG51bWJlck1hcFtuZXdsZW4rK10gPSBwYXJzZUludChkaXZpZGUgLyB0b0Jhc2UsIDEwKTtcbiAgICAgICAgICAgICAgICBkaXZpZGUgPSBkaXZpZGUgJSB0b0Jhc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld2xlbiA+IDApIHtcbiAgICAgICAgICAgICAgICBudW1iZXJNYXBbbmV3bGVuKytdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggPSBuZXdsZW47XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuZHN0QWxwaGFiZXQuc2xpY2UoZGl2aWRlLCBkaXZpZGUgKyAxKS5jb25jYXQocmVzdWx0KTtcbiAgICB9IHdoaWxlIChuZXdsZW4gIT09IDApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWQgbnVtYmVyIHdpdGggc291cmNlIGFscGhhYmV0XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Db252ZXJ0ZXIucHJvdG90eXBlLmlzVmFsaWQgPSBmdW5jdGlvbihudW1iZXIpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBudW1iZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHRoaXMuc3JjQWxwaGFiZXQuaW5kZXhPZihudW1iZXJbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb252ZXJ0ZXI7IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnXG5cbmNvbnN0IFVSTF9JRCA9ICd1cmxfaWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnU3RhdGVNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IocGF5bG9hZCkge1xuICAgIHN1cGVyKHBheWxvYWQpXG4gIH1cblxuICBzZXRVcmxJZChpZCkge1xuICAgIHRoaXMuc2V0KFVSTF9JRCwgaWQpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldFVybElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldChVUkxfSUQpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IERlYnVnU3RhdGVNb2RlbCh0aGlzLnRvSnNvbigpKVxuICB9XG59XG4iLCJpbXBvcnQgc2hvcnRVVUlEIGZyb20gJ3Nob3J0LXV1aWQnXG5cbmNvbnN0IElEID0gJ2lkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gICNwYXlsb2FkXG5cbiAgY29uc3RydWN0b3IocGF5bG9hZCkge1xuICAgIHRoaXMuI3BheWxvYWQgPSBwYXlsb2FkID8geyAuLi5wYXlsb2FkIH0gOiB7fVxuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KElEKVxuICB9XG5cbiAgZ2VuZXJhdGVJZCgpIHtcbiAgICB0aGlzLnNldChJRCwgc2hvcnRVVUlELmdlbmVyYXRlKCkpXG4gIH1cblxuICBnZXQoZmllbGQpIHtcbiAgICByZXR1cm4gdGhpcy4jcGF5bG9hZFtmaWVsZF1cbiAgfVxuXG4gIHNldChmaWVsZCwgdmFsdWUpIHtcbiAgICB0aGlzLiNwYXlsb2FkW2ZpZWxkXSA9IHZhbHVlXG4gIH1cblxuICB0b0pzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BheWxvYWRcbiAgfVxufVxuIiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnXG5cbmNvbnN0IE5BTUUgPSAnbmFtZSdcbmNvbnN0IFVSTCA9ICd1cmwnXG5jb25zdCBQT1JUID0gJ3BvcnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybE1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkKSB7XG4gICAgc3VwZXIocGF5bG9hZClcbiAgfVxuXG4gIHN0YXRpYyB3aXRoSWQoKSB7XG4gICAgbGV0IG5ld1VybCA9IG5ldyBVcmxNb2RlbCgpXG4gICAgbmV3VXJsLmdlbmVyYXRlSWQoKVxuXG4gICAgcmV0dXJuIG5ld1VybFxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5zZXQoTkFNRSwgbmFtZSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoTkFNRSlcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnNldChVUkwsIHVybClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0VXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldChVUkwpXG4gIH1cblxuICBzZXRQb3J0KHBvcnQpIHtcbiAgICB0aGlzLnNldChQT1JULCBwb3J0KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXRQb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldChQT1JUKVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBVcmxNb2RlbCh0aGlzLnRvSnNvbigpKVxuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmFtZSgpICYmIHRoaXMuZ2V0VXJsKCkgJiYgdGhpcy5nZXRQb3J0KClcbiAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVcmxNb2RlbCB9IGZyb20gJy4vVXJsTW9kZWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlYnVnU3RhdGVNb2RlbCB9IGZyb20gJy4vRGVidWdTdGF0ZU1vZGVsJ1xuIiwiY29uc3QgcGF0aHMgPSB7XG4gIExJVkU6IHtcbiAgICAxMjg6ICdhc3NldHMvbGl2ZS9jbG91ZF8xMjgucG5nJyxcbiAgfSxcbiAgUkVBRFk6IHtcbiAgICAxMjg6ICdhc3NldHMvcmVhZHkvY2xvdWRfMTI4LnBuZycsXG4gIH0sXG4gIERJU0FCTEVEOiB7XG4gICAgMTI4OiAnYXNzZXRzL2Rpc2FibGVkL2Nsb3VkXzEyOC5wbmcnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXRJY29uIHtcbiAgc3RhdGljIHNldFJlYWR5KHRhYklkLCBjYWxsYmFjaykge1xuICAgIHRoaXMuI3NldEljb24odGFiSWQsICdSRUFEWScsIGNhbGxiYWNrKVxuICB9XG5cbiAgc3RhdGljIHNldExpdmUodGFiSWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy4jc2V0SWNvbih0YWJJZCwgJ0xJVkUnLCBjYWxsYmFjaylcbiAgfVxuXG4gIHN0YXRpYyBzZXREaXNhYmxlZCh0YWJJZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLiNzZXRJY29uKHRhYklkLCAnRElTQUJMRUQnLCBjYWxsYmFjaylcbiAgfVxuXG4gIHN0YXRpYyAjc2V0SWNvbih0YWJJZCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9ICgpID0+IHt9XG4gICAgfVxuXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKFxuICAgICAge1xuICAgICAgICBwYXRoOiBwYXRoc1t0eXBlXSxcbiAgICAgICAgdGFiSWQ6IHRhYklkLFxuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrLFxuICAgIClcbiAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB0ZXN0RGVidWdTdGF0ZSB9IGZyb20gJy4vdGVzdERlYnVnU3RhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvZ2dsZURlYnVnUmVmT24gfSBmcm9tICcuL3RvZ2dsZURlYnVnUmVmT24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvZ2dsZURlYnVnUmVmT2ZmIH0gZnJvbSAnLi90b2dnbGVEZWJ1Z1JlZk9mZidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2V0SWNvbiB9IGZyb20gJy4vU2V0SWNvbidcbiIsImltcG9ydCB7IERlYnVnU3RhdGVTdG9yYWdlIH0gZnJvbSAnc3RvcmFnZSdcbmNvbnN0IGRlYnVnU3RhdGVTdG9yYWdlID0gbmV3IERlYnVnU3RhdGVTdG9yYWdlKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdERlYnVnU3RhdGUodGFiSWQsIGNhbGxiYWNrKSB7XG4gIGlzV2luZG93Q29tcGF0aWJsZSh0YWJJZCkudGhlbihcbiAgICAoZnJhbWVzKSA9PiB7XG4gICAgICBsZXQgY29tcGF0aWJsZSA9IGZyYW1lcyAmJiBmcmFtZXNbMF0ucmVzdWx0XG5cbiAgICAgIGlmIChjb21wYXRpYmxlKSB7XG4gICAgICAgIGlzV2luZG93TGl2ZSh0YWJJZCwgKGlzTGl2ZSkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKGlzTGl2ZSA/ICdMSVZFJyA6ICdSRUFEWScpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygnRElTQUJMRUQnKVxuICAgICAgfVxuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICAvLyBTd29sbG93IHRoZSBlcnJvci4gVGhpcyBpcyBsaWtlbHkgZHVlIHRvIHRoZSBwYWdlIHJlamVjdGluZyBpbmplY3RlZCBjb2RlLFxuICAgICAgLy8gd2hpY2ggbWVhbnMgd2UgY2FudCBkbyBhbnl0aGluZyBubyBtYXR0ZXIgd2hhdFxuICAgICAgY2FsbGJhY2soJ0RJU0FCTEVEJylcbiAgICB9LFxuICApXG59XG5cbmZ1bmN0aW9uIGlzV2luZG93Q29tcGF0aWJsZSh0YWJJZCkge1xuICByZXR1cm4gY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYklkIH0sXG4gICAgd29ybGQ6ICdNQUlOJyxcbiAgICBmdW5jOiAoKSA9PiB3aW5kb3cuaGFzT3duUHJvcGVydHkoJ253dFNlcnZlckRlYnVnUmVmJyksXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlzV2luZG93TGl2ZSh0YWJJZCwgY2FsbGJhY2spIHtcbiAgZGVidWdTdGF0ZVN0b3JhZ2UuZ2V0U3RhdGUodGFiSWQsIChzdGF0ZSkgPT4ge1xuICAgIGNhbGxiYWNrKHN0YXRlICYmIHN0YXRlLmdldFVybElkKCkpXG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVEZWJ1Z1JlZk9mZih0YWJJZCwgY2FsbGJhY2spIHtcbiAgY2hyb21lLnNjcmlwdGluZ1xuICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkoJ253dFNlcnZlckRlYnVnUmVmJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgW0dvIExvY2FsXSBUdXJuaW5nIG9mZiBkZWJ1ZyBtb2RlYClcblxuICAgICAgICAgIHdpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vZmYoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIChmcmFtZXMpID0+IHtcbiAgICAgICAgY2FsbGJhY2soZnJhbWVzICYmIGZyYW1lc1swXS5yZXN1bHQpXG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbR28gTG9jYWxdIERlYnVnIE9mZiBFcnJvcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuXG4gICAgICAgIC8vIFN3b2xsb3cgdGhlIGVycm9yLiBUaGlzIGlzIGxpa2VseSBkdWUgdG8gdGhlIHBhZ2UgcmVqZWN0aW5nIGluamVjdGVkIGNvZGUsXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIGNhbnQgZG8gYW55dGhpbmdcbiAgICAgICAgY2FsbGJhY2soZmFsc2UpXG4gICAgICB9LFxuICAgIClcbn1cblxuZnVuY3Rpb24gdG9nZ2xlT2ZmKCkge31cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZURlYnVnUmVmT24odGFiSWQsIHVybE1vZGVsLCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxNb2RlbC5nZXRVcmwoKVxuICBjb25zdCBwb3J0ID0gdXJsTW9kZWwuZ2V0UG9ydCgpXG5cbiAgY2hyb21lLnNjcmlwdGluZ1xuICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgIHdvcmxkOiAnTUFJTicsXG4gICAgICBmdW5jOiAocG9ydCwgdXJsKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkoJ253dFNlcnZlckRlYnVnUmVmJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBbR28gTG9jYWxdIFNldHRpbmcgRGVidWcgTW9kZS4gVXJsOiAke3VybH0sIFBvcnQ6ICR7cG9ydH1gLFxuICAgICAgICAgIClcblxuICAgICAgICAgIHdpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vbihwb3J0LCB1cmwpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGFyZ3M6IFtwb3J0LCB1cmxdLFxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICAoZnJhbWVzKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKGZyYW1lcyAmJiBmcmFtZXNbMF0ucmVzdWx0KVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnW0dvIExvY2FsXSBEZWJ1ZyBPbiBFcnJvcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuXG4gICAgICAgIC8vIFN3b2xsb3cgdGhlIGVycm9yLiBUaGlzIGlzIGxpa2VseSBkdWUgdG8gdGhlIHBhZ2UgcmVqZWN0aW5nIGluamVjdGVkIGNvZGUsXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIGNhbnQgZG8gYW55dGhpbmdcbiAgICAgICAgY2FsbGJhY2soZmFsc2UpXG4gICAgICB9LFxuICAgIClcbn1cbiIsImNvbnN0IE5BTUVTUEFDRSA9ICdHT0xPQ0FMXzJfU1RPUkFHRSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hyb21lU3RvcmFnZSB7XG4gICN0eXBlXG5cbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMuI3R5cGUgPSB0eXBlXG4gIH1cblxuICBzdGF0aWMgc3luYygpIHtcbiAgICByZXR1cm4gbmV3IENocm9tZVN0b3JhZ2UoJ3N5bmMnKVxuICB9XG5cbiAgc3RhdGljIHNlc3Npb24oKSB7XG4gICAgcmV0dXJuIG5ldyBDaHJvbWVTdG9yYWdlKCdzZXNzaW9uJylcbiAgfVxuXG4gIHNldENvbnRhaW5lcihpZCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZ2V0U3RvcmFnZSgoc3RvcmFnZSkgPT4ge1xuICAgICAgc3RvcmFnZVtpZF0gPSBjb250YWluZXJcblxuICAgICAgdGhpcy5zZXRTdG9yYWdlKHN0b3JhZ2UsICgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoaWQsIGNhbGxiYWNrKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q29udGFpbmVyKGlkLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZ2V0U3RvcmFnZSgoc3RvcmFnZSkgPT4ge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IHN0b3JhZ2VbaWRdXG4gICAgICBjYWxsYmFjayhjb250YWluZXIpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0b3JhZ2VcbiAgLy9cblxuICBnZXRTdG9yYWdlKGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLnN0b3JhZ2VbdGhpcy4jdHlwZV0uZ2V0KE5BTUVTUEFDRSwgKHN0b3JlKSA9PiB7XG4gICAgICBsZXQgc3RvcmFnZSA9IHN0b3JlW05BTUVTUEFDRV1cblxuICAgICAgaWYgKCFzdG9yYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSh7fSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZ2V0U3RvcmFnZShjYWxsYmFjaylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHN0b3JhZ2UpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldFN0b3JhZ2Uoc3RvcmFnZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgc3RvcmUgPSB7fVxuICAgIHN0b3JlW05BTUVTUEFDRV0gPSBzdG9yYWdlXG5cbiAgICBjaHJvbWUuc3RvcmFnZVt0aGlzLiN0eXBlXS5zZXQoc3RvcmUsIGNhbGxiYWNrKVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2VbdGhpcy4jdHlwZV0uY2xlYXIoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRTdG9yYWdlKClcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIge1xuICAjcGF5bG9hZFxuXG4gIGNvbnN0cnVjdG9yKHBheWxvYWQpIHtcbiAgICB0aGlzLiNwYXlsb2FkID0gcGF5bG9hZCB8fCB7fVxuICB9XG5cbiAgc2V0KG5hbWUsIG9iamVjdCkge1xuICAgIHRoaXMuI3BheWxvYWRbbmFtZV0gPSBvYmplY3RcbiAgfVxuXG4gIGdldChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BheWxvYWRbbmFtZV1cbiAgfVxuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLiNwYXlsb2FkKVxuICB9XG5cbiAgdG9Kc29uKCkge1xuICAgIHJldHVybiB0aGlzLiNwYXlsb2FkXG4gIH1cbn1cbiIsImltcG9ydCBDaHJvbWVTdG9yYWdlIGZyb20gJy4vQ2hyb21lU3RvcmFnZSdcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSdcblxuaW1wb3J0IHsgRGVidWdTdGF0ZU1vZGVsIH0gZnJvbSAnbW9kZWxzJ1xuXG5jb25zdCBJRCA9ICdERUJVR19TVEFURV9TVE9SQUdFJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1Z1N0YXRlU3RvcmFnZSBleHRlbmRzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDaHJvbWVTdG9yYWdlLnNlc3Npb24oKSwgSUQpXG4gIH1cblxuICBzZXRTdGF0ZSh0YWJJZCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCEoc3RhdGUgaW5zdGFuY2VvZiBEZWJ1Z1N0YXRlTW9kZWwpKSB7XG4gICAgICB0aHJvdyAnU3RhdGUgbXVzdCBiZSBvZiB0eXBlIERlYnVnU3RhdGVNb2RlbCdcbiAgICB9XG5cbiAgICB0aGlzLmdldENvbnRhaW5lcigoY29udGFpbmVyKSA9PiB7XG4gICAgICBjb250YWluZXIuc2V0KHRhYklkLCBzdGF0ZS50b0pzb24oKSlcblxuICAgICAgdGhpcy5zZXRDb250YWluZXIoY29udGFpbmVyLCAocGVyc2lzdGVkKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG5ldyBEZWJ1Z1N0YXRlTW9kZWwocGVyc2lzdGVkLmdldCh0YWJJZCkpKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0U3RhdGUodGFiSWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5nZXRDb250YWluZXIoKGNvbnRhaW5lcikgPT4ge1xuICAgICAgbGV0IHN0YXRlID0gY29udGFpbmVyLmdldCh0YWJJZClcbiAgICAgIGNhbGxiYWNrKHN0YXRlID8gbmV3IERlYnVnU3RhdGVNb2RlbChzdGF0ZSkgOiBudWxsKVxuICAgIH0pXG4gIH1cblxuICBnZXRBbGwoY2FsbGJhY2spIHtcbiAgICB0aGlzLmdldENvbnRhaW5lcigoY29udGFpbmVyKSA9PiB7XG4gICAgICBjYWxsYmFjayhjb250YWluZXIuZ2V0QWxsKCkubWFwKChqc29uKSA9PiBuZXcgRGVidWdTdGF0ZU1vZGVsKGpzb24pKSlcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlU3RhdGUodGFiSWQsIGNhbGxiYWNrKSB7XG4gICAgZ2V0Q29udGFpbmVyKChjb250YWluZXIpID0+IHtcbiAgICAgIGRlbGV0ZSBjb250YWluZXJbdGFiSWRdXG4gICAgICBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICNzdG9yYWdlXG4gICNpZFxuXG4gIGNvbnN0cnVjdG9yKHN0b3JhZ2UsIGlkKSB7XG4gICAgdGhpcy4jc3RvcmFnZSA9IHN0b3JhZ2VcbiAgICB0aGlzLiNpZCA9IGlkXG4gIH1cblxuICBnZXRDb250YWluZXIoY2FsbGJhY2spIHtcbiAgICB0aGlzLiNzdG9yYWdlLmdldENvbnRhaW5lcih0aGlzLiNpZCwgKGNvbnRhaW5lcikgPT4ge1xuICAgICAgY2FsbGJhY2sobmV3IENvbnRhaW5lcihjb250YWluZXIpKVxuICAgIH0pXG4gIH1cblxuICBzZXRDb250YWluZXIoY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIHRoaXMuI3N0b3JhZ2Uuc2V0Q29udGFpbmVyKHRoaXMuI2lkLCBjb250YWluZXIudG9Kc29uKCksIChjb250YWluZXIpID0+XG4gICAgICBjYWxsYmFjayhuZXcgQ29udGFpbmVyKGNvbnRhaW5lcikpLFxuICAgIClcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuI3N0b3JhZ2UuY2xlYXIoKVxuICB9XG59XG4iLCJpbXBvcnQgQ2hyb21lU3RvcmFnZSBmcm9tICcuL0Nocm9tZVN0b3JhZ2UnXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnXG5cbmltcG9ydCB7IFVybE1vZGVsIH0gZnJvbSAnbW9kZWxzJ1xuXG5jb25zdCBJRCA9ICdVUkxfU1RPUkFHRSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsU3RvcmFnZSBleHRlbmRzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDaHJvbWVTdG9yYWdlLnN5bmMoKSwgSUQpXG4gIH1cblxuICBzZXRVcmwodXJsLCBjYWxsYmFjaykge1xuICAgIGlmICghKHVybCBpbnN0YW5jZW9mIFVybE1vZGVsKSkge1xuICAgICAgdGhyb3cgJ1VybCBtdXN0IGJlIFVSTCBNb2RlbCdcbiAgICB9XG5cbiAgICB0aGlzLmdldENvbnRhaW5lcigoY29udGFpbmVyKSA9PiB7XG4gICAgICBjb250YWluZXIuc2V0KHVybC5nZXRJZCgpLCB1cmwudG9Kc29uKCkpXG5cbiAgICAgIHRoaXMuc2V0Q29udGFpbmVyKGNvbnRhaW5lciwgKHBlcnNpc3RlZCkgPT4ge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhwZXJzaXN0ZWQpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXRVcmwoaWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5nZXRDb250YWluZXIoKGNvbnRhaW5lcikgPT4ge1xuICAgICAgY2FsbGJhY2sobmV3IFVybE1vZGxlKGNvbnRhaW5lci5nZXQoaWQpKSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0QWxsKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5nZXRDb250YWluZXIoKGNvbnRhaW5lcikgPT4ge1xuICAgICAgY2FsbGJhY2soY29udGFpbmVyLmdldEFsbCgpLm1hcCgoanNvbikgPT4gbmV3IFVybE1vZGVsKGpzb24pKSlcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFVybFN0b3JhZ2UgfSBmcm9tICcuL1VybFN0b3JhZ2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlYnVnU3RhdGVTdG9yYWdlIH0gZnJvbSAnLi9EZWJ1Z1N0YXRlU3RvcmFnZSdcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBTYW11ZWwgb24gNi80LzIwMTYuXG4gKiBTaW1wbGUgd3JhcHBlciBmdW5jdGlvbnMgdG8gcHJvZHVjZSBzaG9ydGVyIFVVSURzIGZvciBjb29raWVzLCBtYXliZSBldmVyeXRoaW5nP1xuICovXG5cbmNvbnN0IHsgdjQ6IHV1aWR2NCB9ID0gcmVxdWlyZSgndXVpZCcpO1xuY29uc3QgYW55QmFzZSA9IHJlcXVpcmUoJ2FueS1iYXNlJyk7XG5cbmNvbnN0IGZsaWNrckJhc2U1OCA9ICcxMjM0NTY3ODlhYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaJztcbmNvbnN0IGNvb2tpZUJhc2U5MCA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVohIyQlJicoKSorLS4vOjw9Pj9AW11eX2B7fH1+XCI7XG5cbmNvbnN0IGJhc2VPcHRpb25zID0ge1xuICBjb25zaXN0ZW50TGVuZ3RoOiB0cnVlLFxufTtcblxuLy8gQSBkZWZhdWx0IGdlbmVyYXRvciwgaW5zdGFudGlhdGVkIG9ubHkgaWYgdXNlZC5cbmxldCB0b0ZsaWNrcjtcblxuLyoqXG4gKiBUYWtlcyBhIFVVSUQsIHN0cmlwcyB0aGUgZGFzaGVzLCBhbmQgdHJhbnNsYXRlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb25nSWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKX0gdHJhbnNsYXRvclxuICogQHBhcmFtIHtPYmplY3R9IFtwYWRkaW5nUGFyYW1zXVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3Qgc2hvcnRlblVVSUQgPSAobG9uZ0lkLCB0cmFuc2xhdG9yLCBwYWRkaW5nUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZWQgPSB0cmFuc2xhdG9yKGxvbmdJZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0vZywgJycpKTtcblxuICBpZiAoIXBhZGRpbmdQYXJhbXMgfHwgIXBhZGRpbmdQYXJhbXMuY29uc2lzdGVudExlbmd0aCkgcmV0dXJuIHRyYW5zbGF0ZWQ7XG5cbiAgcmV0dXJuIHRyYW5zbGF0ZWQucGFkU3RhcnQoXG4gICAgcGFkZGluZ1BhcmFtcy5zaG9ydElkTGVuZ3RoLFxuICAgIHBhZGRpbmdQYXJhbXMucGFkZGluZ0NoYXIsXG4gICk7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBiYWNrIHRvIGhleCBhbmQgdHVybiBiYWNrIGludG8gVVVJRCBmb3JtYXQsIHdpdGggZGFzaGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hvcnRJZFxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpfSB0cmFuc2xhdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBlbmxhcmdlVVVJRCA9IChzaG9ydElkLCB0cmFuc2xhdG9yKSA9PiB7XG4gIGNvbnN0IHV1MSA9IHRyYW5zbGF0b3Ioc2hvcnRJZCkucGFkU3RhcnQoMzIsICcwJyk7XG5cbiAgLy8gSm9pbiB0aGUgemVybyBwYWRkaW5nIGFuZCB0aGUgVVVJRCBhbmQgdGhlbiBzbGljZSBpdCB1cCB3aXRoIG1hdGNoXG4gIGNvbnN0IG0gPSB1dTEubWF0Y2goLyhcXHd7OH0pKFxcd3s0fSkoXFx3ezR9KShcXHd7NH0pKFxcd3sxMn0pLyk7XG5cbiAgLy8gQWNjdW11bGF0ZSB0aGUgbWF0Y2hlcyBhbmQgam9pbiB0aGVtLlxuICByZXR1cm4gW21bMV0sIG1bMl0sIG1bM10sIG1bNF0sIG1bNV1dLmpvaW4oJy0nKTtcbn07XG5cbi8vIENhbGN1bGF0ZSBsZW5ndGggZm9yIHRoZSBzaG9ydGVuZWQgSURcbmNvbnN0IGdldFNob3J0SWRMZW5ndGggPSAoYWxwaGFiZXRMZW5ndGgpID0+IChcbiAgTWF0aC5jZWlsKE1hdGgubG9nKDIgKiogMTI4KSAvIE1hdGgubG9nKGFscGhhYmV0TGVuZ3RoKSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgoKSA9PiB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9BbHBoYWJldCAtIERlZmF1bHRzIHRvIGZsaWNrckJhc2U1OCBpZiBub3QgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKlxuICAgKiBAcmV0dXJucyB7e25ldzogKGZ1bmN0aW9uKCkpLFxuICAgKiAgdXVpZDogKGZ1bmN0aW9uKCkpLFxuICAgKiAgZnJvbVVVSUQ6IChmdW5jdGlvbihzdHJpbmcpKSxcbiAgICogIHRvVVVJRDogKGZ1bmN0aW9uKHN0cmluZykpLFxuICAgKiAgYWxwaGFiZXQ6IChzdHJpbmcpfX1cbiAgICovXG4gIGNvbnN0IG1ha2VDb252ZXJ0b3IgPSAodG9BbHBoYWJldCwgb3B0aW9ucykgPT4ge1xuICAgIC8vIERlZmF1bHQgdG8gRmxpY2tyIDU4XG4gICAgY29uc3QgdXNlQWxwaGFiZXQgPSB0b0FscGhhYmV0IHx8IGZsaWNrckJhc2U1ODtcblxuICAgIC8vIERlZmF1bHQgdG8gYmFzZU9wdGlvbnNcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB7IC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zIH07XG5cbiAgICAvLyBDaGVjayBhbHBoYWJldCBmb3IgZHVwbGljYXRlIGVudHJpZXNcbiAgICBpZiAoWy4uLm5ldyBTZXQoQXJyYXkuZnJvbSh1c2VBbHBoYWJldCkpXS5sZW5ndGggIT09IHVzZUFscGhhYmV0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgQWxwaGFiZXQgaGFzIGR1cGxpY2F0ZSBjaGFyYWN0ZXJzIHJlc3VsdGluZyBpbiB1bnJlbGlhYmxlIHJlc3VsdHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG9ydElkTGVuZ3RoID0gZ2V0U2hvcnRJZExlbmd0aCh1c2VBbHBoYWJldC5sZW5ndGgpO1xuXG4gICAgLy8gUGFkZGluZyBQYXJhbXNcbiAgICBjb25zdCBwYWRkaW5nUGFyYW1zID0ge1xuICAgICAgc2hvcnRJZExlbmd0aCxcbiAgICAgIGNvbnNpc3RlbnRMZW5ndGg6IHNlbGVjdGVkT3B0aW9ucy5jb25zaXN0ZW50TGVuZ3RoLFxuICAgICAgcGFkZGluZ0NoYXI6IHVzZUFscGhhYmV0WzBdLFxuICAgIH07XG5cbiAgICAvLyBVVUlEcyBhcmUgaW4gaGV4LCBzbyB3ZSB0cmFuc2xhdGUgdG8gYW5kIGZyb20uXG4gICAgY29uc3QgZnJvbUhleCA9IGFueUJhc2UoYW55QmFzZS5IRVgsIHVzZUFscGhhYmV0KTtcbiAgICBjb25zdCB0b0hleCA9IGFueUJhc2UodXNlQWxwaGFiZXQsIGFueUJhc2UuSEVYKTtcbiAgICBjb25zdCBnZW5lcmF0ZSA9ICgpID0+IHNob3J0ZW5VVUlEKHV1aWR2NCgpLCBmcm9tSGV4LCBwYWRkaW5nUGFyYW1zKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0b3IgPSB7XG4gICAgICBuZXc6IGdlbmVyYXRlLFxuICAgICAgZ2VuZXJhdGUsXG4gICAgICB1dWlkOiB1dWlkdjQsXG4gICAgICBmcm9tVVVJRDogKHV1aWQpID0+IHNob3J0ZW5VVUlEKHV1aWQsIGZyb21IZXgsIHBhZGRpbmdQYXJhbXMpLFxuICAgICAgdG9VVUlEOiAoc2hvcnRVdWlkKSA9PiBlbmxhcmdlVVVJRChzaG9ydFV1aWQsIHRvSGV4KSxcbiAgICAgIGFscGhhYmV0OiB1c2VBbHBoYWJldCxcbiAgICAgIG1heExlbmd0aDogc2hvcnRJZExlbmd0aCxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0cmFuc2xhdG9yKTtcblxuICAgIHJldHVybiB0cmFuc2xhdG9yO1xuICB9O1xuXG4gIC8vIEV4cG9zZSB0aGUgY29uc3RhbnRzIGZvciBvdGhlciBwdXJwb3Nlcy5cbiAgbWFrZUNvbnZlcnRvci5jb25zdGFudHMgPSB7XG4gICAgZmxpY2tyQmFzZTU4LFxuICAgIGNvb2tpZUJhc2U5MCxcbiAgfTtcblxuICAvLyBFeHBvc2UgdGhlIGdlbmVyaWMgdjQgVVVJRCBnZW5lcmF0b3IgZm9yIGNvbnZlbmllbmNlXG4gIG1ha2VDb252ZXJ0b3IudXVpZCA9IHV1aWR2NDtcblxuICAvLyBQcm92aWRlIGEgZ2VuZXJpYyBnZW5lcmF0b3JcbiAgbWFrZUNvbnZlcnRvci5nZW5lcmF0ZSA9ICgpID0+IHtcbiAgICBpZiAoIXRvRmxpY2tyKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBvbiBmaXJzdCB1c2U7XG4gICAgICB0b0ZsaWNrciA9IG1ha2VDb252ZXJ0b3IoZmxpY2tyQmFzZTU4KS5nZW5lcmF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRvRmxpY2tyKCk7XG4gIH07XG5cbiAgcmV0dXJuIG1ha2VDb252ZXJ0b3I7XG59KSgpO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB2MSB9IGZyb20gJy4vdjEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2MyB9IGZyb20gJy4vdjMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NCB9IGZyb20gJy4vdjQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NSB9IGZyb20gJy4vdjUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOSUwgfSBmcm9tICcuL25pbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWxpZGF0ZSB9IGZyb20gJy4vdmFsaWRhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlIH0gZnJvbSAnLi9wYXJzZS5qcyc7IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsImV4cG9ydCBkZWZhdWx0ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuXG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJzsgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcblxudmFyIF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICB2YXIgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgdmFyIHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgc3RyaW5naWZ5KGIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2MTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xudmFyIHYzID0gdjM1KCd2MycsIDB4MzAsIG1kNSk7XG5leHBvcnQgZGVmYXVsdCB2MzsiLCJpbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIHZhciBieXRlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gIH1cblxuICByZXR1cm4gYnl0ZXM7XG59XG5cbmV4cG9ydCB2YXIgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgdmFyIFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gcGFyc2UobmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZXNwYWNlLmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xudmFyIHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VJbnQodXVpZC5zdWJzdHIoMTQsIDEpLCAxNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnNpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRlc3REZWJ1Z1N0YXRlLCBTZXRJY29uIH0gZnJvbSAnc2NyaXB0cydcblxuLy8gRXZlbnQgZmlyZWQgd2hlbiBhIHRhYiBpcyBvcGVuZWRcbi8vXG5jaHJvbWUudGFicy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBoYW5kbGVUYWJFdmVudCh0YWIuaWQpXG59KVxuXG4vLyBFdmVudCBmaXJlZCB3aGVuIHRhYiBmb2N1cyBjaGFuZ2VzXG4vL1xuY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBoYW5kbGVUYWJFdmVudCh0YWIudGFiSWQpXG59KVxuXG4vLyBFdmVudCBmaXJlZCB3aGVuIHBhZ2UgY2hhbmdlc1xuLy9cbmNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigoaWQsIGNoYW5nZSwgdGFiKSA9PiB7XG4gIGlmIChjaGFuZ2Uuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgaGFuZGxlVGFiRXZlbnQoaWQpXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZVRhYkV2ZW50KHRhYklkKSB7XG4gIHRlc3REZWJ1Z1N0YXRlKHRhYklkLCAoc3RhdGUpID0+IHtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlICdSRUFEWSc6XG4gICAgICAgIFNldEljb24uc2V0UmVhZHkodGFiSWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdMSVZFJzpcbiAgICAgICAgU2V0SWNvbi5zZXRMaXZlKHRhYklkKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgU2V0SWNvbi5zZXREaXNhYmxlZCh0YWJJZClcbiAgICB9XG4gIH0pXG59XG5cbi8vIExpc3RlbmVyIGZvciBhbGwgcnVudGltZSBtZXNzYWdlc1xuLy9cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHt9KVxuIl0sIm5hbWVzIjpbIk1vZGVsIiwiVVJMX0lEIiwiRGVidWdTdGF0ZU1vZGVsIiwicGF5bG9hZCIsImlkIiwic2V0IiwiZ2V0IiwidG9Kc29uIiwic2hvcnRVVUlEIiwiSUQiLCJnZW5lcmF0ZSIsImZpZWxkIiwidmFsdWUiLCJOQU1FIiwiVVJMIiwiUE9SVCIsIlVybE1vZGVsIiwibmFtZSIsInVybCIsInBvcnQiLCJnZXROYW1lIiwiZ2V0VXJsIiwiZ2V0UG9ydCIsIm5ld1VybCIsImdlbmVyYXRlSWQiLCJkZWZhdWx0IiwicGF0aHMiLCJMSVZFIiwiUkVBRFkiLCJESVNBQkxFRCIsIlNldEljb24iLCJ0YWJJZCIsImNhbGxiYWNrIiwidHlwZSIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwidGVzdERlYnVnU3RhdGUiLCJ0b2dnbGVEZWJ1Z1JlZk9uIiwidG9nZ2xlRGVidWdSZWZPZmYiLCJEZWJ1Z1N0YXRlU3RvcmFnZSIsImRlYnVnU3RhdGVTdG9yYWdlIiwiaXNXaW5kb3dDb21wYXRpYmxlIiwidGhlbiIsImZyYW1lcyIsImNvbXBhdGlibGUiLCJyZXN1bHQiLCJpc1dpbmRvd0xpdmUiLCJpc0xpdmUiLCJlcnJvciIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJ0YXJnZXQiLCJ3b3JsZCIsImZ1bmMiLCJ3aW5kb3ciLCJoYXNPd25Qcm9wZXJ0eSIsImdldFN0YXRlIiwic3RhdGUiLCJnZXRVcmxJZCIsImNvbnNvbGUiLCJsb2ciLCJud3RTZXJ2ZXJEZWJ1Z1JlZiIsIm9mZiIsInRvZ2dsZU9mZiIsInVybE1vZGVsIiwib24iLCJhcmdzIiwiTkFNRVNQQUNFIiwiQ2hyb21lU3RvcmFnZSIsImNvbnRhaW5lciIsImdldFN0b3JhZ2UiLCJzdG9yYWdlIiwic2V0U3RvcmFnZSIsImdldENvbnRhaW5lciIsInN0b3JlIiwiY2xlYXIiLCJDb250YWluZXIiLCJvYmplY3QiLCJPYmplY3QiLCJ2YWx1ZXMiLCJTdG9yYWdlIiwic2Vzc2lvbiIsInNldENvbnRhaW5lciIsInBlcnNpc3RlZCIsImdldEFsbCIsIm1hcCIsImpzb24iLCJVcmxTdG9yYWdlIiwic3luYyIsImdldElkIiwiVXJsTW9kbGUiLCJ0YWJzIiwib25DcmVhdGVkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJoYW5kbGVUYWJFdmVudCIsIm9uQWN0aXZhdGVkIiwib25VcGRhdGVkIiwiY2hhbmdlIiwic3RhdHVzIiwic2V0UmVhZHkiLCJzZXRMaXZlIiwic2V0RGlzYWJsZWQiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=