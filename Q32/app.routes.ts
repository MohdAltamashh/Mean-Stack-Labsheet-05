import {Routes} from '@angular/router';import {AdminLayoutComponent} from './admin-layout.component';import {UsersComponent,OrdersComponent,ReportsComponent} from './admin-pages';
export const routes:Routes=[{path:'admin',component:AdminLayoutComponent,children:[{path:'users',component:UsersComponent},{path:'orders',component:OrdersComponent},{path:'reports',component:ReportsComponent}]}];
