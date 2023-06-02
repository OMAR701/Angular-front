import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { TableComponent } from "./table/table.component";
import { ProjetComponent } from './projet/projet.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { MemberComponent } from './member/member.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { DotationComponent } from './dotation/dotation.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddDotationComponent } from './add-dotation/add-dotation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    TableComponent,
    MemberComponent,
    EtablissementComponent,
    ProjetComponent,
    DotationComponent,
    AddMemberComponent,
    AddDotationComponent


  ],
  declarations: [
    RegisterMemberComponent,

  ],
})
export class ComponentsModule { }
