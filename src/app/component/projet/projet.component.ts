import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  standalone: true,
  imports:[NgFor],
})
export class ProjetComponent {

}
