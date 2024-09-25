import { /*AfterViewInit, */Component, /*HostListener, */Inject/*, InjectionToken, OnInit */ } from '@angular/core';
import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { LogoTextAsideComponent } from '@components/logo-text-aside/logo-text-aside.component';
import { LogoTextBottomComponent } from '@components/logo-text-bottom/logo-text-bottom.component';
import { WINDOW } from '@services/windows/window';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LogoTextAsideComponent, LogoTextBottomComponent, RouterOutlet, NgClass, NgIf, SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent /*implements OnInit, AfterViewInit*/ {
  title = 'angular-app';
  isOpen = false;
  dimension: {width: number, height: number} = {width: 100, height: 100};
  logoDimension: {width: number, height: number} | undefined;


  constructor(@Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document) {
    console.log('AppComponent(): inside constructor');
    this.logoDimension = this.#getLogoDimension();
  }

  toggleMenu(e: any){
    console.log(`menu isOpen: ${this.isOpen}`);

    const navLinks = document.querySelector('.nav-links');
    const unorderedList = document.querySelector('div.nav-links ul');

    unorderedList?.classList.remove('text-black');

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      (function repeat(){
        setTimeout(function(){
          const unorderedList = document.querySelector('div.nav-links ul');
          unorderedList?.classList.add('text-black');
          unorderedList?.classList.add('z-10');
        }, 300);
      })();
    }

    if (this.window.screen.width <= 360) {
      navLinks?.classList.remove(`top-[14%]`);
      navLinks?.classList.remove(`top-[13.5%]`);
      navLinks?.classList.toggle(`top-[13%]`);
    } else if (this.window.screen.width <= 375) {
      navLinks?.classList.remove(`top-[13%]`);
      navLinks?.classList.remove(`top-[13.5%]`);
      navLinks?.classList.toggle(`top-[14%]`);
    } else if (this.window.screen.width <= 540) {
      navLinks?.classList.remove(`top-[14%]`);
      navLinks?.classList.remove(`top-[13%]`);
      navLinks?.classList.toggle(`top-[13.5%]`);
    } else {
      navLinks?.classList.remove(`top-[13%]`);
      navLinks?.classList.remove(`top-[13.5%]`);
      navLinks?.classList.toggle(`top-[14%]`);
    }

    console.log(`menu isOpen: ${this.isOpen}`);
  }

  #getLogoDimension() {
    let logoDimension;

    if (this.window?.screen?.width >= 768 && this.window?.screen?.width <= 820) {
      logoDimension = {width: 18, height: 9};
    }

    return logoDimension;
  }

  /*@HostListener('window:resize', ['$event'])
  onResize($event: any) {
    const heroText = document.querySelector('.hero-text');

    if (this.window.screen.width >= 820) {
      heroText?.classList.remove(`text-4xl`);
      heroText?.classList.add(`text-4xl`);
    }

    $event.target.innerWidth;
  }
  ngAfterViewInit() {

  }

  ngOnInit() {
    this.#detectScreenSize();
  }

  #detectScreenSize() {
    const heroText = document.querySelector('.hero-text');

    if (this.window.screen.width >= 820) {
      heroText?.classList.remove(`text-4xl`);
      heroText?.classList.add(`text-6xl`);
    }
  }*/
}
