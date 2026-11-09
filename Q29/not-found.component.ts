import {Component} from '@angular/core';import {RouterLink} from '@angular/router';
@Component({selector:'app-not-found',standalone:true,imports:[RouterLink],template:`<h1>404 - Page Not Found</h1><a routerLink="/">Return Home</a>`}) export class NotFoundComponent{}
