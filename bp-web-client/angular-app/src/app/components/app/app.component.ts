import { Component, Inject, InjectionToken } from '@angular/core';
import { DOCUMENT, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SocialMediaComponent } from '../social-media.component/app-social-media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
  menuState = 'closed';

  constructor(@Inject(DOCUMENT) private document: Document) {
    console.log('AppComponent(): inside constructor');
  }

  //const navLinks = document.querySelector('.nav-links')
  toggleMenu(e: any){
    const navLinks = document.querySelector('.nav-links');
    // e.name = e.name === 'menu' ? 'close' : 'menu' // if we use ionic icon, as it has name attribute
    this.menuState = this.menuState === 'closed' ? 'opened' : 'closed'
    navLinks?.classList.toggle('top-[9%]')
  }

}
