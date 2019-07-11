/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/ts/app.ts":
/*!**************************!*\
  !*** ./assets/ts/app.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_fightersView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/fightersView */ "./assets/ts/views/fightersView.ts");
/* harmony import */ var _views_buttonView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/buttonView */ "./assets/ts/views/buttonView.ts");
/* harmony import */ var _views_gameView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/gameView */ "./assets/ts/views/gameView.ts");
/* harmony import */ var _services_fighterService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/fighterService */ "./assets/ts/services/fighterService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var App = /** @class */ (function () {
    function App() {
        this.startApp();
    }
    App.prototype.startApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fighters, fightersView, fightersElement, buttonView, buttonElement, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        App.loadingElement.style.visibility = 'visible';
                        App.gameElement.classList.add('hidden');
                        return [4 /*yield*/, _services_fighterService__WEBPACK_IMPORTED_MODULE_3__["fighterService"].getFighters()];
                    case 1:
                        fighters = _a.sent();
                        fightersView = new _views_fightersView__WEBPACK_IMPORTED_MODULE_0__["default"](fighters);
                        fightersElement = fightersView.element;
                        buttonView = new _views_buttonView__WEBPACK_IMPORTED_MODULE_1__["default"](function (ids) {
                            App.rootElement.classList.add('hidden');
                            var first = ids[0], second = ids[1];
                            new _views_gameView__WEBPACK_IMPORTED_MODULE_2__["default"](first, second, App.gameElement);
                        });
                        buttonElement = buttonView.element;
                        App.rootElement.append(fightersElement, buttonElement);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        App.rootElement.innerText = 'Failed to load data';
                        return [3 /*break*/, 4];
                    case 3:
                        App.loadingElement.style.visibility = 'hidden';
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    App.rootElement = document.getElementById('root');
    App.loadingElement = document.getElementById('loading-overlay');
    App.gameElement = document.getElementById('game');
    return App;
}());
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./assets/ts/fighter.ts":
/*!******************************!*\
  !*** ./assets/ts/fighter.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Fighter = /** @class */ (function () {
    function Fighter(obj) {
        this.name = obj.name;
        this.fullHealth = parseInt(obj.health);
        this.health = parseInt(obj.health);
        this.attack = parseInt(obj.attack);
        this.defense = parseInt(obj.defense);
    }
    Fighter.prototype.getHitPower = function () {
        var criticalHitChance = Math.random() + 1;
        return this.attack * criticalHitChance;
    };
    Fighter.prototype.getBlockPower = function () {
        var dodgeChance = Math.random() + 1;
        return this.defense * dodgeChance;
    };
    return Fighter;
}());
/* harmony default export */ __webpack_exports__["default"] = (Fighter);


/***/ }),

/***/ "./assets/ts/helpers/apiHelper.ts":
/*!****************************************!*\
  !*** ./assets/ts/helpers/apiHelper.ts ***!
  \****************************************/
/*! exports provided: callApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
var API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';
function callApi(endpoind, method) {
    var url = API_URL + endpoind;
    var options = {
        method: method
    };
    return fetch(url, options)
        .then(function (response) {
        return response.ok
            ? response.json()
            : Promise.reject(Error('Failed to load'));
    })
        .catch(function (error) { throw error; });
}


/***/ }),

/***/ "./assets/ts/services/fighterService.ts":
/*!**********************************************!*\
  !*** ./assets/ts/services/fighterService.ts ***!
  \**********************************************/
/*! exports provided: fighterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fighterService", function() { return fighterService; });
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiHelper */ "./assets/ts/helpers/apiHelper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FighterService = /** @class */ (function () {
    function FighterService() {
    }
    FighterService.prototype.getFighters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, apiResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        endpoint = 'fighters.json';
                        return [4 /*yield*/, Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, 'GET')];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, JSON.parse(atob(apiResult.content))];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FighterService.prototype.getFighterDetails = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])("details/fighter/" + _id + ".json", 'GET')];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, JSON.parse(atob(apiResult.content))];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FighterService;
}());
var fighterService = new FighterService();


/***/ }),

/***/ "./assets/ts/sources/fighterDataSource.ts":
/*!************************************************!*\
  !*** ./assets/ts/sources/fighterDataSource.ts ***!
  \************************************************/
