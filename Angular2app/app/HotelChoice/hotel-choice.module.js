"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var hotel_choice_routing_module_1 = require("./hotel-choice-routing.module");
var service_barrel_1 = require("../services/service.barrel");
var hotel_archive_barrel_1 = require("./HotelsArchive/hotel-archive.barrel");
var hotel_single_barrel_1 = require("./HotelSingle/hotel-single.barrel");
var HotelChoiceModule = (function () {
    function HotelChoiceModule() {
    }
    return HotelChoiceModule;
}());
HotelChoiceModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            hotel_choice_routing_module_1.HotelChoiceRoutingModule
        ],
        declarations: [
            hotel_archive_barrel_1.ListHotelsComponent,
            hotel_archive_barrel_1.HotelsArchiveComponent,
            hotel_archive_barrel_1.HotelsFilterComponent,
            hotel_single_barrel_1.HotelSingleComponent,
            hotel_single_barrel_1.HotelCommentsListComponent,
            hotel_single_barrel_1.HotelCommentsFormComponent
        ],
        providers: [service_barrel_1.HotelService, service_barrel_1.CommentsService]
    })
], HotelChoiceModule);
exports.HotelChoiceModule = HotelChoiceModule;
//# sourceMappingURL=hotel-choice.module.js.map