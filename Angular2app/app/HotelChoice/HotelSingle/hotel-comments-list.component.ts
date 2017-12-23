import { Component, OnInit} from "@angular/core";
import {CommentsService} from "../../services/service.barrel";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "hotel-comments-list",
    templateUrl: "hotel-comments-list.component.html",
})

export class HotelCommentsListComponent implements OnInit {

    comments: Comment[] = [];
    phrase: any = [];
    constructor(public _commentService: CommentsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {


        this.activatedRoute.params.forEach((params: Params) => {

            let id = +params["id"];
            this._commentService.getComments(id).then( (data) => {
                    console.log(data);
                    this.comments = data;
                });
        });

        this.getComments();

    }


    private getComments() {

        this._commentService.commentsObserver.subscribe(
            (value) => {
                value.then((data) => { this.comments = data; return; });
            }
        );

    }


}


