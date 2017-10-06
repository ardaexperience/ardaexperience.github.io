webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-header></app-header>\n<app-services></app-services>\n<app-why-arda></app-why-arda>\n<app-special-travels></app-special-travels>\n<app-home-travels></app-home-travels>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__ = __webpack_require__("../../../../wowjs/dist/wow.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        new __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__["WOW"]().init();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/pages/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_header_header_module__ = __webpack_require__("../../../../../src/app/pages/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_services_services_module__ = __webpack_require__("../../../../../src/app/pages/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_why_arda_why_arda_module__ = __webpack_require__("../../../../../src/app/pages/why-arda/why-arda.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_special_travels_special_travels_module__ = __webpack_require__("../../../../../src/app/pages/special-travels/special-travels.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_travels_home_travels_module__ = __webpack_require__("../../../../../src/app/pages/home-travels/home-travels.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_footer_footer_module__ = __webpack_require__("../../../../../src/app/pages/footer/footer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ngx_owl_carousel__["OwlModule"],
            __WEBPACK_IMPORTED_MODULE_5__pages_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__pages_header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_7__pages_services_services_module__["a" /* ServicesModule */],
            __WEBPACK_IMPORTED_MODULE_8__pages_why_arda_why_arda_module__["a" /* WhyArdaModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_special_travels_special_travels_module__["a" /* SpecialTravelsModule */],
            __WEBPACK_IMPORTED_MODULE_11__pages_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_travels_home_travels_module__["a" /* HomeTravelsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"main-footer\" class=\"footer navbar-fixed-bottom pt-5\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-6\">\n        <h4>Arda Experience</h4>\n        <p class=\"lead\">\n          R. Alfeu Taváres, 149 - Rudge Ramos, São Bernardo do Campo - SP\n        </p>\n      </div>\n      <div class=\"col-md-6 pt-2\">\n        <h5 class=\"text-center\">Acompanhe-nos nas redes sociais</h5>\n       <ul>\n         <li><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></li>\n         <li><i class=\"fa fa-github-alt\" aria-hidden=\"true\"></i></li>\n         <li><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></li>\n       </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/pages/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  position: relative;\n  top: 80px;\n  background: #ff404e;\n  min-height: 200px;\n  color: white; }\n  footer li {\n    list-style-type: none;\n    display: inline-block;\n    padding: 5px; }\n  footer i {\n    font-size: 1.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/pages/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_component__ = __webpack_require__("../../../../../src/app/pages/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"home-section\">\n  <div class=\"dark-overlay\">\n    <div class=\"home-inner\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <h1 class=\"text-center text-white animated fadeIn\">A experiência da sua obra <strong><span>cinematográfica favorita</span></strong></h1>\n            <p class=\"text-center text-white animated bounceInRight\">\n              Viaje para cenários reais que foram utilizados como local de filmagem para filmes ou séries que você sempre sonhou\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-section .dark-overlay {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0; }\n\n.home-section {\n  background-attachment: fixed !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important; }\n\n.home-section {\n  background: url(" + __webpack_require__("../../../../../src/assets/teste_parallax.jpg") + ");\n  min-height: 100vh; }\n  .home-section .dark-overlay {\n    width: 100vw;\n    min-height: 100vh; }\n  .home-section .home-inner {\n    padding-top: 20%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/pages/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_component__ = __webpack_require__("../../../../../src/app/pages/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-travels/home-travels.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"home-travels mt-5\">\n\n  <h1 class=\"text-center text-dark pb-5\">Galeria de imagens</h1>\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-12 col-xs-12\">\n      <img src=\"assets/img/home-travels/hobbiton.jpg\" alt=\"\">\n    </div>\n\n    <div class=\"col-lg-3 col-md-12 col-xs-12\">\n      <img src=\"assets/img/home-travels/ilha_phi_phi.jpg\" alt=\"\">\n    </div>\n\n    <div class=\"col-lg-3 col-md-12 col-xs-12\">\n      <img src=\"assets/img/home-travels/vikings.jpg\" alt=\"\">\n    </div>\n\n    <div class=\"col-lg-3 col-md-12 col-xs-12\">\n      <img src=\"assets/img/home-travels/interestelar.jpg\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-3 col-md-12 col-xs-12\">\n      <img src=\"assets/img/home-travels/got_dubrovnik.jpg\" alt=\"\">\n    </div>\n\n    <div class=\"col-lg-3 col-md-12 col-xs-12\">\n      <img src=\"assets/img/home-travels/got_ilha_de_gozo.jpg\" alt=\"\">\n    </div>\n\n    <div class=\"col-lg-3 col-md-12 col-xs-12\">\n      <img src=\"assets/img/home-travels/star_wars_deserto_rub.jpg\" alt=\"\">\n    </div>\n\n    <div class=\"col-lg-3 col-md-12 col-xs-12\">\n      <img src=\"assets/img/home-travels/harry_potter_colegio.jpg\" alt=\"\">\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home-travels/home-travels.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  max-height: 300px;\n  max-width: 600px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-travels/home-travels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTravelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeTravelsComponent = (function () {
    function HomeTravelsComponent() {
    }
    HomeTravelsComponent.prototype.ngOnInit = function () {
    };
    return HomeTravelsComponent;
}());
HomeTravelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-travels',
        template: __webpack_require__("../../../../../src/app/pages/home-travels/home-travels.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home-travels/home-travels.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeTravelsComponent);

//# sourceMappingURL=home-travels.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-travels/home-travels.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTravelsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_travels_component__ = __webpack_require__("../../../../../src/app/pages/home-travels/home-travels.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeTravelsModule = (function () {
    function HomeTravelsModule() {
    }
    return HomeTravelsModule;
}());
HomeTravelsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_travels_component__["a" /* HomeTravelsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__home_travels_component__["a" /* HomeTravelsComponent */]]
    })
], HomeTravelsModule);

