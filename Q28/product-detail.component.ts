import {Component} from '@angular/core';import {ActivatedRoute} from '@angular/router';
@Component({selector:'app-product-detail',standalone:true,template:`<h2>Product Detail</h2><p>Selected product ID: {{id}}</p>`})
export class ProductDetailComponent {id='';constructor(route:ActivatedRoute){this.id=route.snapshot.paramMap.get('id')??'';}}
