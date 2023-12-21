import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../kursdeltaker.service';

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
        <button (click)="leggTilDeltaker()">Legg til deltaker</button>
      </form>
    </section>
  `,
  styleUrls: ['./kursdeltaker-informasjon.component.css']
})
export class KursdeltakerInformasjonComponent {
  kursdeltakere = [
    { id: 1, navn: 'Pål Andersen' },
    { id: 2, navn: 'Rolf Molagos' },
    { id: 3, navn: 'Alex Knutolfson' },
    { id: 4, navn: 'Peter Andersen' },
    { id: 5, navn: 'Arne Lillestrand' },
    { id: 6, navn: 'Rolf Andersen' },
  ];

  constructor(private apiService: ApiService) {}

  ngOninit(): void{
    this.loadDeltakere();
  }

  loadDeltakere(): void {
    this.apiService.getData().subscribe(data => {
      this.kursdeltakere = data;
    });
  }

  redigerDeltaker(deltaker: any): void {
    console.log('Rediger deltaker:', deltaker);
    // Implementer redigeringen, for eksempel å åpne et redigeringsvindu eller navigere til en redigeringsrute.
  }

  slettDeltaker(deltaker: any): void {
    console.log('Slett deltaker:', deltaker);
    // Implementer slettingen, for eksempel å vise en bekreftelsesdialog og fjerne deltakeren fra listen.
  }

  leggTilDeltaker(): void {
    const nyDeltaker = { id: this.kursdeltakere.length + 1, navn: 'Ny Deltaker'};
    this.kursdeltakere.push(nyDeltaker);
    console.log('Deltaker lagt til:', nyDeltaker);
  }
}