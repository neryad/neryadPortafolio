import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}
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
}
