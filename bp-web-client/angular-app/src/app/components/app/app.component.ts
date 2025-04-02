import { AfterViewInit, Component, /*HostListener, */Inject,/* InjectionToken,*/ OnInit } from '@angular/core';
import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { LogoTextAsideComponent } from '@components/logo-text-aside/logo-text-aside.component';
import { LogoTextBottomComponent } from '@components/logo-text-bottom/logo-text-bottom.component';
import { WINDOW } from '@services/windows/window';
import { CompaniesWeKeepComponent } from '@app/shared/components/companies-we-keep/companies-we-keep.component';
import { SearchEngineService } from '@services/search-engine/search-engine.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LogoTextAsideComponent, LogoTextBottomComponent, RouterOutlet, NgClass, NgIf, SocialMediaComponent, CompaniesWeKeepComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-app';
  isOpen = false;
  dimension: { width: number, height: number } = { width: 100, height: 100 };
  logoDimension: { width: number, height: number } | undefined;
  // public borderVisible = false;

  constructor(@Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute, private searchEngine: SearchEngineService, private router: Router) {
    console.log('AppComponent(): inside constructor');
    this.logoDimension = this.#getLogoDimension();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorders'] == "true") {
        this.#showBorders((/true/i).test(params?.['showBorders']));
      }
    });

    const searchData = this.searchEngine.getSearchKeywords();
    if (searchData) {
      // Do something with the search keywords
      console.log(`User searched for: ${searchData.keywords}`);
    }
  }

  ngAfterViewInit() {

  }
  goHome() {
    this.router.navigate(['/home'])
  }

  #showBorders(showBorders: boolean): void {
    if (showBorders) {
      document.querySelector('.border-0')?.classList.toggle('border-2', true);
      document.querySelector('.border-0')?.classList.remove('border-0');
    } else {
      document.querySelector('.border-2')?.classList.toggle('border-0', false);
      document.querySelector('.border-2')?.classList.remove('border-2');
    }
  }

  toggleMenu(e: any) {
    console.log(`menu isOpen: ${this.isOpen}`);

    const navLinks = document.querySelector('.nav-links');
    const unorderedList = document.querySelector('div.nav-links ul');

    unorderedList?.classList.remove('text-black');

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      (function repeat() {
        setTimeout(function () {
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
      logoDimension = { width: 18, height: 9 };
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

  /*showBorders(): string {
    let style = '';

    if (this.borderVisible) {
      style = 'showBorders'
    }

    return style;
  }*/
}