/*! exports provided: fightersDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fightersDataSource", function() { return fightersDataSource; });
/* harmony import */ var _services_fighterService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fighterService */ "./assets/ts/services/fighterService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FightersDataSource = /** @class */ (function () {
    function FightersDataSource() {
        this.fightersDetailsMap = new Map();
    }
    FightersDataSource.prototype.getFighterById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var detailedFighter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.fightersDetailsMap.has(id)) return [3 /*break*/, 1];
                        detailedFighter = this.fightersDetailsMap.get(id);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, _services_fighterService__WEBPACK_IMPORTED_MODULE_0__["fighterService"].getFighterDetails(id)];
                    case 2:
                        detailedFighter = _a.sent();
                        this.fightersDetailsMap.set(id, detailedFighter);
                        _a.label = 3;
                    case 3: return [2 /*return*/, detailedFighter];
                }
            });
        });
    };
    return FightersDataSource;
}());
var fightersDataSource = new FightersDataSource();


/***/ }),

/***/ "./assets/ts/views/buttonView.ts":
/*!***************************************!*\
  !*** ./assets/ts/views/buttonView.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./assets/ts/views/view.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ButtonView = /** @class */ (function (_super) {
    __extends(ButtonView, _super);
    function ButtonView(callback) {
        var _this = _super.call(this) || this;
        _this._createButton(callback);
        return _this;
    }
    ButtonView.prototype._createButton = function (callback) {
        var _this = this;
        this.element = this.createElement('button', 'unavailable');
        this.element.classList.add('tingle-btn');
        this.element.classList.add('tingle-btn--danger');
        this.element.innerText = 'LET`S FIGHT';
        this.element.addEventListener('click', function () { return _this._showGame(callback); }, false);
    };
    ButtonView.prototype._showGame = function (callback) {
        var checkboxes = document.getElementsByClassName('check');
        var checkedIds = [];
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkedIds.push("" + (i + 1));
            }
        }
        callback(checkedIds);
    };
    return ButtonView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ButtonView);


/***/ }),

/***/ "./assets/ts/views/detailView.ts":
/*!***************************************!*\
  !*** ./assets/ts/views/detailView.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./assets/ts/views/view.ts");
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalView */ "./assets/ts/views/modalView.ts");
/* harmony import */ var _sources_fighterDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sources/fighterDataSource */ "./assets/ts/sources/fighterDataSource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DetailView = /** @class */ (function (_super) {
    __extends(DetailView, _super);
    function DetailView(fighter) {
        var _this = _super.call(this) || this;
        _this.modal = _modalView__WEBPACK_IMPORTED_MODULE_1__["default"].createModal(['button', 'overlay', 'escape']);
        _this._show(fighter);
        return _this;
    }
    DetailView.prototype._show = function (fighter) {
        var _this = this;
        this.modal.setContent(this._createForm(fighter));
        this.modal.addFooterBtn('Edit', 'tingle-btn tingle-btn--primary', function () {
            _this._handleButton();
            _this.modal.destroy();
        });
        this.modal.open();
    };
    DetailView.prototype._handleButton = function () {
        var inputs = document.querySelectorAll("input[type='text']");
        var updatedFighter = {};
        for (var i = 0; i < inputs.length; i++) {
            updatedFighter[inputs[i].name] = (inputs[i].value);
        }
        console.log(updatedFighter);
        this.modal.destroy();
        _sources_fighterDataSource__WEBPACK_IMPORTED_MODULE_2__["fightersDataSource"].fightersDetailsMap.set(updatedFighter._id, updatedFighter);
        document.getElementsByClassName('fighter')[parseInt(updatedFighter._id) - 1].querySelector('span').innerText = updatedFighter.name;
    };
    DetailView.prototype._createForm = function (obj) {
        var _this = this;
        this.element = this.createElement('div', 'form');
        Object.keys(obj).forEach(function (key) {
            if (!(key === '_id' || key === 'source')) {
                _this.element.append(_this._createInput(key, obj[key]));
            }
            else {
                var noInput = _this._createInput(key, obj[key]);
                noInput.classList.add("non-edit");
                _this.element.append(noInput);
            }
        });
        return this.element;
    };
    DetailView.prototype._createInput = function (name, value) {
        var input = this.createElement('div', name);
        var attributes = { id: name, type: 'text', name: name, value: value };
        var inputField = this.createElement('input', 'input', attributes);
        var labelAttr = { for: name };
        var label = this.createElement('label', name, labelAttr);
        label.innerText = name + ': ';
        input.append(label, inputField);
        return input;
    };
    //unused?
    DetailView.prototype._createButton = function () {
        var editBtn = this.createElement('button', 'edit');
        editBtn.innerText = 'Edit';
        return editBtn;
    };
    return DetailView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (DetailView);


