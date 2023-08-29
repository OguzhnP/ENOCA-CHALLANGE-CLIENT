import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
