import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';

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

  @HostListener('window:scroll', [''])
  onWindowScroll(): void {
    let header = this.el.nativeElement.querySelector('.header.container');
    const yOffSet = window.pageYOffset;
    if (yOffSet > 200) {
      header.style.backgroundColor = '#1a1826';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  }

  ngAfterViewInit(): void {
    let hamburger = document.querySelector(
      '.header .nav-bar .nav-list .hamburger'
    );
    let mobile_menu = this.el.nativeElement.querySelector(
      '.header .nav-bar .nav-list ul'
    );

    hamburger!.addEventListener('click', () => {
      hamburger!.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });
  }
  ngOnInit(): void {}

  public cambiarLenguaje(lang: any) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