/***/ }),

/***/ "./assets/ts/views/fighterView.ts":
/*!****************************************!*\
  !*** ./assets/ts/views/fighterView.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./assets/ts/views/view.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// let fighterView: IFighterView = new FighterView()
var FighterView = /** @class */ (function (_super) {
    __extends(FighterView, _super);
    function FighterView(fighter, handleClick) {
        var _this = _super.call(this) || this;
        _this.createFighter(fighter, handleClick);
        return _this;
    }
    FighterView.prototype.createFighter = function (fighter, handleClick) {
        var name = fighter.name, source = fighter.source;
        this.nameElement = this._createName(name);
        this.imageElement = this._createImage(source);
        this.element = this.createElement('div', 'fighter');
    };
    FighterView.prototype._createName = function (name) {
        var nameElement = this.createElement('span', 'name');
        nameElement.innerText = name;
        return nameElement;
    };
    FighterView.prototype._createImage = function (source) {
        var imgElement = this.createElement('img', 'fighter-image', { src: source });
        return imgElement;
    };
    return FighterView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (FighterView);


/***/ }),

/***/ "./assets/ts/views/fightersView.ts":
/*!*****************************************!*\
  !*** ./assets/ts/views/fightersView.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./assets/ts/views/view.ts");
/* harmony import */ var _rootFighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootFighterView */ "./assets/ts/views/rootFighterView.ts");
/* harmony import */ var _sources_fighterDataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sources/fighterDataSource */ "./assets/ts/sources/fighterDataSource.ts");
/* harmony import */ var _detailView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailView */ "./assets/ts/views/detailView.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app */ "./assets/ts/app.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FightersView = /** @class */ (function (_super) {
    __extends(FightersView, _super);
    function FightersView(fighters) {
        var _this = _super.call(this) || this;
        _this.handleClick = _this.handleFighterClick.bind(_this);
        _this.createFighters(fighters);
        return _this;
    }
    FightersView.prototype.createFighters = function (fighters) {
        var _a;
        var _this = this;
        var fighterElements = fighters.map(function (fighter) {
            var fighterView = new _rootFighterView__WEBPACK_IMPORTED_MODULE_1__["default"](fighter, _this.handleClick);
            return fighterView.element;
        });
        this.element = this.createElement('div', 'fighters');
        (_a = this.element).append.apply(_a, fighterElements);
    };
    FightersView.prototype.handleFighterClick = function (event, fighter) {
        return __awaiter(this, void 0, void 0, function () {
            var detailedFighter, previousModals, i, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, _sources_fighterDataSource__WEBPACK_IMPORTED_MODULE_2__["fightersDataSource"].getFighterById(fighter._id)];
                    case 1:
                        detailedFighter = _a.sent();
                        previousModals = document.querySelectorAll('div.tingle-modal');
                        for (i = 0; i < previousModals.length; i++) {
                            previousModals[i].parentNode.removeChild(previousModals[i]);
                        }
                        new _detailView__WEBPACK_IMPORTED_MODULE_3__["default"](detailedFighter);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        _app__WEBPACK_IMPORTED_MODULE_4__["default"].rootElement.innerText = 'Failed to load details';
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FightersView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (FightersView);


/***/ }),

/***/ "./assets/ts/views/gameFighterView.ts":
/*!********************************************!*\
  !*** ./assets/ts/views/gameFighterView.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fighterView */ "./assets/ts/views/fighterView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GameFighterView = /** @class */ (function (_super) {
    __extends(GameFighterView, _super);
    function GameFighterView(fighter, handleClick) {
        return _super.call(this, fighter, handleClick) || this;
    }
    GameFighterView.prototype.createFighter = function (fighter, handleClick) {
        _super.prototype.createFighter.call(this, fighter, handleClick);
        var healthElement = this._createHealthIndicator();
        this.element.append(this.nameElement, healthElement, this.imageElement);
        this.imageElement.addEventListener('click', function (event) { return handleClick(event, fighter); }, false);
    };
    GameFighterView.prototype._createHealthIndicator = function () {
        var healthElement = this.createElement('div', 'outerIndicator');
        var indicator = this.createElement('div', 'indicator');
        var percentage = this.createElement('span', 'percentage');
        healthElement.append(percentage);
        healthElement.append(indicator);
        return healthElement;
    };
    return GameFighterView;
}(_fighterView__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (GameFighterView);


/***/ }),

/***/ "./assets/ts/views/gameView.ts":
/*!*************************************!*\
  !*** ./assets/ts/views/gameView.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fighter */ "./assets/ts/fighter.ts");
