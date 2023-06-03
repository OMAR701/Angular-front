import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { TableComponent } from './table/table.component';
import { MemberComponent } from './member/member.component';
import { ProjetComponent } from './projet/projet.component';
import { DotationComponent } from './dotation/dotation.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddDotationComponent } from './add-dotation/add-dotation.component';
import { ProjetDetailsComponent } from './projet-details/projet-details.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { LaboComponent } from './labo/labo.component';
import { AddLaboComponent } from './add-labo/add-labo.component';
import { AddEtablissmentComponent } from './add-etablissment/add-etablissment.component';
import { LaboDetailsComponent } from './labo-details/labo-details.component';

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
        path: 'etablissment',
        component: EtablissementComponent
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
        path: 'alert',
        component: NgbdAlertBasicComponent
      },

      {
        path: 'add-member',
        component: AddMemberComponent
      },
      {
        path: 'add-dotation',
        component: AddDotationComponent
      },
      {
        path: 'projet-details',
        component: ProjetDetailsComponent
      },
      {
        path: 'add-project',
        component: AddProjetComponent
      },
      {
        path: 'projet-details',
        component: ProjetDetailsComponent
      },{
        path: 'labo',
        component: LaboComponent
      },
      {
        path: 'add-labo',
        component: AddLaboComponent
      },
      {
        path: 'add-etablissment',
        component: AddEtablissmentComponent
      },
      {
        path: 'labo-details/:id',
        component: LaboDetailsComponent
      }

    ]
  }
];


