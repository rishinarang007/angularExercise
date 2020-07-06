import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class WeatherService {

  constructor(public http: HttpClient) {}

  displayCountries(): Observable<any> {
    const queryURL: any = `https://restcountries.eu/rest/v2/all`;
    return this.http.request('GET', queryURL);
  }

  displayWeather(capital: string, code: string): Observable<any> {
    const query = `${capital},${code}`;
    const queryURL: any = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=794ee95e63c5a32aaf88cd813fa2e425`;
    return this.http.request('GET', queryURL);
  }

}

export const WEATHER_PROVIDERS: Array<any> = [
    { provide: WeatherService, useClass: WeatherService }
  ];
