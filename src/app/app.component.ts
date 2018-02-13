import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cityName = '';
  cityHumid = '';
  cityWeather = '';
  cityCountry = '';
  cityTemp = '';
  cityTempMin = '';
  cityTempMax = '';
  weatherIcon = 'http://openweathermap.org/img/w/';
  icon;


  constructor(private http: Http) { }

  searchCity() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=2ca89b5dc188a438bdfbc2d44baf6a14&q=' + this.cityName + '&units=imperial')
      .subscribe(
      (res: Response) => {
        const weatherCity = res.json();
        console.log(weatherCity);
        this.cityHumid = weatherCity.main.humidity;
        this.cityWeather = weatherCity.weather[0]['description'];
        this.cityCountry = weatherCity.sys.country;
        this.cityTemp = weatherCity.main.temp;
        this.cityTempMin = weatherCity.main.temp_min;
        this.cityTempMax = weatherCity.main.temp_max;
        this.icon = weatherCity.weather[0]['icon'];


      }
      );
  }

}
