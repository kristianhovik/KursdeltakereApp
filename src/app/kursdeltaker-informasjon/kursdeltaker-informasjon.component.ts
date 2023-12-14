import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kursdeltaker-informasjon',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter etter deltaker">
      <button class="primary" type="button">Søk</button>
    </form>
  </section>
`,
  /*templateUrl: './kursdeltaker-informasjon.component.html',*/
  styleUrl: './kursdeltaker-informasjon.component.css'
})
export class KursdeltakerInformasjonComponent {

}
