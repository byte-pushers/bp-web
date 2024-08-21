import { Component, Inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';

  constructor(@Inject(DOCUMENT) private document: Document) {
    console.log('AppComponent(): inside constructor');
  }

  //const navLinks = document.querySelector('.nav-links')
  onToggleMenu(e: any){
    const navLinks = document.querySelector('.nav-links');
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks?.classList.toggle('top-[9%]')
  }

}
