import {Routes} from '@angular/router';import {HomeComponent} from './home.component';import {NotFoundComponent} from './not-found.component';
export const routes:Routes=[{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'**',component:NotFoundComponent}];
