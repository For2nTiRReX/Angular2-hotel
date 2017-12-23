import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {HomeComponent} from "./Home/home.component";
import {LoginComponent} from "./Login/login.component";


@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            component: HomeComponent
        },
        { path: "login", component: LoginComponent },

    ])],
    exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }