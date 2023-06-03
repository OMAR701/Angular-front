import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Labo, Labos } from './labo.model';

@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  standalone: true,
  imports:[NgFor],
})
export class LaboComponent {
  
  labos: Labo[] = [];

  constructor(private router: Router,private route: ActivatedRoute) {
    this.labos = Labos;
  }
  navigateToAddLabo(){
    this.router.navigate(['add-labo'], { relativeTo: this.route.parent });
  }
  deleteLabo(id: number) {

  }
  showLaboDetails(id: number) {
    this.router.navigate(['labo-details', id], { relativeTo: this.route.parent });
  }
  
  }