//# sourceMappingURL=home-travels.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Entrar</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-user\"></i></span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"E-mail\" aria-describedby=\"basic-addon1\">\n        </div>\n        <br>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-lock\"></i></span>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Senha\" aria-describedby=\"basic-addon1\">\n        </div>\n\n        <button type=\"button\" class=\"btn btn-primary btn-block mt-4\">Entrar</button>\n        <h6 class=\"text-right mt-3\">Ainda não tem uma conta? <strong>Registre-se</strong></h6>\n  </div>\n  <!-- <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Fechar</button>\n    </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n  background: transparent;\n  color: #ff404e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(activeModal) {
        this.activeModal = activeModal;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "name", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light fixed-top\" [ngClass]=\"{'bg-light': navIsFixed}\">\n  <div class=\"container\">\n    <a href=\"index.html\" class=\"navbar-brand\"><i class=\"fa fa-plane\" aria-hidden=\"true\"></i></a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a href=\"#\" class=\"nav-link\">HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"#\" class=\"nav-link\" [ngClass]=\"{'text-dark': navIsFixed}\">SERVIÇOS</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"#\" class=\"nav-link\"  [ngClass]=\"{'text-dark': navIsFixed}\">ROTEIROS</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"#\" class=\"nav-link\"  [ngClass]=\"{'text-dark': navIsFixed}\">CONTATO</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"#\" class=\"font-weight-bold nav-link\"  [ngClass]=\"{'text-dark': navIsFixed}\" (click)=\"open()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> LOGIN</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/pages/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  border-bottom: #ff404e 2px solid;\n  opacity: 0.95; }\n  .navbar .nav-item.active {\n    border-left: #ff404e 0.8px solid; }\n    .navbar .nav-item.active .nav-link {\n      color: #ff404e; }\n  .navbar .navbar-brand {\n    color: white; }\n  .navbar .navbar-toggler {\n    border: 1px #ff404e solid; }\n    .navbar .navbar-toggler .navbar-toggler-icon {\n      background-color: #CCC; }\n  .navbar .nav-link {\n    color: white;\n    font-size: 19px;\n    padding-left: 1em;\n    padding-right: 1em; }\n    .navbar .nav-link:hover {\n      color: #ff404e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NavbarComponent = (function () {
    function NavbarComponent(modalService, document) {
        this.modalService = modalService;
        this.document = document;
        this.navIsFixed = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.open = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]);
        modalRef.componentInstance.name = 'World';
    };
    NavbarComponent.prototype.onWindowScroll = function () {
        var number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 600) {
            this.navIsFixed = true;
        }
        else if (this.navIsFixed && number < 600) {
            this.navIsFixed = false;
        }
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavbarComponent.prototype, "onWindowScroll", null);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/pages/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/navbar/navbar.component.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/pages/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"arda_services\">\n\n    <div class=\"container\">\n\n      <h1 class=\"text-center pb-5 wow fadeInUp black-text\">Serviços da Arda</h1>\n\n      <div class=\"row text-center\">\n        <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n          <div class=\"service wow slideInLeft\" data-wow-delay=\"180ms\">\n            <div class=\"icon\"><i class=\"fa fa-bed\"></i></div>\n            <h5 class=\"service-title\">Hospedagem</h5>\n            <p class=\"service-description display-6\">Conforte-se em lugares <strong>aconchegantes</strong> e <strong>temáticos</strong></p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n          <div class=\"service wow bounceInDown\" data-wow-delay=\"290ms\">\n            <div class=\"icon\"><i class=\"fa fa-plane\"></i></div>\n            <h5 class=\"service-title\">Transporte</h5>\n            <p class=\"service-description\">Viaje com <strong>segurança</strong> e <strong>preços atrativos</strong> com as melhores companhias áreas </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-sm-6 col-xs-12\" data-wow-delay=\"180ms\">\n          <div class=\"service wow slideInRight\">\n            <div class=\"icon\"><i class=\"fa fa-ticket\"></i></div>\n            <h5 class=\"service-title\">Check-in ágil</h5>\n            <p class=\"service-description\">Realize o check-in de <strong>forma prática e ágil</strong></p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-sm-6 col-xs-12\" data-wow-delay=\"180ms\">\n          <div class=\"service wow slideInLeft\">\n            <div class=\"icon\"><i class=\"fa fa-map\"></i></div>\n            <h5 class=\"service-title\">Roteiro</h5>\n            <p class=\"service-description\">Vivencie a sua experiência com um <strong>plano de viagem incrível</strong> e <strong>diferenciado</strong></p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-sm-6 col-xs-12\" data-wow-delay=\"290ms\">\n          <div class=\"service wow bounceInUp\" data-wow-delay=\"250ms\">\n            <div class=\"icon\"><i class=\"fa fa-map-signs\"></i></div>\n            <h5 class=\"service-title\">Guia turístico</h5>\n            <p class=\"service-description\">Explore os <strong>lugares épicos</strong> com guias experientes</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-sm-6 col-xs-12\" data-wow-delay=\"180ms\">\n          <div class=\"service wow slideInRight\">\n            <div class=\"icon\"><i class=\"fa fa-users\"></i></div>\n            <h5 class=\"service-title\">Comunicação</h5>\n            <p class=\"service-description\">Acompanhe em <strong>tempo real</strong> todo o andamento da sua aventura</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/services/services.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".arda_services {\n  background: #EDF1F2 none repeat scroll 0 0;\n  padding-top: 15px;\n  min-height: 100vh;\n  text-align: center; }\n\nh1 {\n  color: #333 !important; }\n\n.service {\n  background: #fff none repeat scroll 0 0;\n  height: 300px;\n  padding: 20px;\n  margin: 15px 0 20% 0; }\n  .service .icon {\n    color: #333;\n    display: inline-block;\n    position: relative;\n    top: 30px; }\n    .service .icon i {\n      border-radius: 130px;\n      background: #fff;\n      height: 90px;\n      width: 100px;\n      font-size: 55px;\n      position: absolute;\n      line-height: 80px;\n      text-align: center;\n      top: -40px;\n      margin: 0 -52px auto;\n      box-shadow: 6px 6px 20px -4px rgba(0, 0, 0, 0.5); }\n  .service .service-title {\n    margin-top: 90px;\n    padding-top: 30px;\n    color: #333; }\n  .service .service-description {\n    margin-top: 0;\n    padding-top: 30px;\n    color: #333;\n    opacity: 0; }\n  .service:hover {\n    background-color: #ff404e; }\n  .service:hover .icon {\n    color: #ff404e;\n    top: -60px;\n    transition: all 400ms linear; }\n  .service:hover .service-title {\n    opacity: 1;\n    color: #fff;\n    bottom: 90px;\n    position: relative;\n    transition: all 200ms linear; }\n  .service:hover .service-description {\n    opacity: 1;\n    color: #fff;\n    bottom: 60px;\n    position: relative;\n    transition: all 250ms linear; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/pages/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/services/services.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component__ = __webpack_require__("../../../../../src/app/pages/services/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__services_component__["a" /* ServicesComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__services_component__["a" /* ServicesComponent */]]
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/special-travels/special-travels.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"p-5 special-travels\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"container\">\n\n        <h1 class=\"text-center text-dark pb-4\">Pacotes épicos</h1>\n\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-12 col-xs-12\">\n\n            <div class=\"card wow slideInLeft\">\n              <img class=\"card-img-top\" src=\"assets/img/home-travels/hobbiton.jpg\" alt=\"Hobbiton\">\n              <div class=\"card-block\">\n                <div class=\"dark-overlay\">\n                  <h2 class=\"pt-3 text-white text-center\">Senhor dos Anéis</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-12 col-xs-12\">\n            <div class=\"card wow bounceInDown\">\n              <img class=\"card-img-top\" src=\"assets/img/home-travels/got_ilha_de_gozo.jpg\" alt=\"GoT\">\n              <div class=\"card-block\">\n                <div class=\"dark-overlay\">\n                  <h2 class=\"pt-3 text-white text-center\">Game of Thrones</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-12 col-xs-12\">\n            <div class=\"card wow slideInRight\">\n              <img class=\"card-img-top\" src=\"assets/img/home-travels/harry_potter_colegio.jpg\" alt=\"HP\">\n              <div class=\"card-block\">\n                <div class=\"dark-overlay\">\n                  <h2 class=\"pt-3 text-white text-center\">Harry Potter</h2>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/special-travels/special-travels.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".special-travels .dark-overlay {\n  background: #ff404e;\n  height: 80px; }\n\n.special-travels .card {\n  margin-top: 20px; }\n  .special-travels .card img {\n    max-height: 200px; }\n  .special-travels .card:hover {\n    -webkit-transform: scale(1.025453);\n            transform: scale(1.025453);\n    transition: all 200ms linear; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/special-travels/special-travels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialTravelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpecialTravelsComponent = (function () {
    function SpecialTravelsComponent() {
    }
    SpecialTravelsComponent.prototype.ngOnInit = function () {
    };
    return SpecialTravelsComponent;
}());
SpecialTravelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-special-travels',
        template: __webpack_require__("../../../../../src/app/pages/special-travels/special-travels.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/special-travels/special-travels.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SpecialTravelsComponent);

//# sourceMappingURL=special-travels.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/special-travels/special-travels.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialTravelsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special_travels_component__ = __webpack_require__("../../../../../src/app/pages/special-travels/special-travels.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpecialTravelsModule = (function () {
    function SpecialTravelsModule() {
    }
    return SpecialTravelsModule;
}());
SpecialTravelsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__special_travels_component__["a" /* SpecialTravelsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__special_travels_component__["a" /* SpecialTravelsComponent */]]
    })
], SpecialTravelsModule);

