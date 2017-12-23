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
var service_barrel_1 = require("../services/service.barrel");
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(UserDataService, router, fb) {
        this.UserDataService = UserDataService;
        this.router = router;
        this.fb = fb;
        this.formErrors = {
            "userLogin": "",
            "userPassword": "",
        };
        this.validationMessages = {
            "userLogin": {
                "required": "Required field.",
                "minlength": "Field value length should be not less than 4 symbols.",
                "maxlength": "Field value length should be less than 16 symbols."
            },
            "userPassword": {
                "required": "Required field.",
                "minlength": "Field value length should be not less than 4 symbols.",
                "maxlength": "Field value length should be less than 35 symbols."
            },
        };
        this.messageBoxVisibility = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            "userLogin": ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(16)
                ]],
            "userPassword": ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(34)
                ]]
        });
        this.loginForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
    };
    LoginComponent.prototype.onValueChange = function (data) {
        if (!this.loginForm)
            return;
        this.messageBoxVisibility = false;
        var form = this.loginForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            this.messageBoxVisibility = true;
            this.formErrorMessageBox = "Invalid form try to fix input values!";
            return;
        }
        this.UserDataService
            .loginUser(this.loginForm.get('userLogin').value, this.loginForm.get('userPassword').value)
            .then(function (data) {
            if (data && data.hasOwnProperty("user_token")) {
                _this.router.navigate(['/admin']);
                return true;
            }
            else {
                _this.messageBoxVisibility = true;
                _this.formErrorMessageBox = "User with this login data isn't exist!";
                return false;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-login",
        templateUrl: "login.component.html",
    }),
    __metadata("design:paramtypes", [service_barrel_1.UserDataService, router_1.Router, forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map