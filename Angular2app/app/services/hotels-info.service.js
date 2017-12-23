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
var Hotel_model_1 = require("../models/Hotel.model");
require("rxjs/add/operator/toPromise");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var HotelService = (function () {
    function HotelService(http) {
        this.http = http;
        this.url = "http://tyrist.development/api/HotelsController.php";
        this.serviceSubscriber = new BehaviorSubject_1.BehaviorSubject([]);
        this.initHotelsPromise = this.getHotels();
        this.serviceSubscriber.next(this.initHotelsPromise);
        this.hotelsCurrentObserver = this.serviceSubscriber.asObservable();
        /*this.hotelsCurrentObserver = new Observable(observer => {

            console.log(this.serviceSubscriber.asObservable());
            this.serviceSubscriber.next(this.getHotels());
        });*/
    }
    HotelService.prototype.getHotels = function () {
        var _this = this;
        var data = new http_1.URLSearchParams();
        data.append('get_data', 'all_hotels');
        var Hotels = this.http.post(this.url, data)
            .toPromise()
            .then(function (succes) {
            if (succes.json().status != "error") {
                return _this.extractHotels(succes);
            }
            else {
                console.log(succes.json().response);
            }
        })
            .catch(this.handleError);
        return Hotels;
    };
    HotelService.prototype.extractHotels = function (response) {
        var res = JSON.parse(response.json().response);
        var Hotels = [];
        for (var i = 0; i < res.length; i++) {
            Hotels.push(new Hotel_model_1.Hotel(res[i].id, res[i].title, res[i].content, res[i].price, res[i].available, res[i].whereabout, res[i].country, res[i].thumbnail, res[i].comfort));
        }
        return Hotels;
    };
    // public getHotel(id: string): Promise<Hotel> {
    //     let Hotel = this.http.get(this.url + "/" + id)
    //         .toPromise()
    //         .then(this.extractHotel)
    //         .catch(this.handleError);
    //
    //     return Hotel;
    // }
    // private extractHotel(response: Response) {
    //     let res = JSON.parse(response.json().response);
    //     let Hotel = new Hotel(res.id, res.title, res.content,res.price,res.available,res.whereabout,res.country,res.thumbnail,res.comfort);
    //     return Hotel;
    // }
    HotelService.prototype.handleError = function (error) {
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
    return HotelService;
}());
HotelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotels-info.service.js.map