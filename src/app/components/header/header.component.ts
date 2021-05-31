import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public activeLang = 'es';
  constructor(private el: ElementRef, private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }
  ngAfterViewInit(): void {
    let hamburger = document.querySelector(
      '.header .nav-bar .nav-list .hamburger'
    );
    let mobile_menu = this.el.nativeElement.querySelector(
      '.header .nav-bar .nav-list ul'
    );
    let header = this.el.nativeElement.querySelector('.header.container');

    hamburger!.addEventListener('click', () => {
      hamburger!.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });

    this.el.nativeElement.addEventListener('scroll', () => {
      let scroll_position = window.scrollY;

      if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    });
  }
  ngOnInit(): void {}

  public cambiarLenguaje(lang: any) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
