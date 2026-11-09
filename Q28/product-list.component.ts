import {Component} from '@angular/core';import {RouterLink} from '@angular/router';
@Component({selector:'app-product-list',standalone:true,imports:[RouterLink],template:`<h2>Products</h2><p><a routerLink="/products/101">Laptop</a></p><p><a routerLink="/products/102">Phone</a></p>`})
export class ProductListComponent {}
