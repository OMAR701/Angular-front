import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent {
  projects = [
    {
      id: 1,
      title: 'Projet 1',
      school: 'FSSM',
      labo: 'labo2',
      members: [
        { name: 'Member 1', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 2', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },
      ]
    },
    {
      id: 2,
      title: 'Projet 2',
      school: 'ESTS',
      labo: 'labo2',
      members: [
        { name: 'Member 1', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 2', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },

      ]
    },
    {
      id: 3,
      title: 'Projet 3',
      school: 'FSTG',
      labo: 'labo2',
      members: [
        { name: 'Member 1', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 2', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },
      ]
    },
    {
      id: 4,
      title: 'Projet 4',
      school: 'EMSIM',
      labo: 'labo2',
      members: [
        { name: 'Member 1', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 2', image: 'assets/images/users/user1.jpg' },
        { name: 'Member 3', image: 'assets/images/users/user1.jpg' },
      ]
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  projetDetails(id: number) {
    this.router.navigate(['projet-details'], { relativeTo: this.route.parent });
  }

  navigateToAddProject() {
    this.router.navigate(['add-project'], { relativeTo: this.route.parent });
  }

  deleteProject(id: number) {
  }

  modifyProject(id: number) {
  }
}
