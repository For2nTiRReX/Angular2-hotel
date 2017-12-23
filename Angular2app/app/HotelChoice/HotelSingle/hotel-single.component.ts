import { Component, OnInit} from "@angular/core";
import {Hotel} from "../../models/Hotel.model";
import { ActivatedRoute, Params } from "@angular/router";
import {HotelService} from "../../services/hotels-info.service";

@Component({
    moduleId: module.id,
    selector: "hotel-single",
    templateUrl: "hotel-single.component.html",
})

export class HotelSingleComponent implements OnInit {

    hotel: Hotel;
    selectedHotel: number;
    counterRaiting = Array;

    constructor( private activatedRoute: ActivatedRoute, private _hotelService: HotelService) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            this._hotelService.initHotelsPromise.then((data) => {
                this.hotel = data.filter(this.filterByID, id)[0];
            });
        });
    }





    private filterByID(value) {
        return value.id == this;
    }
}