/* harmony import */ var _gameFighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameFighterView */ "./assets/ts/views/gameFighterView.ts");
/* harmony import */ var _modalView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalView */ "./assets/ts/views/modalView.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./assets/ts/views/view.ts");
/* harmony import */ var _sources_fighterDataSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sources/fighterDataSource */ "./assets/ts/sources/fighterDataSource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView(first, second, gameEl) {
        var _this = _super.call(this) || this;
        _this.gameEl = gameEl;
        _this.setupView(first, second);
        _this.modal = _modalView__WEBPACK_IMPORTED_MODULE_2__["default"].createModal([]);
        return _this;
    }
    GameView.prototype.setupView = function (id1, id2) {
        return __awaiter(this, void 0, void 0, function () {
            var fighterObj1, fighterObj2, fighter1, fighter2, fighterView1, fighterView2, message;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gameEl.classList.remove('hidden');
                        return [4 /*yield*/, _sources_fighterDataSource__WEBPACK_IMPORTED_MODULE_4__["fightersDataSource"].getFighterById(id1)];
                    case 1:
                        fighterObj1 = _a.sent();
                        return [4 /*yield*/, _sources_fighterDataSource__WEBPACK_IMPORTED_MODULE_4__["fightersDataSource"].getFighterById(id2)];
                    case 2:
                        fighterObj2 = _a.sent();
                        fighter1 = new _fighter__WEBPACK_IMPORTED_MODULE_0__["default"](fighterObj1);
                        fighter2 = new _fighter__WEBPACK_IMPORTED_MODULE_0__["default"](fighterObj2);
                        fighterView1 = new _gameFighterView__WEBPACK_IMPORTED_MODULE_1__["default"](fighterObj1, function () { return _this.handleFighterClick(fighter2, fighter1, fighterView1); }).element;
                        fighterView2 = new _gameFighterView__WEBPACK_IMPORTED_MODULE_1__["default"](fighterObj2, function () { return _this.handleFighterClick(fighter1, fighter2, fighterView2); }).element;
                        fighterView1.childNodes[1].firstChild.innerText = fighter1.health.toString();
                        fighterView2.childNodes[1].firstChild.innerText = fighter2.health.toString();
                        fighterView2.lastChild.classList.add('mirror');
                        this.element = this.createElement('div', 'fighters');
                        this.element.append(fighterView1, fighterView2);
                        message = this.createElement('div', 'message');
                        message.innerText = 'Start the fight! Just click on the players! Let the strongest win !!!';
                        this.gameEl.append(this.element, message);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameView.prototype.handleFighterClick = function (attacker, attacked, view) {
        var damage = attacker.getHitPower() - attacked.getBlockPower();
        if (damage < 0)
            damage = 0;
        this._updateIndicator(attacker, attacked, damage, view);
        this._createMessage(attacker, damage);
    };
    GameView.prototype._createMessage = function (attacker, delta) {
        var message = document.querySelector('.message');
        if (delta === 0) {
            message.innerText = 'Hmm... You missed, ';
        }
        else if (delta < 1) {
            message.innerText = 'You beat like a girl, ';
        }
        else if (delta < 2) {
            message.innerText = 'Good blow, ';
        }
        else {
            message.innerText = "Right in the bull's eye, ";
        }
        message.innerText += attacker.name;
    };
    GameView.prototype._updateIndicator = function (attacker, attacked, delta, view) {
        attacked.health -= delta;
        var indicator = view.childNodes[1].lastChild;
        var percents = view.childNodes[1].firstChild;
        var health = Math.round(attacked.health);
        var width = attacked.health / attacked.fullHealth * 100;
        if (health >= 0) {
            percents.innerText = health.toString();
            indicator.style.width = width + '%';
        }
        else {
            percents.innerText = '0';
            indicator.style.width = '0%';
        }
        if (width <= 0) {
            this._showWinner(attacker);
        }
    };
    GameView.prototype._showWinner = function (winner) {
        var _this = this;
        this.modal.setContent('You are win ' + winner.name);
        this.modal.addFooterBtn('New Game', 'tingle-btn tingle-btn--primary', function () {
            _this._newGame();
            _this.modal.destroy();
        });
        this.modal.open();
    };
    GameView.prototype._newGame = function () {
        document.getElementById('game').innerHTML = '';
        document.querySelector('div#root button').classList.add('unavailable');
        var checkboxes = document.getElementsByClassName('check');
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkboxes[i].checked = false;
            }
            else {
                checkboxes[i].parentNode.classList.remove('unavailable');
            }
        }
        document.getElementById('root').classList.remove('hidden');
    };
    return GameView;
}(_view__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (GameView);


/***/ }),

