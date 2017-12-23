import { Component, OnInit  } from "@angular/core";
import {Hotel} from "../../models/Hotel.model";

@Component({
    moduleId: module.id,
    selector: "hotels-archive",
    templateUrl: "hotels-archive.component.html"
})

export class HotelsArchiveComponent implements OnInit {
    hotelsFiltered: Hotel[];

    ngOnInit() {

    }

    private hotelsUpdate(hotels) {
        /*console.log('hotelsUpdate archive event');
        this.hotelsFiltered = hotels;*/
    }

}