import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ProductTableModule } from "./HomeTask2/products-table.module";
import { HotelChoiceModule } from "./HotelChoice/hotel-choice.module"
import { PopupModule } from "./Popups/popup.module";
import { AdminModule } from "./AdminPanel/admin.module";

import { AppRoutingModule } from "./app-routing.module";


import { HomeComponent } from "./Home/home.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from  "./Login/login.component";

import {UserDataService,AuthGuard,CookieService} from "./services/service.barrel"

@NgModule({
    imports: [
        BrowserModule,
        ProductTableModule,
        AppRoutingModule,
        PopupModule,
        HotelChoiceModule,
        FormsModule,
        AdminModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
    ],
    bootstrap: [AppComponent],
    providers: [UserDataService,AuthGuard,CookieService]
})
export class AppModule { }
