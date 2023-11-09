import { Routes } from '@angular/router';

import { CountriesComponent } from './countries/countries.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'weather/:country', component: WeatherComponent },
];
