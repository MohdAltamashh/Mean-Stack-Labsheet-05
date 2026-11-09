import {Component} from '@angular/core';import {RouterLink,RouterOutlet} from '@angular/router';
@Component({selector:'app-dashboard',standalone:true,imports:[RouterLink,RouterOutlet],template:`<h2>Dashboard</h2><nav><a routerLink="profile">Profile</a> | <a routerLink="settings">Settings</a></nav><router-outlet></router-outlet>`})
export class DashboardComponent{}
