import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  standalone: true,
  imports: [ NgFor, NgIf],})
export class AddMemberComponent {

}
