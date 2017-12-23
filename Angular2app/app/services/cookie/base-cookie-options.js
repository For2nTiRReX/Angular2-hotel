"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
/** @private */
var CookieOptions = (function () {
    function CookieOptions(_a) {
        var _b = _a === void 0 ? {} : _a, path = _b.path, domain = _b.domain, expires = _b.expires, secure = _b.secure;
        this.path = this.isPresent(path) ? path : null;
        this.domain = this.isPresent(domain) ? domain : null;
        this.expires = this.isPresent(expires) ? expires : null;
        this.secure = this.isPresent(secure) ? secure : false;
    }
    CookieOptions.prototype.merge = function (options) {
        return new CookieOptions({
            path: this.isPresent(options) && this.isPresent(options.path) ? options.path : this.path,
            domain: this.isPresent(options) && this.isPresent(options.domain) ? options.domain :
                this.domain,
            expires: this.isPresent(options) && this.isPresent(options.expires) ? options.expires :
                this.expires,
            secure: this.isPresent(options) && this.isPresent(options.secure) ? options.secure :
                this.secure,
        });
    };
    CookieOptions.prototype.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    return CookieOptions;
}());
exports.CookieOptions = CookieOptions;
/** @private */
var BaseCookieOptions = (function (_super) {
    __extends(BaseCookieOptions, _super);
    function BaseCookieOptions(baseHref) {
        var _this = _super.call(this, { path: baseHref || '/' }) || this;
        _this.baseHref = baseHref;
        return _this;
    }
    return BaseCookieOptions;
}(CookieOptions));
BaseCookieOptions = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()), __param(0, core_1.Inject(common_1.APP_BASE_HREF)),
    __metadata("design:paramtypes", [String])
], BaseCookieOptions);
exports.BaseCookieOptions = BaseCookieOptions;
//# sourceMappingURL=base-cookie-options.js.map