import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    provideHttpClient(withInterceptors([InjectSessionInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
