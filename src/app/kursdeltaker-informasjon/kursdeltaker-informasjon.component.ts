import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../kursdeltaker.service';
import { RedigerDeltakerComponent } from '../rediger-deltaker/rediger-deltaker.component';
import { FormsModule } from '@angular/forms';
import { Kursdeltaker } from '../kursdeltaker';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-kursdeltaker-informasjon',
  standalone: true,
  imports: [CommonModule, RedigerDeltakerComponent],
  templateUrl:'./kursdeltaker-informasjon.component.html',
  styleUrls: ['./kursdeltaker-informasjon.component.css']
})
export class KursdeltakerInformasjonComponent {
  kursdeltakere: Kursdeltaker[] = [
    {
      id: 1,
      navn: 'Ola Nordmann',
      alder: 30,
      epost: 'ola@mail.no',
      telefon: 12345678,
      allergener: "Gluten",
      kommentar: "Kommentar"
    },
    
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
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
    //this.kursdeltakere.push(nyDeltaker);
    console.log('Deltaker lagt til:', nyDeltaker);
  }
}