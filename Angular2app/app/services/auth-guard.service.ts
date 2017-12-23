import { Injectable } from "@angular/core";
import { CanActivate ,Router } from "@angular/router";
import { CookieService,UserDataService } from "./service.barrel";

/*
    Guard - механизм для выполнения проверок перед активацией и деактивацией маршрута

    CanActivate - Определяет возможность активации маршрута
    CanActivateChild - Определяет возможность активации дочерних маршрутов текущего маршрута
    CanDeactivate - Определяет можно ли уйти с текущего маршрута
    CanLoad - Определяет может ли модуль загрузиться с использованием lazy loading

    Установка объектов Guard происходит при настройке маршрутизации.
    В данном примере Guard используется в файле /admin/admin-routing.module.ts
    Также, для AuthGuard необходимо установить провайдер (в данном примере провайдер установлен в app.module.ts)
*/
@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private  _cookieService :CookieService, private _userDataService: UserDataService, private router: Router) {}

    private compareToken(token) {
        let user_cookie_token = JSON.parse(this._cookieService.get('auth_user')).user_token;
        return token.some(function(arrVal) {
            return user_cookie_token === arrVal.token;
        });
    }

    canActivate(): Promise<boolean> {

        if (!this._cookieService.get('auth_user')) {
            console.log("User cookie doesn't exist!");
            this.router.navigate(['/login']);
        }

        return  this._userDataService.getUsersTokensData()
                .then((data) => {
                    console.log(data.response.users_tokens);
                    console.log(JSON.parse(this._cookieService.get('auth_user')).user_token);
                    if(data.response.users_tokens.length > 0) {
                        if ( this.compareToken(data.response.users_tokens )) {
                            console.log("User exist!");
                            return true;
                        }
                        else {
                            console.error("User cookie token doesn't not mach any db token!");
                            this.router.navigate(['/login']);
                            return false;
                        }
                    }
                    else {
                        console.error("Api returned 0 tokens!");
                        this.router.navigate(['/login']);
                       return false;
                    }
                });

    }
}
