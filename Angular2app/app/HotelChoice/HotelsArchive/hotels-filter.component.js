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
var forms_1 = require("@angular/forms");
var HotelsFilterComponent = (function () {
    function HotelsFilterComponent(_hotelService, fb) {
        this._hotelService = _hotelService;
        this.fb = fb;
        this.selectedComfort = "Все";
        this.selectedCountry = "Все";
        //counter:number = 1;
        this.hotelsUpdated = new core_1.EventEmitter();
    }
    HotelsFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryFilterValues = ['Все'];
        this.comfortFilterValues = ['Все'];
        this.initFormFilters();
        this._hotelService.initHotelsPromise.then(function (data) {
            _this.hotels = data;
            _this.fillFiltersValues(data);
            return;
        });
        this.filtersForm.valueChanges.subscribe(function (filterValues) {
            console.log(filterValues);
            _this.getFilteredHotels(filterValues);
        });
    };
    HotelsFilterComponent.prototype.fillFiltersValues = function (data) {
        var countrys = [];
        var comfort = [];
        var maxPrice = 0;
        data.forEach(function (item) {
            countrys.push(item.country);
            comfort.push(item.comfort);
            maxPrice = item.price > maxPrice ? item.price : maxPrice;
        });
        countrys = countrys.filter(function (v, i, a) { return a.indexOf(v) === i; });
        comfort = comfort.filter(function (v, i, a) { return a.indexOf(v) === i; });
        countrys.unshift('Все');
        comfort.unshift('Все');
        this.countryFilterValues = countrys;
        this.comfortFilterValues = comfort;
        this.filtersForm.controls['maxPrice'].setValue(maxPrice);
    };
    HotelsFilterComponent.prototype.initFormFilters = function () {
        this.filtersForm = this.fb.group({
            selectedComfort: 'Все',
            selectedCountry: 'Все',
            minPrice: 0,
            maxPrice: 100000,
            keyWord: ""
        });
    };
    HotelsFilterComponent.prototype.getFilteredHotels = function (filterValues) {
        var hotelsFiltered = this.hotels;
        if (!this.hotels || typeof filterValues.selectedComfort == 'undefined' || typeof filterValues.selectedCountry == 'undefined' || typeof filterValues.keyWord == 'undefined' || typeof filterValues.maxPrice == 'undefined') {
            console.log(filterValues);
            console.log('error form object');
            return;
        }
        if (filterValues.selectedComfort != "Все") {
            hotelsFiltered = hotelsFiltered.filter(this.filterByComfort, filterValues);
        }
        if (filterValues.selectedCountry != "Все") {
            hotelsFiltered = hotelsFiltered.filter(this.filterByCountry, filterValues);
        }
        if (filterValues.keyWord.length > 2) {
            hotelsFiltered = hotelsFiltered.filter(this.filterByKeyWord, filterValues);
        }
        hotelsFiltered = hotelsFiltered.filter(this.filterByPrice, filterValues);
        this._hotelService.serviceSubscriber.next(Promise.resolve(hotelsFiltered));
        console.log(hotelsFiltered);
        return;
    };
    HotelsFilterComponent.prototype.filterByCountry = function (value) {
        return value.country == this.selectedCountry;
    };
    HotelsFilterComponent.prototype.filterByComfort = function (value) {
        return value.comfort == this.selectedComfort;
    };
    HotelsFilterComponent.prototype.filterByPrice = function (value) {
        return this.maxPrice >= value.price && value.price >= this.minPrice;
    };
    HotelsFilterComponent.prototype.filterByKeyWord = function (value) {
        var regExp = new RegExp(this.keyWord, "i");
        return value.title.toLowerCase().search(regExp) != -1 || value.content.toLowerCase().search(regExp) != -1;
    };
    return HotelsFilterComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HotelsFilterComponent.prototype, "hotelsUpdated", void 0);
HotelsFilterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "hotels-filter",
        templateUrl: "hotels-filter.component.html",
    }),
    __metadata("design:paramtypes", [hotels_info_service_1.HotelService, forms_1.FormBuilder])
], HotelsFilterComponent);
exports.HotelsFilterComponent = HotelsFilterComponent;
//# sourceMappingURL=hotels-filter.component.js.map