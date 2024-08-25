import { Component, Inject, InjectionToken } from '@angular/core';
import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { LogoTextAsideComponent } from '../logo-text-aside/logo-text-aside.component';
import { LogoTextBottomComponent } from '../logo-text-bottom/logo-text-bottom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LogoTextAsideComponent, LogoTextBottomComponent, RouterOutlet, NgClass, NgIf, SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
  isOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    console.log('AppComponent(): inside constructor');
  }

  //const navLinks = document.querySelector('.nav-links')
  toggleMenu(e: any){
    const navLinks = document.querySelector('.nav-links');
    // e.name = e.name === 'menu' ? 'close' : 'menu' // if we use ionic icon, as it has name attribute
    this.isOpen = !this.isOpen;
    navLinks?.classList.toggle('top-[9%]')
  }
}
