"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_barrel_1 = require("../../services/service.barrel");
var router_1 = require("@angular/router");
var AdminHomeComponent = (function () {
    function AdminHomeComponent(_CookieService, router) {
        this._CookieService = _CookieService;
        this.router = router;
    }
    AdminHomeComponent.prototype.logOut = function () {
        if (confirm("Press a button!") == true) {
            this._CookieService.remove('auth_user');
            this.router.navigate(["/"]);
        }
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "admin-home",
        templateUrl: "admin-home.component.html",
    }),
    __metadata("design:paramtypes", [service_barrel_1.CookieService, router_1.Router])
], AdminHomeComponent);
exports.AdminHomeComponent = AdminHomeComponent;
//# sourceMappingURL=admin-home.component.js.map