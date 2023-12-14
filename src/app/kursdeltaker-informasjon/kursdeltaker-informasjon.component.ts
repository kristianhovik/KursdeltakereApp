import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kursdeltaker-informasjon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="form-container">
      <form>
        <ul>
          <li *ngFor="let deltaker of kursdeltakere">
            {{ deltaker.navn }}
            <button (click)="redigerDeltaker(deltaker)">Rediger</button>
            <button (click)="slettDeltaker(deltaker)">Slett</button>
          </li>
        </ul>
      </form>
    </section>
  `,
  styleUrls: ['./kursdeltaker-informasjon.component.css']
})
export class KursdeltakerInformasjonComponent {
  kursdeltakere = [
    { id: 1, navn: 'Deltaker 1' },
    { id: 2, navn: 'Deltaker 2' },
    { id: 3, navn: 'Deltaker 3' },
    { id: 4, navn: 'Deltaker 4' },
    { id: 5, navn: 'Deltaker 5' },
    { id: 6, navn: 'Deltaker 6' },
  ];

  redigerDeltaker(deltaker: any): void {
    console.log('Rediger deltaker:', deltaker);
    // Implementer redigeringen, for eksempel å åpne et redigeringsvindu eller navigere til en redigeringsrute.
  }

  slettDeltaker(deltaker: any): void {
    console.log('Slett deltaker:', deltaker);
    // Implementer slettingen, for eksempel å vise en bekreftelsesdialog og fjerne deltakeren fra listen.
  }
}