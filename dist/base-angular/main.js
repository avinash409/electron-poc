(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_models/error.ts":
/*!**********************************!*\
  !*** ./src/app/_models/error.ts ***!
  \**********************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
var Error = /** @class */ (function () {
    function Error() {
    }
    return Error;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<router-outlet></router-outlet>\n\n<!-- <app-home></app-home> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TESSERACT POC';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: Configuration, AwsConfiguration, GoogleConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsConfiguration", function() { return AwsConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleConfiguration", function() { return GoogleConfiguration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = /** @class */ (function () {
    function Configuration() {
        this.server = 'http://localhost:56530/';
        this.apiUrl = 'visitplanner';
        this.apikey = '5527ba3a-9a1f-4f36-b321-ed8ea6ec7968';
        this.serverWithApiUrl = this.server + this.apiUrl;
    }
    Configuration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Configuration);
    return Configuration;
}());

var AwsConfiguration = /** @class */ (function () {
    function AwsConfiguration() {
    }
    return AwsConfiguration;
}());

var GoogleConfiguration = /** @class */ (function () {
    function GoogleConfiguration() {
    }
    return GoogleConfiguration;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _service_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/db.service */ "./src/app/service/db.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _calculator_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calculator/calculator/calculator.component */ "./src/app/calculator/calculator/calculator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"] },
    { path: 'calculator', component: _calculator_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__["CalculatorComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"],
                _app_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
                _calculator_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__["CalculatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            providers: [
                _app_constants__WEBPACK_IMPORTED_MODULE_9__["Configuration"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_12__["ElectronService"],
                _service_db_service__WEBPACK_IMPORTED_MODULE_1__["DBService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator/calculator.component.css":
/*!****************************************************************!*\
  !*** ./src/app/calculator/calculator/calculator.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calculator/calculator/calculator.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/calculator/calculator/calculator.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    Length:<br/>\n    <input type=\"text\" name=\"Length\"><br>\n    Height:<br/>\n    <input type=\"text\" name=\"Height\">\n    <br/>\n    <br/>\n    <input type=\"submit\" value=\"Submit\">\n</div>\n"

/***/ }),

/***/ "./src/app/calculator/calculator/calculator.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/calculator/calculator/calculator.component.ts ***!
  \***************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Here is the contents of the database: </h2>\n\n<div>\n    <ul style=\"list-style: none\">\n        <li *ngFor=\"let item of itemList\">\n            {{ item.name }}\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Item } from '../../assets/model/item.schema';
// import { DBService } from '../service/db.service';
// import { ElectronService } from 'ngx-electron';
var HomeComponent = /** @class */ (function () {
    // itemList: Item[];
    // constructor(private dbservice: DBService) { }
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.dbservice.getItems().subscribe( (items) => {
        //   this.itemList = items;
        // });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img width=\"300\" alt=\"TESSERACT Logo\" src=\"assets/logo/tesseract-logo.jpg\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav ml\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/orders']\">Order <span class=\"sr-only\">(current)</span></a>\n      </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/calculator']\">Calculator<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/test']\">Test<span class=\"sr-only\">(current)</span></a>\n            </li>\n\n    </ul>\n<ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item \" >\n      <img [src]=\"networkstatusImg\" alt=\"\" style=\"height: 40px\">\n    </li>\n</ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_network_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/network-status.service */ "./src/app/service/network-status.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(networkStatus, config) {
        var _this = this;
        this.networkStatus = networkStatus;
        this.config = config;
        setInterval(function () {
            networkStatus.checkStatus()
                .subscribe(function (data) {
                console.log(data);
                _this.networkstatusImg = 'assets/logo/online.png';
            }, function (error) {
                console.log(error);
                _this.networkstatusImg = 'assets/logo/offline.png';
            });
        }, 5000);
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_service_network_status_service__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"], _app_constants__WEBPACK_IMPORTED_MODULE_2__["Configuration"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rediconcolor {color:red;}\r\n.greeniconcolor {color:green;}\r\n\r\n"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <form class=\"form-inline\" [formGroup]=\"ordersForm\" (ngSubmit)=\"onSubmit()\">\n        \n        <div class=\"input-group mb-2 mr-sm-2\">\n          <input type=\"text\" class=\"form-control\" id=\"employeeid\" formControlName=\"employeeid\" placeholder=\"EmployeeID\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary mb-2\">Search Trailing</button>\n      </form>\n      <strong class=\"greeniconcolor\" *ngIf=\"loading\">Getting Data...<img class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /></strong>\n      <button  (click)=\"ClearData()\" type=\"submit\" class=\"btn-mini btn-primary mb-2\">Clear Data</button>\n      <button *ngIf=\"submitted\" (click)=\"SaveOrders()\" type=\"submit\" class=\"btn-mini btn-primary mb-2\">Save As</button>\n      <br />\n      <button *ngIf=\"submitted\" (click)=\"SaveToMyDocs()\" type=\"submit\" class=\"btn-mini btn-primary mb-2\">Save to My Docs</button>\n      <button  (click)=\"getFromMyDocs()\" type=\"submit\" class=\"btn-mini btn-primary mb-2\">GET From My Docs</button>\n      <br />\n      <button *ngIf=\"submitted\" (click)=\"SaveLocalStorage()\" type=\"submit\" class=\"btn-mini btn-primary mb-2\">Save To Local Storage</button>\n<button  (click)=\"getLocalStorage()\" type=\"submit\" class=\"btn-mini btn-primary mb-2\">GET From Local Storage</button>\n      <table class=\"table table-hover\">\n  <thead class=\"text-uppercase g-letter-spacing-1\">\n    <tr>\n      <th width='15%' class=\"g-font-weight-300 g-color-black\">Order #</th>\n      <th class=\"g-font-weight-300 g-color-black g-min-width-200\">Account #</th>\n      <th class=\"g-font-weight-300 g-color-black g-min-width-130\">Account Name</th>\n      <th width='30%' class=\"g-font-weight-300 g-color-black g-min-width-200\">Address</th>\n      <th class=\"g-font-weight-300 g-color-black\">Trailing</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let order of allOrdersByUser\">\n      <td class=\"align-middle\"><small>{{order.orderNumber}}</small></td>\n      <td class=\"align-middle\">{{order.account.id}}</td>\n      <td class=\"align-middle\">{{order.account.name}}</td>\n      <td class=\"align-middle\"><small>{{order.address.street}}</small></td>\n      <td *ngIf=\"order.isTrailingOrder === false\" class=\"align-middle\"><i class=\"far fa-frown rediconcolor\"></i></td>\n      <td *ngIf=\"order.isTrailingOrder === true\" class=\"align-middle\"><i class=\"far fa-smile greeniconcolor\"></i></td>\n\n      \n    </tr>\n\n  </tbody>\n</table>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_ompopulateorderdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ompopulateorderdata.service */ "./src/app/service/ompopulateorderdata.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(omDataService, route, router, formBuilder) {
        this.omDataService = omDataService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.showdata = [];
        this.localstoragedata = [];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.ordersForm = this.formBuilder.group({
            employeeid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__["getScript"]('../../src/assets/js/filesystem.js');
    };
    OrdersComponent.prototype.ngAfterViewInit = function () {
        //Copy in all the js code from the script.js. Typescript will complain but it works just fine
    };
    Object.defineProperty(OrdersComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.ordersForm.controls; },
        enumerable: true,
        configurable: true
    });
    OrdersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.ordersForm.invalid) {
            return;
        }
        this.loading = true;
        this.omDataService.getOmOrderDataByEmployeeId(this.f.employeeid.value)
            .subscribe(function (data) {
            _this.allOrdersByUser = data;
            _this.loading = false;
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    OrdersComponent.prototype.SaveOrders = function () {
        // this.submitted = false;
        //this.showdata = this.allOrdersByUser;
        this.getfilename = this.f.employeeid.value + '.json';
        var blob = new Blob([JSON.stringify(this.allOrdersByUser)], { type: 'application/json' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, this.getfilename);
    };
    OrdersComponent.prototype.SaveToMyDocs = function () {
        this.getfilename = this.f.employeeid.value + '.json';
        var theJSONdata = JSON.stringify(this.allOrdersByUser); // conver the object to a string
        saveData(this.getfilename, theJSONdata);
    };
    OrdersComponent.prototype.getFromMyDocs = function () {
        this.getfilename = this.f.employeeid.value + '.json';
        var data = readData(this.getfilename);
        this.allOrdersByUser = JSON.parse(data);
    };
    OrdersComponent.prototype.SaveLocalStorage = function () {
        this.getfilename = this.f.employeeid.value + '.json';
        var theJSONdata = JSON.stringify(this.allOrdersByUser); // conver the object to a string
        window.localStorage.setItem(this.getfilename, theJSONdata);
    };
    OrdersComponent.prototype.getLocalStorage = function () {
        this.getfilename = this.f.employeeid.value + '.json';
        this.allOrdersByUser = JSON.parse(window.localStorage.getItem(this.getfilename));
    };
    OrdersComponent.prototype.ClearData = function () {
        this.allOrdersByUser = null;
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_service_ompopulateorderdata_service__WEBPACK_IMPORTED_MODULE_3__["OmPopulateOrderDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/service/api-repository.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/api-repository.service.ts ***!
  \***************************************************/
/*! exports provided: ApiRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRepository", function() { return ApiRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/error */ "./src/app/_models/error.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiRepository = /** @class */ (function () {
    function ApiRepository(http, config) {
        this.http = http;
        this.config = config;
    }
    ApiRepository.prototype.get = function (url) {
        var _this = this;
        return this.http.get(this.config.serverWithApiUrl + "/" + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    ApiRepository.prototype.post = function (url, body) {
        var _this = this;
        return this.http.post(this.config.serverWithApiUrl + "/" + url, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    ApiRepository.prototype.handleError = function (error) {
        var dataError = new _models_error__WEBPACK_IMPORTED_MODULE_5__["Error"]();
        dataError.errorNumber = 100;
        dataError.message = error.statusText;
        dataError.friendlyMessage = 'An error occurred retrieving data.';
        console.log(dataError.friendlyMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(dataError);
    };
    ApiRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_constants__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], ApiRepository);
    return ApiRepository;
}());



/***/ }),

/***/ "./src/app/service/db.service.ts":
/*!***************************************!*\
  !*** ./src/app/service/db.service.ts ***!
  \***************************************/
/*! exports provided: DBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBService", function() { return DBService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable */ "./node_modules/rxjs/observable.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DBService = /** @class */ (function () {
    function DBService(_electronService) {
        this._electronService = _electronService;
    }
    DBService.prototype.getItems = function () {
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(this._electronService.ipcRenderer.sendSync('get-items')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return rxjs_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json); }));
    };
    DBService.prototype.addItem = function (item) {
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(this._electronService.ipcRenderer.sendSync('add-item', item)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return rxjs_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json); }));
    };
    DBService.prototype.deleteItem = function (item) {
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(this._electronService.ipcRenderer.sendSync('delete-item', item)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return rxjs_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json); }));
    };
    DBService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], DBService);
    return DBService;
}());



/***/ }),

/***/ "./src/app/service/network-status.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/network-status.service.ts ***!
  \***************************************************/
/*! exports provided: NetworkStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return NetworkStatus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/error */ "./src/app/_models/error.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NetworkStatus = /** @class */ (function () {
    function NetworkStatus(http, config) {
        this.http = http;
        this.config = config;
    }
    NetworkStatus.prototype.checkStatus = function () {
        var _this = this;
        return this.http.get(this.config.serverWithApiUrl + "/healthcheck?apiKey= + " + this.config.apikey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    NetworkStatus.prototype.handleError = function (error) {
        var dataError = new _models_error__WEBPACK_IMPORTED_MODULE_5__["Error"]();
        dataError.errorNumber = 100;
        dataError.message = error.statusText;
        dataError.friendlyMessage = 'An error occurred retrieving data.';
        console.log(dataError.friendlyMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(dataError);
    };
    NetworkStatus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_constants__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], NetworkStatus);
    return NetworkStatus;
}());



/***/ }),

/***/ "./src/app/service/ompopulateorderdata.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/ompopulateorderdata.service.ts ***!
  \********************************************************/
/*! exports provided: OmPopulateOrderDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmPopulateOrderDataService", function() { return OmPopulateOrderDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _api_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-repository.service */ "./src/app/service/api-repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OmPopulateOrderDataService = /** @class */ (function () {
    function OmPopulateOrderDataService(repository, config, http) {
        this.repository = repository;
        this.config = config;
        this.http = http;
    }
    OmPopulateOrderDataService.prototype.getOmOrderDataByEmployeeId = function (employeeId) {
        return this.repository.get("ompopulateorderdata/get?apiKey=" + this.config.apikey + '&employeeId=' + employeeId);
    };
    OmPopulateOrderDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_repository_service__WEBPACK_IMPORTED_MODULE_3__["ApiRepository"], _app_constants__WEBPACK_IMPORTED_MODULE_2__["Configuration"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OmPopulateOrderDataService);
    return OmPopulateOrderDataService;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Avinash\Downloads\AngularElectronPOC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map