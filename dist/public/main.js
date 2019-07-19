(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/all-pets/all-pets.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-pets/all-pets.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\n<button [routerLink]=\"['/pets/new']\">Add a pet to the shelter</button>\n<hr>\n\n\n<div>\n    <div class=\"table-section\">\n        <h3>Name:</h3>\n        <p *ngFor=\"let pet of pets\">\n            {{pet['name']}}\n        </p>\n    </div>\n    <div class=\"table-section\">\n        <h3>Type:</h3>\n        <p *ngFor=\"let pet of pets\">\n            {{pet['type']}}\n        </p>\n    </div>\n    <div class=\"table-section\">\n        <h3>Actions:</h3>\n        <div *ngFor=\"let pet of pets\" class=\"table-interface\">\n            <button [routerLink]=\"['/pets', pet['_id']]\">Details</button>\n            <button [routerLink]=\"['/pets', pet['_id'], 'edit']\">Edit</button>\n        </div>\n    </div>\n    <hr>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"container\">\n  <h1>\n    {{ title }}\n  </h1>\n  <!-- <button [routerLink]=\"['/pets']\">Pets</button>\n  <button [routerLink]=\"['/pets/new']\">New Pet</button>\n  <button [routerLink]=\"['/pets/1/edit']\">Edit Pet</button>\n  <button [routerLink]=\"['/pets/1']\">View Pet</button> -->\n  <hr>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-pet/edit-pet.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-pet/edit-pet.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\n\n<!-- #region validations -->\n<!-- Name -->\n<p *ngIf=\"newPet['name'].length < 3 && messages['nameShort']['display'] == true \">\n        {{messages['nameShort']['message']}}\n    </p>\n    <p *ngIf=\"newPet['name'].length > 45 && messages['nameLong']['display'] == true \">\n        {{messages['nameLong']['message']}}\n    </p>\n    \n    <!-- Type -->\n    <p *ngIf=\"newPet['type'].length < 3 && messages['typeShort']['display'] == true \">\n        {{messages['typeShort']['message']}}\n    </p>\n    <p *ngIf=\"newPet['type'].length > 45 && messages['typeLong']['display'] == true \">\n        {{messages['typeLong']['message']}}\n    </p>\n    \n    <!-- Description -->\n    <p *ngIf=\"newPet['description'].length < 3 && messages['descShort']['display'] == true \">\n        {{messages['descShort']['message']}}\n    </p>\n    <p *ngIf=\"newPet['description'].length > 45 && messages['descLong']['display'] == true \">\n        {{messages['descLong']['message']}}\n    </p>\n    \n    <!-- Skill -->\n    <ng-template ngFor let-skill [ngForOf]=\"newPet['skills']\" let-i=\"index\">\n        <p *ngIf=\"newPet['skills'][i].length > 0 && newPet['skills'][i].length < 3 && messages['skillShort']['display'] == true \">\n            {{messages['skillShort']['message']}}\n        </p>\n        <p *ngIf=\"newPet['skills'][i].length > 45 && messages['skillShort']['display'] == true \">\n            {{messages['skillLong']['message']}}\n        </p>\n    </ng-template>\n    \n    <!-- endregion -->\n\n<div class=\"user-form\">\n    <form (submit)=\"updatePetViaService()\">\n            <h4>Pet name:</h4>\n            <input (keyup)=\"toggleMessageDisplay('nameShort'); toggleMessageDisplay('nameLong')\" type=\"text\" name=\"pet-name\" [(ngModel)]=\"newPet['name']\">\n            \n            <h4>Pet type:</h4>\n            <input (keyup)=\"toggleMessageDisplay('typeShort'); toggleMessageDisplay('typeLong')\" type=\"text\" name=\"pet-type\" [(ngModel)]=\"newPet['type']\">\n    \n            <h4>Description:</h4>\n            <input (keyup)=\"toggleMessageDisplay('descShort'); toggleMessageDisplay('descLong')\" type=\"text\" name=\"description\" [(ngModel)]=\"newPet['description']\">\n    \n            <h4>Skills:</h4>\n            <input (keyup)=\"toggleMessageDisplay('skillShort'); toggleMessageDisplay('skillLong')\" type=\"text\" name=\"skill-1\" [(ngModel)]=\"newPet['skills'][0]\">\n            <input (keyup)=\"toggleMessageDisplay('skillShort'); toggleMessageDisplay('skillLong')\" type=\"text\" name=\"skill-2\" [(ngModel)]=\"newPet['skills'][1]\">\n            <input (keyup)=\"toggleMessageDisplay('skillShort'); toggleMessageDisplay('skillLong')\" type=\"text\" name=\"skill-3\" [(ngModel)]=\"newPet['skills'][2]\">\n            <button (click)=\"\n            toggleMessageDisplay('nameShort');\n            toggleMessageDisplay('nameLong');\n            toggleMessageDisplay('typeShort');\n            toggleMessageDisplay('typeLong');\n            toggleMessageDisplay('descShort');\n            toggleMessageDisplay('descLong');\n            toggleMessageDisplay('skillShort');\n            toggleMessageDisplay('skillLong');\n            \" type=\"submit\">Submit</button>\n    </form>\n    <button [routerLink]=\"['/pets']\">Cancel</button>\n</div>\n\n<!-- <p>\n    {{newPet | json }}\n</p> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-pet/new-pet.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-pet/new-pet.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\n\n<!-- #region validations -->\n<!-- Name -->\n<p *ngIf=\"newPet['name'].length < 3 && messages['nameShort']['display'] == true \">\n    {{messages['nameShort']['message']}}\n</p>\n<p *ngIf=\"newPet['name'].length > 45 && messages['nameLong']['display'] == true \">\n    {{messages['nameLong']['message']}}\n</p>\n\n<!-- Type -->\n<p *ngIf=\"newPet['type'].length < 3 && messages['typeShort']['display'] == true \">\n    {{messages['typeShort']['message']}}\n</p>\n<p *ngIf=\"newPet['type'].length > 45 && messages['typeLong']['display'] == true \">\n    {{messages['typeLong']['message']}}\n</p>\n\n<!-- Description -->\n<p *ngIf=\"newPet['description'].length < 3 && messages['descShort']['display'] == true \">\n    {{messages['descShort']['message']}}\n</p>\n<p *ngIf=\"newPet['description'].length > 45 && messages['descLong']['display'] == true \">\n    {{messages['descLong']['message']}}\n</p>\n\n<!-- Skill -->\n<ng-template ngFor let-skill [ngForOf]=\"newPet['skills']\" let-i=\"index\">\n    <p *ngIf=\"newPet['skills'][i].length > 0 && newPet['skills'][i].length < 3 && messages['skillShort']['display'] == true \">\n        {{messages['skillShort']['message']}}\n    </p>\n    <p *ngIf=\"newPet['skills'][i].length > 45 && messages['skillShort']['display'] == true \">\n        {{messages['skillLong']['message']}}\n    </p>\n</ng-template>\n\n<!-- Entry Existed -->\n<p *ngIf=\"messages['entryExists']['display'] == true \">\n    {{messages['entryExists']['message']}}\n</p>\n\n\n<!-- endregion -->\n\n\n<div class=\"user-form\">\n    <form (submit)=\"createPetViaService()\">\n        <h4>Pet name:</h4>\n        <input (keyup)=\"toggleMessageDisplay('nameShort'); toggleMessageDisplay('nameLong')\" type=\"text\" name=\"pet-name\" [(ngModel)]=\"newPet['name']\">\n        \n        <h4>Pet type:</h4>\n        <input (keyup)=\"toggleMessageDisplay('typeShort'); toggleMessageDisplay('typeLong')\" type=\"text\" name=\"pet-type\" [(ngModel)]=\"newPet['type']\">\n\n        <h4>Description:</h4>\n        <input (keyup)=\"toggleMessageDisplay('descShort'); toggleMessageDisplay('descLong')\" type=\"text\" name=\"description\" [(ngModel)]=\"newPet['description']\">\n\n        <h4>Skills (Optional):</h4>\n        <input (keyup)=\"toggleMessageDisplay('skillShort'); toggleMessageDisplay('skillLong')\" type=\"text\" name=\"skill-1\" [(ngModel)]=\"newPet['skills'][0]\">\n        <input (keyup)=\"toggleMessageDisplay('skillShort'); toggleMessageDisplay('skillLong')\" type=\"text\" name=\"skill-2\" [(ngModel)]=\"newPet['skills'][1]\">\n        <input (keyup)=\"toggleMessageDisplay('skillShort'); toggleMessageDisplay('skillLong')\" type=\"text\" name=\"skill-3\" [(ngModel)]=\"newPet['skills'][2]\">\n        <button (click)=\"\n        toggleMessageDisplay('nameShort');\n        toggleMessageDisplay('nameLong');\n        toggleMessageDisplay('typeShort');\n        toggleMessageDisplay('typeLong');\n        toggleMessageDisplay('descShort');\n        toggleMessageDisplay('descLong');\n        toggleMessageDisplay('skillShort');\n        toggleMessageDisplay('skillLong');\n        \" type=\"submit\">Submit</button>\n    </form>\n    <button [routerLink]=\"['/pets']\">Cancel</button>\n</div>\n\n<!-- <p>\n    {{newPet | json }}\n</p> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-pet/view-pet.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-pet/view-pet.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/pets']\">Home</button>\n<h3>\n    {{title}}\n</h3>\n<hr>\n\n<h3>\n    Pet type:\n</h3>\n<p>\n    {{pet['type']}}\n</p>\n<h3>\n    Description:\n</h3>\n<p>\n    {{pet['description']}}\n</p>\n<h3>\n    Skills:\n</h3>\n<p *ngFor=\"let skill of pet['skills']\">\n    {{skill}}\n</p>\n<h3>\n    Likes\n</h3>\n<p>\n    {{pet['likes']}}\n</p>\n\n<button (click)=\"deletePetViaService()\">Adopt this pet</button>\n<button *ngIf=\"likeLimit == false\" (click)=\"addLikeOfPetViaService()\">Like this pet</button>\n\n<hr>\n<!-- <p>\n    {{ pet | json }}\n</p> -->\n\n\n"

/***/ }),

