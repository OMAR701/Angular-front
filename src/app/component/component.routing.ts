import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { TableComponent } from './table/table.component';
import { MemberComponent } from './member/member.component';
import { ProjetComponent } from './projet/projet.component';
import { DotationComponent } from './dotation/dotation.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddDotationComponent } from './add-dotation/add-dotation.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'member',
        component: MemberComponent
      },
      {
        path: 'projet',
        component: ProjetComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dotation',
        component: DotationComponent
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent
      },
      {
        path: 'add-member',
        component: AddMemberComponent
      },
      {
        path: 'add-dotation',
        component: AddDotationComponent
      }
    ]
  }
];
