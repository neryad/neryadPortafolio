import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  socials = [
    {
      link: 'https://www.instagram.com/neryad_dev/',
      icon: 'https://img.icons8.com/bubbles/100/000000/instagram-new.png',
    },
    {
      link: 'https://twitter.com/NeryadG',
      icon: 'https://img.icons8.com/bubbles/100/000000/twitter.png',
    },
    {
      link: 'https://www.linkedin.com/in/dayern-gomez/',
      icon: 'https://img.icons8.com/bubbles/100/000000/linkedin.png',
    },
    {
      link: 'mailto:neryadg@gmail.com?Subject=contact%20from%20web%20page',
      icon: 'https://img.icons8.com/bubbles/100/000000/new-post.png',
    },
  ];
  ngOnInit(): void {}
}