/***/ "./src/app/all-pets/all-pets.component.ts":
/*!************************************************!*\
  !*** ./src/app/all-pets/all-pets.component.ts ***!
  \************************************************/
/*! exports provided: AllPetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPetsComponent", function() { return AllPetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let AllPetsComponent = class AllPetsComponent {
    constructor(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.title = "These pets are looking for a home!";
        this.pets = [];
    }
    ngOnInit() {
        this.getAllPetsViaService();
    }
    getAllPetsViaService() {
        let observable = this._httpService.getAllPets();
        observable.subscribe(data => {
            console.log("Pets Processing: ", data);
            this.pets = data['data'];
        });
    }
};
AllPetsComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AllPetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-pets',
        template: __webpack_require__(/*! raw-loader!./all-pets.component.html */ "./node_modules/raw-loader/index.js!./src/app/all-pets/all-pets.component.html"),
        styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
    })
], AllPetsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-pets/all-pets.component */ "./src/app/all-pets/all-pets.component.ts");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
/* harmony import */ var _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-pet/edit-pet.component */ "./src/app/edit-pet/edit-pet.component.ts");
/* harmony import */ var _view_pet_view_pet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-pet/view-pet.component */ "./src/app/view-pet/view-pet.component.ts");







const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/pets' },
    // { path: 'home', component: HomeComponent },
    { path: 'pets', component: _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_3__["AllPetsComponent"] },
    { path: 'pets/new', component: _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_4__["NewPetComponent"] },
    { path: 'pets/:id/edit', component: _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_5__["EditPetComponent"] },
    { path: 'pets/:id', component: _view_pet_view_pet_component__WEBPACK_IMPORTED_MODULE_6__["ViewPetComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n#container{\r\n    width: 970px;\r\n    margin: 0px auto;\r\n    text-align: center;\r\n}\r\n.user-form {\r\n    text-align: center;\r\n}\r\n.user-form form input, .user-form form h4{\r\n    margin: 0px auto;\r\n}\r\n.user-form form input{\r\n    display: block;\r\n}\r\n.user-form form h4{\r\n    display: block;\r\n}\r\n/* table-sections */\r\n.table-section{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n.table-interface{\r\n    margin-bottom: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnREFBZ0Q7QUFDcEQ7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLG1CQUFtQjtBQUVuQjtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNjb250YWluZXJ7XHJcbiAgICB3aWR0aDogOTcwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udXNlci1mb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItZm9ybSBmb3JtIGlucHV0LCAudXNlci1mb3JtIGZvcm0gaDR7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4udXNlci1mb3JtIGZvcm0gaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udXNlci1mb3JtIGZvcm0gaDR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogdGFibGUtc2VjdGlvbnMgKi9cclxuXHJcbi50YWJsZS1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGFibGUtaW50ZXJmYWNle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



let AppComponent = class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.title = 'Pet Shelter';
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-pets/all-pets.component */ "./src/app/all-pets/all-pets.component.ts");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
/* harmony import */ var _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-pet/edit-pet.component */ "./src/app/edit-pet/edit-pet.component.ts");
/* harmony import */ var _view_pet_view_pet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-pet/view-pet.component */ "./src/app/view-pet/view-pet.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _all_pets_all_pets_component__WEBPACK_IMPORTED_MODULE_9__["AllPetsComponent"],
            _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_10__["NewPetComponent"],
            _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_11__["EditPetComponent"],
            _view_pet_view_pet_component__WEBPACK_IMPORTED_MODULE_12__["ViewPetComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-pet/edit-pet.component.ts ***!
  \************************************************/
/*! exports provided: EditPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPetComponent", function() { return EditPetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let EditPetComponent = class EditPetComponent {
    constructor(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.title = "Edit this pet";
        this.targetId = "";
        this.newPet = {
            _id: "",
            name: "",
            type: "",
            description: "",
            skills: ["", "", ""]
        };
        this.messages = {
            nameShort: { display: false, message: "Pet name must have at least 3 characters" },
            nameLong: { display: false, message: "Pet name cannot exceed 45 characters" },
            typeShort: { display: false, message: "Pet type must have at least 3 characters" },
            typeLong: { display: false, message: "Pet type cannot exceed 45 characters" },
            descShort: { display: false, message: "Description must have at least 3 characters" },
            descLong: { display: false, message: "Description cannot exceed 280 characters" },
            skillShort: { display: false, message: "Skills must have at least 3 characters or be left blank" },
            skillLong: { display: false, message: "Skills cannot exceed 45 characters" },
        };
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            console.log(params);
            this.getPetViaService(params['id']);
            this.targetId = params['id'];
        });
    }
    getPetViaService(id) {
        let observable = this._httpService.getPetById(id);
        observable.subscribe(data => {
            console.log("Pet Processing: ", data);
            this.newPet['_id'] = data['_id'];
            this.newPet['name'] = data['name'];
            this.newPet['type'] = data['type'];
            this.newPet['description'] = data['description'];
            this.newPet['skills'] = data['skills'];
            this.title = `Details about ${data['name']}`;
        });
    }
    updatePetViaService() {
        let observable = this._httpService.updatePet(this.newPet);
        observable.subscribe(data => {
            console.log("Pet Update Processing: ", data);
            if (data['success'] == true) {
                this._router.navigate([`/pets/${this.targetId}`]);
            }
            else {
                console.log(data);
            }
        });
    }
    toggleMessageDisplay(messageName) {
        this.messages[`${messageName}`]['display'] = true;
        console.log(`${messageName}: ${this.messages[`${messageName}`]['display']}`);
    }
};
EditPetComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
EditPetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-pet',
        template: __webpack_require__(/*! raw-loader!./edit-pet.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-pet/edit-pet.component.html"),
        styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
    })
], EditPetComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getAllPets() {
        return this._http.get('/api/pets');
    }
    getPetById(id) {
        return this._http.get(`/api/pet/${id}`);
    }
    createPet(post) {
        return this._http.post('/api/pets', post);
    }
    updatePet(post) {
        return this._http.put('/api/pets', post);
    }
    likePet(post) {
        return this._http.put('/api/likes/', post);
    }
    deletePet(id) {
        return this._http.delete(`/api/pets/${id}`);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/new-pet/new-pet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.ts ***!
  \**********************************************/
/*! exports provided: NewPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPetComponent", function() { return NewPetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let NewPetComponent = class NewPetComponent {
    constructor(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.title = "Know of a pet needing a home?";
        this.newPet = {
            name: "",
            type: "",
            description: "",
            skills: ["", "", ""]
        };
        this.messages = {
            nameShort: { display: false, message: "Pet name must have at least 3 characters" },
            nameLong: { display: false, message: "Pet name cannot exceed 45 characters" },
            typeShort: { display: false, message: "Pet type must have at least 3 characters" },
            typeLong: { display: false, message: "Pet type cannot exceed 45 characters" },
            descShort: { display: false, message: "Description must have at least 3 characters" },
            descLong: { display: false, message: "Description cannot exceed 280 characters" },
            skillShort: { display: false, message: "Skills must have at least 3 characters or be left blank" },
            skillLong: { display: false, message: "Skills cannot exceed 45 characters" },
            entryExists: { display: false, message: "Pet already in database, please choose a different name!" },
        };
    }
    ngOnInit() {
    }
    createPetViaService() {
        let observable = this._httpService.createPet(this.newPet);
        observable.subscribe(data => {
            console.log("Pet processing: ", data);
            if (data['existed'] == true) {
                this.messages.entryExists.display = true;
            }
            else {
                this.messages.entryExists.display = false;
                if (data['success'] == true) {
                    this._router.navigate([`/pets`]);
                }
                else {
                    console.log(data);
                }
            }
        });
    }
    toggleMessageDisplay(messageName) {
        this.messages[`${messageName}`]['display'] = true;
        console.log(`${messageName}: ${this.messages[`${messageName}`]['display']}`);
    }
};
NewPetComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NewPetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-pet',
        template: __webpack_require__(/*! raw-loader!./new-pet.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-pet/new-pet.component.html"),
        styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
    })
], NewPetComponent);



/***/ }),

