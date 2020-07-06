import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {
  RouterModule,
  Routes
} from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { WeatherComponent } from './weather/weather.component';
import { TempConvert } from './pipes/temp.convert';
import { MilesConvert } from './pipes/miles.convert';

const routes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesComponent },
  { path: 'weather/:capital/:code', component: WeatherComponent },
];


import { WEATHER_PROVIDERS } from './weather.service';

import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    WeatherComponent,
    TempConvert,
    MilesConvert
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxSpinnerModule
  ],
  providers: [
    WEATHER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




