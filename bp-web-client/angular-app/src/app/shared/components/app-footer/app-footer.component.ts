import { Component, OnInit } from '@angular/core';
import {ContactButtonService} from '../../../services/contact-button.service';


@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(public isOnContact: ContactButtonService) { }

  ngOnInit() {
  }

  public backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  private openCloseMobileNav() {
    const windowCheck = window.innerWidth;
    if (windowCheck <= 480) {
      const mobileNav = document.getElementById('topnav');

      if (mobileNav.classList.contains('expanded')) {
        mobileNav.classList.remove('expanded');
      } else {
        mobileNav.classList.add('expanded');
      }
    }
  }



}
