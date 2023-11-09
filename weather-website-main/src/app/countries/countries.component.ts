import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries() {
    this.apiService.getCountries().subscribe(
      (data: any) => {
        this.countries = data.data;
      },
      (error: any) => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  viewWeather(country: string) {
    // Navigate to the WeatherComponent with the selected country as a parameter
    this.router.navigate(['/weather', country]);
  }
}
