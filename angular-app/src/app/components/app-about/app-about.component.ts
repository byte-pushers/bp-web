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

      $prevButton.click(AboutComponent.previousButtonClickedEventHandler);
      $nextButton.click(AboutComponent.nextButtonClickedEventHandler);
    });
  }

  private static previousButtonClickedEventHandler(event: Event): void {
    const $nextButton = $("slide.item.carousel-item")
    $nextButton.removeClass("left-right");
    $nextButton.addClass("right-left");
  }

  private static nextButtonClickedEventHandler(event: Event): void {
    const $previousButton = $("slide.item.carousel-item");
    $previousButton.removeClass("right-left");
    $previousButton.addClass("left-right");
  }

  public reverseAnimation() {
    const animation = document.getElementsByClassName('active');
  }
}
