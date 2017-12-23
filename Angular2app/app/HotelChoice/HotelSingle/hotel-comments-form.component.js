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
var forms_1 = require("@angular/forms");
var service_barrel_1 = require("../../services/service.barrel");
var models_barrel_1 = require("../../models/models.barrel");
var router_1 = require("@angular/router");
var HotelCommentsFormComponent = (function () {
    function HotelCommentsFormComponent(fb, _commentsService, activatedRoute) {
        this.fb = fb;
        this._commentsService = _commentsService;
        this.activatedRoute = activatedRoute;
        //submTry: boolean = false;
        //commentAuthor: string = "";
        //commentText: string = "";
        this.formErrors = {
            "name": "",
            "comment": "",
        };
        this.validationMessages = {
            "name": {
                "required": "Required field.",
                "minlength": "Field value length should be not less than 4 symbol.",
                "maxlength": "Field value length should be less than 30 symbol."
            },
            "comment": {
                "required": "Required field.",
                "minlength": "Field value length should be not less than 8 symbol.",
                "maxlength": "Field value length should be less than 400 symbol."
            },
        };
    }
    HotelCommentsFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    HotelCommentsFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.commentForm = this.fb.group({
            "name": ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(30)
                ]],
            "comment": ["", [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8),
                    forms_1.Validators.maxLength(400)
                ]]
        });
        this.commentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    HotelCommentsFormComponent.prototype.onValueChange = function (data) {
        if (!this.commentForm)
            return;
        //this.submTry = false;
        var form = this.commentForm;
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
    HotelCommentsFormComponent.prototype.getCurrentDate = function () {
        var today = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var dd = today.getDate();
        var mm = today.getMonth(); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy + '-' + monthNames[mm] + '-' + dd;
    };
    HotelCommentsFormComponent.prototype.addComment = function () {
        // this.submTry = true;
        var _this = this;
        if (this.commentForm.valid) {
            var hotelId_1 = this.activatedRoute.snapshot.params["id"];
            var newComment = new models_barrel_1.Comment(null, hotelId_1, this.commentForm.get('comment').value, this.commentForm.get('name').value, this.getCurrentDate(), 1);
            this._commentsService.addComment(newComment).then(function (promData) {
                _this._commentsService.getComments(hotelId_1);
                _this.commentForm.reset();
                return;
            });
        }
    };
    return HotelCommentsFormComponent;
}());
HotelCommentsFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "hotel-comments-form",
        templateUrl: "hotel-comments-form.component.html",
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, service_barrel_1.CommentsService, router_1.ActivatedRoute])
], HotelCommentsFormComponent);
exports.HotelCommentsFormComponent = HotelCommentsFormComponent;
//# sourceMappingURL=hotel-comments-form.component.js.map