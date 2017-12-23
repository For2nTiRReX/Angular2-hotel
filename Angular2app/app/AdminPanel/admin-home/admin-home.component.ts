import { Component } from "@angular/core";
import {CookieService} from "../../services/service.barrel"
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "admin-home",
    templateUrl: "admin-home.component.html",
})
export class AdminHomeComponent{

    constructor(private _CookieService: CookieService, private router: Router) {}

    logOut() {
        if (confirm("Press a button!") == true) {
            this._CookieService.remove('auth_user');
            this.router.navigate(["/"]);
        }



    }

}