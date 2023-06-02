import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dotation',
  templateUrl: './add-dotation.component.html',
  standalone: true,
  imports:[NgFor],
})
export class AddDotationComponent {

}
