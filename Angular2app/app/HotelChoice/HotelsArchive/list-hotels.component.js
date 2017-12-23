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
var hotels_info_service_1 = require("../../services/hotels-info.service");
var ListHotelsComponent = (function () {
    function ListHotelsComponent(_hotelService) {
        this._hotelService = _hotelService;
        this.counterRaiting = Array;
    }
    ListHotelsComponent.prototype.ngOnInit = function () {
        this.getHotels();
    };
    ListHotelsComponent.prototype.getHotels = function () {
        var _this = this;
        this._hotelService.hotelsCurrentObserver.subscribe(function (value) {
            value.then(function (data) { _this.hotels = data; return; });
        });
    };
    return ListHotelsComponent;
}());
ListHotelsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list-hotels",
        templateUrl: "list-hotels.component.html",
    }),
    __metadata("design:paramtypes", [hotels_info_service_1.HotelService])
], ListHotelsComponent);
exports.ListHotelsComponent = ListHotelsComponent;
//# sourceMappingURL=list-hotels.component.js.map