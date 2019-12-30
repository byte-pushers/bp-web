import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

    window.onscroll = function () {
      navScroll()
    };

    function navScroll() {
      const mobileNav = document.getElementById('topnav');
      if (document.body.scrollTop > 570 || document.documentElement.scrollTop > 570) {
        const scrollingNav = document.getElementById("topnav");
        scrollingNav.classList.add("topnav-scrolling");
        mobileNav.classList.remove("expanded");

      } else {
        const scrollingNav = document.getElementById("topnav");
        scrollingNav.classList.remove("topnav-scrolling");

      }
    }

  }

  public openCloseMobileNav() {
    const mobileNav = document.getElementById('topnav');

    if (mobileNav.classList.contains('expanded')) {
      mobileNav.classList.remove("expanded");
    } else {
      mobileNav.classList.add("expanded");
    }

  }
  public backToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
