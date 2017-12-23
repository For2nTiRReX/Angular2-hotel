"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Comment_model_1 = require("../models/Comment.model");
require("rxjs/add/operator/toPromise");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
        this.url = "http://tyrist.development/api/CommentsController.php";
        this.commentsServiceSubscriber = new BehaviorSubject_1.BehaviorSubject([]);
    }
    CommentsService.prototype.getComments = function (id) {
        var _this = this;
        var data = new http_1.URLSearchParams();
        data.append('get_data', JSON.stringify({ 'hotel_id': id, 'amount': 200 }));
        var Comments = this.http.post(this.url, data)
            .toPromise()
            .then(function (succes) {
            console.log(succes);
            if (succes.json().status != "error") {
                return _this.extractComments(succes);
            }
            else {
                console.log(succes.json().response);
            }
        })
            .catch(this.handleError);
        this.commentsServiceSubscriber.next(Comments);
        this.commentsObserver = this.commentsServiceSubscriber.asObservable();
        console.log(this.commentsServiceSubscriber);
        console.log(this.commentsObserver);
        return Comments;
    };
    CommentsService.prototype.addComment = function (comment) {
        var data = new http_1.URLSearchParams();
        data.append('insert_data', JSON.stringify(comment));
        var response = this.http.post(this.url, data)
            .toPromise()
            .then(function (succes) {
            console.log(succes);
            if (succes.json().status != "error") {
                return "Success!";
            }
            else {
                return "Failed!";
            }
        })
            .catch(this.handleError);
        return response;
    };
    CommentsService.prototype.extractComments = function (response) {
        var res = response.json().response;
        var Comments = [];
        for (var i = 0; i < res.length; i++) {
            Comments.push(new Comment_model_1.Comment(res[i].id, res[i].hotel_id, res[i].text, res[i].author, res[i].date, res[i].approved));
        }
        return Comments;
    };
    CommentsService.prototype.handleError = function (error) {
        var message = "";
        if (error instanceof http_1.Response) {
            var errorData = error.json().error || JSON.stringify(error.json());
            message = error.status + " - " + (error.statusText || '') + " " + errorData;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable_1.Observable.throw(message);
    };
    return CommentsService;
}());
CommentsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map