/***/ "./src/app/view-pet/view-pet.component.ts":
/*!************************************************!*\
  !*** ./src/app/view-pet/view-pet.component.ts ***!
  \************************************************/
/*! exports provided: ViewPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPetComponent", function() { return ViewPetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let ViewPetComponent = class ViewPetComponent {
    constructor(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.title = "";
        this.pet = {};
        this.likeLimit = false;
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            console.log(params);
            this.getPetViaService(params['id']);
        });
        this.likeLimit = false;
    }
    getPetViaService(id) {
        let observable = this._httpService.getPetById(id);
        observable.subscribe(data => {
            console.log("Pet Processing: ", data);
            this.pet = data;
            this.title = `Details about ${data['name']}`;
        });
    }
    deletePetViaService() {
        let observable = this._httpService.deletePet(this.pet['_id']);
        observable.subscribe(data => {
            console.log("Adopt Pet Processing: ", data);
        });
        this._router.navigate(['/pets']);
    }
    addLikeOfPetViaService() {
        if (this.likeLimit == false) {
            let observable = this._httpService.likePet(this.pet);
            observable.subscribe(data => {
                console.log("Pet Like Processing: ", data);
            });
            this.likeLimit = true;
            this.getPetViaService(this.pet['_id']);
        }
        else {
            console.log("Like limit reached...");
        }
    }
};
ViewPetComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewPetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-pet',
        template: __webpack_require__(/*! raw-loader!./view-pet.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-pet/view-pet.component.html"),
        styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
    })
], ViewPetComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lbhbm\Documents\CodingDojo\Assignments\Stack02.1_MEANOverview\005_Angular\BeltExam\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map