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
var hotels_info_service_1 = require("../../services/hotels-info.service");
var HotelSingleComponent = (function () {
    function HotelSingleComponent(activatedRoute, _hotelService) {
        this.activatedRoute = activatedRoute;
        this._hotelService = _hotelService;
        this.counterRaiting = Array;
    }
    HotelSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = +params["id"]; // конвертируем значение параметра id в тип number
            _this._hotelService.initHotelsPromise.then(function (data) {
                _this.hotel = data.filter(_this.filterByID, id)[0];
            });
        });
    };
    HotelSingleComponent.prototype.filterByID = function (value) {
        return value.id == this;
    };
    return HotelSingleComponent;
}());
HotelSingleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "hotel-single",
        templateUrl: "hotel-single.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, hotels_info_service_1.HotelService])
], HotelSingleComponent);
exports.HotelSingleComponent = HotelSingleComponent;
//# sourceMappingURL=hotel-single.component.js.map