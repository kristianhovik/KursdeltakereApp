import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KursdeltakerInformasjonComponent } from './kursdeltaker-informasjon/kursdeltaker-informasjon.component';
import { RedigerDeltakerComponent } from './rediger-deltaker/rediger-deltaker.component';



export const routeConfig: Routes = [ 
    {
      path: '',
      component: AppComponent,
      title: 'Home page'
    },
    {
      path: '/kursdeltaker-informasjon',
      component: KursdeltakerInformasjonComponent,
      title: 'Kursdeltaker informasjon'
    },
    {
      path: '/rediger-deltaker',
      component: RedigerDeltakerComponent,
      title: 'Rediger deltaker'
    }
  ];
  
  