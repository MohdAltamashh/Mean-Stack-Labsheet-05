import {Component} from '@angular/core';import {RouterLink,RouterOutlet} from '@angular/router';
@Component({selector:'app-admin-layout',standalone:true,imports:[RouterLink,RouterOutlet],template:`<div class="admin"><aside><h3>Admin Menu</h3><p><a routerLink="users">Users</a></p><p><a routerLink="orders">Orders</a></p><p><a routerLink="reports">Reports</a></p></aside><main><router-outlet></router-outlet></main></div>`,styles:[`.admin{display:flex;gap:30px}.admin aside{min-width:150px;background:#eef2f8;padding:18px}`]})
export class AdminLayoutComponent{}
