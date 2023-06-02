import { Component } from '@angular/core';
import { Product, TopSelling, TableRows, Employee } from './table-data';
import { Router ,ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  standalone: true,
  imports: [ NgFor, NgIf],
})
export class MemberComponent {
  opSelling: Product[] = [];

  topSelling: Product[];
  trow: TableRows[];

  constructor(private router: Router,private route: ActivatedRoute) {
    this.topSelling = TopSelling;
    this.trow = Employee;
  }

  navigateToAddMember() {
    this.router.navigate(['add-member'], { relativeTo: this.route.parent });
  }



}
