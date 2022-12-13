import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { KtApiService } from './kt-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule
  ],
  providers: [KtApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
