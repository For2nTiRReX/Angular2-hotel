import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { CookieService } from "./service.barrel";
import {Http, Response, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserDataService {


    // URL для перенаправления после авторизации

    private userTokens:Promise<Object>;
    private url = "http://tyrist.development/api/UserController.php";

    constructor(private http: Http, private  _cookieService :CookieService) {
        this.userTokens = this.getUsersTokensData();
    }

    private setUserCookie(user_id:string,user_token:string) {
        this._cookieService.putObject('auth_user', { 'user_id' : user_id, 'user_token' : user_token});
    }

    public loginUser(login:string,password:string): Promise<Comment[]> {

        let data = new URLSearchParams();
        let user:any;
        data.append('get_data', JSON.stringify({'auth_user' : {'user_login' : login, 'user_password' : password}}));

        let AuthUserData = this.http.post(this.url,data)
            .toPromise()
            .then((succes) => {
                console.log(succes);
                if(succes.json().status != "error") {
                    user = succes.json().response.auth_user;
                    this.setUserCookie(user.user_id, user.user_token);
                    return user;
                }
                else {
                    console.log(succes.json().response);
                }
            })
            .catch(this.handleError);

        return AuthUserData;
    }

    public getUsersTokens() {
        return this.userTokens;
    }

    public getUsersTokensData() {
        let data = new URLSearchParams();
        data.append('get_data', JSON.stringify({'get_tokens' : 'get_tokens'}));
        let UsersTokens = this.http.post(this.url,data)
            .toPromise()
            .then((succes) => {
                console.log(succes);
                if(succes.json().status != "error") {
                    return succes.json();
                }
                else {
                    console.log(succes.json().response);
                }
            })
            .catch(this.handleError);
        return UsersTokens;
    }


    private handleError(error: any): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        console.error(message);

        return Observable.throw(message);
    }

}
