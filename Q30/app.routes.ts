import {Routes} from '@angular/router';import {DashboardComponent} from './dashboard.component';import {ProfileComponent,SettingsComponent} from './dashboard-child-pages';
export const routes:Routes=[{path:'dashboard',component:DashboardComponent,children:[{path:'profile',component:ProfileComponent},{path:'settings',component:SettingsComponent},{path:'',redirectTo:'profile',pathMatch:'full'}]}];
