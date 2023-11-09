import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private countriesUrl = 'https://countriesnow.space/api/v0.1/countries';
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '794ee95e63c5a32aaf88cd813fa2e425'; // Replace with your actual OpenWeatherMap API key


  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get(this.countriesUrl);
  }


  getWeatherByCountry(country: string): Observable<any> {
    const apiUrl = `${this.weatherUrl}?q=${country}&APPID=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
  

}
