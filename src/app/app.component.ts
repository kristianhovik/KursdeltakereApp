import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KursdeltakerInformasjonComponent } from './kursdeltaker-informasjon/kursdeltaker-informasjon.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KursdeltakerInformasjonComponent],
  template: `
  <main>
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true">
  </header>
  <section class="content">
    <app-kursdeltaker-informasjon></app-kursdeltaker-informasjon>
  </section>
</main>
`,
  
  /*templateUrl: './app.component.html',*/
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
