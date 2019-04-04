import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  city= '';
  constructor(private http: HttpClient ) { }

  getData(){
    this.city=AppComponent.prototype.city;
    console.log(this.city);
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&APPID=36dce8e553760159387a4bf979d0667f')
  }
}

