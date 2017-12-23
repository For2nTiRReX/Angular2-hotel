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
var Observable_1 = require("rxjs/Observable");
var service_barrel_1 = require("./service.barrel");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var UserDataService = (function () {
    function UserDataService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.url = "http://tyrist.development/api/UserController.php";
        this.userTokens = this.getUsersTokensData();
    }
    UserDataService.prototype.setUserCookie = function (user_id, user_token) {
        this._cookieService.putObject('auth_user', { 'user_id': user_id, 'user_token': user_token });
    };
    UserDataService.prototype.loginUser = function (login, password) {
        var _this = this;
        var data = new http_1.URLSearchParams();
        var user;
        data.append('get_data', JSON.stringify({ 'auth_user': { 'user_login': login, 'user_password': password } }));
        var AuthUserData = this.http.post(this.url, data)
            .toPromise()
            .then(function (succes) {
            console.log(succes);
            if (succes.json().status != "error") {
                user = succes.json().response.auth_user;
                _this.setUserCookie(user.user_id, user.user_token);
                return user;
            }
            else {
                console.log(succes.json().response);
            }
        })
            .catch(this.handleError);
        return AuthUserData;
    };
    UserDataService.prototype.getUsersTokens = function () {
        return this.userTokens;
    };
    UserDataService.prototype.getUsersTokensData = function () {
        var data = new http_1.URLSearchParams();
        data.append('get_data', JSON.stringify({ 'get_tokens': 'get_tokens' }));
        var UsersTokens = this.http.post(this.url, data)
            .toPromise()
            .then(function (succes) {
            console.log(succes);
            if (succes.json().status != "error") {
                return succes.json();
            }
            else {
                console.log(succes.json().response);
            }
        })
            .catch(this.handleError);
        return UsersTokens;
    };
    UserDataService.prototype.handleError = function (error) {
        var message = "";
        if (error instanceof http_1.Response) {
            var errorData = error.json().error || JSON.stringify(error.json());
            message = error.status + " - " + (error.statusText || '') + " " + errorData;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable_1.Observable.throw(message);
    };
    return UserDataService;
}());
UserDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, service_barrel_1.CookieService])
], UserDataService);
exports.UserDataService = UserDataService;
//# sourceMappingURL=user.data.service.js.map