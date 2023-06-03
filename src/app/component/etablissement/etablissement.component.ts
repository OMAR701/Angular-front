import { Component } from '@angular/core';
import { NgFor ,NgIf} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Labo, School, schools } from './table-data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  standalone: true,
  imports: [ NgFor, NgIf,CommonModule],
})
export class EtablissementComponent {
  schools: School[] = [];

  constructor(private router: Router,private route: ActivatedRoute) {
    this.schools = schools;
  }

  navigateToAddSchool(){
    this.router.navigate(['add-etablissment'], { relativeTo: this.route.parent });
  }

  assignLaboToSchool(School: any){

  }
  deleteSchool(School: any){}
}
