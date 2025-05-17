import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LogoOnlyTextComponent } from '@app/components/logo-only-text/logo-only-text.component';
import { LogoTextAsideComponent } from '@app/components/logo-text-aside/logo-text-aside.component';
import { LogoTextBottomComponent } from '@app/components/logo-text-bottom/logo-text-bottom.component';
import { BpButtonComponent } from '../bp-button/bp-button.component';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'bp-header',
  standalone: true,
  imports: [NgClass, NgIf, FontAwesomeModule, LogoOnlyTextComponent, LogoTextAsideComponent, LogoTextBottomComponent, RouterLink, RouterLinkActive, BpButtonComponent],
  templateUrl: './bp-header.component.html',
  styleUrl: './bp-header.component.scss'
})
export class BpHeaderComponent implements OnInit {
  faBars = faBars;
  isScrolled: boolean = false;
  screenWidth: any;
  constructor(private router: Router) {

  }
  @HostListener('window:resize', ['$event'])
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Perform actions based on the scroll event
    if (window.pageYOffset >= 10) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  setScreenWidth() {
    this.screenWidth = window.innerWidth;
  }


  hideTill(till: any) {
    this.setScreenWidth()
    return this.screenWidth < till ? false : true;
  }
  goHome() {
    this.router.navigate(['/home'])
  }
  requestaQuote() {
    this.router.navigate(['/contact'])
  }

}
