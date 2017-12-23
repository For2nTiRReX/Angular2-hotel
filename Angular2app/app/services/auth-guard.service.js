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
var router_1 = require("@angular/router");
var service_barrel_1 = require("./service.barrel");
/*
    Guard - механизм для выполнения проверок перед активацией и деактивацией маршрута

    CanActivate - Определяет возможность активации маршрута
    CanActivateChild - Определяет возможность активации дочерних маршрутов текущего маршрута
    CanDeactivate - Определяет можно ли уйти с текущего маршрута
    CanLoad - Определяет может ли модуль загрузиться с использованием lazy loading

    Установка объектов Guard происходит при настройке маршрутизации.
    В данном примере Guard используется в файле /admin/admin-routing.module.ts
    Также, для AuthGuard необходимо установить провайдер (в данном примере провайдер установлен в app.module.ts)
*/
var AuthGuard = (function () {
    function AuthGuard(_cookieService, _userDataService, router) {
        this._cookieService = _cookieService;
        this._userDataService = _userDataService;
        this.router = router;
    }
    AuthGuard.prototype.compareToken = function (token) {
        var user_cookie_token = JSON.parse(this._cookieService.get('auth_user')).user_token;
        return token.some(function (arrVal) {
            return user_cookie_token === arrVal.token;
        });
    };
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        if (!this._cookieService.get('auth_user')) {
            console.log("User cookie doesn't exist!");
            this.router.navigate(['/login']);
        }
        return this._userDataService.getUsersTokensData()
            .then(function (data) {
            console.log(data.response.users_tokens);
            console.log(JSON.parse(_this._cookieService.get('auth_user')).user_token);
            if (data.response.users_tokens.length > 0) {
                if (_this.compareToken(data.response.users_tokens)) {
                    console.log("User exist!");
                    return true;
                }
                else {
                    console.error("User cookie token doesn't not mach any db token!");
                    _this.router.navigate(['/login']);
                    return false;
                }
            }
            else {
                console.error("Api returned 0 tokens!");
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [service_barrel_1.CookieService, service_barrel_1.UserDataService, router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map