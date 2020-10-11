import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GeoLocationService} from './geo-location.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from './data.service';

import 'hammer.js';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GeoLocationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
