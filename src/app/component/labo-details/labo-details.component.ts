import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Labo ,Labos} from './labo.model';

@Component({
  selector: 'app-labo-details',
  templateUrl: './labo-details.component.html',
  styleUrls: ['./labo-details.component.scss'],
})
export class LaboDetailsComponent implements OnInit {
  labo: Labo | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   // const laboss = labos; // Access 'labos' using square bracket notation
    const laboId = this.route.snapshot.paramMap.get('id');
    this.labo = Labos.find((labo: Labo) => labo.id === Number(laboId));
  }
}

