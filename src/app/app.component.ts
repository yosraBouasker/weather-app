import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  weatherDesc='';
  name = '';
  temperature = '';
  humidity = '';
  windSpeed = '';
  city = '';

  constructor(private apiService:ApiService){}

  btnClick(text){
      this.city = text;
      AppComponent.prototype.city = text;
      this.apiService.getData().subscribe( (data:any)=>{
      //console.log(data);
      //console.log(data.weather[0].description);
      this.weatherDesc = data.weather[0].description;
      //this.name = data.main.name; 
      this.temperature = Math.round(data.main.temp-273.15);
      this.humidity = data.main.humidity;
      this.windSpeed = data.wind.speed;
    

    })
  }
}
