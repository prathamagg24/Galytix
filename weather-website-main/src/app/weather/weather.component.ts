import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  country: string | null = null;
  weatherData: any | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country = params['country'];
      this.fetchWeather();
    });
  }

  fetchWeather() {
    if (this.country) {
      this.apiService.getWeatherByCountry(this.country).subscribe(
        (weatherData: any) => {
          this.weatherData = weatherData;
        },
        (error: any) => {
          console.error(`Error fetching weather for ${this.country}:`, error);
        }
      );
    }
  }
}