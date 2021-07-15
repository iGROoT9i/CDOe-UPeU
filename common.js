(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "on2l":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UsuarioService {
    constructor(http) {
        this.http = http;
        this.api = 'https://localhost:8085/usuarios';
    }
    getAllTasks() {
        const path = `${this.api}/todos/`;
        return this.http.get(path);
    }
    getTask(id) {
        const path = `${this.api}/todos/${id}`;
        return this.http.get(path);
    }
    createTask(task) {
        const path = `${this.api}`;
        return this.http.post(path, task);
    }
    updateTask(task) {
        const path = `${this.api}/todos/${task.id}`;
        return this.http.put(path, task);
    }
    deleteTask(id) {
        const path = `${this.api}/todos/${id}`;
        return this.http.delete(path);
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map