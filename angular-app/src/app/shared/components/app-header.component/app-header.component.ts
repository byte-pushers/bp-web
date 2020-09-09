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
      navScroll();
      if (window.innerWidth < 800) {
        showCp3Desc();
      }
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

    function showCp3Desc() {
      const showCp3Desc = document.getElementById('cp3Desc');
      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

        showCp3Desc.classList.add("activate");


      } else {
        showCp3Desc.classList.remove("activate");

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


}
