import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [],
  imports: [AppComponent, CountriesComponent, WeatherComponent, BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}