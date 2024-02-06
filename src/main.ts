import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { routeConfig } from './app/routes';



bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routeConfig),
    provideProtractorTestingSupport(),
    routeConfig
  ]
}
).catch(err => console.error(err));
  
