import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OrderFormComponent} from  "./order-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        OrderFormComponent
    ],
    exports: [
        OrderFormComponent
    ]
})
export class PopupModule {

}