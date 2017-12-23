"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ProductsList = (function () {
    function ProductsList() {
        this._navItemSource = new BehaviorSubject_1.BehaviorSubject('');
        this.navItem$ = this._navItemSource.asObservable();
        this.Products = [{ id: 1, name: "product 1", price: 100, category: 'cat-1 cat-2' },
            { id: 2, name: "product 2", price: 200, category: 'cat-1' },
            { id: 3, name: "product 3", price: 300, category: 'cat-2' },
            { id: 4, name: "product 4", price: 400, category: 'cat-2' },
            { id: 5, name: "product 5", price: 500, category: 'cat-3' },
            { id: 6, name: "product 6", price: 600, category: 'cat-3' },
            { id: 7, name: "product 7", price: 700, category: 'cat-2' },
            { id: 8, name: "product 8", price: 800, category: 'cat-4' },
            { id: 9, name: "product 9", price: 900, category: 'cat-5 cat-1' },
            { id: 10, name: "product 10", price: 1000, category: 'cat-1' }];
        this.Categories = [
            { id: 0, name: 'All', slug: 'all' },
            { id: 1, name: 'Category 1', slug: 'cat-1' },
            { id: 2, name: 'Category 2', slug: 'cat-2' },
            { id: 3, name: 'Category 3', slug: 'cat-3' }
        ];
        /*public getObservableObj() {
         console.log('getObservableObj');
         return new Observable(observer => {
         observer.next(this.Products);
         });
         }*/
    }
    ProductsList.prototype.getList = function () {
        return this.Products;
    };
    ProductsList.prototype.getCategories = function () {
        return this.Categories;
    };
    ProductsList.prototype.addItem = function (name, price, category) {
        var lastId;
        var lastCatId;
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
        this.Products.push({ id: lastId, name: name, price: price, category: category });
        if (this.Categories.indexOf(category) == -1) {
            lastCatId = this.Categories.length ? this.Categories[this.Categories.length - 1].id + 1 : 1;
            this.Categories.push({ id: lastCatId, name: category, slug: category });
            this._navItemSource.next('categories');
        }
        console.log(lastId);
        this._navItemSource.next('products');
        return true;
    };
    ProductsList.prototype.deleteItem = function ($id) {
        console.log($id);
        console.log(this.Products);
        for (var i = 0; i < this.Products.length; i++) {
            if (this.Products[i].id === $id) {
                this.Products.splice(i, 1);
                break;
            }
        }
        this._navItemSource.next('products');
    };
    return ProductsList;
}());
ProductsList = __decorate([
    core_1.Injectable()
], ProductsList);
exports.ProductsList = ProductsList;
//# sourceMappingURL=groduct.list.service.js.map