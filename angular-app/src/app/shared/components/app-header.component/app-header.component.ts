import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = function() {navScroll()};

    function navScroll() {
      if (document.body.scrollTop > 570 || document.documentElement.scrollTop > 570) {
        const scrollingNav =  document.getElementById("topnav");
        scrollingNav.classList.add("topnav-scrolling");

      } else {
        const scrollingNav =  document.getElementById("topnav");
        scrollingNav.classList.remove("topnav-scrolling");

      }
    }
  }

}
