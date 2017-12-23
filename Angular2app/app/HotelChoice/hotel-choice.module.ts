import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { RouterModule } from '@angular/router';
import {HotelChoiceRoutingModule} from './hotel-choice-routing.module';

import {HotelService,CommentsService} from "../services/service.barrel";

import { ListHotelsComponent,HotelsArchiveComponent,HotelsFilterComponent} from "./HotelsArchive/hotel-archive.barrel";
import { HotelSingleComponent,HotelCommentsListComponent,HotelCommentsFormComponent } from "./HotelSingle/hotel-single.barrel";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule,
        HotelChoiceRoutingModule
    ],
    declarations: [
        ListHotelsComponent,
        HotelsArchiveComponent,
        HotelsFilterComponent,
        HotelSingleComponent,
        HotelCommentsListComponent,
        HotelCommentsFormComponent
    ],
    providers: [HotelService, CommentsService]
})
export class HotelChoiceModule {

}