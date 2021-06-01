import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  projects = [
    {
      name: 'PocketList',
      subTitle: '',
      description: 'descpPoc.texto',
      img: '../../../assets/img/projects/Pokelist.png',
      link: 'https://neryad.github.io/pocketPage/',
    },
    {
      name: 'TelePhoneCheck',
      subTitle: '',
      description: 'descTelphone.texto',
      img: '../../../assets/img/projects/telphonecheck.jpg',
      link: 'https://www.npmjs.com/package/telephonecheck',
    },
    {
      name: 'bryanrivas.com',
      subTitle: '',
      description: 'descBr.texto',
      img: '../../../assets/img/projects/br.jpg',
      link: 'https://bryanrivas.com/',
    },
  ];
  ngOnInit(): void {}
}
