import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) {}
  projects = [
    {
      name: 'PocketList',
      subTitle: '',
      description: 'descpPoc.texto',
      img: '../../../assets/img/projects/Pokelist.png',
      link: 'https://neryad.github.io/pocketPage/',
      repo: '',
      demo: '',
    },
    {
      name: 'TelePhoneCheck -NPM',
      subTitle: '',
      description: 'descTelphone.texto',
      img: '../../../assets/img/projects/telphonecheck.jpg',
      link: 'https://www.npmjs.com/package/telephonecheck',
      repo: '',
      demo: '',
    },
    {
      name: 'TelePhoneCheck - Pub.dev/flutter',
      subTitle: '',
      description: 'descTelphone.texto',
      img: '../../../assets/img/projects/telefonePub.png',
      link: 'https://pub.dev/packages/telephone_check',

    },
    {
      name: 'bryanrivas.com',
      subTitle: '',
      description: 'descBr.texto',
      img: '../../../assets/img/projects/br.jpg',
      link: 'https://bryanrivas.com/',
    },
  ];

  gotToProjects() {
    this.router.navigate(['/projectsAll']);
  }
  ngOnInit(): void {}
}
