"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var products_table_module_1 = require("./HomeTask2/products-table.module");
var hotel_choice_module_1 = require("./HotelChoice/hotel-choice.module");
var popup_module_1 = require("./Popups/popup.module");
var admin_module_1 = require("./AdminPanel/admin.module");
var app_routing_module_1 = require("./app-routing.module");
var home_component_1 = require("./Home/home.component");
var app_component_1 = require("./app.component");
var login_component_1 = require("./Login/login.component");
var service_barrel_1 = require("./services/service.barrel");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            products_table_module_1.ProductTableModule,
            app_routing_module_1.AppRoutingModule,
            popup_module_1.PopupModule,
            hotel_choice_module_1.HotelChoiceModule,
            forms_1.FormsModule,
            admin_module_1.AdminModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [service_barrel_1.UserDataService, service_barrel_1.AuthGuard, service_barrel_1.CookieService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map