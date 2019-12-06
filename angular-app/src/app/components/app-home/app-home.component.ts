import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public navScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      const scrollingNav = document.getElementById("topnav");
      scrollingNav.classList.add("topnav--scrolling");
      console.log('yay');
    } else {
      const scrollingNav = document.getElementById("topnav");
      scrollingNav.classList.remove("topnav--scrolling");
      console.log("nay");
    }
  }
}
