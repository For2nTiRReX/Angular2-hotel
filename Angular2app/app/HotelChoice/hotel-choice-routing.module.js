"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hotel_archive_barrel_1 = require("./HotelsArchive/hotel-archive.barrel");
var hotel_single_barrel_1 = require("./HotelSingle/hotel-single.barrel");
var HotelChoiceRoutingModule = (function () {
    function HotelChoiceRoutingModule() {
    }
    return HotelChoiceRoutingModule;
}());
HotelChoiceRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                {
                    path: "hotels/archive",
                    component: hotel_archive_barrel_1.HotelsArchiveComponent,
                },
                { path: "hotels/:id", component: hotel_single_barrel_1.HotelSingleComponent },
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], HotelChoiceRoutingModule);
exports.HotelChoiceRoutingModule = HotelChoiceRoutingModule;
//# sourceMappingURL=hotel-choice-routing.module.js.map