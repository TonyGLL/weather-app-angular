import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '28326a0308d330e56dc08cec6f8db032';
  URI: string = '';

  constructor( private http: HttpClient ) {

    this.URI = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, countryCoude: string): Observable<any> {

    return this.http.get(`${this.URI}${cityName},${countryCoude}`);
  }
}
