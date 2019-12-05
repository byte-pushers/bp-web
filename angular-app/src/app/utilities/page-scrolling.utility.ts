import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageScrollingUtility {
  constructor() {
  }

/*  public navScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      const scrollingNav =  document.getElementById("topnav");
      scrollingNav.classList.add("topnav--scrolling");
      console.log('yay');
    } else {
      const scrollingNav =  document.getElementById("topnav");
      scrollingNav.classList.remove("topnav--scrolling");
      console.log("nay");
    }
  }*/

}
