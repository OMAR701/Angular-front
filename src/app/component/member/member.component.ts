import { Component } from '@angular/core';
import { Project,Member, members } from './table-data';
import { Router ,ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  standalone: true,
  imports: [ NgFor, NgIf,CommonModule],
})
export class MemberComponent {
  members: Member[] = [];
  currentPage: number = 1; 
  itemsPerPage: number = 10;


  constructor(private router: Router,private route: ActivatedRoute) {
    this.members = members;
  }

  navigateToAddMember() {
    this.router.navigate(['add-member'], { relativeTo: this.route.parent });
  }



}
