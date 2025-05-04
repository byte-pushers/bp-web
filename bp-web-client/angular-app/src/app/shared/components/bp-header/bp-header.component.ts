import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LogoOnlyTextComponent } from '@app/components/logo-only-text/logo-only-text.component';
import { LogoTextAsideComponent } from '@app/components/logo-text-aside/logo-text-aside.component';
import { LogoTextBottomComponent } from '@app/components/logo-text-bottom/logo-text-bottom.component';
import { BpButtonComponent } from '../bp-button/bp-button.component';

@Component({
  selector: 'bp-header',
  standalone: true,
  imports: [NgClass, NgIf, LogoOnlyTextComponent, LogoTextAsideComponent, LogoTextBottomComponent, RouterLink, RouterLinkActive, BpButtonComponent],
  templateUrl: './bp-header.component.html',
  styleUrl: './bp-header.component.scss'
})
export class BpHeaderComponent {
  isScrolled: boolean = false;
  screenWidth: any;
  constructor(private router: Router) {

  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Perform actions based on the scroll event
    console.log('Scroll Event', window.pageYOffset);
    if (window.pageYOffset >= 10) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  goHome() {
    this.router.navigate(['/home'])
  }
  requestaQuote() {
    this.router.navigate(['/contact'])
  }

}
