import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { UserDataService } from "../services/service.barrel";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
    moduleId: module.id,
    selector: "my-login",
    templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {


    private loginForm: FormGroup;

    private formErrors: Object = {
        "userLogin": "",
        "userPassword": "",
    };

    private validationMessages: Object = {
        "userLogin": {
            "required": "Required field.",
            "minlength": "Field value length should be not less than 4 symbols.",
            "maxlength": "Field value length should be less than 16 symbols."
        },
        "userPassword": {
            "required": "Required field.",
            "minlength": "Field value length should be not less than 4 symbols.",
            "maxlength": "Field value length should be less than 35 symbols."
        },
    };

    /*private userLogin: string;
    private userPassword: string;*/
    private formErrorMessageBox: string;
    private messageBoxVisibility: boolean = false;

    constructor(public UserDataService: UserDataService, public router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.fb.group({
            "userLogin": ["", [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(16)
            ]],
            "userPassword": ["", [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(34)
            ]]
        });

        this.loginForm.valueChanges
            .subscribe(data => this.onValueChange(data));
    }

    onValueChange(data?: any) {
        if (!this.loginForm) return;

        this.messageBoxVisibility = false;
        let form = this.loginForm;

        for (let field in this.formErrors) {

            this.formErrors[field] = "";
            let control = form.get(field);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[field];

                for (let key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    }

    private login() {

        if(!this.loginForm.valid) {
            this.messageBoxVisibility = true;
            this.formErrorMessageBox = "Invalid form try to fix input values!";
            return;
        }


       this.UserDataService
            .loginUser(this.loginForm.get('userLogin').value, this.loginForm.get('userPassword').value)
            .then((data) => {

                if (data && data.hasOwnProperty("user_token")) {
                    this.router.navigate(['/admin']);
                    return true;
                }
                else {
                    this.messageBoxVisibility = true;
                    this.formErrorMessageBox = "User with this login data isn't exist!";
                    return false;
                }
            });
    }




}
