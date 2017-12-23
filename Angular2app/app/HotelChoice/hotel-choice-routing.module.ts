import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HotelsArchiveComponent} from "./HotelsArchive/hotel-archive.barrel";
import {HotelSingleComponent} from "./HotelSingle/hotel-single.barrel";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "hotels/archive",
                component: HotelsArchiveComponent,
            },
            { path: "hotels/:id", component: HotelSingleComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HotelChoiceRoutingModule { }