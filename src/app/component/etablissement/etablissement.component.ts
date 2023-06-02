import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  standalone: true,
  imports:[NgFor],
})
export class EtablissementComponent {

}