/***/ "./assets/ts/views/modalView.ts":
/*!**************************************!*\
  !*** ./assets/ts/views/modalView.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tingle.js */ "./node_modules/tingle.js/dist/tingle.min.js");
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tingle_js__WEBPACK_IMPORTED_MODULE_0__);

var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.createModal = function (closeMethods) {
        return new tingle_js__WEBPACK_IMPORTED_MODULE_0__["modal"]({
            footer: true,
            stickyFooter: false,
            closeMethods: closeMethods,
            closeLabel: "Close",
            cssClass: ['custom-class-1', 'custom-class-2']
        });
    };
    return Modal;
}());
/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),

/***/ "./assets/ts/views/rootFighterView.ts":
/*!********************************************!*\
  !*** ./assets/ts/views/rootFighterView.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fighterView */ "./assets/ts/views/fighterView.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RootFighterView = /** @class */ (function (_super) {
    __extends(RootFighterView, _super);
    function RootFighterView(fighter, handleClick) {
        return _super.call(this, fighter, handleClick) || this;
    }
    RootFighterView.prototype.createFighter = function (fighter, handleClick) {
        _super.prototype.createFighter.call(this, fighter, handleClick);
        this.element.append(this.imageElement, this.nameElement);
        var checkElement = this._createCheckbox();
        this.element.append(checkElement);
        this.element.addEventListener('click', function (event) { return handleClick(event, fighter); }, false);
    };
    RootFighterView.prototype._createCheckbox = function () {
        var checkboxes = document.getElementsByClassName('check');
        var attributes = { type: 'checkbox' };
        var checkElement = this.createElement('input', 'check', attributes);
        checkElement.addEventListener('click', function (event) { return event.stopPropagation(); });
        checkElement.addEventListener('change', function () {
            var playBtn = document.querySelector('div#root button');
            if (this.checked) {
                var checkedCount = 0;
                for (var i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked) {
                        checkedCount += 1;
                    }
                }
                if (checkedCount === 2) {
                    playBtn.classList.remove('unavailable');
                    for (var i = 0; i < checkboxes.length; i++) {
                        if (!checkboxes[i].checked) {
                            checkboxes[i].parentNode.classList.add('unavailable');
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].parentNode.classList.remove('unavailable');
                }
                playBtn.classList.add('unavailable');
            }
        });
        return checkElement;
    };
    return RootFighterView;
}(_fighterView__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (RootFighterView);


/***/ }),

/***/ "./assets/ts/views/view.ts":
/*!*********************************!*\
  !*** ./assets/ts/views/view.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.createElement = function (tagName, className, attributes) {
        var element = document.createElement(tagName);
        if (className)
            element.classList.add(className);
        if (attributes)
            Object.keys(attributes).forEach(function (key) { return element.setAttribute(key, attributes[key]); });
        return element;
    };
    return View;
}());
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_ts_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ts/app */ "./assets/ts/app.ts");

new _assets_ts_app__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./node_modules/tingle.js/dist/tingle.min.js":
/*!***************************************************!*\
  !*** ./node_modules/tingle.js/dist/tingle.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,o){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=r({},o,t),this.init()}function o(){return'<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>'}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function s(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML=o(),this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function i(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function n(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:d.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:l.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function l(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}function d(t){-1!==this.opts.closeMethods.indexOf("overlay")&&!a(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function a(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function h(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function r(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}var c=!1;return t.prototype.init=function(){if(!this.modal)return s.call(this),n.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},t.prototype._busy=function(t){c=t},t.prototype._isBusy=function(){return c},t.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),h.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var t=this;return"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t._busy(!1),this.checkOverflow(),this}},t.prototype.close=function(t){if(!this._isBusy()){if(this._busy(!0),t=t||!1,"function"==typeof this.opts.beforeClose){if(!this.opts.beforeClose.call(this))return void this._busy(!1)}document.body.classList.remove("tingle-enabled"),window.scrollTo(0,this._scrollPosition),document.body.style.top=null,this.modal.classList.remove("tingle-modal--visible");var o=this;o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)}},t.prototype.setContent=function(t){return"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow(),this},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){return i.call(this),this},t.prototype.setFooterContent=function(t){return this.modalBoxFooter.innerHTML=t,this},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){return this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight;return this.modalBox.clientHeight>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))},{modal:t}});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map