import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../kursdeltaker.service';
import { RedigerDeltakerComponent } from '../rediger-deltaker/rediger-deltaker.component';

@Component({
  selector: 'app-kursdeltaker-informasjon',
  standalone: true,
  imports: [CommonModule, RedigerDeltakerComponent],
  
  templateUrl:'./kursdeltaker-informasjon.component.html',
  styleUrls: ['./kursdeltaker-informasjon.component.css']
})
export class KursdeltakerInformasjonComponent {
  kursdeltakere = [
    { id: 1, navn: 'Pål Andersen', alder: 25, epost: 'Pål@gmail.com', telefon: 42245678, allergener: "Nøtter", kommentar: "Bra kurs"  },
    { id: 2, navn: 'Rolf Molagos', alder: 34, epost: 'rolf@gmail.com', telefon: 53246778, allergener: "Ingen", kommentar: "Bra kurs" },
    { id: 3, navn: 'Alex Knutolfson', alder: 56, epost: 'alex@gmail.com', telefon: 67245678, allergener: "Gress", kommentar: "Ok kurs" },
    { id: 4, navn: 'Peter Andersen', alder: 23, epost: 'peter@gmail.com', telefon: 43246778, allergener: "Ingen", kommentar: "Bra kurs" },
    { id: 5, navn: 'Arne Lillestrand', alder: 55, epost: 'arne@gmail.com', telefon: 43245645, allergener: "Ingen", kommentar: "Bra kurs" },
    { id: 6, navn: 'Rolf Andersen', alder: 34, epost: 'rolfandersen@gmail.com', telefon: 43645678, allergener: "Ingen", kommentar: "Flott kurs" },
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
  }

  slettDeltaker(deltaker: any): void {
    console.log('Slett deltaker:', deltaker);
  }

  leggTilDeltaker(): void {
    const nyDeltaker = { id: this.kursdeltakere.length + 1, navn: 'Ny Deltaker', alder: 0, epost: '', telefon: 0, allergener: "", kommentar: ""};
    this.kursdeltakere.push(nyDeltaker);
    console.log('Deltaker lagt til:', nyDeltaker);
  }
}