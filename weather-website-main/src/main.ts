// // import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
// import { AppComponent } from './app/app.component';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
import { appConfig } from './app/app.config';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { CountriesComponent } from './app/countries/countries.component'; // import the component

platformBrowserDynamic().bootstrapModule(AppModule) // add the component to the bootstrap array
  .catch((err) => console.error(err));