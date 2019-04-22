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

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"section-inner\">\n    <h2 class=\"heading\">About Me</h2>\n    <div class=\"content\">\n      <p>\n        I'm a Software Engineer with nearly 3 years experience managing all aspects of Software Development. I'm often found coding\n        late into the night working on side projects and learning new technologies. I'm always eager to learn more, and I\n        crave knowledge. I strive to be happy and enjoy what I'm doing, but I'm always looking for ways to improve myself\n        and to improve what I'm working on.\n      </p>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/about-me/about-me.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content p {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
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

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/about-me/about-me.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container sections-wrapper\">\n    <div class=\"row\">\n        <div class=\"primary col-lg-8 col-12\">\n            <app-about-me></app-about-me>\n            <app-projects></app-projects>\n            <app-work-experience></app-work-experience>\n        </div>\n        <div class=\"secondary col-lg-4 col-12\">\n            <app-side-info></app-side-info>\n            <app-skills></app-skills>\n            <app-testimonials></app-testimonials>\n            <app-education></app-education>\n        </div>\n    </div>\n</div>\n<footer class=\"footer\">\n    <div class=\"container text-center\">\n        <small>Max Jacobson</small>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sections-wrapper {\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n.footer {\n  background: #32383e;\n  color: #FFF;\n  padding: 10px 0; }\n\n.footer small {\n    line-height: 1.6;\n    color: #a1aab4;\n    font-size: 14px; }\n\n@media (min-width: 1400px) {\n  .container {\n    width: 1360px;\n    max-width: inherit; } }\n"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-experience/work-experience.component */ "./src/app/work-experience/work-experience.component.ts");
/* harmony import */ var _side_info_side_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side-info/side-info.component */ "./src/app/side-info/side-info.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"],
                _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__["WorkExperienceComponent"],
                _side_info_side_info_component__WEBPACK_IMPORTED_MODULE_7__["SideInfoComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__["TestimonialsComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"section\">\n  <div class=\"section-inner\">\n    <h2 class=\"heading\">Education</h2>\n    <div class=\"content\">\n      <div class=\"item\">\n        <h3 class=\"title\">\n          <img src=\"../../assets/education-icon.svg\" alt=\"\">\n          Software Engineering\n        </h3>\n        <h4 class=\"university\">\n          Dev Mountain\n          <span class=\"year\">(2016)</span>\n        </h4>\n      </div>\n    </div>\n  </div>\n</aside>"

/***/ }),

