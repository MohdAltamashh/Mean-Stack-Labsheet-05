import {Component} from '@angular/core';import {RouterLink,RouterOutlet} from '@angular/router';
@Component({selector:'app-home',standalone:true,template:`<h2>Home</h2><p>Welcome to the navigation website.</p>`}) export class HomeComponent{}
@Component({selector:'app-about',standalone:true,template:`<h2>About</h2><p>About this demo site.</p>`}) export class AboutComponent{}
@Component({selector:'app-products',standalone:true,imports:[RouterLink],template:`<h2>Products</h2><a routerLink="/products/1">Product 1</a> | <a routerLink="/products/2">Product 2</a>`}) export class ProductListComponent{}
@Component({selector:'app-product-detail',standalone:true,template:`<h2>Product detail route works.</h2>`}) export class ProductDetailComponent{}
@Component({selector:'app-dashboard',standalone:true,imports:[RouterOutlet,RouterLink],template:`<h2>Dashboard</h2><a routerLink="profile">Profile</a> | <a routerLink="settings">Settings</a><router-outlet></router-outlet>`}) export class DashboardComponent{}
@Component({selector:'app-profile',standalone:true,template:`<p>Profile child route</p>`}) export class ProfileComponent{}
@Component({selector:'app-settings',standalone:true,template:`<p>Settings child route</p>`}) export class SettingsComponent{}
@Component({selector:'app-404',standalone:true,template:`<h2>404 - Page not found</h2>`}) export class NotFoundComponent{}
