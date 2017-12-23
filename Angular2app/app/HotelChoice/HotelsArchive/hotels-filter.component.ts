import { Component, OnInit, EventEmitter, Output  } from "@angular/core";
import {HotelService} from "../../services/hotels-info.service";
import {Hotel} from "../../models/Hotel.model";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "hotels-filter",
    templateUrl: "hotels-filter.component.html",
})

export class HotelsFilterComponent implements OnInit {

    hotels: Hotel[];
    filtersForm: FormGroup;
    countryFilterValues:[string];
    comfortFilterValues:[string];
    selectedComfort: string = "Все";
    selectedCountry: string = "Все";
    //counter:number = 1;

    @Output() hotelsUpdated: EventEmitter<any> = new EventEmitter();
    constructor(public _hotelService: HotelService, private fb: FormBuilder) {

    }

    ngOnInit() {
        this.countryFilterValues = ['Все'];
        this.comfortFilterValues = ['Все'];
        this.initFormFilters();

        this._hotelService.initHotelsPromise.then((data) => {
            this.hotels = data;
            this.fillFiltersValues(data);
            return;
        });

        this.filtersForm.valueChanges.subscribe((filterValues) => {
            console.log(filterValues);
            this.getFilteredHotels(filterValues);
        });
    }
    private fillFiltersValues(data) {
        let countrys = [];
        let comfort = [];
        let maxPrice: number = 0;
        data.forEach(function (item) {
            countrys.push(item.country);
            comfort.push(item.comfort);
            maxPrice = item.price > maxPrice ? item.price : maxPrice;
        });
        countrys = countrys.filter((v, i, a) => a.indexOf(v) === i);
        comfort = comfort.filter((v, i, a) => a.indexOf(v) === i);
        countrys.unshift('Все');
        comfort.unshift('Все');
        this.countryFilterValues = countrys;
        this.comfortFilterValues = comfort;
        this.filtersForm.controls['maxPrice'].setValue(maxPrice);
    }

    private initFormFilters() {
        this.filtersForm = this.fb.group({
            selectedComfort: 'Все',
            selectedCountry: 'Все',
            minPrice: 0,
            maxPrice: 100000,
            keyWord: ""
        });
    }

    private getFilteredHotels(filterValues) {

        let hotelsFiltered = this.hotels;

        if  (!this.hotels || typeof filterValues.selectedComfort == 'undefined' || typeof filterValues.selectedCountry == 'undefined' || typeof filterValues.keyWord == 'undefined'|| typeof filterValues.maxPrice == 'undefined') {console.log(filterValues); console.log('error form object'); return;}

        if (filterValues.selectedComfort != "Все") {
            hotelsFiltered = hotelsFiltered.filter(this.filterByComfort,filterValues);
        }
        if (filterValues.selectedCountry != "Все") {
            hotelsFiltered = hotelsFiltered.filter(this.filterByCountry,filterValues);
        }
        if (filterValues.keyWord.length > 2) {
            hotelsFiltered = hotelsFiltered.filter(this.filterByKeyWord,filterValues);
        }
        hotelsFiltered = hotelsFiltered.filter(this.filterByPrice,filterValues);

        this._hotelService.serviceSubscriber.next(Promise.resolve(hotelsFiltered));
        console.log(hotelsFiltered);

        return;
    }
    private filterByCountry(value) {
        return value.country == this.selectedCountry;
    }
    private filterByComfort(value) {
        return value.comfort == this.selectedComfort;
    }
    private filterByPrice(value) {
        return this.maxPrice >= value.price && value.price >= this.minPrice;
    }
    private filterByKeyWord(value) {
        let regExp = new RegExp(this.keyWord,"i");
        return value.title.toLowerCase().search(regExp) != -1 || value.content.toLowerCase().search(regExp) != -1;
    }
}