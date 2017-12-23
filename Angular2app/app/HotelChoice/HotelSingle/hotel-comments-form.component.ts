import { Component, OnInit} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {CommentsService} from "../../services/service.barrel";
import {Comment} from "../../models/models.barrel";
import {ActivatedRoute} from "@angular/router"

@Component({
    moduleId: module.id,
    selector: "hotel-comments-form",
    templateUrl: "hotel-comments-form.component.html",
})

export class HotelCommentsFormComponent implements OnInit {

    commentForm: FormGroup;
    //submTry: boolean = false;
    //commentAuthor: string = "";
    //commentText: string = "";

    formErrors = {
        "name": "",
        "comment": "",
    };

    validationMessages = {
        "name": {
            "required": "Required field.",
            "minlength": "Field value length should be not less than 4 symbol.",
            "maxlength": "Field value length should be less than 30 symbol."
        },
        "comment": {
            "required": "Required field.",
            "minlength": "Field value length should be not less than 8 symbol.",
            "maxlength": "Field value length should be less than 400 symbol."
        },
    };

    constructor(private fb: FormBuilder, private _commentsService: CommentsService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {

        this.commentForm = this.fb.group({
            "name": ["", [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(30)
            ]],
            "comment": ["", [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(400)
            ]]
        });

        this.commentForm.valueChanges
            .subscribe(data => this.onValueChange(data));

        this.onValueChange();
    }

    onValueChange(data?: any) {
        if (!this.commentForm) return;
        //this.submTry = false;
        let form = this.commentForm;


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

    getCurrentDate() {
        var today = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var dd = today.getDate();
        var mm = today.getMonth(); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy + '-' + monthNames[mm] + '-' + dd ;
    }

    addComment() {
       // this.submTry = true;

        if (this.commentForm.valid) {
            let hotelId = this.activatedRoute.snapshot.params["id"];
            let newComment = new Comment(null,hotelId,this.commentForm.get('comment').value,this.commentForm.get('name').value,this.getCurrentDate(), 1);
            this._commentsService.addComment(newComment).then((promData)=> {
                this._commentsService.getComments(hotelId);
                this.commentForm.reset();
                return;
            });
        }

    }
}