//# sourceMappingURL=special-travels.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/why-arda/why-arda.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"p-5 why-arda\">\n  <div class=\"dark-overlay\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"container\">\n\n          <h1 class=\"mt-4\">Por que escolher a Arda?</h1>\n\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-sm-12 col-xs-12\">\n              <div class=\"reason wow bounceIn\" data-wow-delay=\"150ms\">\n                <div class=\"icon\"><i class=\"fa fa-lock\"></i></div>\n                <h5 class=\"font-weight-bold reason-title\">Segurança</h5>\n                <p class=\"reason-description\">Nós nos preocupamos com a segurança desde do início da compra ao final da sua experiência</p>\n              </div>\n            </div>\n\n            <div class=\"col-lg-4 col-sm-12 col-xs-12\">\n              <div class=\"reason wow bounceIn\" data-wow-delay=\"340ms\">\n                <div class=\"icon\"><i class=\"fa fa-heart\"></i></div>\n                <h5 class=\"font-weight-bold reason-title\">Conforto</h5>\n                <p class=\"reason-description\">Nós possuímos toda a tecnologia necessária para acompanhar a sua viagem desde do início</p>\n              </div>\n            </div>\n\n            <div class=\"col-lg-4 col-sm-12 col-xs-12\">\n              <div class=\"reason wow bounceIn\" data-wow-delay=\"490ms\">\n                <div class=\"icon\"><i class=\"fa fa-handshake-o\"></i></div>\n                <h5 class=\"font-weight-bold reason-title\">Fidelidade</h5>\n                <p class=\"reason-description\">Nós nos dispomos a oferecer outras viagens com condições incríveis para clientes que já viajaram conosco</p>\n              </div>\n            </div>\n\n            <div class=\"container\">\n              <h1 class=\"mt-5 text-center wow slideInRight\">Você está preparado para essa experiência?</h1>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/why-arda/why-arda.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".why-arda .dark-overlay {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0; }\n\n.why-arda {\n  background-attachment: fixed !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important; }\n\n.why-arda {\n  background: url(" + __webpack_require__("../../../../../src/assets/teste.jpg") + ");\n  position: relative;\n  min-height: 800px;\n  text-align: center;\n  color: #333; }\n  .why-arda .dark-overlay {\n    width: 100%;\n    min-height: 100%; }\n\n.container {\n  margin-top: 05%; }\n\n.reason {\n  background: #fff none repeat scroll 0 0;\n  height: 300px;\n  padding: 20px;\n  margin-top: 60px;\n  display: inline-block; }\n  .reason .icon {\n    position: relative;\n    top: -60px;\n    color: white;\n    padding: 20px 40px; }\n    .reason .icon i {\n      border-radius: 100px;\n      background: #ff404e;\n      height: 60px;\n      width: 60px;\n      font-size: 30px;\n      position: absolute;\n      line-height: 60px;\n      text-align: center;\n      top: 0;\n      margin: 0px -25px auto; }\n\n@media only screen and (max-width: 960px) {\n  .why-arda {\n    min-height: 1600px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/why-arda/why-arda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyArdaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyArdaComponent = (function () {
    function WhyArdaComponent() {
    }
    WhyArdaComponent.prototype.ngOnInit = function () {
    };
    return WhyArdaComponent;
}());
WhyArdaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-why-arda',
        template: __webpack_require__("../../../../../src/app/pages/why-arda/why-arda.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/why-arda/why-arda.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WhyArdaComponent);

//# sourceMappingURL=why-arda.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/why-arda/why-arda.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyArdaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__why_arda_component__ = __webpack_require__("../../../../../src/app/pages/why-arda/why-arda.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WhyArdaModule = (function () {
    function WhyArdaModule() {
    }
    return WhyArdaModule;
}());
WhyArdaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__why_arda_component__["a" /* WhyArdaComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__why_arda_component__["a" /* WhyArdaComponent */]]
    })
], WhyArdaModule);

//# sourceMappingURL=why-arda.module.js.map

/***/ }),

/***/ "../../../../../src/assets/teste.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "teste.998507b565d6645a6bd0.jpg";

/***/ }),

/***/ "../../../../../src/assets/teste_parallax.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "teste_parallax.97eb1029385156765e01.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map