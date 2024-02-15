import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule } from '@angular/forms';
//import { appConfig, EnvironmentProviders, ROUTES } from './app.config';

import { AppComponent } from './app.component';
import { KursdeltakerInformasjonComponent } from './kursdeltaker-informasjon/kursdeltaker-informasjon.component';
import { RedigerDeltakerComponent } from './rediger-deltaker/rediger-deltaker.component';




@NgModule({
    declarations: [],
    imports: [
      
      BrowserModule,
      FormsModule,
      HttpClientModule,
    ],
    exports: [RouterModule],
      providers: [KursdeltakerInformasjonComponent],
     bootstrap: []
    })
      export class AppModule {}
      export class AppRoutingModule {}
