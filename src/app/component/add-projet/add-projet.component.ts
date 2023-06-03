import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  standalone: true,
  imports:[NgFor],
})
export class AddProjetComponent {

}
