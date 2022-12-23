import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const appRoutes: Route[] = [
  { 
    path: '',
    component: HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }