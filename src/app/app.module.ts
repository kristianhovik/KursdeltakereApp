import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
//import { appConfig, EnvironmentProviders, ROUTES } from './app.config';

import { AppComponent } from './app.component';
import { KursdeltakerInformasjonComponent } from './kursdeltaker-informasjon/kursdeltaker-informasjon.component';



@NgModule({
    declarations: [],
    imports: [
      
      BrowserModule,
      FormsModule,
      HttpClientModule,
      
      // ... andre moduler
    ],
      providers: [KursdeltakerInformasjonComponent],
     bootstrap: []
    })
      export class AppModule {}
