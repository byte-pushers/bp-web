import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css']
})

export class AboutComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    console.log("ngOnInit()");


    $(document).ready(function(e) {
      const $prevButton = $(".left.carousel-control.carousel-control-prev");
      const $nextButton = $(".right.carousel-control.carousel-control-next");

      $prevButton.click((event) => {
        console.log("previous button clicked.");
        $("slide.item.carousel-item").removeClass("left-right");
        $("slide.item.carousel-item").addClass("right-left");
      });

      $nextButton.click((event) => {
        console.log("next button clicked.");
        $("slide.item.carousel-item").removeClass("right-left");
        $("slide.item.carousel-item").addClass("left-right");
      });
    });

  }

  public reverseAnimation() {
    const animation = document.getElementsByClassName('active');
  }
}
