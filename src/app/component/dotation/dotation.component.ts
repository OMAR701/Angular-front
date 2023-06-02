import { Component } from '@angular/core';
import { Product, TopSelling, TableRows, Employee } from './table-data';
import { NgFor } from '@angular/common';
import { Router ,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dotation',
  templateUrl: './dotation.component.html',
  standalone: true,
  imports:[NgFor],
})
export class DotationComponent {

  topSelling: Product[];

  trow: TableRows[];

  constructor(private router: Router,private route: ActivatedRoute) {

    this.topSelling = TopSelling;

    this.trow = Employee;
  }

  navigateToAddDotation(){
    this.router.navigate(['add-dotation'], { relativeTo: this.route.parent });

  }

}