/***/ "./src/app/education/education.component.scss":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 16px;\n  margin-top: 0; }\n  .title img {\n    width: 16px;\n    height: 16px;\n    margin-right: 5px;\n    position: relative;\n    top: -1px; }\n  .university {\n  font-family: \"Lato\", arial, sans-serif;\n  font-size: 13px;\n  color: #999;\n  font-weight: 600;\n  padding-left: 25px; }\n  .university .year {\n    color: #b0b7bf;\n    font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container\">\n    <img class=\"profile-image img-fluid\" src=\"../../assets/profile.png\" alt=\"\">\n    <div class=\"profile-content\">\n      <h1 class=\"name\">Max Jacobson</h1>\n      <h2 class=\"desc\">Software Engineer</h2>\n      <ul class=\"social list-inline\">\n        <li class=\"list-inline-item\">\n          <a href=\"https://www.linkedin.com/in/max-jacobson/\" target=\"_blank\">\n            <img src=\"../../assets/linkedin-icon.svg\" alt=\"\">\n          </a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"https://github.com/mjacobson7\" target=\"_blank\">\n            <img src=\"../../assets/github-icon.svg\" alt=\"\">\n          </a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"https://www.facebook.com/mjacobson7\" target=\"_blank\">\n            <img src=\"../../assets/facebook-icon.svg\" alt=\"\">\n          </a>\n        </li>\n      </ul>\n    </div>\n    <a href=\"mailto:mjacobson7@gmail.com\" class=\"btn btn-primary contact-me\">\n      <img src=\"../../assets/send-icon.svg\" alt=\"\">\n      Contact Me\n    </a>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  border-top: 10px solid #778492;\n  background: #f5f5f5;\n  padding: 30px;\n  height: 250px; }\n  .header .profile-image {\n    float: left;\n    margin-right: 30px; }\n  .header .profile-content {\n    float: left; }\n  .header .profile-content .name {\n      color: #49515a;\n      font-size: 38px;\n      margin-bottom: 5px;\n      margin-top: 30px; }\n  .header .profile-content .desc {\n      color: #778492;\n      font-family: \"Lato\", arial, sans-serif;\n      font-weight: 400;\n      font-size: 24px;\n      margin-top: 0;\n      margin-bottom: 15px; }\n  .header .profile-content .social li a img {\n      width: 36px;\n      height: 36px; }\n  .header .contact-me {\n    float: right;\n    margin-top: 60px;\n    font-weight: bold; }\n  @media (max-width: 768px) {\n  .header {\n    text-align: center;\n    height: auto; }\n    .header .container {\n      max-width: 540px; }\n      .header .container .profile-image {\n        float: none !important;\n        margin: 0 auto; }\n      .header .container .profile-content {\n        float: none !important;\n        text-align: center; }\n    .header .contact-me {\n      margin-top: 30px;\n      float: none !important; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"projects section\">\n  <div class=\"section-inner\">\n    <h2 class=\"heading\">Projects</h2>\n    <div class=\"content\">\n      <div class=\"item featured text-center\">\n        <h3 class=\"title\">SkillAmp</h3>\n        <p class=\"summary\">Call Center Software that helps reduce agent attrition rates.</p>\n        <div class=\"featured-image\">\n          <a href=\"https://www.skillamp.io/\" target=\"_blank\">\n            <img class=\"img-fluid project-image\" src=\"../../assets/skillamp-screenshot.jpg\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"desc text-left\">\n          <p>\n            Our software surveys customers who spoke with call center agents and provides detailed feedback on what customers like, dislike,\n            and recommend for your agents. You will also know why they didn't purchase your product. With SkillAmp, your\n            agents will know what customers are thinking and how to convert that information into more sales.\n          </p>\n          <a href=\"http://skillamp.io/\" target=\"_blank\">\n            <img src=\"../../assets/external-link-icon.svg\" alt=\"\"> Find out more\n          </a>\n        </div>\n      </div>\n      <hr class=\"divider\">\n\n      <div class=\"item row\">\n        <a href=\"http://torch.maxjacobson.me/#/login\" target=\"_blank\" class=\"col-md-4 col-12\">\n          <img class=\"img-fluid project-image\" src=\"../../assets/torch-screenshot.jpg\" alt=\"\">\n        </a>\n        <div class=\"desc col-md-8 col-12\">\n          <h3 class=\"title\">Customer Manager - Tool used to help manage customer data</h3>\n          <p class=\"mb-2\">To address the growing list of customers at Torch LMS, this small supplemental application has been useful in managing\n            the list of customers and their corresponding production and uat sites. The application allows you to search,\n            filter, and sort customers with relative ease, due to the simple UI.\n          </p>\n          <p>\n            <a href=\"http://torch.maxjacobson.me/#/login\" target=\"_blank\">\n              <img src=\"../../assets/external-link-icon.svg\" alt=\"\"> Find out more\n            </a>\n          </p>\n        </div>\n      </div>\n\n      <div class=\"item row\">\n        <a href=\"http://gifster.maxjacobson.me/\" target=\"_blank\" class=\"col-md-4 col-12\">\n          <img class=\"img-fluid project-image\" src=\"../../assets/gifster-screenshot.jpg\" alt=\"\">\n        </a>\n        <div class=\"desc col-md-8 col-12\">\n          <h3 class=\"title\">Gifster - Simple Gif search tool</h3>\n          <p class=\"mb-2\">Having been frustrated with an easy method to share GIFs to send to a friend, I created Gifster (a humble, yet\n            useful application). You have the ability to search for GIFs, and with the simple click of the mouse, it copies\n            the link to your clipboard so you can share with a friend in seconds.\n          </p>\n          <p>\n            <a href=\"http://gifster.maxjacobson.me/\" target=\"_blank\">\n              <img src=\"../../assets/external-link-icon.svg\" alt=\"\"> Find out more\n            </a>\n          </p>\n        </div>\n      </div>\n\n      <div class=\"item row\">\n        <a href=\"http://campsite.maxjacobson.me/\" target=\"_blank\" class=\"col-md-4 col-12\">\n          <img class=\"img-fluid project-image\" src=\"../../assets/campsite-screenshot.jpg\" alt=\"\">\n        </a>\n        <div class=\"desc col-md-8 col-12\">\n          <h3 class=\"title\">Campsite - Outdoor Ecommerce Site</h3>\n          <p class=\"mb-2\">My final project just before graduating Dev Mountain. This was my first full stack ecommerce application built\n            with the MEAN stack.\n          </p>\n          <p>\n            <a href=\"http://campsite.maxjacobson.me/\" target=\"_blank\">\n              <img src=\"../../assets/external-link-icon.svg\" alt=\"\"> Find out more\n            </a>\n          </p>\n        </div>\n      </div>\n\n      <div class=\"item row\">\n        <a href=\"http://paint.maxjacobson.me/\" target=\"_blank\" class=\"col-md-4 col-12\">\n          <img class=\"img-fluid project-image\" src=\"../../assets/paint-screenshot.jpg\" alt=\"\">\n        </a>\n        <div class=\"desc col-md-8 col-12\">\n          <h3 class=\"title\">Paint - A simple paint clone</h3>\n          <p class=\"mb-2\">Originally built for my son so he could create beautiful pieces of art while I further develop my JQuery skills,\n            this application contains over 5,399 small divs that makes up each cell. A very non-practical, but educational\n            learning experience.\n          </p>\n          <p>\n            <a href=\"http://paint.maxjacobson.me/\" target=\"_blank\">\n              <img src=\"../../assets/external-link-icon.svg\" alt=\"\"> Find out more\n            </a>\n          </p>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects .content .featured {\n  margin-bottom: 60px; }\n  .projects .content .featured .title {\n    margin-bottom: 5px;\n    font-size: 20px !important; }\n  .projects .content .featured .summary {\n    margin-bottom: 30px;\n    color: #778492; }\n  .projects .content .featured .featured-image {\n    position: relative;\n    display: inline-block; }\n  .projects .content .featured .featured-image a img {\n      margin-bottom: 30px;\n      border: 1px solid #CCC; }\n  .projects .content .featured .desc {\n    margin-bottom: 30px; }\n  .projects .content .divider {\n  margin-bottom: 60px; }\n  .projects .content .item .title {\n  font-size: 18px;\n  margin-top: 0; }\n  .projects .content .item a .project-image {\n  margin-bottom: 30px; }\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/side-info/side-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/side-info/side-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"section\">\n  <div class=\"section-inner\">\n    <div class=\"content\">\n      <ul class=\"list-unstyled\">\n        <li>\n          <img src=\"../../assets/location-icon.svg\" alt=\"\">\n          <span>Provo, Utah</span>\n        </li>\n        <li>\n          <img src=\"../../assets/email-icon.svg\" alt=\"\">\n          <a href=\"mailto:mjacobson7@gmail.com\">mjacobson7@gmail.com</a>\n        </li>\n        <li>\n          <img src=\"../../assets/download-icon.svg\" alt=\"\">\n          <a href=\"../../assets/resume.pdf\" download>Resume</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</aside>"

/***/ }),

