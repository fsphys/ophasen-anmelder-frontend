import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {HeaderComponent} from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
