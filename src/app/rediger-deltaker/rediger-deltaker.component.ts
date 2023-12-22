import { Component } from '@angular/core';
import { KursdeltakerInformasjonComponent } from '../kursdeltaker-informasjon/kursdeltaker-informasjon.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rediger-deltaker',
  standalone: true,
  imports: [CommonModule, KursdeltakerInformasjonComponent, FormsModule],
  templateUrl: './rediger-deltaker.component.html',
  styleUrl: './rediger-deltaker.component.css'
})
export class RedigerDeltakerComponent {

  redigere_deltaker = [
    { id: 'Id: '},
    { navn: 'Navn: ' },
    { alder: 'Alder: '},
    { Epost: 'Epost: ' },
    { Telefon: 'Telefon: ' },
    { Allergener: 'Allergener: ' },
    { Kommentar: 'Kommentar: '},
  ];

  

  

}
