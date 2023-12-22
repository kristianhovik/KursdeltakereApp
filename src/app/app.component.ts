import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KursdeltakerInformasjonComponent } from './kursdeltaker-informasjon/kursdeltaker-informasjon.component';
import { RedigerDeltakerComponent } from './rediger-deltaker/rediger-deltaker.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KursdeltakerInformasjonComponent, RedigerDeltakerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
