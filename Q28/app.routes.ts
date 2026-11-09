import {Routes} from '@angular/router';import {ProductListComponent} from './product-list.component';import {ProductDetailComponent} from './product-detail.component';
export const routes:Routes=[{path:'products',component:ProductListComponent},{path:'products/:id',component:ProductDetailComponent}];
