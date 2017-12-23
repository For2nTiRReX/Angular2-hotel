import { Injectable } from "@angular/core";
import {Http, Response, URLSearchParams } from "@angular/http";
import { Hotel } from "../models/Hotel.model";
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class HotelService {
    private url = "http://tyrist.development/api/HotelsController.php";
    public hotelsCurrentObserver: Observable<any>;
    public serviceSubscriber = new BehaviorSubject<any>([]);
    public initHotelsPromise: Promise<any>;

    constructor(private http: Http) {

        this.initHotelsPromise = this.getHotels();
        this.serviceSubscriber.next(this.initHotelsPromise);
        this.hotelsCurrentObserver = this.serviceSubscriber.asObservable();
        /*this.hotelsCurrentObserver = new Observable(observer => {

            console.log(this.serviceSubscriber.asObservable());
            this.serviceSubscriber.next(this.getHotels());
        });*/
    }

    public getHotels(): Promise<Hotel[]> {

        let data = new URLSearchParams();
        data.append('get_data', 'all_hotels');
        let Hotels = this.http.post(this.url,data)
            .toPromise()
            .then((succes) => {
                if(succes.json().status != "error") {
                    return this.extractHotels(succes);
                }
                else {
                    console.log(succes.json().response);
                }
            })
            .catch(this.handleError);

        return Hotels;
    }

    private extractHotels(response: Response) {
        let res = JSON.parse(response.json().response);
        let Hotels: Hotel[] = [];
        for (let i = 0; i < res.length; i++) {
            Hotels.push(new Hotel(res[i].id, res[i].title, res[i].content,res[i].price,res[i].available,res[i].whereabout,res[i].country,res[i].thumbnail,res[i].comfort));
        }

        return Hotels;
    }

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

    /*public getCurrentStateHotels() {
        console.log(this.hotelsCurrentObserver);
        this.hotelsCurrentObserver = new Observable(observer => {
            observer.next(this.hotelsCurrent[0]);
        });
        return this.hotelsCurrentObserver;
    }*/
}