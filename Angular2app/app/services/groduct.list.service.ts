import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductsList {


    private _navItemSource = new BehaviorSubject<string>('');
    navItem$ = this._navItemSource.asObservable();

    private Products: any = [{ id: 1, name : "product 1", price : 100, category: 'cat-1 cat-2' },
        { id: 2, name : "product 2", price : 200, category: 'cat-1' },
        { id: 3, name : "product 3", price : 300, category: 'cat-2' },
        { id: 4, name : "product 4", price : 400, category: 'cat-2' },
        { id: 5, name : "product 5", price : 500, category: 'cat-3' },
        { id: 6, name : "product 6", price : 600, category: 'cat-3' },
        { id: 7, name : "product 7", price : 700, category: 'cat-2' },
        { id: 8, name : "product 8", price : 800, category: 'cat-4' },
        { id: 9, name : "product 9", price : 900, category: 'cat-5 cat-1' },
        { id: 10, name : "product 10", price : 1000, category: 'cat-1' }];

    private Categories: any = [
        {id: 0, name: 'All',slug: 'all'},
        {id: 1, name: 'Category 1',slug: 'cat-1'},
        {id: 2, name: 'Category 2',slug: 'cat-2'},
        {id: 3, name: 'Category 3',slug: 'cat-3'}];


    public getList() {
        return this.Products;
    }

    public getCategories() {
        return this.Categories;
    }

    public addItem(name:string,price:number,category:string) {

        let lastId: number;
        let lastCatId: number;

        if (!name) {
            console.log('Name can\'t be blank');
            return;
        }
        if (!price) {
            console.log('Category can\'t be blank');
            return;
        }
        if (!category) {
            console.log('Price should be > 0');
            return;
        }


        lastId = this.Products.length ? this.Products[this.Products.length - 1].id + 1 : 0;
        this.Products.push({id: lastId, name: name, price: price, category: category});
        if (this.Categories.indexOf(category) == -1) {
            lastCatId = this.Categories.length ? this.Categories[this.Categories.length - 1].id + 1 : 1;
            this.Categories.push({id: lastCatId, name: category,slug: category});
            this._navItemSource.next('categories');
        }
        console.log(lastId);
        this._navItemSource.next('products');
        return true;
    }

    public deleteItem($id) {
        console.log($id);
        console.log(this.Products);
        for(let i = 0; i < this.Products.length; i++) {
            if (this.Products[i].id === $id) {
                this.Products.splice(i, 1);
                break;
            }
        }
        this._navItemSource.next('products');
    }
    /*public getObservableObj() {
     console.log('getObservableObj');
     return new Observable(observer => {
     observer.next(this.Products);
     });
     }*/

}