import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;

  constructor( private weatherService: WeatherService ) {}

  ngOnInit() {}

  getWeather(cityName: string, countryCode: string) {

    this.weatherService.getWeather(cityName, countryCode)
        .subscribe(

          res => {

            console.log(res);
            this.weather = res;
          },
          err => console.log(err)
        );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {

    if (cityName.value && countryCode.value) {

      this.getWeather(cityName.value, countryCode.value);
      console.log(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    }else {

      alert('¡Please. Type some values!');
    }

    cityName.focus();

    // Retornar para que no recargue el formulario
    return false;
  }
}
