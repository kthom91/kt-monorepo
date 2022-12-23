import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { MaterialModule } from '../material.module';
import { SetlistCardComponent } from './setlist-card/setlist-card.component';

@NgModule({
  declarations: [HomeComponent, SetlistCardComponent],
  imports: [HomeRoutingModule, CommonModule, MaterialModule],
})
export class HomeModule {}