/***/ "./src/app/side-info/side-info.component.scss":
/*!****************************************************!*\
  !*** ./src/app/side-info/side-info.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n  .list-unstyled li {\n    margin-bottom: 15px; }\n  .list-unstyled li img {\n      width: 16px;\n      height: 16px;\n      vertical-align: text-bottom;\n      margin-right: 10px; }\n  .list-unstyled li span {\n      color: #434343; }\n"

/***/ }),

/***/ "./src/app/side-info/side-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/side-info/side-info.component.ts ***!
  \**************************************************/
/*! exports provided: SideInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideInfoComponent", function() { return SideInfoComponent; });
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

var SideInfoComponent = /** @class */ (function () {
    function SideInfoComponent() {
    }
    SideInfoComponent.prototype.ngOnInit = function () {
    };
    SideInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-info',
            template: __webpack_require__(/*! ./side-info.component.html */ "./src/app/side-info/side-info.component.html"),
            styles: [__webpack_require__(/*! ./side-info.component.scss */ "./src/app/side-info/side-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideInfoComponent);
    return SideInfoComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"section\">\n  <div class=\"section-inner\">\n    <h2 class=\"heading\">Skills</h2>\n    <div class=\"content\">\n      <p class=\"intro\">Technologies I have experience with on a professional and/or personal level, which I am interested in further developing and learning.</p>\n      <div class=\"skillset\">\n\n        <div class=\"item\">\n          <h3 class=\"level-title\">\n            Javascript\n            <span class=\"level-label\">\n              <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies I have worked with and feel comfortable using. I can make use of them right now if asked.\"> Working Knowledge\n            </span>\n          </h3>\n          <div class=\"level-bar\">\n            <div class=\"level-bar-inner workingKnowledge\"></div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <h3 class=\"level-title\">\n            Java\n            <span class=\"level-label\">\n              <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies I have worked with in the past, but am lacking a deep understanding under the hood.\"> Basic Knowledge\n            </span>\n          </h3>\n          <div class=\"level-bar\">\n            <div class=\"level-bar-inner basicKnowledge\"></div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <h3 class=\"level-title\">\n            Angular JS / Angular 2+\n            <span class=\"level-label\">\n              <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies I have worked with and feel comfortable using. I can make use of them right now if asked.\"> Working Knowledge\n            </span>\n          </h3>\n          <div class=\"level-bar\">\n            <div class=\"level-bar-inner workingKnowledge\"></div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <h3 class=\"level-title\">\n            React\n            <span class=\"level-label\">\n              <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies for which I have a basic understanding of their purpose. I can't make practical use of them without studying them in depth first.\"> Some Exposure\n            </span>\n          </h3>\n          <div class=\"level-bar\">\n            <div class=\"level-bar-inner someExposure\"></div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <h3 class=\"level-title\">\n            PostgreSQL\n            <span class=\"level-label\">\n              <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies I have worked with in the past, but am lacking a deep understanding under the hood.\"> Basic Knowledge\n            </span>\n          </h3>\n          <div class=\"level-bar\">\n            <div class=\"level-bar-inner basicKnowledge\"></div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <h3 class=\"level-title\">\n            JQuery\n            <span class=\"level-label\">\n              <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies I have worked with in the past, but am lacking a deep understanding under the hood.\"> Basic Knowledge\n            </span>\n          </h3>\n          <div class=\"level-bar\">\n            <div class=\"level-bar-inner basicKnowledge\"></div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n          <h3 class=\"level-title\">\n            Node JS\n            <span class=\"level-label\">\n              <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies I have worked with and feel comfortable using. I can make use of them right now if asked.\"> Working Knowledge\n            </span>\n          </h3>\n          <div class=\"level-bar\">\n            <div class=\"level-bar-inner workingKnowledge\"></div>\n          </div>\n        </div>\n\n        <div class=\"item\">\n            <h3 class=\"level-title\">\n              MongoDB\n              <span class=\"level-label\">\n                <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies I have worked with in the past, but am lacking a deep understanding under the hood.\"> Basic Knowledge\n              </span>\n            </h3>\n            <div class=\"level-bar\">\n              <div class=\"level-bar-inner basicKnowledge\"></div>\n            </div>\n          </div>\n\n        <div class=\"item\">\n          <h3 class=\"level-title\">\n            HTML5, CSS3, &amp; SASS\n            <span class=\"level-label\">\n              <img src=\"../../assets/info-icon.svg\" alt=\"\" matTooltip=\"Technologies I have worked with and feel comfortable using. I can make use of them right now if asked.\"> Working Knowledge\n            </span>\n          </h3>\n          <div class=\"level-bar\">\n            <div class=\"level-bar-inner workingKnowledge\"></div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</aside>"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro {\n  margin-bottom: 30px; }\n\n.level-title {\n  font-size: 16px;\n  position: relative;\n  margin-top: 0; }\n\n.level-title .level-label {\n    color: #ccd1d6;\n    font-size: 14px;\n    font-weight: 400;\n    font-family: \"Lato\", arial, sans-serif;\n    position: absolute;\n    right: 0;\n    top: 0; }\n\n.level-title .level-label img {\n      width: 14px;\n      height: 14px;\n      margin-right: 3px;\n      position: relative;\n      top: -1px; }\n\n.level-bar {\n  height: 15px;\n  background: #e8e8e8; }\n\n.level-bar .level-bar-inner {\n    background: #66cb8c;\n    height: 15px; }\n\n.level-bar .workingKnowledge {\n    width: 90%; }\n\n.level-bar .basicKnowledge {\n    width: 60%; }\n\n.level-bar .someExposure {\n    width: 30%; }\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/testimonials/testimonials.component.html":
/*!**********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"section\">\n  <div class=\"section-inner\">\n    <h2 class=\"heading\">Testimonials</h2>\n    <div class=\"content\">\n\n      <div class=\"item\">\n        <blockquote class=\"quote\">\n          <p>\n            <img src=\"../../assets/quote-icon.svg\" alt=\"\"> Max is a very talented developer. He has shown the ability to pick up on new concepts and technologies with\n            ease, and excels at any task he is put in front of. I have confidence in his skills as a developer and wouldn't\n            hesitate to recommend Max for any position.</p>\n        </blockquote>\n        <p class=\"source\">\n          <span class=\"name\">Chris J. O&#39;Neill</span>\n          <br>\n          <span class=\"title\">Senior Solutions Architect at Observepoint</span>\n        </p>\n      </div>\n\n      <div class=\"item\">\n        <blockquote class=\"quote\">\n          <p>\n            <img src=\"../../assets/quote-icon.svg\" alt=\"\"> Max is exceptional to work with, and gets solid results. He is a team player, he is punctual, and always willing\n            to help out with anything that needs to be done. Max is always pushing himself to learn more and develop himself\n            professionally. We are very lucky to have Max on our team!</p>\n        </blockquote>\n        <p class=\"source\">\n          <span class=\"name\">Jake White</span>\n          <br>\n          <span class=\"title\">Founder/CEO at Torch LMS</span>\n        </p>\n      </div>\n\n      <div class=\"item\">\n        <blockquote class=\"quote\">\n          <p>\n            <img src=\"../../assets/quote-icon.svg\" alt=\"\"> In his time with our lean team, [Max] has shown the ability to wear many different hats, and always runs to\n            the fire to figure out how he can add value for our clients. Specifically, Max has become an indispensable resource\n            through his product knowledge and testing ability on our system.</p>\n        </blockquote>\n        <p class=\"source\">\n          <span class=\"name\">Jaron Mathis</span>\n          <br>\n          <span class=\"title\">COO at Torch LMS</span>\n        </p>\n      </div>\n\n      <p>\n        <a href=\"https://www.linkedin.com/in/max-jacobson/\" target=\"_blank\" class=\"more-link\">\n          <img src=\"../../assets/external-link-icon.svg\" alt=\"\"> More on LinkedIn\n        </a>\n      </p>\n    </div>\n  </div>\n\n</aside>"

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quote {\n  color: #666;\n  font-size: 16px;\n  border-left: 5px solid #9fdeb7;\n  padding: 5px 15px;\n  margin-bottom: 15px; }\n  .quote p {\n    margin-bottom: 0; }\n  .quote p img {\n      width: 16px;\n      height: 16px;\n      margin-right: 15px; }\n  .source {\n  font-size: 14px;\n  padding-left: 20px;\n  font-weight: 500; }\n  .source .name {\n    color: #939ea9;\n    font-weight: 600; }\n  .source .title {\n    color: #999; }\n  .more-link img {\n  width: 18px;\n  height: 18px;\n  position: relative;\n  top: -2px; }\n"

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.ts":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
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

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/testimonials/testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/work-experience/work-experience.component.html":
/*!****************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"section-inner\">\n    <h2 class=\"heading\">Work Experience</h2>\n    <div class=\"content\">\n\n      <div class=\"item\">\n        <h3 class=\"title\">\n          Software Engineer -\n          <span class=\"place\">\n            <a href=\"https://torchlms.com/\" target=\"_blank\">Torch LMS</a>\n          </span>\n          <span class=\"year\"> (Oct 2017 - Present)</span>\n        </h3>\n        <p>\n          Full stack development for a multi-tenant SaaS application with 500k+ users. Integrated the use of timezones in the site\n          for our world-wide customer base. Responsible for a complete redesign of the user assignments page which gave users\n          more flexibility to view tasks assigned to them. Developed a page where supervisors can view their team as well\n          as any of their teams' direct reports. Technologies used: AngularJS, Java (spring), PostgreSQL, AWS\n        </p>\n      </div>\n\n      <div class=\"item\">\n        <h3 class=\"title\">\n          Front End Developer (contract) -\n          <span class=\"place\">\n            <a href=\"http://coopertechnology.com/\" target=\"_blank\">Cooper Technology</a>\n          </span>\n          <span class=\"year\"> (Aug 2018 - Present)</span>\n        </h3>\n        <p>\n          Responsible for upgrading aging front-end codebase with a complete UI redesign for agricultural equipment company. Assist\n          with building out a new mobile application as part of a two-man development team using the Ionic framework.\n        </p>\n      </div>\n\n      <div class=\"item\">\n        <h3 class=\"title\">\n          Co-Founder &amp; Lead Developer -\n          <span class=\"place\">\n            <a href=\"https://skillamp.io/\" target=\"_blank\">SkillAmp</a>\n          </span>\n          <span class=\"year\"> (Oct 2017 - Present)</span>\n        </h3>\n        <p>Conceived, researched, planned, and launched startup in call center industry to help reduce attrition rates and improve\n          customer loyalty. Designed and built multi-tenant SaaS application from the ground up. Regularly collaborating\n          with team members on goal implementation. Technologies used: Angular 2+, Node JS (express), PostgreSQL</p>\n      </div>\n\n      <div class=\"item\">\n        <h3 class=\"title\">\n          Jr. Software Developer -\n          <span class=\"place\">\n            <a href=\"https://torchlms.com/\" target=\"_blank\">Torch LMS</a>\n          </span>\n          <span class=\"year\"> (Aug 2016 - Oct 2017)</span>\n        </h3>\n        <p>\n          Assisted with overhaul of mobile-responsiveness of application in its entirety. Responsible for deploying code to UAT environment\n          daily. Upgraded in-app video player for a seamless transition for customers. Improved performance with various\n          queries in our PostgreSQL database. Assist the project lead in tracking current project developments and estimating\n          the expected project completion.\n        </p>\n      </div>\n\n      <div class=\"item\">\n        <h3 class=\"title\">\n          Technical Project Manager -\n          <span class=\"place\">\n            <a href=\"https://torchlms.com/\" target=\"_blank\">Torch LMS</a>\n          </span>\n          <span class=\"year\"> (Dec 2015 - Apr 2017)</span>\n        </h3>\n        <p>\n          Working at an up-and-coming software company has allowed me to develop many skills and wear many hats. During my tenure,\n          support tickets were reduced by 84%. Demonstrated proficiency in testing web-based systems to identify any performance\n          and quality issues as well as bug tracking. Evaluated new software applications and coordinated with team to address\n          any defects as well as discuss QA concerns. Committed to ensuring that quality standards are upheld to promote\n          optimal customer satisfaction. Facilitated Single-Sign-On and SFTP integrations with clients and ensured a smooth,\n          well-documented implementation.\n        </p>\n      </div>\n\n      <div class=\"item\">\n        <h3 class=\"title\">\n          Desktop Support Analyst -\n          <span class=\"place\">\n            <a href=\"https://www.serverplus.com/\" target=\"_blank\">Server Plus</a>\n          </span>\n          <span class=\"year\"> (Jan 2015 - Dec 2015)</span>\n        </h3>\n        <p>\n          Customer-focused Desktop Support Technician with success in a variety of computer operating systems, applications, and hardware.\n          Consistently one of the top three technicians in regards to not only the number of tickets resolved, but the amount\n          of repeat tickets. Analytical and adept at resolving complex network issues. Critical thinker who addresses customer\n          support issues quickly and who consistently exceeds performance standards. Responsibilities include: Install, configure,\n          test, maintain, monitor, and troubleshoot end user and network hardware, peripheral devices, printing/scanning\n          devices, and mobile devices using a ticketing system.\n        </p>\n      </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/work-experience/work-experience.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n  color: #778492;\n  font-weight: 700; }\n  .title .place, .title .year {\n    color: #999;\n    font-weight: normal; }\n  .title .place a, .title .year a {\n      color: #999; }\n  p {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/work-experience/work-experience.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.ts ***!
  \**************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
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

var WorkExperienceComponent = /** @class */ (function () {
    function WorkExperienceComponent() {
    }
    WorkExperienceComponent.prototype.ngOnInit = function () {
    };
    WorkExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-experience',
            template: __webpack_require__(/*! ./work-experience.component.html */ "./src/app/work-experience/work-experience.component.html"),
            styles: [__webpack_require__(/*! ./work-experience.component.scss */ "./src/app/work-experience/work-experience.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkExperienceComponent);
    return WorkExperienceComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maxjacobson/Projects/bootstrap-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map